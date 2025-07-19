'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Star, Lightbulb, Award, Code, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react'

const timelineEvents = [
  {
    id: 1,
    year: '2019',
    title: 'Early Leadership',
    description: 'Captain of Limpopo Blue Bulls U13 Craven Week',
    icon: Trophy,
    color: 'from-blue-500 to-cyan-500',
    details: ['Led Limpopo Blue Bulls U13 at Craven Week', 'Captain of Limpopo 7s tournament', 'Early signs of natural leadership ability']
  },
  {
    id: 2,
    year: '2021-2022',
    title: 'Grey College Excellence',
    description: 'Captain of Grey College U16A and Player of the Year',
    icon: Star,
    color: 'from-purple-500 to-pink-500',
    details: ['Grey College U16A Captain & Player of the Year', 'Free State Grant Khomo Captain', 'World Schools Tournament (Thailand)']
  },
  {
    id: 3,
    year: '2023',
    title: 'Provincial Recognition',
    description: 'Captain of Free State U17 IPT 7s and Grey College First Team',
    icon: Lightbulb,
    color: 'from-green-500 to-emerald-500',
    details: ['Captain: Free State U17 IPT 7s', 'Grey College 1st & 2nd Teams', 'Rhino Week Captain']
  },
  {
    id: 4,
    year: '2024',
    title: 'Professional Recognition',
    description: 'Selected for Lions Rugby U19/U21 Squad',
    icon: Award,
    color: 'from-orange-500 to-red-500',
    details: ['Lions Rugby U19/U21 Squad member', 'Grey College First Team', 'Stepped up to elite provincial level']
  },
  {
    id: 5,
    year: '2025',
    title: 'International Success',
    description: 'HSBC Sevens Challenger Series Winner with Portugal',
    icon: Code,
    color: 'from-indigo-500 to-purple-500',
    details: ['HSBC Sevens Challenger Series Winner (Cape Town)', 'Wits Young Guns Captain & Champions', 'Portugal Senior Sevens Team member']
  }
]

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
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [currentAchievement, setCurrentAchievement] = useState(0)

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length)
  }

  const prevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  return (
    <section id="story" className="section-padding bg-gradient-to-br from-background via-background/95 to-background relative overflow-hidden">
      {/* Championship Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl floating" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-accent/5 to-primary/5 blur-2xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-elite relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="status-elite mb-6">Elite Athletic Journey</div>
          <h2 className="text-responsive-lg gradient-text mb-6">
            From Provincial Captain to International Champion
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of consistent leadership, championship victories, and elite-level progression from U13 Craven Week to international rugby success
          </p>
          <div className="flex items-center justify-center mt-8">
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
          </div>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-responsive-md text-center mb-12 text-elite">Championship Timeline</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2 rounded-full" />
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 transform md:-translate-x-1/2 -translate-y-3">
                    <motion.div
                      className="w-full h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-elite flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <event.icon size={12} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Event Content */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <motion.div
                      className="card-elite p-8 cursor-pointer group"
                      onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className="status-champion text-xs">{event.year}</span>
                        <Calendar size={16} className="text-primary" />
                      </div>
                      
                      <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      <AnimatePresence>
                        {selectedEvent === event.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-border/50 pt-4"
                          >
                            <ul className="space-y-2">
                              {event.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                  <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

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