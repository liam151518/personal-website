import { Suspense } from 'react'
import { Navigation } from '@/components/navigation'
import { RugbyHero } from '@/components/sections/rugby/rugby-hero'
import { RugbyTimeline } from '@/components/sections/rugby/rugby-timeline'
import { RugbyAchievements } from '@/components/sections/rugby/rugby-achievements'
import { RugbyTestimonials } from '@/components/sections/rugby/rugby-testimonials'
import { RugbyStats } from '@/components/sections/rugby/rugby-stats'
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

      {/* Rugby Hero Section */}
      <section id="rugby-hero" className="relative">
        <Suspense fallback={<div className="h-screen" />}>
          <RugbyHero />
        </Suspense>
      </section>

      {/* Rugby Timeline */}
      <section id="rugby-timeline" className="relative">
        <Suspense fallback={<div className="h-screen" />}>
          <RugbyTimeline />
        </Suspense>
      </section>

      {/* Rugby Achievements */}
      <section id="rugby-achievements" className="relative">
        <Suspense fallback={<div className="h-screen" />}>
          <RugbyAchievements />
        </Suspense>
      </section>

      {/* Rugby Statistics */}
      <section id="rugby-stats" className="relative">
        <Suspense fallback={<div className="h-screen" />}>
          <RugbyStats />
        </Suspense>
      </section>

      {/* Rugby Testimonials */}
      <section id="rugby-testimonials" className="relative">
        <Suspense fallback={<div className="h-screen" />}>
          <RugbyTestimonials />
        </Suspense>
      </section>

      {/* Contact */}
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
      <GestureControls />    </div>
  )
} 