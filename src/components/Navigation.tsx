'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-store'

const navLinks = [
  { name: 'Kategori', href: '#kategori' },
  { name: 'Cara Kerja', href: '#cara-kerja' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, openAuth, logout } = useAuth()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center font-bold text-ink">
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

          {/* CTA / User Status */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-mist border border-ink/10 text-sm">
                  <span className="w-7 h-7 rounded-full bg-accent font-bold text-ink flex items-center justify-center text-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-xs leading-none text-ink">{user.name}</span>
                    <span className="text-[10px] text-ink/60 capitalize leading-none mt-0.5">
                      {user.role === 'client' ? 'Brand / Klien' : 'Kreator Pro'}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={logout}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-ink/70 hover:text-ink hover:bg-cloud transition-colors"
                >
                  Keluar
                </button>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => openAuth({ mode: 'login' })}
                  className="px-6 py-3 rounded-full text-base font-medium hover:bg-cloud transition-colors"
                >
                  Masuk
                </button>
                <button
                  type="button"
                  onClick={() => openAuth({ mode: 'register' })}
                  className="px-6 py-3 rounded-full bg-ink text-white text-base font-medium transition-colors hover:bg-ink-light"
                >
                  Mulai Sekarang
                </button>
              </>
            )}
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

              {user ? (
                <div className="pt-2 border-t border-ink/10 flex flex-col gap-2">
                  <div className="flex items-center gap-2 py-1">
                    <span className="w-8 h-8 rounded-full bg-accent font-bold text-ink flex items-center justify-center text-sm">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                    <div>
                      <p className="font-bold text-sm text-ink">{user.name}</p>
                      <p className="text-xs text-ink/60">{user.email}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      logout()
                      setIsMenuOpen(false)
                    }}
                    className="w-full text-left py-2 text-sm font-semibold text-red-600"
                  >
                    Keluar dari Akun
                  </button>
                </div>
              ) : (
                <div className="pt-2 border-t border-ink/10 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      openAuth({ mode: 'login' })
                      setIsMenuOpen(false)
                    }}
                    className="text-left py-2 text-base font-medium"
                  >
                    Masuk
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      openAuth({ mode: 'register' })
                      setIsMenuOpen(false)
                    }}
                    className="inline-flex w-fit px-6 py-3 rounded-full bg-ink text-white font-medium"
                  >
                    Mulai Sekarang
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

