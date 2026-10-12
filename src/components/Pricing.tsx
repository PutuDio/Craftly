'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type Feature = { label: string; included: boolean }

const plans: {
  name: string
  price: string
  period?: string
  audience: string
  note?: string
  features: Feature[]
  cta: string
  highlighted?: boolean
}[] = [
  {
    name: 'Basic',
    price: 'Gratis',
    audience: 'Untuk individu & brand kecil',
    features: [
      { label: 'Post 2 project/bulan', included: true },
      { label: '500 kreator terverifikasi', included: true },
      { label: 'Escrow payment aman', included: true },
      { label: 'AI Brief Generator', included: false },
      { label: 'Priority matching', included: false },
    ],
    cta: 'Mulai Gratis',
  },
  {
    name: 'Pro Brand',
    price: 'Rp 199K',
    period: '/bln',
    audience: 'Ditagih tahunan — hemat 30%',
    note: '✦ Paling Populer',
    features: [
      { label: 'Post unlimited project', included: true },
      { label: '50K+ kreator', included: true },
      { label: 'AI Brief Generator', included: true },
      { label: 'Priority AI matching (60 dtk)', included: true },
      { label: 'Dedicated account manager', included: true },
    ],
    cta: 'Coba 14 Hari Gratis →',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    audience: 'Untuk agensi & korporat',
    features: [
      { label: 'Semua fitur Pro', included: true },
      { label: 'White-label platform', included: true },
      { label: 'Custom kontrak & NDA', included: true },
      { label: 'Invoice & NET30 payment', included: true },
      { label: 'SLA & support 24/7', included: true },
    ],
    cta: 'Hubungi Sales →',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-16">
          <div className="shrink-0">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-sm font-semibold mb-4">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Bayar hanya saat
              <br />
              kamu puas.
            </h2>
          </div>
          <p className="text-ink/70 max-w-md lg:ml-auto">
            Tidak ada biaya tersembunyi. Komisi kecil hanya dari transaksi yang
            berhasil.
          </p>
        </div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`flex flex-col rounded-[45px] p-10 ${
                plan.highlighted
                  ? 'bg-ink text-white lg:-mt-4'
                  : 'border border-ink/10 bg-cloud'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.note && (
                  <span className="shrink-0 px-3 py-1.5 rounded-full bg-accent text-ink text-xs font-semibold">
                    {plan.note}
                  </span>
                )}
              </div>

              <div className="flex items-end gap-2">
                <span
                  className={`text-4xl font-bold ${plan.highlighted ? 'text-accent' : ''}`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-white/60 mb-1">{plan.period}</span>
                )}
              </div>
              <p
                className={`mt-3 ${plan.highlighted ? 'text-white/60' : 'text-ink/60'}`}
              >
                {plan.audience}
              </p>

              <ul
                className={`space-y-3 mt-8 pt-8 border-t ${
                  plan.highlighted
                    ? 'border-white/15'
                    : 'border-ink/10'
                }`}
              >
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-3">
                    <span
                      className={`shrink-0 ${
                        feature.included
                          ? plan.highlighted
                            ? 'text-accent'
                            : 'text-ink'
                          : 'text-ink/30'
                      }`}
                      aria-hidden
                    >
                      {feature.included ? '✓' : '✗'}
                    </span>
                    <span
                      className={
                        feature.included
                          ? ''
                          : plan.highlighted
                            ? 'text-white/40 line-through'
                            : 'text-ink/40 line-through'
                      }
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#mulai"
                className={`mt-10 inline-flex items-center justify-center px-7 py-4 rounded-full font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-accent text-ink hover:bg-white'
                    : 'bg-ink text-white hover:bg-ink-light'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
