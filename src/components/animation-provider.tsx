'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { isReducedMotion } from '@/lib/utils'

interface AnimationContextType {
  isReducedMotion: boolean
  isReady: boolean
  registerAnimation: (id: string, cleanup: () => void) => void
  unregisterAnimation: (id: string) => void
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider')
  }
  return context
}

interface AnimationProviderProps {
  children: React.ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const [isReady, setIsReady] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [animations, setAnimations] = useState<Map<string, () => void>>(new Map())

  useEffect(() => {
    const checkReducedMotion = () => {
      setReducedMotion(isReducedMotion())
    }

    checkReducedMotion()
    setIsReady(true)

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', checkReducedMotion)

    return () => {
      mediaQuery.removeEventListener('change', checkReducedMotion)
      // Cleanup all animations
      animations.forEach((cleanup) => cleanup())
    }
  }, [])

  const registerAnimation = (id: string, cleanup: () => void) => {
    setAnimations(prev => new Map(prev).set(id, cleanup))
  }

  const unregisterAnimation = (id: string) => {
    const cleanup = animations.get(id)
    if (cleanup) {
      cleanup()
      setAnimations(prev => {
        const newMap = new Map(prev)
        newMap.delete(id)
        return newMap
      })
    }
  }

  const contextValue: AnimationContextType = {
    isReducedMotion: reducedMotion,
    isReady,
    registerAnimation,
    unregisterAnimation,
  }

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  )
} 