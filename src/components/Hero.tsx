'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { creators } from '@/lib/creators'
import { popularSearches, scrollToKategori, useSearch } from '@/lib/search-store'

const stats = [
  { value: '50K+', label: 'Kreator aktif' },
  { value: '200K+', label: 'Project selesai' },
  { value: '4.9★', label: 'Rating rata-rata' },
]

const featured = creators.slice(0, 3)

export default function Hero() {
  const { setQuery } = useSearch()
  const [term, setTerm] = useState('')

  const applySearch = (value: string) => {
    setQuery(value)
    scrollToKategori()
  }

  return (
    <section id="hero" className="pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-sm font-semibold mb-6">
              50.000+ Kreator Siap Berkarya
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Temukan{' '}
              <span className="bg-accent rounded-2xl px-3 py-1 inline-block">
                kreator
              </span>{' '}
              impianmu.
            </h1>
            <p className="text-lg text-ink/70 mb-8 max-w-xl leading-relaxed">
              Craftly menghubungkan brand dengan kreator digital terbaik —
              desainer, copywriter, videografer, developer — selesaikan project
              dalam hitungan hari, bukan minggu.
            </p>

            {/* Search */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                applySearch(term)
              }}
              className="flex items-center gap-2 bg-white rounded-full border border-ink/10 shadow-lg shadow-ink/5 p-2 max-w-xl"
            >
              <input
                type="search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Cari: logo, video ads, UI/UX design..."
                aria-label="Cari kreator atau jasa"
                className="flex-1 min-w-0 px-5 py-3 bg-transparent outline-none"
              />
              <button
                type="submit"
                className="shrink-0 px-7 py-3 rounded-full bg-accent font-semibold transition-colors hover:bg-ink hover:text-white"
              >
                Cari
              </button>
            </form>

            {/* Popular searches */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm text-ink/50 mr-1">Populer:</span>
              {popularSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setTerm(item)
                    applySearch(item)
                  }}
                  className="px-3 py-1.5 rounded-full border border-ink/15 text-sm font-medium transition-colors hover:bg-ink hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-ink/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Featured creators */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-cloud rounded-card p-6 sm:p-10">
              <div className="absolute -top-5 -left-2 sm:-left-6 z-10 bg-accent rounded-2xl px-4 py-2 font-semibold shadow-lg rotate-[-4deg]">
                AI Match 60 dtk
              </div>
              <div className="absolute -bottom-5 -right-2 sm:-right-5 z-10 bg-ink text-white rounded-2xl px-4 py-2 font-semibold shadow-lg rotate-3">
                Escrow Aman
              </div>

              <div className="space-y-3">
                {featured.map((creator, index) => (
                  <motion.div
                    key={creator.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.3 + index * 0.12 }}
                    className="flex items-center gap-4 bg-white rounded-3xl px-5 py-4 shadow-sm"
                  >
                    <span className="w-12 h-12 shrink-0 rounded-2xl bg-accent flex items-center justify-center font-bold">
                      {creator.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold truncate">
                        {creator.name}
                      </div>
                      <div className="text-sm text-ink/60 truncate">
                        {creator.role}
                      </div>
                    </div>
                    <span className="shrink-0 text-sm font-medium px-3 py-1.5 rounded-full bg-cloud">
                      {creator.price}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-5 px-1">
                <span className="text-sm text-ink/60">
                  + 49.997 kreator lainnya
                </span>
                <span className="text-sm font-semibold">
                  4.9★ rata-rata
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
