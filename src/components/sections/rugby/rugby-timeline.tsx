'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Star, Lightbulb, Award, Code, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Flag, Crown, Target } from 'lucide-react'

const timelineEvents = [
  {
    id: 1,
    year: '2019',
    title: 'Early Leadership Foundation',
    description: 'Captain of Limpopo Blue Bulls U13 Craven Week & Limpopo 7s',
    icon: Trophy,
    color: 'from-blue-500 to-cyan-500',
    location: 'Limpopo, South Africa',
    details: [
      'Limpopo Blue Bulls U13 Craven Week (Captain)',
      'Limpopo 7s (Captain)',
      'First provincial captaincy at U13 level',
      'Early signs of natural leadership ability',
      'First taste of elite rugby competition'
    ],
    achievement: 'First captaincy at provincial level'
  },
  {
    id: 2,
    year: '2020–2021',
    title: 'Grey College Excellence Era',
    description: 'Grey College U14A & U15A with 2021 Captaincy',
    icon: Star,
    color: 'from-purple-500 to-pink-500',
    location: 'Bloemfontein, South Africa',
    details: [
      'Grey College U14A & U15A',
      'U15A Captain (2021)',
      'U15 Player of the Year (2021)',
      'Established as elite school rugby player',
      'Leadership development at prestigious rugby school'
    ],
    achievement: 'Player of the Year recognition'
  },
  {
    id: 3,
    year: '2022',
    title: 'School Rugby Excellence',
    description: 'Grey College U16A Captain & Player of the Year, Free State Representative',
    icon: Lightbulb,
    color: 'from-green-500 to-emerald-500',
    location: 'Bloemfontein, South Africa',
    details: [
      'Grey College U16A (Captain & Player of the Year)',
      'Free State Grant Khomo (Captain)',
      'Free State U17 IPT 7s',
      'World Schools Tournament (Thailand)',
      'Dual captaincy at school and provincial level'
    ],
    achievement: 'Dual captaincy & Player of the Year'
  },
  {
    id: 4,
    year: '2023',
    title: 'Provincial Recognition Breakthrough',
    description: 'Grey College First Team & Free State U17 IPT 7s Captain',
    icon: Award,
    color: 'from-orange-500 to-red-500',
    location: 'Bloemfontein, South Africa',
    details: [
      'Grey College 2nd & 1st Teams',
      'Free State U17 IPT 7s (Captain)',
      'Rhino Week (Captain)',
      'Stepped up to provincial representation',
      'Consistent leadership at multiple levels'
    ],
    achievement: 'Provincial captaincy achieved'
  },
  {
    id: 5,
    year: '2024',
    title: 'Elite Professional Transition',
    description: 'Grey College First Team & Lions Rugby U19/U21 Squad Selection',
    icon: Code,
    color: 'from-indigo-500 to-purple-500',
    location: 'Johannesburg, South Africa',
    details: [
      'Grey College First Team',
      'Lions Rugby U19/U21 Squad Member',
      'Stepped up to elite provincial level',
      'Professional rugby pathway opened',
      'Elite squad selection achieved'
    ],
    achievement: 'Elite squad selection'
  },
  {
    id: 6,
    year: '2024–2025',
    title: 'Elite Squad Development',
    description: 'Continued Lions Rugby U19/U21 Squad membership',
    icon: Users,
    color: 'from-yellow-500 to-orange-500',
    location: 'Johannesburg, South Africa',
    details: [
      'Lions Rugby U19/U21 Squad Member',
      'Elite provincial development',
      'Professional rugby preparation',
      'International pathway development',
      'Consistent elite level performance'
    ],
    achievement: 'Elite squad consistency'
  },
  {
    id: 7,
    year: '2025',
    title: 'International Championship Success',
    description: 'Wits Young Guns Captain & Portugal Senior Sevens HSBC Winner',
    icon: Crown,
    color: 'from-red-500 to-pink-500',
    location: 'Johannesburg & Cape Town, South Africa',
    details: [
      'Wits Young Guns – Varsity Cup / Young Guns Cup Winners (Captain)',
      'Portugal Senior Sevens – HSBC Sevens Challenger Series Winner',
      'International championship achieved',
      'University captaincy success',
      'Dual championship victories'
    ],
    achievement: 'International champion status'
  }
]

const achievements = [
  {
    id: 1,
    title: 'International Champion',
    description: 'Portugal Senior Sevens team member who claimed victory at the HSBC Sevens Challenger Series in Cape Town 2025, representing the pinnacle of international rugby sevens competition.',
    icon: '🏆',
    stats: { competitions: 1, wins: 1, level: 'International' }
  },
  {
    id: 2,
    title: 'University Champions',
    description: 'Captain of Wits University Young Guns championship team, leading the squad to victory while maintaining academic excellence at university level.',
    icon: '🎓',
    stats: { titles: 1, captaincy: 'Yes', year: '2025' }
  },
  {
    id: 3,
    title: 'Provincial Elite Squad',
    description: 'Selected for Lions U19/U21 squads, competing at the highest level of South African provincial rugby with consistent development and leadership demonstration.',
    icon: '🦁',
    stats: { seasons: 2, level: 'Provincial Elite', progress: '85%' }
  },
  {
    id: 4,
    title: 'Consistent Leadership',
    description: 'From U13 Craven Week to international level, demonstrated natural leadership with 8+ captaincies across 6 years of elite rugby competition.',
    icon: '⭐',
    stats: { captaincies: '8+', years: 6, progression: 'U13 to International' }
  }
]

const representativeHonours = [
  {
    year: '2019',
    honours: [
      { team: 'Limpopo Blue Bulls U13 Craven Week', role: 'Captain' },
      { team: 'Limpopo 7s', role: 'Captain' }
    ]
  },
  {
    year: '2020–2021',
    honours: [
      { team: 'Grey College U14A & U15A', role: 'Captain (2021)' },
      { team: 'U15 Player of the Year', role: 'Individual Award' }
    ]
  },
  {
    year: '2022',
    honours: [
      { team: 'Grey College U16A', role: 'Captain & Player of the Year' },
      { team: 'Free State Grant Khomo', role: 'Captain' },
      { team: 'Free State U17 IPT 7s', role: 'Player' },
      { team: 'World Schools Tournament', role: 'Thailand Representative' }
    ]
  },
  {
    year: '2023',
    honours: [
      { team: 'Grey College 2nd & 1st Teams', role: 'Player' },
      { team: 'Free State U17 IPT 7s', role: 'Captain' },
      { team: 'Rhino Week', role: 'Captain' }
    ]
  },
  {
    year: '2024',
    honours: [
      { team: 'Grey College First Team', role: 'Player' }
    ]
  },
  {
    year: '2024–2025',
    honours: [
      { team: 'Lions Rugby U19/U21 Squad', role: 'Member' }
    ]
  },
  {
    year: '2025',
    honours: [
      { team: 'Wits Young Guns', role: 'Captain & Champions' },
      { team: 'Portugal Senior Sevens', role: 'HSBC Series Winner' }
    ]
  }
]

const values = [
  {
    id: 1,
    title: 'Elite Dedication',
    description: 'Obsession beats talent when talent doesn\'t work hard - a philosophy that drives every training session and match preparation.',
    gradient: 'from-primary to-accent'
  },
  {
    id: 2,
    title: 'Championship Leadership',
    description: 'Natural leader who inspires teams to achieve beyond their perceived limits through example and tactical awareness.',
    gradient: 'from-accent to-secondary'
  },
  {
    id: 3,
    title: 'International Excellence',
    description: 'Competing at the highest levels with Portugal Senior Sevens, representing dual heritage with pride and distinction.',
    gradient: 'from-secondary to-primary'
  },
  {
    id: 4,
    title: 'Continuous Growth',
    description: 'Six-year journey from provincial U13 captain to international champion, always seeking the next level of excellence.',
    gradient: 'from-primary to-secondary'
  }
]

export function RugbyTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [currentAchievement, setCurrentAchievement] = useState(0)
  const [selectedYear, setSelectedYear] = useState<string | null>(null)

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length)
  }

  const prevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  return (
    <section id="rugby-timeline" className="section-padding bg-gradient-to-br from-background via-background/95 to-background relative overflow-hidden">
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
          <div className="status-elite mb-6">Championship Timeline</div>
          <h2 className="text-responsive-lg gradient-text mb-6">
            Representative Honours & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive timeline of rugby achievements, captaincies, and representative honours from U13 provincial level to international championship success
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
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-16 md:pl-0`}>
                    <motion.div
                      className="card-elite p-8 hover-lift cursor-pointer group"
                      onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Event Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-sm`}>
                          {event.year}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin size={16} />
                          {event.location}
                        </div>
                      </div>

                      <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Achievement Badge */}
                      <div className="status-champion mb-4">
                        {event.achievement}
                      </div>

                      {/* Expandable Details */}
                      <AnimatePresence>
                        {selectedEvent === event.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 pt-6 border-t border-border/50"
                          >
                            <h5 className="font-semibold mb-4 text-primary">Key Achievements:</h5>
                            <ul className="space-y-2">
                              {event.details.map((detail, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-3 text-sm text-muted-foreground"
                                >
                                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  {detail}
                                </motion.li>
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

        {/* Representative Honours Grid */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-responsive-md text-center mb-12 text-elite">Representative Honours</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {representativeHonours.map((yearData, index) => (
              <motion.div
                key={yearData.year}
                className="card-elite p-6 hover-lift cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedYear(selectedYear === yearData.year ? null : yearData.year)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold gradient-text mb-2">{yearData.year}</div>
                  <div className="text-sm text-muted-foreground">Representative Honours</div>
                </div>
                
                <div className="space-y-3">
                  {yearData.honours.slice(0, 2).map((honour, i) => (
                    <div key={i} className="text-sm">
                      <div className="font-semibold text-primary">{honour.team}</div>
                      <div className="text-muted-foreground">{honour.role}</div>
                    </div>
                  ))}
                  
                  {yearData.honours.length > 2 && (
                    <div className="text-xs text-muted-foreground">
                      +{yearData.honours.length - 2} more honours
                    </div>
                  )}
                </div>

                {/* Expandable Details */}
                <AnimatePresence>
                  {selectedYear === yearData.year && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-border/30"
                    >
                      <div className="space-y-2">
                        {yearData.honours.map((honour, i) => (
                          <div key={i} className="text-xs">
                            <div className="font-semibold text-primary">{honour.team}</div>
                            <div className="text-muted-foreground">{honour.role}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Elite Achievements Carousel */}
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
                  
                  {/* Achievement Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {Object.entries(achievements[currentAchievement].stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-xl font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{key}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                className="glass p-3 rounded-full hover:border-primary/50 transition-colors"
                onClick={prevAchievement}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              
              <div className="flex gap-2">
                {achievements.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentAchievement
                        ? 'bg-primary'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    onClick={() => setCurrentAchievement(index)}
                  />
                ))}
              </div>
              
              <motion.button
                className="glass p-3 rounded-full hover:border-primary/50 transition-colors"
                onClick={nextAchievement}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Championship Values */}
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