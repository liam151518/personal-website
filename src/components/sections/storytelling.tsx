'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Flame } from 'lucide-react'
import { RugbyTimeline } from './rugby-timeline'
import { HighlightsSection } from './highlights'

const values = [
  {
    id: 1,
    title: 'Christianity',
    description: 'I believe that God has called me to pursue success in life to provide the best for my family and myself and I recognize that every blessing comes from Him. In that success lies my true duty, to share His Word and demonstrate that, as an ordinary person, anyone who trusts in God can achieve their goals.',
    gradient: 'from-orange-400 to-red-500',
    symbol: '✝'
  },
  {
    id: 2,
    title: 'Actions Speak Louder Than Words',
    description: '"True character reveals itself not in idle promises, but in the weight of what we accomplish. We are measured by the marks we leave on the world by the concrete steps we take and the burdens we bear. Speak boldly, but build even more boldly. Let your actions stand as living proof of your values, for it is through what you do that you are truly remembered."',
    gradient: 'from-blue-400 to-purple-500',
    icon: Target
  },
  {
    id: 3,
    title: 'Obsession Beats Talent',
    description: '"Talent may give you a head start, but it\'s relentless drive that propels you to the summit. To claim a place in the top one percent, you must embrace the grind with unwavering passion and tireless effort what some call obsession is simply the price of greatness. It\'s not enough to be gifted. You must outwork, outlast, and outthink everyone else."',
    gradient: 'from-green-400 to-blue-500',
    icon: Flame
  }
]

export function StorytellingSection() {
  return (
    <section id="story" className="section-padding relative overflow-hidden py-16 sm:py-32">
      <div className="container-elite relative">
        {/* Rugby Timeline */}
        <div className="mb-24">
          <RugbyTimeline />
        </div>

        {/* Highlights Section */}
        <div className="mb-24">
          <HighlightsSection />
        </div>

        {/* Values Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-responsive-md text-center mb-12 text-elite">My Values</h3>
          
          <div className="grid-elite">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                className="card-elite p-6 text-center group relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1, 
                  ease: "easeOut"
                }}
              >
                {/* Enhanced background with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-18 h-18 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${value.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 ease-out`}>
                    {value.symbol ? (
                      <span className="text-3xl text-white font-bold">{value.symbol}</span>
                    ) : value.icon ? (
                      <value.icon className="w-9 h-9 text-white" />
                    ) : (
                      <div className="w-9 h-9 bg-white/20 rounded-xl backdrop-blur-sm" />
                    )}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-all duration-300 ease-out">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/90 transition-all duration-300 ease-out">
                    {value.description}
                  </p>
                </div>

                {/* Subtle hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 