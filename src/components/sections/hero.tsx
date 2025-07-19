'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Trophy, Target, Zap } from 'lucide-react'

export function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('story')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Championship Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl animate-championship" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 blur-2xl floating" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-accent/5 to-primary/5 blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-elite text-center relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-elite"
        >
          {/* Multi-faceted Identity Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <div className="status-champion inline-flex items-center gap-2">
                <Trophy size={16} />
                <span>International Champion</span>
              </div>
              <div className="status-elite inline-flex items-center gap-2">
                <Target size={16} />
                <span>Entrepreneur</span>
              </div>
              <div className="status-elite inline-flex items-center gap-2" data-faith>
                <Zap size={16} />
                <span>Christian</span>
              </div>
            </div>
          </motion.div>

          {/* Greeting & Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
              <p className="text-xl text-muted-foreground tracking-widest uppercase font-semibold">
                Student Athlete
              </p>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <h1 className="text-responsive-xl font-black gradient-text leading-tight tracking-tight">
              Liam Xander Santos
            </h1>
          </motion.div>

          {/* Multi-dimensional Highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="glass p-6 rounded-xl hover-lift">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Elite Athlete</h3>
              <p className="text-sm text-muted-foreground">International Rugby Champion</p>
              <div className="status-elite mt-3 text-xs">Portugal Sevens</div>
            </div>
            <div className="glass p-6 rounded-xl hover-lift">
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Entrepreneur</h3>
              <p className="text-sm text-muted-foreground">Multiple Ventures Founded</p>
              <div className="status-elite mt-3 text-xs">Roventis • Mealify • OBT</div>
            </div>
            <div className="glass p-6 rounded-xl hover-lift" data-faith>
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Christian</h3>
              <p className="text-sm text-muted-foreground">Purpose-Driven Mission</p>
              <div className="status-elite mt-3 text-xs">Obsession Beats Talent</div>
            </div>
          </motion.div>

          {/* Multi-dimensional Description */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            International Champion • Serial Entrepreneur • Christian | Building ventures and chasing excellence across multiple domains 🚀
          </motion.p>

          {/* Personal Brand & Location */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="glass px-6 py-3 rounded-full">
              <span className="flex items-center gap-3 text-sm font-semibold">
                <span className="text-primary text-lg">🎯</span>
                Athlete • Entrepreneur • Christian
              </span>
            </div>
            <div className="glass px-6 py-3 rounded-full">
              <span className="flex items-center gap-3 text-sm font-semibold">
                <span className="text-2xl">🇿🇦🇵🇹</span>
                Johannesburg, South Africa
              </span>
            </div>
          </motion.div>

          {/* Life Philosophy */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="card-elite max-w-2xl mx-auto p-8 border-2 border-primary/20" data-faith>
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
              <p className="text-2xl md:text-3xl font-black gradient-text mb-3">
                "Obsession Beats Talent"
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
                Life Philosophy
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether on the rugby field, in business ventures, or serving others, this principle drives every pursuit of excellence.
              </p>
              <div className="flex items-center justify-center mt-4">
                <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center items-center gap-4 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.a
              href="mailto:liamxandersantos@gmail.com"
              className="glass p-4 rounded-xl magnetic group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} className="group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              href="https://github.com/liamsantos"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-xl magnetic group"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} className="group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/liamsantos"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-xl magnetic group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} className="group-hover:text-primary transition-colors" />
            </motion.a>
          </motion.div>

          {/* Discover More Button */}
          <motion.div
            className="flex justify-center mt-16 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
          >
            <motion.button
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-all duration-300 focus-elite group cursor-pointer"
              onClick={scrollToNextSection}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-xs font-medium mb-3 tracking-wider uppercase text-center group-hover:text-primary transition-colors">
                Discover More
              </span>
              <motion.div 
                className="glass p-3 rounded-full group-hover:border-primary/50 transition-all duration-300"
                animate={{ 
                  y: [0, -5, 0]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <ArrowDown size={20} className="group-hover:text-primary transition-colors" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Elite Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${25 + (i % 3) * 25}%`,
                width: `${8 + i * 2}px`,
                height: `${8 + i * 2}px`,
                background: i % 2 === 0 ? 'var(--gradient-primary)' : 'var(--gradient-accent)',
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + i * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 