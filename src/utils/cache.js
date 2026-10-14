const prefix = 'cache:'
const memory = new Map()
const inFlight = new Map()

function readStorage(key) {
  try {
    const raw = localStorage.getItem(prefix + key)
    if (!raw) return null

    const entry = JSON.parse(raw)
    if (Date.now() <= entry.expiresAt) return entry

    localStorage.removeItem(prefix + key)
    return null
  } catch {
    return null
  }
}

function writeStorage(key, entry) {
  try {
    localStorage.setItem(prefix + key, JSON.stringify(entry))
  } catch {
    // storage cheio ou bloqueado: o cache em memória continua funcionando
  }
}

function readCache(key) {
  const inMemory = memory.get(key)
  if (inMemory && Date.now() < inMemory.expiresAt) return inMemory

  const stored = readStorage(key)
  if (stored) memory.set(key, stored)
  return stored
}

export async function withCache(key, fetcher, ttl) {
  const cached = readCache(key)
  if (cached) return cached.data

  if (inFlight.has(key)) return inFlight.get(key)

  const request = fetcher()
    .then((data) => {
      const entry = { data, expiresAt: Date.now() + ttl }
      memory.set(key, entry)
      writeStorage(key, entry)
      return data
    })
    .finally(() => inFlight.delete(key))

  inFlight.set(key, request)
  return request
}

export function clearCache(key) {
  if (key) {
    memory.delete(key)
    localStorage.removeItem(prefix + key)
    return
  }

  memory.clear()
  Object.keys(localStorage)
    .filter((storageKey) => storageKey.startsWith(prefix))
    .forEach((storageKey) => localStorage.removeItem(storageKey))
}
