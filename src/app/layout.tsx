import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { AnimationProvider } from '@/components/animation-provider'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { ParticleBackground } from '@/components/animations/particle-background'
import { LoadingSequence } from '@/components/animations/loading-sequence'
import { MobileDisclaimer } from '@/components/ui/mobile-disclaimer'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Liam Xander Santos | International Champion, Entrepreneur & Leader',
    template: '%s | Liam Santos'
  },
  description: 'Liam Xander Santos - International champion, serial entrepreneur, and faith-driven leader building ventures and pursuing excellence across multiple domains.',
  keywords: [
    'liam xander santos',
    'international champion',
    'entrepreneur',
    'rugby player',
    'roventis',
    'mealify',
    'obt',
    'portugal sevens',
    'lions rugby',
    'faith leader',
    'serial entrepreneur',
    'elite athlete'
  ],
  authors: [{ name: 'Liam Santos' }],
  creator: 'Liam Santos',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.example.com',
    title: 'Liam Xander Santos | International Champion, Entrepreneur & Leader',
    description: 'Explore the multi-dimensional journey of Liam Xander Santos - international champion, serial entrepreneur, and faith-driven leader.',
    siteName: 'Liam Santos Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Liam Santos Rugby Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liam Xander Santos | International Champion, Entrepreneur & Leader',
    description: 'Multi-dimensional excellence across athletics, entrepreneurship, and faith-driven leadership.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <AnimationProvider>
            {/* Loading sequence for personalized experience */}
            <LoadingSequence />
            
            {/* Particle background system */}
            <ParticleBackground />
            
            {/* Custom cursor for interactive experience */}
            <CustomCursor />
            
            {/* Mobile disclaimer popup */}
            <MobileDisclaimer />
            
            {/* Main content */}
            <main className="relative z-10">
              {children}
            </main>
            
            {/* Global portal for modals, tooltips, etc. */}
            <div id="portal-root" />
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 