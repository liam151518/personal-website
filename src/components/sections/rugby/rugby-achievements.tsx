'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Trophy, Calendar, Users, Award, Clock, ChevronRight, Target, Star, Flag, Crown, Zap, MapPin } from 'lucide-react'

const timelineOverview = [
  {
    year: '2019',
    title: 'Foundation',
    description: 'Limpopo Blue Bulls U13 Captain',
    achievement: 'First provincial captaincy'
  },
  {
    year: '2020-2021',
    title: 'School Excellence',
    description: 'Grey College U14A & U15A',
    achievement: 'U15A Captain & Player of the Year'
  },
  {
    year: '2022',
    title: 'Dual Leadership',
    description: 'Grey College U16A & Free State, Thailand International Schools Championship Runner-up',
    achievement: 'Captain & Player of the Year, International tournament'
  },
  {
    year: '2023',
    title: 'Provincial Success',
    description: 'Grey College First Team',
    achievement: 'Free State U17 IPT 7s Captain'
  },
  {
    year: '2024',
    title: 'Elite Selection',
    description: 'Grey College First Team & Craven Week U18 Free State',
    achievement: 'Elite school rugby & provincial representation'
  },
  {
    year: '2025',
    title: 'International Champion',
    description: 'HSBC Sevens Series Winner, Portugal Senior Sevens, Lions U19 & Wits Young Guns Winner',
    achievement: 'International title & multiple championships'
  }
]

const rugbyCategories = [
  { id: 'international', title: 'International', color: 'from-yellow-500 to-orange-500', count: 1 },
  { id: 'provincial', title: 'Provincial', color: 'from-orange-500 to-red-500', count: 4 },
  { id: 'university', title: 'University', color: 'from-blue-500 to-indigo-500', count: 1 },
  { id: 'school', title: 'School', color: 'from-green-500 to-emerald-500', count: 6 }
]

const rugbyProjects = {
  international: [
    {
      id: 1,
      title: 'Portugal Senior Sevens',
      description: 'International rugby sevens representing Portugal in HSBC World Rugby Sevens Challenger Series',
      progress: 100,
      priority: 'Elite',
      tags: ['International Rugby', 'Sevens', 'HSBC Series', 'Champion'],
      dueDate: 'Complete 2025',
      team: 12,
      status: 'Champion',
      mission: 'HSBC Sevens Challenger Series Champions - Cape Town 2025',
      achievements: [
        'HSBC Sevens Challenger Series Winner (Cape Town 2025)',
        'Portugal Senior Squad selection',
        'International debut and championship',
        'Elite sevens rugby mastery'
      ]
    }
  ],
  provincial: [
    {
      id: 2,
      title: 'Lions Rugby U19/U21',
      description: 'Elite provincial rugby development program competing at the highest level of South African youth rugby',
      progress: 85,
      priority: 'Elite',
      tags: ['Provincial Rugby', 'Elite Development', 'Loose Forward', 'Leadership'],
      dueDate: 'June 2025',
      team: 35,
      status: 'Development',
      mission: 'Developing into professional rugby through elite provincial pathways',
      achievements: [
        'Lions U19 Squad selection',
        'Lions U21 Squad progression',
        'Elite provincial development',
        'Professional pathway established'
      ]
    },
    {
      id: 3,
      title: 'Free State U17 IPT 7s',
      description: 'Captain of Free State U17 IPT 7s representing provincial excellence',
      progress: 100,
      priority: 'High',
      tags: ['Provincial U17', 'Captain', 'IPT 7s', 'Free State'],
      dueDate: 'Complete 2023',
      team: 15,
      status: 'Complete',
      mission: 'Provincial captaincy and elite U17 development',
      achievements: [
        'Free State U17 IPT 7s Captain',
        'Provincial representation',
        'Elite U17 development',
        'Sevens rugby expertise'
      ]
    },
    {
      id: 4,
      title: 'Free State Grant Khomo',
      description: 'Captain of Free State Grant Khomo team representing provincial excellence',
      progress: 100,
      priority: 'High',
      tags: ['Provincial U16', 'Captain', 'Grant Khomo', 'Free State'],
      dueDate: 'Complete 2022',
      team: 20,
      status: 'Complete',
      mission: 'Provincial captaincy and elite U16 development',
      achievements: [
        'Free State Grant Khomo Captain',
        'Provincial representation',
        'Elite U16 development',
        'Leadership at provincial level'
      ]
    },
    {
      id: 5,
      title: 'Limpopo Blue Bulls U13',
      description: 'Early leadership foundation as captain at Craven Week',
      progress: 100,
      priority: 'Foundation',
      tags: ['U13 Rugby', 'Captain', 'Craven Week', 'Early Leadership'],
      dueDate: 'Complete 2019',
      team: 20,
      status: 'Complete',
      mission: 'First captaincy and leadership foundation at elite level',
      achievements: [
        'Limpopo Blue Bulls U13 Captain',
        'Craven Week participation',
        'Early leadership demonstration',
        'Foundation of rugby journey'
      ]
    }
  ],
  university: [
    {
      id: 6,
      title: 'Wits University Rugby',
      description: 'Captain of Wits University Young Guns and First Team, leading the varsity rugby program',
      progress: 100,
      priority: 'Elite',
      tags: ['University Rugby', 'Captain', 'Young Guns', 'Varsity Cup', 'Champions'],
      dueDate: 'Complete 2025',
      team: 30,
      status: 'Champion',
      mission: 'Young Guns Cup Champions 2025 - Leadership and championship success',
      achievements: [
        'Wits Young Guns Captain',
        'Young Guns Cup Champions 2025',
        'Wits First Team leadership',
        'Varsity Cup elite competition'
      ]
    }
  ],
  school: [
    {
      id: 7,
      title: 'Grey College First Team',
      description: 'Captain and elite player at South Africa\'s premier rugby school',
      progress: 100,
      priority: 'High',
      tags: ['School Rugby', 'Captain', 'First Team', 'Elite School'],
      dueDate: 'Complete 2024',
      team: 25,
      status: 'Complete',
      mission: 'Elite school rugby leadership and excellence',
      achievements: [
        'Grey College First Team',
        'Elite school rugby leadership',
        'Premier rugby school excellence',
        'Foundation for professional rugby'
      ]
    },
    {
      id: 8,
      title: 'Grey College U16A',
      description: 'Captain and Player of the Year at Grey College U16A',
      progress: 100,
      priority: 'High',
      tags: ['School Rugby', 'Captain', 'Player of the Year', 'U16A'],
      dueDate: 'Complete 2022',
      team: 25,
      status: 'Complete',
      mission: 'Dual captaincy and Player of the Year recognition',
      achievements: [
        'Grey College U16A Captain',
        'U16A Player of the Year',
        'Dual leadership recognition',
        'Elite school rugby excellence'
      ]
    },
    {
      id: 9,
      title: 'Grey College U15A',
      description: 'Captain and Player of the Year at Grey College U15A',
      progress: 100,
      priority: 'High',
      tags: ['School Rugby', 'Captain', 'Player of the Year', 'U15A'],
      dueDate: 'Complete 2021',
      team: 25,
      status: 'Complete',
      mission: 'Early leadership and Player of the Year recognition',
      achievements: [
        'Grey College U15A Captain',
        'U15A Player of the Year',
        'Early leadership recognition',
        'School rugby excellence'
      ]
    },
    {
      id: 10,
      title: 'Grey College U14A',
      description: 'Elite player at Grey College U14A level',
      progress: 100,
      priority: 'High',
      tags: ['School Rugby', 'U14A', 'Elite Development'],
      dueDate: 'Complete 2020',
      team: 25,
      status: 'Complete',
      mission: 'Elite school rugby development',
      achievements: [
        'Grey College U14A',
        'Elite school rugby development',
        'Foundation for leadership',
        'Premier rugby school experience'
      ]
    },
    {
      id: 11,
      title: 'World Schools Tournament',
      description: 'Represented Grey College at international school rugby tournament in Thailand',
      progress: 100,
      priority: 'High',
      tags: ['International Schools', 'Thailand', 'World Tournament'],
      dueDate: 'Complete 2022',
      team: 25,
      status: 'Complete',
      mission: 'International school rugby representation',
      achievements: [
        'World Schools Tournament (Thailand)',
        'International school rugby experience',
        'Global rugby exposure',
        'Elite school competition'
      ]
    },
    {
      id: 12,
      title: 'Limpopo 7s',
      description: 'Captain of Limpopo 7s team at early age',
      progress: 100,
      priority: 'Foundation',
      tags: ['Sevens Rugby', 'Captain', 'Limpopo', 'Early Leadership'],
      dueDate: 'Complete 2019',
      team: 12,
      status: 'Complete',
      mission: 'Early sevens rugby captaincy',
      achievements: [
        'Limpopo 7s Captain',
        'Early sevens rugby experience',
        'Leadership at young age',
        'Sevens rugby foundation'
      ]
    }
  ]
}

const individualAwards = [
  {
    year: '2022',
    award: 'Grey College U16A Player of the Year',
    category: 'School Excellence',
    description: 'Recognition as the outstanding player at U16A level'
  },
  {
    year: '2021',
    award: 'Grey College U15A Player of the Year',
    category: 'School Excellence',
    description: 'Recognition as the outstanding player at U15A level'
  },
  {
    year: '2022',
    award: 'Dual Captaincy Recognition',
    category: 'Leadership',
    description: 'Captain of both Grey College U16A and Free State Grant Khomo'
  },
  {
    year: '2025',
    award: 'International Championship',
    category: 'International Success',
    description: 'HSBC Sevens Challenger Series Winner with Portugal'
  }
]

export function RugbyAchievements() {

  return (
    <section id="rugby-achievements" className="section-padding relative overflow-hidden">
      {/* Championship Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl animate-championship" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 blur-2xl floating" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-accent/5 to-primary/5 blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-elite relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="status-champion mb-6">Elite Rugby Portfolio</div>
          <h2 className="text-responsive-lg gradient-text mb-6">
            Championship Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Six-year elite rugby journey from U13 provincial captain to international champion, with consistent leadership and championship success across all levels
          </p>
          <div className="flex items-center justify-center mt-8">
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
          </div>
        </motion.div>

        {/* Timeline Overview */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-responsive-md text-center mb-12 text-elite">Career Timeline</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 rounded-full" />
            
            <div className="space-y-8">
              {timelineOverview.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 w-6 h-6 transform -translate-x-1/2 -translate-y-3">
                    <motion.div
                      className="w-full h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-elite flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Trophy size={12} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Event Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-16 md:pl-0`}>
                    <motion.div
                      className="glass p-6 hover-lift"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-sm">
                          {item.year}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.achievement}
                        </div>
                      </div>

                      <h4 className="text-xl font-bold mb-2 text-primary">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


        {/* Individual Awards Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-responsive-md text-center mb-12 text-elite">Individual Awards & Recognition</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualAwards.map((award, index) => (
              <motion.div
                key={award.year + award.award}
                className="glass p-6 hover-lift text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Award size={24} className="text-white" />
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="text-sm font-bold text-primary mb-1">{award.year}</div>
                  <div className="text-lg font-semibold mb-2">{award.award}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{award.category}</div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
} 