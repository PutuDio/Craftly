'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Craftly menghemat waktu kami luar biasa. Dulu cari freelancer bisa makan 2 minggu, sekarang 1 hari langsung dapat 3 kandidat top yang paham brief kami.',
    initials: 'MR',
    name: 'Mira Rahmawati',
    role: 'CMO · Startup Edtech',
  },
  {
    quote:
      'Sebagai kreator, Craftly memberi akses ke klien premium yang tidak bisa saya reach sendiri. Income saya naik 3x sejak bergabung!',
    initials: 'YP',
    name: 'Yoga Pratama',
    role: 'Brand Designer · Freelancer',
  },
  {
    quote:
      'Sistem escrow Craftly bikin kami tenang — bayar setelah puas. Sudah 12 project dan semua delivered tepat waktu tanpa drama sama sekali.',
    initials: 'AL',
    name: 'Andi Lesmana',
    role: 'Co-founder · F&B Brand',
  },
]

export default function Testimonials() {
  return (
    <section id="testimoni" className="scroll-mt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="shrink-0 mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Brand &amp; kreator
            <br />
            sudah membuktikannya.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col rounded-card border border-ink/10 bg-cloud p-10"
            >
              <div className="text-accent text-xl tracking-widest mb-6" aria-label="5 dari 5 bintang">
                ★★★★★
              </div>
              <blockquote className="text-lg leading-relaxed">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-ink/10 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-ink text-white flex items-center justify-center font-bold">
                  {item.initials}
                </span>
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-ink/60">{item.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
