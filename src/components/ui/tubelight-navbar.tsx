"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter, usePathname } from 'next/navigation'

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isNavigating, setIsNavigating] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Scroll-based navigation tracking and visibility control
  useEffect(() => {
    if (pathname !== '/') return // Only track scroll on homepage

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const sectionsToTrack = items.filter(item => item.url.startsWith('/#'))
      const sections = sectionsToTrack.map(item => {
        const sectionId = item.url.substring(2) // Remove '#'
        return {
          id: sectionId,
          element: document.getElementById(sectionId),
          name: item.name
        }
      })

      const scrollY = currentScrollY + 100

      // Update active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element && section.element.offsetTop <= scrollY) {
          setActiveTab(section.name)
          break
        }
      }

      // Visibility control
      if (!isNavigating) {
        // Hide navbar when scrolling down past hero section
        const heroSection = document.getElementById('hero')
        if (heroSection) {
          const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
          
          if (currentScrollY > heroBottom - 100) {
            // Scrolling down - hide navbar
            if (currentScrollY > lastScrollY + 10) {
              setIsVisible(false)
            }
            // Scrolling up - show navbar
            else if (currentScrollY < lastScrollY - 10) {
              setIsVisible(true)
            }
          } else {
            // In hero section - always visible
            setIsVisible(true)
          }
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    // Set initial active section
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items, pathname, isNavigating, lastScrollY])

  // Handle navigation click
  const handleNavClick = (item: NavItem) => {
    setIsNavigating(true)
    setActiveTab(item.name)
    
    if (item.url.startsWith('/#')) {
      // Internal section navigation
      const sectionId = item.url.substring(2) // Remove '#'
      if (pathname === '/') {
        // We're on homepage - scroll to section
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          // Keep navbar visible for a moment after navigation
          setTimeout(() => {
            setIsNavigating(false)
          }, 2000)
        }
      } else {
        // We're on a different page - navigate to homepage with section
        router.push(item.url)
        setIsNavigating(false)
      }
    } else if (item.url === '/') {
      // Home navigation
      if (pathname === '/') {
        // Scroll to top of homepage
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setTimeout(() => {
          setIsNavigating(false)
        }, 2000)
      } else {
        // Navigate to homepage
        router.push('/')
        setIsNavigating(false)
      }
    } else {
      // External page navigation
      router.push(item.url)
      setIsNavigating(false)
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 20 : -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isMobile ? 20 : -20, scale: 0.95 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.16, 1, 0.3, 1],
              scale: { duration: 0.3 }
            }}
          >
            <div className="flex items-center gap-1 bg-background/10 border border-white/20 backdrop-blur-xl py-2 px-2 rounded-2xl shadow-2xl shadow-black/10">
              {items.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.name

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={cn(
                      "relative cursor-pointer text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-300",
                      "text-foreground/70 hover:text-foreground hover:scale-105",
                      isActive && "text-foreground font-semibold",
                    )}
                  >
                    <span className="hidden md:inline">{item.name}</span>
                    <span className="md:hidden">
                      <Icon size={18} strokeWidth={2.5} />
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 w-full bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                        }}
                      >
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full">
                          <div className="absolute w-10 h-4 bg-primary/30 rounded-full blur-md -top-1.5 -left-2" />
                          <div className="absolute w-6 h-4 bg-primary/20 rounded-full blur-md -top-0.5" />
                          <div className="absolute w-3 h-3 bg-primary/20 rounded-full blur-sm top-0 left-1.5" />
                        </div>
                      </motion.div>
                    )}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 