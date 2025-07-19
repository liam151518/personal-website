'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Target, Users, Calendar, TrendingUp, Award, Star, BarChart3, Activity, Flag } from 'lucide-react'

const statCategories = [
  { id: 'career', label: 'Career Overview', icon: Trophy },
  { id: 'performance', label: 'Performance', icon: TrendingUp },
  { id: 'leadership', label: 'Leadership', icon: Users },
  { id: 'achievements', label: 'Achievements', icon: Award }
]

const rugbyStats = {
  career: [
    { 
      label: 'Years Playing', 
      value: '6+', 
      description: 'From U13 to International level',
      trend: '+15% year-over-year improvement',
      icon: Calendar
    },
    { 
      label: 'Positions', 
      value: '#6', 
      description: 'Loose Forward specialization',
      trend: 'Primary position mastery',
      icon: Target
    },
    { 
      label: 'Teams Represented', 
      value: '8+', 
      description: 'From school to international',
      trend: 'Consistent progression',
      icon: Flag
    },
    { 
      label: 'Current Level', 
      value: 'Elite', 
      description: 'International & Provincial',
      trend: 'Peak performance level',
      icon: Star
    }
  ],
  performance: [
    { 
      label: 'Match Win Rate', 
      value: '78%', 
      description: 'Across all competitions',
      trend: '+12% improvement in 2024',
      icon: TrendingUp
    },
    { 
      label: 'Leadership Success', 
      value: '85%', 
      description: 'Win rate as captain',
      trend: 'Consistent championship results',
      icon: BarChart3
    },
    { 
      label: 'Tournament Success', 
      value: '92%', 
      description: 'Major tournament completion',
      trend: 'Elite tournament performer',
      icon: Activity
    },
    { 
      label: 'Development Rate', 
      value: '95%', 
      description: 'Skills progression annually',
      trend: 'Rapid elite development',
      icon: Target
    }
  ],
  leadership: [
    { 
      label: 'Captaincies', 
      value: '8+', 
      description: 'From U13 to International prep',
      trend: 'Natural leadership progression',
      icon: Users
    },
    { 
      label: 'Team Championships', 
      value: '3', 
      description: 'As captain across levels',
      trend: 'Championship leadership',
      icon: Trophy
    },
    { 
      label: 'Squad Selection Rate', 
      value: '100%', 
      description: 'Consistent elite selection',
      trend: 'Never dropped from squad',
      icon: Star
    },
    { 
      label: 'Mentorship Impact', 
      value: '25+', 
      description: 'Players mentored & developed',
      trend: 'Leadership by example',
      icon: Users
    }
  ],
  achievements: [
    { 
      label: 'International Titles', 
      value: '1', 
      description: 'HSBC Sevens Challenger Series',
      trend: 'Championship victory 2025',
      icon: Trophy
    },
    { 
      label: 'Provincial Selections', 
      value: '4', 
      description: 'Lions U19/U21 & Free State',
      trend: 'Elite provincial recognition',
      icon: Award
    },
    { 
      label: 'University Titles', 
      value: '1', 
      description: 'Wits Young Guns Champions',
      trend: 'Captain-led championship',
      icon: Star
    },
    { 
      label: 'Individual Awards', 
      value: '3', 
      description: 'Player of Year & Captain awards',
      trend: 'Individual excellence recognition',
      icon: Award
    }
  ]
}

const milestones = [
  {
    year: '2019',
    title: 'U13 Foundation',
    description: 'First captain role at provincial level',
    value: '1st',
    metric: 'Captaincy'
  },
  {
    year: '2022',
    title: 'School Excellence',
    description: 'Player of the Year at Grey College',
    value: 'Top',
    metric: 'Player'
  },
  {
    year: '2024',
    title: 'Elite Selection',
    description: 'Lions U19/U21 squad member',
    value: 'Elite',
    metric: 'Level'
  },
  {
    year: '2025',
    title: 'International Champion',
    description: 'HSBC Sevens Challenger Series Winner',
    value: '1st',
    metric: 'International'
  }
]

const progressionData = [
  { level: 'U13 Provincial', year: '2019', progress: 15 },
  { level: 'School Elite', year: '2020-2023', progress: 45 },
  { level: 'Provincial Elite', year: '2024', progress: 75 },
  { level: 'International', year: '2025', progress: 100 }
]

export function RugbyStats() {
  const [selectedCategory, setSelectedCategory] = useState('career')
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  const currentStats = rugbyStats[selectedCategory as keyof typeof rugbyStats]

  return (
    <section id="rugby-stats" className="section-padding bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-primary/3 to-accent/3 blur-3xl floating" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-gradient-to-r from-accent/4 to-primary/4 blur-2xl" style={{ animationDelay: '2s' }} />
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
          <div className="status-elite mb-6">Performance Analytics</div>
          <h2 className="text-responsive-lg gradient-text mb-6">
            Elite Rugby Statistics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive performance metrics and statistics showcasing six years of elite rugby development and championship success
          </p>
          <div className="flex items-center justify-center mt-8">
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {statCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`glass px-6 py-4 rounded-xl font-semibold transition-all magnetic focus-elite flex items-center gap-3 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-championship'
                  : 'hover:border-primary/50'
              }`}
            >
              <category.icon size={20} />
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {currentStats.map((stat, index) => (
              <motion.div
                key={index}
                className="card-elite p-6 hover-lift group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                whileHover={{ scale: 1.05 }}
              >
                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="status-elite text-xs">
                    Elite
                  </div>
                </div>

                {/* Value */}
                <div className="mb-3">
                  <motion.div
                    className="text-4xl font-black gradient-text mb-1"
                    animate={{ scale: hoveredStat === index ? 1.1 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {stat.description}
                </p>

                {/* Trend */}
                <div className="flex items-center gap-2 text-xs">
                  <TrendingUp size={12} className="text-green-500" />
                  <span className="text-green-500 font-medium">{stat.trend}</span>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0"
                  animate={{ opacity: hoveredStat === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Progression Chart */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-responsive-md text-center mb-12 text-elite">Career Progression</h3>
          
          <div className="glass-strong p-8 rounded-2xl">
            <div className="space-y-6">
              {progressionData.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent" />
                      <span className="font-semibold">{item.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                      <span className="text-sm font-bold text-primary">{item.progress}%</span>
                    </div>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Career Milestones */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-responsive-md text-center mb-12 text-elite">Career Milestones</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card-elite p-6 hover-lift">
                  <div className="mb-4">
                    <div className="text-3xl font-black gradient-text mb-1">{milestone.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{milestone.metric}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-primary">{milestone.year}</div>
                    <div className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {milestone.title}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Summary */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass-strong p-8 rounded-2xl max-w-4xl mx-auto">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold gradient-text mb-6">
              Elite Performance Summary
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-black gradient-text mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Years Elite</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black gradient-text mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Captaincies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black gradient-text mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Win Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black gradient-text mb-2">1</div>
                <div className="text-sm text-muted-foreground">Int'l Title</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Elite Level</div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              Consistent elite performance across six years of rugby, from provincial U13 captain to international champion, 
              with exceptional leadership statistics and championship success rate.
            </p>
            
            <button className="btn-primary magnetic shadow-championship">
              Download Full Statistics Report
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 