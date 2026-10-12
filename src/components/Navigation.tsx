'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { name: 'Kategori', href: '#kategori' },
  { name: 'Cara Kerja', href: '#cara-kerja' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center font-bold">
              C
            </span>
            <span className="text-2xl font-bold">Craftly</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium hover:underline underline-offset-4"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#masuk"
              className="px-6 py-3 rounded-full text-base font-medium hover:bg-cloud transition-colors"
            >
              Masuk
            </Link>
            <Link
              href="#mulai"
              className="px-6 py-3 rounded-full bg-ink text-white text-base font-medium transition-colors hover:bg-ink-light"
            >
              Mulai Sekarang
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#masuk"
                className="text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Masuk
              </Link>
              <Link
                href="#mulai"
                className="inline-flex w-fit px-6 py-3 rounded-full bg-ink text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Mulai Sekarang
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
