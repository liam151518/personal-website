'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnimation } from '@/components/animation-provider'

const loadingStages = [
  { id: 'assets', message: 'Loading creative assets...', duration: 600 },
  { id: 'animations', message: 'Preparing animations...', duration: 500 },
  { id: 'content', message: 'Crafting experience...', duration: 500 },
  { id: 'complete', message: 'Welcome to Liam\'s Portfolio!', duration: 400 },
]

export function LoadingSequence() {
  const [currentStage, setCurrentStage] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const { isReducedMotion } = useAnimation()

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let progressInterval: NodeJS.Timeout
    let safetyTimeout: NodeJS.Timeout

    // Safety timeout to force completion after 5 seconds
    safetyTimeout = setTimeout(() => {
      setIsComplete(true)
    }, 5000)

    const nextStage = () => {
      if (currentStage < loadingStages.length - 1) {
        setCurrentStage(prev => prev + 1)
        setProgress(0)
      } else {
        setTimeout(() => setIsComplete(true), 500)
      }
    }

    const updateProgress = () => {
      // Safety check to prevent array out of bounds
      if (currentStage >= loadingStages.length) {
        setIsComplete(true)
        return
      }

      const stageDuration = loadingStages[currentStage]?.duration || 500
      const increment = 100 / (stageDuration / 50) // Update every 50ms
      
      progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + increment
          if (newProgress >= 100) {
            clearInterval(progressInterval)
            timeoutId = setTimeout(nextStage, 200)
            return 100
          }
          return newProgress
        })
      }, 50)
    }

    if (!isComplete && currentStage < loadingStages.length) {
      updateProgress()
    }

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(safetyTimeout)
      clearInterval(progressInterval)
    }
  }, [currentStage, isComplete])

  if (isComplete || isReducedMotion || loadingStages.length === 0) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="text-center space-y-8 max-w-md mx-auto px-6">
          {/* Logo or Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-20 h-20 mx-auto relative">
              <motion.div
                className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 rounded-full bg-background"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
            </div>
          </motion.div>

          {/* Stage Message */}
          <motion.div
            key={currentStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-medium text-foreground">
              {loadingStages[currentStage]?.message || 'Loading...'}
            </h2>

            {/* Progress Bar */}
            <div className="w-full max-w-xs mx-auto">
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>{Math.round(progress)}%</span>
                <span>{currentStage + 1} / {loadingStages.length}</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full"
                style={{
                  left: `${20 + (i * 12)}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 