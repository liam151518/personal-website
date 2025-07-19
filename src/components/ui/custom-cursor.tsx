'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useAnimation } from '@/components/animation-provider'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [showCross, setShowCross] = useState(false)
  const { isReducedMotion } = useAnimation()

  useEffect(() => {
    if (isReducedMotion) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Check for faith-related elements
      const isFaithElement = target.closest('[data-faith]') || 
                           target.textContent?.includes('OBT') ||
                           target.textContent?.includes('faith') ||
                           target.textContent?.includes('Faith') ||
                           target.textContent?.includes('Christian')
      
      if (isFaithElement) {
        setShowCross(true)
        setIsPointer(false)
      } else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.style.cursor === 'pointer') {
        setIsPointer(true)
        setShowCross(false)
      } else {
        setIsPointer(false)
        setShowCross(false)
      }
    }

    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isReducedMotion])

  if (isReducedMotion || !isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      style={{
        x: position.x - 8,
        y: position.y - 8,
      }}
      animate={{
        scale: isPointer || showCross ? 1.5 : 1,
        rotate: showCross ? 45 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      {showCross ? (
        // Cross shape for faith elements
        <div className="w-4 h-4 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white transform -translate-x-1/2" />
        </div>
      ) : (
        // Regular cursor
        <div className={`w-4 h-4 rounded-full bg-white transition-all duration-300 ${
          isPointer ? 'bg-opacity-50' : 'bg-opacity-100'
        }`} />
      )}
    </motion.div>
  )
} 