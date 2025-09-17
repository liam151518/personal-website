'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Building2, Users } from 'lucide-react'

const professionalReferences = [
  {
    name: 'Mziwakhe Nkosi',
    role: 'Lions Rugby U21 & Currie Cup Head Coach',
    company: 'Lions Rugby Union',
    location: 'Johannesburg, South Africa',
    contact: 'Available upon request'
  },
  {
    name: 'Foxy Ntleki',
    role: 'Lions U19 Head Coach & Head Coach, Wits Young Guns',
    company: 'Lions Rugby Union & Wits University',
    location: 'Johannesburg, South Africa',
    contact: 'Available upon request'
  },
  {
    name: 'Jannie Geldenhuys',
    role: 'Grey College First-Team Coach',
    company: 'Grey College',
    location: 'Bloemfontein, South Africa',
    contact: 'Available upon request'
  },
  {
    name: 'Tiaan Liebenberg',
    role: 'Former Springbok Player & Current Cheetahs Forwards Coach',
    company: 'Cheetahs Rugby',
    location: 'Bloemfontein, South Africa',
    contact: 'Available upon request'
  }
]

export function RugbyTestimonials() {
  return (
    <section id="rugby-testimonials" className="section-padding relative overflow-hidden">
      {/* Championship Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl animate-championship" />
        <div className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-3xl animate-championship-reverse" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-2xl animate-pulse" />
      </div>

      <div className="container-elite">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="status-champion mb-6">Elite Rugby Coaches</div>
          <h2 className="text-responsive-xl gradient-text-enhanced mb-6">
            Professional References
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Please contact me to request detailed coach references and contact information
          </p>
          <div className="flex items-center justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
          </div>
        </motion.div>

        {/* Professional References Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {professionalReferences.map((reference, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="glass w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-lg gradient-text mb-1">
                    {reference.name}
                  </h4>
                  <p className="text-primary font-medium text-sm mb-2">
                    {reference.role}
                  </p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{reference.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{reference.location}</span>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-primary font-medium">
                    {reference.contact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}