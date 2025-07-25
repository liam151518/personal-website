'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Trophy, Briefcase, FileText, MessageCircle, Sparkles } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import { NavBar } from '@/components/ui/tubelight-navbar'

interface NavItem {
  name: string
  url: string
  icon: any
}

export function Navigation() {
  const router = useRouter()
  const pathname = usePathname()

  // Define navigation items based on current page
  const getNavItems = (): NavItem[] => {
    if (pathname === '/rugby-cv') {
      return [
        { name: 'Home', url: '/', icon: Home },
        { name: 'About', url: '/#story', icon: User },
        { name: 'Rugby CV', url: '/rugby-cv', icon: Trophy },
        { name: 'Contact', url: '/#contact', icon: MessageCircle }
      ]
    } else {
      return [
        { name: 'Home', url: '/#hero', icon: Home },
        { name: 'About', url: '/#story', icon: User },
        { name: 'Ventures', url: '/#projects', icon: Briefcase },
        { name: 'Inspiration', url: '/#inspiration', icon: Sparkles },
        { name: 'Rugby CV', url: '/rugby-cv', icon: Trophy },
        { name: 'Contact', url: '/#contact', icon: MessageCircle }
      ]
    }
  }

  const navItems = getNavItems()

  return (
    <>
      {/* Tubelight Navigation Bar */}
      <NavBar items={navItems} />

      {/* Logo - Top Left */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2
        }}
      >
        <motion.div
          className="text-xl font-bold gradient-text cursor-pointer uppercase tracking-widest bg-background/10 border border-white/20 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl shadow-black/10"
          whileHover={{ 
            scale: 1.05, 
            rotate: 1,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            duration: 0.3, 
            ease: [0.16, 1, 0.3, 1]
          }}
          onClick={() => {
            if (pathname === '/') {
              // Scroll to top of homepage
              window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
              // Navigate to homepage
              router.push('/')
            }
          }}
        >
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            LXS
          </span>
        </motion.div>
      </motion.div>
    </>
  )
} 