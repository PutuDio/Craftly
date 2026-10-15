'use client'

import { motion } from 'framer-motion'
import { useAuth } from '@/lib/auth-store'

const guarantees = [
  'Gratis untuk mulai',
  'Bayar setelah puas',
  '50K+ kreator siap',
]

export default function CTA() {
  const { openAuth } = useAuth()

  return (
    <section id="mulai" className="scroll-mt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-card bg-ink text-white px-8 py-16 sm:px-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">
            Siap wujudkan
            <br />
            project impianmu?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Bergabung dengan 200.000+ brand yang sudah percayakan project
            kreatif mereka kepada kreator terbaik di Craftly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openAuth({ mode: 'register', role: 'client' })}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink font-semibold transition-colors hover:bg-white"
            >
              Post Project Sekarang <span aria-hidden>→</span>
            </button>
            <button
              type="button"
              onClick={() => openAuth({ mode: 'register', role: 'creator' })}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/40 font-semibold transition-colors hover:bg-white hover:text-ink"
            >
              Daftar Sebagai Kreator
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 text-sm text-white/70">
            {guarantees.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="text-accent" aria-hidden>
                  ✓
                </span>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
