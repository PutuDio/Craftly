'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type AuthMode = 'login' | 'register'
export type UserRole = 'client' | 'creator'

export type UserProfile = {
  name: string
  email: string
  role: UserRole
}

type AuthContextType = {
  isOpen: boolean
  mode: AuthMode
  role: UserRole
  user: UserProfile | null
  openAuth: (options?: { mode?: AuthMode; role?: UserRole }) => void
  closeAuth: () => void
  setMode: (mode: AuthMode) => void
  setRole: (role: UserRole) => void
  login: (profile: UserProfile) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<AuthMode>('login')
  const [role, setRole] = useState<UserRole>('client')
  const [user, setUser] = useState<UserProfile | null>(null)

  const openAuth = (options?: { mode?: AuthMode; role?: UserRole }) => {
    if (options?.mode) setMode(options.mode)
    if (options?.role) setRole(options.role)
    setIsOpen(true)
  }

  const closeAuth = () => {
    setIsOpen(false)
  }

  const login = (profile: UserProfile) => {
    setUser(profile)
    setIsOpen(false)
  }

  const logout = () => {
    setUser(null)
  }

  // Handle #masuk or #daftar from url
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash === '#masuk') {
        openAuth({ mode: 'login' })
      } else if (hash === '#daftar') {
        openAuth({ mode: 'register' })
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isOpen,
        mode,
        role,
        user,
        openAuth,
        closeAuth,
        setMode,
        setRole,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return ctx
}
