'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '@/lib/auth-store'

export default function AuthModal() {
  const { isOpen, mode, role, closeAuth, setMode, setRole, login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Reset form when modal closes or opens
  useEffect(() => {
    if (isOpen) {
      setSuccessMessage('')
      setErrorMessage('')
    }
  }, [isOpen, mode])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeAuth()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeAuth])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!email || !password || (mode === 'register' && !name)) {
      setErrorMessage('Mohon lengkapi semua kolom yang wajib diisi.')
      return
    }

    setIsLoading(true)

    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false)
      const displayName = name || email.split('@')[0]
      setSuccessMessage(
        mode === 'login'
          ? `Selamat datang kembali, ${displayName}!`
          : `Akun berhasil dibuat! Selamat datang di Craftly, ${displayName}!`
      )

      setTimeout(() => {
        login({
          email,
          name: displayName,
          role,
        })
      }, 1000)
    }, 900)
  }

  const handleQuickDemo = (demoRole: 'client' | 'creator') => {
    setIsLoading(true)
    setErrorMessage('')
    setTimeout(() => {
      setIsLoading(false)
      if (demoRole === 'client') {
        login({
          email: 'brand@tokokreatif.id',
          name: 'Dio Brand Studio',
          role: 'client',
        })
      } else {
        login({
          email: 'kreator@craftly.id',
          name: 'Putu Desainer',
          role: 'creator',
        })
      }
    }, 600)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeAuth}
            className="fixed inset-0 bg-ink/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-modal-title"
            className="relative w-full max-w-lg bg-white rounded-3xl sm:rounded-[36px] shadow-2xl border border-ink/10 overflow-hidden z-10"
          >
            {/* Header with Close Button */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center font-bold text-ink">
                  C
                </span>
                <span className="text-xl font-bold tracking-tight">Craftly</span>
              </div>
              <button
                type="button"
                onClick={closeAuth}
                className="w-9 h-9 rounded-full bg-cloud hover:bg-ink/10 flex items-center justify-center text-ink transition-colors"
                aria-label="Tutup form masuk"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 pt-2">
              {/* Tab Switcher: Masuk vs Daftar */}
              <div className="grid grid-cols-2 p-1.5 bg-cloud rounded-2xl mb-6">
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className={`py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    mode === 'login'
                      ? 'bg-white text-ink shadow-sm'
                      : 'text-ink/60 hover:text-ink'
                  }`}
                >
                  Masuk Akun
                </button>
                <button
                  type="button"
                  onClick={() => setMode('register')}
                  className={`py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    mode === 'register'
                      ? 'bg-white text-ink shadow-sm'
                      : 'text-ink/60 hover:text-ink'
                  }`}
                >
                  Daftar Baru
                </button>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-5 text-center">
                <h2 id="auth-modal-title" className="text-2xl font-bold text-ink mb-1">
                  {mode === 'login' ? 'Selamat Datang Kembali' : 'Mulai Bersama Craftly'}
                </h2>
                <p className="text-sm text-ink/70">
                  {mode === 'login'
                    ? 'Masuk untuk mengelola project atau portofolio Anda'
                    : 'Pilih peran Anda dan nikmati matching AI dalam 60 detik'}
                </p>
              </div>

              {/* Role Selector Pill */}
              <div className="flex gap-2 p-1 bg-mist border border-ink/10 rounded-2xl mb-5">
                <button
                  type="button"
                  onClick={() => setRole('client')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
                    role === 'client'
                      ? 'bg-ink text-white shadow-sm'
                      : 'text-ink/70 hover:text-ink'
                  }`}
                >
                  <span>🏢</span>
                  <span>Brand / Klien</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole('creator')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
                    role === 'creator'
                      ? 'bg-accent text-ink font-bold shadow-sm'
                      : 'text-ink/70 hover:text-ink'
                  }`}
                >
                  <span>🎨</span>
                  <span>Kreator Digital</span>
                </button>
              </div>

              {/* Success Notification */}
              {successMessage && (
                <div className="mb-4 p-3.5 bg-accent/30 border border-accent rounded-2xl flex items-center gap-3 text-ink text-sm font-medium">
                  <svg className="w-5 h-5 text-ink shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{successMessage}</span>
                </div>
              )}

              {/* Error Notification */}
              {errorMessage && (
                <div className="mb-4 p-3.5 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 text-sm">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Auth Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'register' && (
                  <div>
                    <label className="block text-xs font-semibold text-ink/80 mb-1.5">
                      Nama Lengkap / Nama Brand
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Dio Pratama"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-ink/20 focus:border-ink focus:ring-2 focus:ring-accent/40 outline-none text-sm transition-all"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-ink/80 mb-1.5">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-ink/20 focus:border-ink focus:ring-2 focus:ring-accent/40 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-semibold text-ink/80">
                      Kata Sandi
                    </label>
                    {mode === 'login' && (
                      <button
                        type="button"
                        onClick={() => alert('Fitur reset password: Tautan verifikasi telah disiapkan untuk email terdaftar.')}
                        className="text-xs text-ink/60 hover:text-ink hover:underline"
                      >
                        Lupa password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Minimal 8 karakter"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-11 rounded-2xl border border-ink/20 focus:border-ink focus:ring-2 focus:ring-accent/40 outline-none text-sm transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/50 hover:text-ink p-1"
                      aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                    >
                      {showPassword ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {mode === 'login' && (
                  <div className="flex items-center">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-ink/80 select-none">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-ink/30 text-ink focus:ring-accent"
                      />
                      <span>Ingat saya di perangkat ini</span>
                    </label>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-2xl bg-ink text-white font-semibold text-sm hover:bg-ink-light active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      <span>Memproses...</span>
                    </>
                  ) : (
                    <span>
                      {mode === 'login'
                        ? `Masuk sebagai ${role === 'client' ? 'Brand' : 'Kreator'}`
                        : `Daftar sebagai ${role === 'client' ? 'Brand' : 'Kreator'}`}
                    </span>
                  )}
                </button>
              </form>

              {/* Social Login Separator */}
              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-ink/10" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-white text-ink/50">atau login instan</span>
                </div>
              </div>

              {/* Quick Demo Logins for Pair Testing */}
              <div className="grid grid-cols-2 gap-2.5 mb-3">
                <button
                  type="button"
                  onClick={() => handleQuickDemo('client')}
                  className="py-2.5 px-3 rounded-2xl border border-ink/15 hover:border-ink hover:bg-cloud/50 text-xs font-medium text-ink transition-all flex items-center justify-center gap-1.5"
                >
                  <span>🏢</span>
                  <span>Demo Klien</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemo('creator')}
                  className="py-2.5 px-3 rounded-2xl border border-ink/15 hover:border-ink hover:bg-cloud/50 text-xs font-medium text-ink transition-all flex items-center justify-center gap-1.5"
                >
                  <span>🎨</span>
                  <span>Demo Kreator</span>
                </button>
              </div>

              {/* Footer Switch */}
              <div className="text-center pt-2">
                <p className="text-xs text-ink/70">
                  {mode === 'login' ? 'Belum punya akun Craftly? ' : 'Sudah punya akun? '}
                  <button
                    type="button"
                    onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                    className="font-bold text-ink underline underline-offset-2 hover:text-accent-dark"
                  >
                    {mode === 'login' ? 'Daftar Sekarang' : 'Masuk di Sini'}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
