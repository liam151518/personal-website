'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaYoutube, FaXTwitter, FaSpotify, FaReact } from 'react-icons/fa6'
import FancyButton from '@/components/ui/shiny-button'

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Social Media Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <FancyButton 
                icon={<FaReact size={28} />} 
                variant="default" 
                ariaLabel="React Portfolio"
                onClick={() => window.open('https://react.dev', '_blank')}
              />
              <FancyButton 
                icon={<FaSpotify size={28} className="text-green-500" />} 
                variant="green" 
                ariaLabel="Spotify Profile"
                onClick={() => window.open('https://open.spotify.com', '_blank')}
              />
              <FancyButton 
                icon={<FaXTwitter size={28} className="text-indigo-500" />} 
                variant="indigo" 
                ariaLabel="X (Twitter) Profile"
                onClick={() => window.open('https://x.com/santos_liam_?s=21', '_blank')}
              />
              <FancyButton 
                icon={<FaYoutube size={28} className="text-red-500" />} 
                variant="red" 
                ariaLabel="YouTube Channel"
                onClick={() => window.open('https://youtube.com', '_blank')}
              />
            </div>
          </motion.div>

          {/* Footer Text */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Portfolio. All rights reserved by LXS.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 