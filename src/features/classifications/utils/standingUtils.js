const stat = (entry, name) => entry.stats?.find((item) => item.name === name)?.value ?? 0

function normalizeEntry(entry) {
  return {
    rank: stat(entry, 'rank'),
    team: entry.team?.shortDisplayName ?? entry.team?.displayName ?? '—',
    logo: entry.team?.logos?.[0]?.href ?? null,
    played: stat(entry, 'gamesPlayed'),
    wins: stat(entry, 'wins'),
    draws: stat(entry, 'ties'),
    losses: stat(entry, 'losses'),
    goalDiff: stat(entry, 'pointDifferential'),
    points: stat(entry, 'points'),
    zone: entry.note?.description ?? null,
  }
}

export function normalizeStandings(data) {
  return (data?.children ?? []).map((group) => ({
    name: group.name,
    rows: (group.standings?.entries ?? [])
      .map(normalizeEntry)
      .sort((a, b) => a.rank - b.rank),
  }))
}