'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Clock, Mouse, Zap, Heart, Trophy, Star } from 'lucide-react'

interface EngagementMetrics {
  timeOnSite: number
  scrollDepth: number
  interactionCount: number
  sectionsVisited: Set<string>
  easterEggsFound: string[]
}

interface SpecialFeaturesProps {
  showMetrics?: boolean
  onToggleMetrics?: () => void
}

export function SpecialFeatures({ showMetrics: externalShowMetrics, onToggleMetrics }: SpecialFeaturesProps = {}) {
  const [konami, setKonami] = useState<string[]>([])
  const [showEasterEgg, setShowEasterEgg] = useState<string | null>(null)
  const [metrics, setMetrics] = useState<EngagementMetrics>({
    timeOnSite: 0,
    scrollDepth: 0,
    interactionCount: 0,
    sectionsVisited: new Set(),
    easterEggsFound: []
  })
  const [internalShowMetrics, setInternalShowMetrics] = useState(false)
  const showMetrics = externalShowMetrics !== undefined ? externalShowMetrics : internalShowMetrics

  // Konami code sequence
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']

  useEffect(() => {
    let startTime = Date.now()
    let interactionCount = 0

    // Time tracking
    const timeInterval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        timeOnSite: Math.floor((Date.now() - startTime) / 1000)
      }))
    }, 1000)

    // Scroll depth tracking
    const handleScroll = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      
      setMetrics(prev => ({
        ...prev,
        scrollDepth: Math.max(prev.scrollDepth, scrollDepth || 0)
      }))

      // Track section visits
      const sections = ['hero', 'story', 'projects', 'inspiration']
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight && rect.bottom > 0) {
                         setMetrics(prev => ({
               ...prev,
               sectionsVisited: new Set([...Array.from(prev.sectionsVisited), section])
             }))
          }
        }
      })
    }

    // Interaction tracking
    const handleInteraction = () => {
      interactionCount++
      setMetrics(prev => ({
        ...prev,
        interactionCount
      }))
    }

    // Konami code detection
    const handleKeyDown = (e: KeyboardEvent) => {
      setKonami(prev => {
        const newSequence = [...prev, e.code].slice(-konamiCode.length)
        
        if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
          triggerEasterEgg('konami')
          return []
        }
        
        return newSequence
      })

      // Secret key combinations
      if (e.ctrlKey && e.shiftKey && e.code === 'KeyL') {
        triggerEasterEgg('developer')
      }
      
      if (e.code === 'KeyH' && e.ctrlKey) {
        triggerEasterEgg('hidden')
      }
    }

    // Double-click logo easter egg
    const handleDoubleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-logo]')) {
        triggerEasterEgg('logo')
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('click', handleInteraction)
    window.addEventListener('keydown', handleInteraction)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('dblclick', handleDoubleClick)

    return () => {
      clearInterval(timeInterval)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('keydown', handleInteraction)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('dblclick', handleDoubleClick)
    }
  }, [])

  const triggerEasterEgg = (type: string) => {
    if (!metrics.easterEggsFound.includes(type)) {
      setMetrics(prev => ({
        ...prev,
        easterEggsFound: [...prev.easterEggsFound, type]
      }))
    }
    setShowEasterEgg(type)
    setTimeout(() => setShowEasterEgg(null), 3000)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getEngagementLevel = () => {
    const score = 
      (metrics.timeOnSite > 60 ? 20 : 0) +
      (metrics.scrollDepth > 50 ? 20 : 0) +
      (metrics.interactionCount > 10 ? 20 : 0) +
      (metrics.sectionsVisited.size * 8) +
      (metrics.easterEggsFound.length * 10)

    if (score > 80) return { level: 'Amazing', color: 'text-green-400', icon: Trophy }
    if (score > 60) return { level: 'Great', color: 'text-blue-400', icon: Star }
    if (score > 40) return { level: 'Good', color: 'text-yellow-400', icon: Heart }
    return { level: 'Getting Started', color: 'text-gray-400', icon: Eye }
  }

  const engagement = getEngagementLevel()

  return (
    <>


      {/* Engagement Metrics Panel */}
      <AnimatePresence>
        {showMetrics && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="fixed top-20 right-6 z-50 w-80 glass rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <engagement.icon className={`w-6 h-6 ${engagement.color}`} />
              <div>
                <h3 className="font-bold gradient-text">Engagement Level</h3>
                <p className={`text-sm ${engagement.color}`}>{engagement.level}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Time on site: {formatTime(metrics.timeOnSite)}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mouse className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Scroll depth: {metrics.scrollDepth}%</span>
              </div>

              <div className="flex items-center gap-3">
                <Zap className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Interactions: {metrics.interactionCount}</span>
              </div>

              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Sections visited: {metrics.sectionsVisited.size}/5</span>
              </div>

              {metrics.easterEggsFound.length > 0 && (
                <div className="flex items-center gap-3">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">Easter eggs: {metrics.easterEggsFound.length}</span>
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-muted-foreground">
                Try: Konami code, Ctrl+Shift+L, double-click logo
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter Egg Notifications */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 glass rounded-2xl p-6 border border-white/20 min-w-80"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center"
              >
                <Trophy className="w-6 h-6 text-white" />
              </motion.div>
              
              <h3 className="font-bold gradient-text mb-2">Easter Egg Found! 🎉</h3>
              
              {showEasterEgg === 'konami' && (
                <p className="text-sm">You discovered the Konami code! Classic!</p>
              )}
              {showEasterEgg === 'developer' && (
                <p className="text-sm">Developer mode activated! You know your shortcuts!</p>
              )}
              {showEasterEgg === 'hidden' && (
                <p className="text-sm">Hidden feature unlocked! Nice exploration!</p>
              )}
              {showEasterEgg === 'logo' && (
                <p className="text-sm">Logo secret revealed! Double-click magic!</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Achievement Celebration */}
      {metrics.sectionsVisited.size === 5 && metrics.timeOnSite > 120 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 pointer-events-none z-30"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -50],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  )
} 