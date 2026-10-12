'use client'

import { createContext, useContext, useState } from 'react'

type SearchState = {
  query: string
  setQuery: (query: string) => void
}

const SearchContext = createContext<SearchState | null>(null)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('')

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const ctx = useContext(SearchContext)
  if (!ctx) {
    throw new Error('useSearch must be used inside SearchProvider')
  }
  return ctx
}

export const popularSearches = ['Logo', 'Video Ads', 'UI/UX', 'Copywriting']

export function scrollToKategori() {
  document
    .querySelector('#kategori')
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
