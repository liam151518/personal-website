'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Trophy, Calendar, Users, Award, Clock, ChevronRight, Target, Star, Flag } from 'lucide-react'

const rugbyCategories = [
  { id: 'international', title: 'International', color: 'from-yellow-500 to-orange-500', count: 1 },
  { id: 'provincial', title: 'Provincial', color: 'from-orange-500 to-red-500', count: 1 },
  { id: 'university', title: 'University', color: 'from-blue-500 to-indigo-500', count: 1 },
  { id: 'school', title: 'School', color: 'from-green-500 to-emerald-500', count: 3 }
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
      dueDate: 'Ongoing',
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
    }
  ],
  university: [
    {
      id: 3,
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
      id: 4,
      title: 'Grey College First Team',
      description: 'Captain and elite player at South Africa\'s premier rugby school',
      progress: 100,
      priority: 'High',
      tags: ['School Rugby', 'Captain', 'First Team', 'Elite School'],
      dueDate: 'Complete 2023',
      team: 25,
      status: 'Complete',
      mission: 'Elite school rugby leadership and excellence',
      achievements: [
        'Grey College First Team Captain',
        'Player of the Year recognition',
        'World Schools Tournament participation',
        'Elite school rugby leadership'
      ]
    },
    {
      id: 5,
      title: 'Free State Provincial U17',
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
      id: 6,
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
  ]
}

export function RugbyAchievements() {
  const [selectedCategory, setSelectedCategory] = useState('international')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Elite': return 'from-yellow-500 to-orange-500'
      case 'High': return 'from-orange-500 to-red-500'
      case 'Foundation': return 'from-blue-500 to-indigo-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Champion': return <Trophy className="w-4 h-4" />
      case 'Development': return <Clock className="w-4 h-4" />
      case 'Complete': return <Award className="w-4 h-4" />
      default: return <Target className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Champion': return 'from-yellow-500 to-orange-500'
      case 'Development': return 'from-blue-500 to-indigo-500'
      case 'Complete': return 'from-green-500 to-emerald-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const currentProjects = rugbyProjects[selectedCategory as keyof typeof rugbyProjects] || []

  return (
    <section id="rugby-achievements" className="section-padding bg-gradient-to-br from-background to-background/90 relative overflow-hidden">
      {/* Elite Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-primary/3 to-accent/3 blur-3xl floating" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-gradient-to-r from-accent/4 to-primary/4 blur-2xl" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-primary/2 to-accent/2 blur-3xl" style={{ animationDelay: '1.5s' }} />
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
          <div className="status-elite mb-6">Elite Rugby Portfolio</div>
          <h2 className="text-responsive-lg gradient-text mb-6">
            Championship Progression
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Six-year elite rugby journey from U13 provincial captain to international champion, with consistent leadership and championship success across all levels
          </p>
          <div className="flex items-center justify-center mt-8">
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {rugbyCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`glass px-6 py-3 rounded-full font-semibold transition-all magnetic focus-elite flex items-center gap-3 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-championship'
                  : 'hover:border-primary/50'
              }`}
            >
              <span>{category.title}</span>
              <div className={`px-2 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-xs font-bold`}>
                {category.count}
              </div>
            </button>
          ))}
        </motion.div>

        {/* Rugby Achievements Grid */}
        <motion.div
          className="grid-elite gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card-elite p-8 hover-lift group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Elite Status Indicator */}
              <div className="absolute top-4 right-4">
                <div className={`status-champion text-xs flex items-center gap-1`}>
                  {getStatusIcon(project.status)}
                  <span>{project.status}</span>
                </div>
              </div>

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getPriorityColor(project.priority)}`} />
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {project.priority} Level
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Progress & Stats */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold">Progress</span>
                  <span className="text-sm font-bold text-primary">{project.progress}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar size={16} className="text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground">Timeline</div>
                  <div className="font-semibold text-sm">{project.dueDate}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users size={16} className="text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground">Squad Size</div>
                  <div className="font-semibold text-sm">{project.team}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Flag size={16} className="text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground">Level</div>
                  <div className="font-semibold text-sm">{selectedCategory}</div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="glass p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-sm mb-2 text-primary">Mission</h4>
                <p className="text-sm text-muted-foreground">{project.mission}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expandable Achievements */}
              <AnimatePresence>
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border/50 pt-6"
                  >
                    <h5 className="font-semibold mb-4 text-primary">Key Achievements:</h5>
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 text-sm"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* View Details Indicator */}
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <span className="text-xs text-muted-foreground">
                  {selectedProject === project.id ? 'Click to collapse' : 'Click for details'}
                </span>
                <motion.div
                  animate={{ rotate: selectedProject === project.id ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight size={16} className="text-muted-foreground" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-strong p-8 rounded-2xl max-w-2xl mx-auto">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Elite Rugby Journey Continues
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              From U13 provincial captain to international champion, the pursuit of rugby excellence continues 
              at the highest levels of the sport with Lions U19 and Portugal Senior Sevens.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">6+</div>
                <div className="text-sm text-muted-foreground">Years Elite Rugby</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">8+</div>
                <div className="text-sm text-muted-foreground">Captaincies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">1</div>
                <div className="text-sm text-muted-foreground">International Title</div>
              </div>
            </div>
            <button className="btn-primary magnetic shadow-championship">
              Contact for Opportunities
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 