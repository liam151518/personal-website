'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { DemoOne } from '@/components/ui/infinite-menu-demo'

export function InspirationPreview() {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Inspiration Galaxy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive 3D exploration of Liam's rugby journey and achievements
          </p>
        </motion.div>

        {/* Infinite Menu Container */}
        <div className="relative h-[600px] flex items-center justify-center">
          <DemoOne />
        </div>

        {/* Interaction Guide */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Drag to rotate • Click items to explore • Interactive 3D experience
          </p>
        </motion.div>
      </div>
    </section>
  )
} 