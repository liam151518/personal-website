'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun, Eye } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useRouter, usePathname } from 'next/navigation'
import { SpecialFeatures } from './special/easter-eggs'

interface NavItem {
  id: string
  label: string
  href?: string
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'story', label: 'About' },
  { id: 'projects', label: 'Ventures' },
  { id: 'inspiration', label: 'Inspiration' },
  { id: 'rugby-cv', label: 'Rugby CV', href: '/rugby-cv' },
  { id: 'contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [showEngagement, setShowEngagement] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Set active section based on current pathname
    if (pathname === '/rugby-cv') {
      setActiveSection('rugby-cv')
    } else if (pathname === '/') {
      // On homepage, track scroll position for sections
      const handleScroll = () => {
        const sectionsToTrack = navItems.filter(item => !item.href)
        const sections = sectionsToTrack.map(item => document.getElementById(item.id))
        const scrollY = window.scrollY + 100

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          if (section && section.offsetTop <= scrollY) {
            setActiveSection(sectionsToTrack[i].id)
            break
          }
        }
      }

      window.addEventListener('scroll', handleScroll)
      // Set initial active section
      handleScroll()
      
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  const scrollToSection = (sectionId: string, href?: string) => {
    if (href) {
      // External page navigation (like Rugby CV)
      setIsOpen(false)
      setTimeout(() => {
        window.location.href = href
      }, 100)
    } else {
      // Internal section navigation
      setIsOpen(false)
      
      if (pathname === '/') {
        // We're on homepage - just scroll to section
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // We're on a different page - navigate to homepage with section
        if (sectionId === 'hero') {
          window.location.href = '/'
        } else {
          window.location.href = `/#${sectionId}`
        }
      }
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 p-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-xl font-bold gradient-text cursor-pointer uppercase tracking-widest"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
          >
            LXS
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              // Use regular buttons for all navigation for consistency
              <button
                key={item.id}
                className={`text-sm font-medium transition-colors cursor-pointer hover:text-foreground hover:scale-105 z-50 relative ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
                onClick={() => scrollToSection(item.id, item.href)}
                style={{ pointerEvents: 'auto', zIndex: 999 }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Engagement, Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowEngagement(!showEngagement)}
              title="View engagement metrics"
              style={{ pointerEvents: 'auto', zIndex: 999 }}
            >
              <Eye size={18} />
            </motion.button>

            <motion.button
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              style={{ pointerEvents: 'auto', zIndex: 999 }}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>

            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              style={{ pointerEvents: 'auto', zIndex: 999 }}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 glass rounded-2xl p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                // Use regular buttons for all mobile navigation for consistency
                <button
                  key={item.id}
                  className={`block w-full text-left text-sm font-medium transition-colors cursor-pointer hover:text-foreground z-50 relative ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => scrollToSection(item.id, item.href)}
                  style={{ pointerEvents: 'auto', zIndex: 999 }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Special Features with controlled metrics */}
      <SpecialFeatures 
        showMetrics={showEngagement}
        onToggleMetrics={() => setShowEngagement(!showEngagement)}
      />
    </motion.nav>
  )
} 