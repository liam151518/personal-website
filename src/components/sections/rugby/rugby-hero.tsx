'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Linkedin, Mail, Trophy, Instagram, Download, Phone, MapPin, Award, Target, Zap } from 'lucide-react'
import Image from 'next/image'
import { Tilt } from '@/components/ui/tilt'
import { Spotlight } from '@/components/ui/spotlight'

export function RugbyHero() {
  const scrollToNextSection = () => {
    console.log('View Achievements button clicked!')
    
    // Use a more reliable scroll method
    const targetPosition = window.innerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
    
    console.log('Scrolling to position:', targetPosition)
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Championship Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl animate-championship" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 blur-2xl floating" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-accent/5 to-primary/5 blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-elite relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-elite"
          >
            {/* Elite Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <div className="status-champion inline-flex items-center gap-2 mb-4">
                <Trophy size={16} />
                <span>HSBC Sevens Challenger Series Champion</span>
              </div>
            </motion.div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
                <p className="text-xl text-muted-foreground tracking-widest uppercase font-semibold">
                  Elite Rugby Player
                </p>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" />
              </div>
              
              <h1 className="text-responsive-xl-enhanced font-black gradient-text-enhanced leading-tight tracking-tight name-glow-animation">
                Liam Xander Santos
              </h1>
              
              <p className="text-lg text-muted-foreground font-medium">
                Loose Forward | Lions U19 & Wits University
              </p>
            </motion.div>


            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.button
                onClick={(e) => {
                  e.preventDefault()
                  scrollToNextSection()
                }}
                className="btn-primary magnetic text-lg font-bold shadow-championship cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
              >
                View Achievements
              </motion.button>
              
              <motion.a
                href="/cv/Liam-Santos-Rugby-CV.pdf"
                download="Liam-Santos-Rugby-CV.pdf"
                className="glass px-8 py-4 rounded-xl magnetic group border border-white/20 hover:border-primary/50 transition-colors duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-foreground group-hover:text-primary transition-colors font-semibold">Download CV</span>
              </motion.a>
            </motion.div>

            {/* Statistics Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="glass p-6 rounded-xl mt-8"
            >
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-black gradient-text mb-1">6+</div>
                  <div className="text-sm text-muted-foreground">Rugby Seasons</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-black gradient-text mb-1">8+</div>
                  <div className="text-sm text-muted-foreground">Captaincies</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-black gradient-text mb-1">1</div>
                  <div className="text-sm text-muted-foreground">International Title</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
              
              {/* Portrait Image with Tilt Effect */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                className="relative z-10"
              >
                <Tilt
                  rotationFactor={6}
                  isRevese
                  style={{
                    transformOrigin: 'center center',
                  }}
                  springOptions={{
                    stiffness: 26.7,
                    damping: 4.1,
                    mass: 0.2,
                  }}
                  className="group relative rounded-2xl"
                >
                  <Spotlight
                    className="z-10 from-primary/50 via-primary/20 to-primary/10 blur-2xl"
                    size={300}
                    springOptions={{
                      stiffness: 26.7,
                      damping: 4.1,
                      mass: 0.2,
                    }}
                  />
                  <Image
                    src="/photos/rugby-portrait.jpeg"
                    alt="Liam Xander Santos - Elite Rugby Player in Lions Jersey"
                    width={384}
                    height={600}
                    className="w-80 h-[500px] lg:w-96 lg:h-[600px] rounded-2xl object-cover shadow-elite duration-700"
                    priority
                  />
                </Tilt>
              </motion.div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  )
} 