'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useSearch } from '@/lib/search-store'

type CategoryKey = 'design' | 'video' | 'writing' | 'dev' | 'marketing'

const filters: { key: 'all' | CategoryKey; label: string }[] = [
  { key: 'all', label: 'Semua' },
  { key: 'design', label: '🎨 Design' },
  { key: 'video', label: '🎥 Video' },
  { key: 'writing', label: '✍️ Writing' },
  { key: 'dev', label: '💻 Dev' },
  { key: 'marketing', label: '📢 Marketing' },
]

const services = [
  {
    category: 'design' as CategoryKey,
    emoji: '🎨',
    title: 'Brand Design',
    subtitle: 'Logo & Brand Identity',
    description:
      'Logo profesional, brand guidelines, business card, dan semua aset visual brand kamu dalam satu paket.',
    client: 'R',
    creatorsCount: 8,
    price: 'Mulai Rp 250K',
    keywords: ['logo', 'brand', 'identity', 'business card', 'desain', 'grafis'],
  },
  {
    category: 'video' as CategoryKey,
    emoji: '🎥',
    title: 'Video Production',
    subtitle: 'Video Iklan & Reels',
    description:
      'Video ads untuk Instagram, TikTok, YouTube dengan motion graphics dan color grading profesional.',
    client: 'B',
    creatorsCount: 5,
    price: 'Mulai Rp 400K',
    keywords: ['video', 'ads', 'iklan', 'reels', 'tiktok', 'youtube', 'editing'],
  },
  {
    category: 'dev' as CategoryKey,
    emoji: '💻',
    title: 'Development',
    subtitle: 'Landing Page & Web App',
    description:
      'Landing page konversi tinggi, website company profile, dan aplikasi web custom sesuai kebutuhan.',
    client: 'F',
    creatorsCount: 4,
    price: 'Mulai Rp 700K',
    keywords: ['landing page', 'web', 'website', 'app', 'developer', 'dev', 'frontend'],
  },
  {
    category: 'writing' as CategoryKey,
    emoji: '✍',
    title: 'Copywriting',
    subtitle: 'Konten & Copywriting',
    description:
      'Caption sosmed, artikel SEO, email marketing, script iklan, dan copywriting landing page yang convert.',
    client: 'A',
    creatorsCount: 6,
    price: 'Mulai Rp 150K',
    keywords: ['copywriting', 'konten', 'caption', 'artikel', 'seo', 'email', 'script', 'writing'],
  },
  {
    category: 'design' as CategoryKey,
    emoji: '📱',
    title: 'UI/UX Design',
    subtitle: 'Desain Aplikasi Mobile',
    description:
      'Prototype UI/UX untuk iOS & Android — wireframe hingga design system siap handoff ke developer.',
    client: 'S',
    creatorsCount: 7,
    price: 'Mulai Rp 500K',
    keywords: ['ui/ux', 'ui', 'ux', 'mobile', 'aplikasi', 'ios', 'android', 'design', 'prototype'],
  },
  {
    category: 'marketing' as CategoryKey,
    emoji: '📢',
    title: 'Digital Marketing',
    subtitle: 'Social Media Management',
    description:
      'Kelola Instagram, TikTok, LinkedIn brand kamu — konten, jadwal posting, dan strategi growth organik.',
    client: 'M',
    creatorsCount: 9,
    price: 'Mulai Rp 300K',
    keywords: ['marketing', 'social media', 'instagram', 'tiktok', 'linkedin', 'sosmed', 'growth'],
  },
]

export default function Kategori() {
  const [active, setActive] = useState<'all' | CategoryKey>('all')
  const { query, setQuery } = useSearch()

  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean)

  const visible = services.filter((service) => {
    const matchesCategory = active === 'all' || service.category === active
    if (!matchesCategory) return false
    if (tokens.length === 0) return true

    const haystack = [
      service.title,
      service.subtitle,
      service.description,
      service.category,
      ...service.keywords,
    ]
      .join(' ')
      .toLowerCase()

    return tokens.every((token) => haystack.includes(token))
  })

  return (
    <section id="kategori" className="scroll-mt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-10">
          <div className="shrink-0">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-sm font-semibold mb-4">
              Kategori
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Semua skill,
              <br />
              satu platform.
            </h2>
          </div>
          <Link
            href="#kategori"
            className="lg:ml-auto inline-flex items-center gap-2 font-medium hover:underline underline-offset-4"
          >
            Lihat semua <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActive(filter.key)}
              aria-pressed={active === filter.key}
              className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
                active === filter.key
                  ? 'bg-ink text-white'
                  : 'bg-cloud hover:bg-ink/10'
              }`}
            >
              {filter.label}
            </button>
          ))}

          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent font-medium"
            >
              “{query}” <span aria-hidden>✕</span>
            </button>
          )}
        </div>

        {/* Cards */}
        {visible.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex flex-col rounded-card border border-ink/10 bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-ink/5"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="w-16 h-16 rounded-2xl bg-cloud flex items-center justify-center text-3xl">
                    {service.emoji}
                  </span>
                  <span className="text-sm font-semibold px-3 py-1.5 rounded-full bg-accent">
                    {service.price}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm font-medium text-ink/60 mt-1">
                  {service.subtitle}
                </p>
                <p className="text-ink/70 mt-4 pt-4 border-t border-ink/10">
                  {service.description}
                </p>

                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-ink/10">
                  <span className="w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center text-sm font-semibold">
                    {service.client}
                  </span>
                  <span className="text-sm text-ink/70">
                    +{service.creatorsCount} kreator
                  </span>
                  <Link
                    href="#mulai"
                    className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white text-sm font-medium transition-colors hover:bg-ink-light"
                  >
                    Lihat <span aria-hidden>→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="rounded-card bg-cloud px-8 py-16 text-center">
            <p className="text-lg font-semibold">
              Belum ada jasa untuk “{query || filters.find((f) => f.key === active)?.label}”.
            </p>
            <p className="text-ink/60 mt-2">
              Coba kata kunci lain atau pilih kategori berbeda.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setActive('all')
              }}
              className="mt-6 px-6 py-3 rounded-full bg-ink text-white font-medium"
            >
              Reset filter
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
