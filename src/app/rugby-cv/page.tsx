import { Suspense } from 'react'
import { Navigation } from '@/components/navigation'
import { RugbyHero } from '@/components/sections/rugby/rugby-hero'
import { RugbyAchievements } from '@/components/sections/rugby/rugby-achievements'
import RugbyVideoDemo from '@/components/sections/rugby/rugby-video-experience'
import { RugbyTestimonials } from '@/components/sections/rugby/rugby-testimonials'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/footer'
import { GestureControls } from '@/components/interactive/gesture-controls'

// Export metadata for the Rugby CV page
export const metadata = {
  title: 'Rugby CV | Elite Athletic Journey',
  description: 'Elite rugby portfolio showcasing Liam Xander Santos international championship journey from Lions U19 to Portugal Senior Sevens HSBC Challenger Series victory.',
}

export default function RugbyCVPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Suspense fallback={<div className="h-20" />}>
        <Navigation />
      </Suspense>

      {/* Rugby Hero Section - Introduction & Overview */}
      <section id="rugby-hero" className="relative">
        <Suspense fallback={<div className="h-screen" />}>
          <RugbyHero />
        </Suspense>
      </section>

      {/* Rugby Achievements - Detailed Journey & Accomplishments */}
      <section id="rugby-achievements" className="relative">
        <Suspense fallback={<div className="h-screen" />}>
          <RugbyAchievements />
        </Suspense>
      </section>

      {/* Interactive Video Experience - Championship Journey */}
      <section id="rugby-video-experience" className="relative">
        <Suspense fallback={<div className="h-screen" />}>
          <RugbyVideoDemo />
        </Suspense>
      </section>

      {/* Rugby Testimonials - Coach References */}
      <section id="rugby-testimonials" className="relative">
        <Suspense fallback={<div className="h-screen" />}>
          <RugbyTestimonials />
        </Suspense>
      </section>

      {/* Contact - Professional Contact Information */}
      <section id="contact" className="relative">
        <Suspense fallback={<div className="h-96" />}>
          <ContactSection />
        </Suspense>
      </section>

      {/* Footer */}
      <Suspense fallback={<div className="h-32" />}>
        <Footer />
      </Suspense>

      {/* Interactive Features */}
      <GestureControls />
    </div>
  )
} 