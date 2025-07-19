'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Trophy, Target, Zap, Award } from 'lucide-react'

export function RugbyHero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('rugby-timeline')
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

          {/* Rugby Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-xl text-muted-foreground mb-6 tracking-wide">Elite Rugby CV</p>
            <h1 className="text-responsive-xl font-black gradient-text leading-tight tracking-tight">
              Liam Xander Santos
            </h1>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
              <p className="text-responsive-md font-bold text-elite uppercase tracking-widest">
                Loose Forward #6
              </p>
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-primary rounded-full" />
            </div>
          </motion.div>

          {/* Rugby Achievement Highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="glass p-6 rounded-xl hover-lift">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">International Champion</h3>
              <p className="text-sm text-muted-foreground">Portugal Senior Sevens</p>
              <div className="status-elite mt-3">HSBC Series Winner</div>
            </div>
            <div className="glass p-6 rounded-xl hover-lift">
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Lions U19 Squad</h3>
              <p className="text-sm text-muted-foreground">Elite Provincial Level</p>
              <div className="status-elite mt-3">85% Progress</div>
            </div>
            <div className="glass p-6 rounded-xl hover-lift">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">University Captain</h3>
              <p className="text-sm text-muted-foreground">Wits Young Guns Champions</p>
              <div className="status-elite mt-3">2025 Champions</div>
            </div>
          </motion.div>

          {/* Rugby Journey Summary */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            6-Year Elite Rugby Journey: From U13 Craven Week Captain to International Champion | Portugal Senior Sevens HSBC Winner 🏆
          </motion.p>

          {/* Physical Stats & Rugby Details */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="glass px-6 py-3 rounded-full">
              <span className="flex items-center gap-3 text-sm font-semibold">
                <span className="text-primary text-lg">⚡</span>
                1.80m | 93kg | Loose Forward #6
              </span>
            </div>
            <div className="glass px-6 py-3 rounded-full">
              <span className="flex items-center gap-3 text-sm font-semibold">
                <span className="text-2xl">🇿🇦🇵🇹</span>
                International Dual Citizen
              </span>
            </div>
          </motion.div>

          {/* Rugby Career Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="card-elite p-6 text-center">
              <div className="text-3xl font-black gradient-text mb-2">6+</div>
              <p className="text-sm text-muted-foreground">Rugby Seasons</p>
            </div>
            <div className="card-elite p-6 text-center">
              <div className="text-3xl font-black gradient-text mb-2">8+</div>
              <p className="text-sm text-muted-foreground">Captaincies</p>
            </div>
            <div className="card-elite p-6 text-center">
              <div className="text-3xl font-black gradient-text mb-2">3</div>
              <p className="text-sm text-muted-foreground">Elite Squads</p>
            </div>
            <div className="card-elite p-6 text-center">
              <div className="text-3xl font-black gradient-text mb-2">1</div>
              <p className="text-sm text-muted-foreground">International Title</p>
            </div>
          </motion.div>

          {/* Rugby Manifesto */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="card-elite max-w-2xl mx-auto p-8 border-2 border-primary/20">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-black gradient-text mb-3">
                "Obsession Beats Talent"
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
                Rugby Philosophy
              </p>
              <p className="text-muted-foreground">
                From U13 captain to international champion, this philosophy has driven every training session, every match, every victory.
              </p>
              <div className="flex items-center justify-center mt-4">
                <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button
              className="btn-primary magnetic text-lg font-bold shadow-championship"
              onClick={scrollToNextSection}
            >
              Explore Rugby Journey
            </button>
            
            <div className="flex gap-4">
              <motion.a
                href="mailto:liamxandersantos@gmail.com"
                className="glass p-4 rounded-xl magnetic group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} className="group-hover:text-primary transition-colors" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/liamsantos"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl magnetic group"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} className="group-hover:text-primary transition-colors" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Elite Rugby Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
                width: `${6 + i * 1.5}px`,
                height: `${6 + i * 1.5}px`,
                background: i % 2 === 0 ? 'var(--gradient-championship)' : 'var(--gradient-primary)',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Professional Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors focus-elite group"
            onClick={scrollToNextSection}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-semibold mb-3 tracking-wide uppercase">View Timeline</span>
            <div className="glass p-3 rounded-full group-hover:border-primary/50 transition-colors">
              <ArrowDown size={20} />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 