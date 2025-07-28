'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PhotoGallery } from '@/components/ui/gallery'

export function HighlightsSection() {
  return (
    <section id="highlights" className="section-padding relative overflow-hidden py-32">
      <div className="container-elite relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="status-elite mb-6">Life's Moments</div>
          <h2 className="text-responsive-lg gradient-text mb-6">
            Life Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Capturing the most memorable moments from the past and still going
          </p>
          <div className="flex items-center justify-center mt-8">
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PhotoGallery animationDelay={0.3} />
        </motion.div>


      </div>
    </section>
  )
} 