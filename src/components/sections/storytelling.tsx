'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Star, Lightbulb, Award, Code, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react'
import { RugbyTimeline } from './rugby-timeline'

const achievements = [
  { id: 1, title: 'International Winner', description: 'HSBC Sevens Challenger Series Champion', icon: '🏆' },
  { id: 2, title: 'Lions U19 Squad', description: 'Elite provincial level rugby', icon: '🦁' },
  { id: 3, title: 'Portugal Sevens', description: 'International representative player', icon: '🇵🇹' },
  { id: 4, title: 'Multiple Captain', description: 'Led teams from U13 to university level', icon: '👑' }
]

const values = [
  {
    id: 1,
    title: 'Obsession Beats Talent',
    description: 'Relentless dedication and continuous improvement drive exceptional performance',
    gradient: 'from-orange-400 to-red-500'
  },
  {
    id: 2,
    title: 'Leadership Through Action',
    description: 'Leading by example across multiple teams and championship victories',
    gradient: 'from-blue-400 to-purple-500'
  },
  {
    id: 3,
    title: 'Athletic Excellence',
    description: 'Pursuit of elite performance from provincial to international level',
    gradient: 'from-green-400 to-blue-500'
  },
  {
    id: 4,
    title: 'Championship Mentality',
    description: 'Winning mindset developed through consistent success and team leadership',
    gradient: 'from-purple-400 to-pink-500'
  }
]

export function StorytellingSection() {
  const [currentAchievement, setCurrentAchievement] = useState(0)

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length)
  }

  const prevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  return (
    <section id="story" className="section-padding relative overflow-hidden py-32">
      <div className="container-elite relative">
        {/* Rugby Timeline */}
        <div className="mb-24">
          <RugbyTimeline />
        </div>

        {/* Achievement Showcase */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-responsive-md text-center mb-12 text-elite">Elite Achievements</h3>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="glass-strong p-12 rounded-2xl text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAchievement}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="text-6xl mb-6">
                    {achievements[currentAchievement].icon}
                  </div>
                  <h4 className="text-2xl font-bold gradient-text">
                    {achievements[currentAchievement].title}
                  </h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {achievements[currentAchievement].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevAchievement}
                className="glass p-3 rounded-full magnetic hover:border-primary/50 transition-colors focus-elite"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2 items-center">
                {achievements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAchievement(index)}
                    className={`w-3 h-3 rounded-full transition-all focus-elite ${
                      index === currentAchievement 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted-foreground/30 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextAchievement}
                className="glass p-3 rounded-full magnetic hover:border-primary/50 transition-colors focus-elite"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Values Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-responsive-md text-center mb-12 text-elite">Championship Values</h3>
          
          <div className="grid-elite">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                className="card-elite p-8 text-center hover-lift group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center shadow-elite`}>
                  <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm" />
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 