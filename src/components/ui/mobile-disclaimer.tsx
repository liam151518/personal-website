'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, Smartphone, X } from 'lucide-react'

export function MobileDisclaimer() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
      
      // Check if user has already dismissed the disclaimer
      const hasSeenDisclaimer = localStorage.getItem('mobile-disclaimer-dismissed')
      
      if (isMobileDevice && !hasSeenDisclaimer) {
        setIsVisible(true)
      }
    }

    // Small delay to ensure proper detection
    setTimeout(checkMobile, 500)
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleContinue = () => {
    setIsVisible(false)
    // Remember user's choice
    localStorage.setItem('mobile-disclaimer-dismissed', 'true')
  }

  const handleClose = () => {
    setIsVisible(false)
    // Remember user's choice
    localStorage.setItem('mobile-disclaimer-dismissed', 'true')
  }

  if (!isMobile) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />
          
          {/* Disclaimer Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="fixed inset-4 max-w-md mx-auto my-auto h-fit bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl z-[101]"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/50 hover:bg-muted/80 flex items-center justify-center transition-colors touch-manipulation"
            >
              <X size={16} className="text-muted-foreground" />
            </button>

            <div className="p-6 pt-8">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Monitor className="w-12 h-12 text-primary" />
                  <Smartphone className="w-6 h-6 text-primary/70 absolute -bottom-1 -right-1" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-center mb-3 gradient-text">
                Best Viewed on Desktop
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-center text-sm leading-relaxed mb-6">
                This elite rugby portfolio features advanced animations and interactive elements optimized for desktop viewing. 
                <br /><br />
                While mobile-friendly, you'll get the full championship experience on a larger screen.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleContinue}
                  className="w-full btn-primary text-sm py-3 rounded-xl font-semibold touch-manipulation"
                >
                  Continue on Mobile
                </button>
                
                <p className="text-xs text-muted-foreground text-center">
                  This message won't show again
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary/60 to-primary rounded-full" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
