import { useEffect,useRef, useState } from 'react'
import { Search } from 'lucide-react'

import useClickOutside from '@/hooks/useClickOutside.js'

export function ExpandableSearch({ placeholder = 'Buscar...', onSearch }) {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const formRef = useRef(null)

  useClickOutside(formRef, () => setIsOpen(false))

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch?.(value)
  }

  return (
    <div className="relative h-10 w-10">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`absolute top-0 right-0 flex items-center h-10 rounded-full border transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'w-64 bg-white border-gray-300 shadow-sm' : 'w-10 bg-transparent border-transparent'
        }`}
      >
        <button
          type={isOpen ? 'submit' : 'button'}
          onClick={isOpen ? undefined : () => setIsOpen(true)}
          className={`flex items-center justify-center h-10 w-10 shrink-0 ${isOpen ? '' : 'cursor-pointer'}`}
          aria-label="Buscar"
        >
          <Search
            size={18}
            strokeWidth={2}
            className={`transition-colors duration-300 ${isOpen ? 'text-orange-500' : 'text-gray-400'}`}
          />
        </button>

        {isOpen && (
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder={placeholder}
            className="mr-3 flex-1 text-left bg-transparent text-sm text-gray-900 placeholder:text-gray-400 outline-none"
          />
        )}
      </form>
    </div>
  )
}
