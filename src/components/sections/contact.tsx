'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function ContactSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Interactive contact portal coming soon...
          </p>
          <div className="brutalist-card p-8">
            <p>This will feature the interactive contact portal with dynamic forms and engagement features.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 