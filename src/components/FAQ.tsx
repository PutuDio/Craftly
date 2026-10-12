'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'Bagaimana cara AI matching bekerja?',
    answer:
      'Kamu cukup posting brief singkat — atau biarkan AI Brief Generator menyusunnya. Dalam sekitar 60 detik, AI kami mencocokkan brief-mu dengan 3-5 kreator terbaik berdasarkan skill, portofolio, rating, dan budget project.',
  },
  {
    question: 'Apakah dana saya aman jika kreator tidak deliver?',
    answer:
      'Aman. Dana ditahan di escrow dan hanya dilepas ke kreator setelah kamu menyetujui hasilnya. Jika kreator tidak menyelesaikan project sesuai kesepakatan, dana dikembalikan 100% ke kamu.',
  },
  {
    question: 'Berapa komisi Craftly?',
    answer:
      'Komisi hanya diambil dari transaksi yang berhasil — tidak ada biaya langganan wajib dan tidak ada biaya tersembunyi. Total 10% dari nilai project, terbagi dari sisi brand dan kreator.',
  },
  {
    question: 'Bagaimana daftar sebagai kreator?',
    answer:
      'Gratis. Buat akun, lengkapi skill dan portofolio, ikuti verifikasi singkat, lalu mulai terima brief dari brand. Kamu dibayar penuh setelah hasil project disetujui.',
  },
  {
    question: 'Berapa lama rata-rata project selesai?',
    answer:
      'Rata-rata 3-7 hari untuk project desain, video, dan copywriting. Project web development biasanya 2-4 minggu tergantung kompleksitas scope yang disepakati.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Ada pertanyaan?
            <br />
            Kami punya jawabannya.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`rounded-[35px] border border-ink/10 px-8 py-6 transition-colors ${
                  isOpen ? 'bg-cloud' : 'bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 text-left"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span
                    className="shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-xl font-semibold"
                    aria-hidden
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-ink/70 leading-relaxed mt-5 pt-5 border-t border-ink/10">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
