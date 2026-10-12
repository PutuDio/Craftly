'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Post Brief Project',
    description:
      'Jelaskan kebutuhan project atau biarkan AI Brief Generator kami yang merumuskannya. Tidak perlu jago nulis brief.',
  },
  {
    number: '02',
    title: 'AI Match Kreator',
    description:
      'Dalam 60 detik, AI kami mencocokkan kamu dengan 3-5 kreator terbaik sesuai kebutuhan dan budget project.',
  },
  {
    number: '03',
    title: 'Terima Hasil & Bayar',
    description:
      'Kolaborasi, revisi, setujui hasil. Pembayaran dilepas ke kreator hanya setelah kamu puas. Zero risk, full control.',
  },
]

export default function CaraKerja() {
  return (
    <section id="cara-kerja" className="scroll-mt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-16">
          <div className="shrink-0">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-sm font-semibold mb-4">
              Cara Kerja
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Project selesai
              <br />
              dalam 60 detik setup.
            </h2>
          </div>
          <p className="text-ink/70 max-w-md lg:ml-auto">
            Tidak ada proses rekrut yang panjang. Tulis brief, biarkan AI
            mencocokkan, lalu bayar setelah hasilnya kamu setujui.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col rounded-[45px] bg-ink text-white p-10"
            >
              <span className="w-16 h-16 rounded-2xl bg-accent text-ink flex items-center justify-center text-xl font-bold mb-8">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
