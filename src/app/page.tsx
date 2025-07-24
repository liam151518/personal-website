import { Suspense } from 'react'
import { Navigation } from '@/components/navigation'
import { ImageTrailHero } from '@/components/sections/image-trail-hero'
import { StorytellingSection } from '@/components/sections/storytelling'
import { ProjectsPreview } from '@/components/sections/projects-preview'
import { InspirationPreview } from '@/components/sections/inspiration-preview'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/footer'
import { GestureControls } from '@/components/interactive/gesture-controls'


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Suspense fallback={<div className="h-20" />}>
        <Navigation />
      </Suspense>

      {/* Hero Section with Image Trail */}
      <section id="hero" className="relative">
        <Suspense fallback={<div className="h-screen" />}>
          <ImageTrailHero />
        </Suspense>
      </section>

      {/* Storytelling Hub */}
      <section id="story" className="relative">
        <Suspense fallback={<div className="h-screen" />}>
          <StorytellingSection />
        </Suspense>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="relative">
        <Suspense fallback={<div className="h-screen" />}>
          <ProjectsPreview />
        </Suspense>
      </section>

      {/* Inspiration Preview */}
      <section id="inspiration" className="relative">
        <Suspense fallback={<div className="h-screen" />}>
          <InspirationPreview />
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
      <GestureControls />
    </div>
  )
}

// Export metadata for the page
export const metadata = {
  title: 'Home',
  description: 'Liam Xander Santos - International champion, serial entrepreneur, and faith-driven leader. Explore the journey across athletics, business ventures, and purpose-driven impact.',
} 