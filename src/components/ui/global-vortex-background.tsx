'use client'

import { useState, useEffect } from "react"
import { Vortex } from "@/components/ui/vortex"

export const GlobalVortexBackground = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="relative min-h-screen w-full">
      <Vortex
        backgroundColor="hsl(var(--background))"
        baseHue={30}
        rangeHue={60}
        particleCount={isMobile ? 200 : 500} // Reduced particle count for mobile
        baseSpeed={isMobile ? 0.2 : 0.3} // Slower speed for mobile
        rangeSpeed={isMobile ? 0.5 : 1.0}
        baseRadius={0.2}
        rangeRadius={isMobile ? 0.5 : 1.0}
        className="fixed inset-0 w-full h-full"
        containerClassName="fixed inset-0 w-full h-full"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 