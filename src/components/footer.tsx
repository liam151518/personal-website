'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-muted-foreground">
            Crafted with passion and cutting-edge technology
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Portfolio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 