'use client'

import { Vortex } from "@/components/ui/vortex"

export const GlobalVortexBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full">
      <Vortex
        backgroundColor="hsl(var(--background))"
        baseHue={30}
        rangeHue={60}
        particleCount={500}
        baseSpeed={0.3}
        rangeSpeed={1.0}
        baseRadius={0.3}
        rangeRadius={1.0}
        className="fixed inset-0 w-full h-full"
        containerClassName="fixed inset-0 w-full h-full"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 