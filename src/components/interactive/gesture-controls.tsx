'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Command, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Mouse } from 'lucide-react'

export function GestureControls() {
  const [showControls, setShowControls] = useState(false)
  const [activeGesture, setActiveGesture] = useState<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Show controls on ? key
      if (e.key === '?') {
        setShowControls(prev => !prev)
      }
      
      // Navigation shortcuts
      const shortcuts: Record<string, () => void> = {
        '1': () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }),
        '2': () => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' }),
        '3': () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
        '4': () => document.getElementById('inspiration')?.scrollIntoView({ behavior: 'smooth' }),
        'ArrowUp': () => window.scrollBy({ top: -100, behavior: 'smooth' }),
        'ArrowDown': () => window.scrollBy({ top: 100, behavior: 'smooth' }),
      }

      if (shortcuts[e.key]) {
        e.preventDefault()
        shortcuts[e.key]()
        setActiveGesture(e.key)
        setTimeout(() => setActiveGesture(null), 300)
      }
    }

    // Touch gestures
    let touchStartY = 0
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const diff = touchStartY - touchEndY

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe up
          window.scrollBy({ top: 100, behavior: 'smooth' })
          setActiveGesture('swipe-up')
        } else {
          // Swipe down  
          window.scrollBy({ top: -100, behavior: 'smooth' })
          setActiveGesture('swipe-down')
        }
        setTimeout(() => setActiveGesture(null), 300)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <>
      {/* Help Button */}
      <motion.button
        onClick={() => setShowControls(!showControls)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-xl">?</span>
      </motion.button>

      {/* Gesture Feedback */}
      <AnimatePresence>
        {activeGesture && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 glass rounded-2xl p-4 border border-white/20"
          >
            <div className="flex items-center gap-2 text-white">
              {activeGesture === 'swipe-up' && <ArrowUp className="w-6 h-6" />}
              {activeGesture === 'swipe-down' && <ArrowDown className="w-6 h-6" />}
              {activeGesture === 'ArrowUp' && <ArrowUp className="w-6 h-6" />}
              {activeGesture === 'ArrowDown' && <ArrowDown className="w-6 h-6" />}
              <span className="capitalize">{activeGesture.replace('-', ' ')}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls Panel */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 z-50 glass rounded-2xl p-6 border border-white/20 w-80"
          >
            <h3 className="text-lg font-bold mb-4 gradient-text">Interactive Controls</h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Command className="w-4 h-4" />
                  <span>1-5</span>
                </div>
                <span>Navigate to sections</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <ArrowUp className="w-4 h-4" />
                  <ArrowDown className="w-4 h-4" />
                </div>
                <span>Scroll up/down</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mouse className="w-4 h-4" />
                <span>Swipe on mobile</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="font-mono">?</span>
                <span>Toggle this panel</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 