'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Quote, Camera, Lightbulb, Heart, Star, Coffee, Code, Palette, Music, BookOpen } from 'lucide-react'

const inspirationClusters = [
  {
    id: 'faith-journey',
    title: 'Faith Journey',
    icon: Heart,
    color: 'from-blue-500 to-cyan-500',
    size: 'large',
    position: { x: 0, y: 0 },
    items: [
      {
        id: 1,
        type: 'verse',
        content: '"I can do all things through Christ who strengthens me."',
        author: 'Philippians 4:13',
        tags: ['strength', 'faith', 'perseverance']
      },
      {
        id: 2,
        type: 'reflection', 
        content: 'Every challenge is an opportunity to grow closer to God and stronger in character.',
        author: 'Liam Xander Santos',
        tags: ['growth', 'character', 'resilience']
      },
      {
        id: 3,
        type: 'mission',
        content: 'Using business as a platform to spread hope and inspire others in their faith walk.',
        author: 'OBT Mission',
        tags: ['purpose', 'inspiration', 'ministry']
      }
    ]
  },
  {
    id: 'training-wisdom',
    title: 'Training Wisdom',
    icon: Star,
    color: 'from-yellow-500 to-orange-500',
    size: 'medium',
    position: { x: 200, y: -100 },
    items: [
      {
        id: 4,
        type: 'philosophy',
        content: 'From U13 Craven Week to international rugby - obsession beats talent when talent doesn\'t work hard.',
        date: '2024-01-15',
        tags: ['dedication', 'progression', 'international']
      },
      {
        id: 5,
        type: 'lesson',
        content: 'Leading Portugal to Sevens Challenger Series victory taught me pressure is privilege.',
        date: '2025-01-10',
        tags: ['pressure', 'international', 'victory']
      }
    ]
  },
  {
    id: 'rugby-moments',
    title: 'Rugby Moments',
    icon: Camera,
    color: 'from-purple-500 to-pink-500',
    size: 'medium',
    position: { x: -180, y: 120 },
    items: [
      {
        id: 6,
        type: 'breakthrough',
        content: 'First time putting on the Portugal jersey - representing my heritage on the international stage',
        date: '2024-12-20',
        tags: ['portugal', 'international', 'heritage']
      },
      {
        id: 7,
        type: 'victory',
        content: 'Lifting the HSBC Sevens Challenger Series trophy in Cape Town with Portugal',
        date: '2025-01-15',
        tags: ['championship', 'sevens', 'portugal']
      }
    ]
  },
  {
    id: 'elite-mindset',
    title: 'Elite Mindset',
    icon: Star,
    color: 'from-green-500 to-emerald-500',
    size: 'small',
    position: { x: 150, y: 150 },
    items: [
      {
        id: 8,
        type: 'mindset',
        content: 'Lions U19, Portugal Sevens, Wits Captain - each level demands more obsession',
        date: '2025-01-08',
        tags: ['elite', 'progression', 'obsession']
      }
    ]
  }
]

export function InspirationPreview() {
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null)
  const [hoveredCluster, setHoveredCluster] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring animations for smooth following
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        mouseX.set((e.clientX - centerX) * 0.1)
        mouseY.set((e.clientY - centerY) * 0.1)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const getClusterSize = (size: string) => {
    switch (size) {
      case 'large': return 'w-32 h-32'
      case 'medium': return 'w-24 h-24' 
      case 'small': return 'w-16 h-16'
      default: return 'w-24 h-24'
    }
  }

  const getClusterScale = (size: string, isHovered: boolean) => {
    const baseScale = size === 'large' ? 1 : size === 'medium' ? 0.8 : 0.6
    return isHovered ? baseScale * 1.2 : baseScale
  }

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
            A universe of creative inspiration, insights, and moments that shape Liam's journey
          </p>
        </motion.div>

        {/* Galaxy Container */}
        <div 
          ref={containerRef}
          className="relative h-[600px] flex items-center justify-center"
        >
          {/* Clusters */}
          {inspirationClusters.map((cluster, index) => {
            const Icon = cluster.icon
            const isHovered = hoveredCluster === cluster.id
            const isSelected = selectedCluster === cluster.id
            
            return (
              <motion.div
                key={cluster.id}
                className="absolute cursor-pointer"
                style={{
                  x: cluster.position.x,
                  y: cluster.position.y,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: getClusterScale(cluster.size, isHovered),
                  x: cluster.position.x,
                  y: cluster.position.y,
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ 
                  scale: getClusterScale(cluster.size, true),
                  rotateZ: 5,
                }}
                whileTap={{ scale: getClusterScale(cluster.size, false) * 0.9 }}
                onHoverStart={() => setHoveredCluster(cluster.id)}
                onHoverEnd={() => setHoveredCluster(null)}
                onClick={() => setSelectedCluster(isSelected ? null : cluster.id)}
              >
                {/* Cluster Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${cluster.color} opacity-20 blur-xl`}
                  animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.4 : 0.2,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Cluster Body */}
                <motion.div
                  className={`relative ${getClusterSize(cluster.size)} rounded-full glass border-2 border-white/20 flex items-center justify-center group`}
                  style={{
                    background: `linear-gradient(135deg, ${cluster.color.replace('from-', 'rgba(').replace(' to-', ', 0.2), rgba(')} 0.1)`
                  }}
                >
                  <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                  
                  {/* Orbit Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-white/10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Cluster Label */}
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0.7, 
                      y: isHovered ? 0 : 10 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-medium bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                      {cluster.title}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Floating Content Indicators */}
                {cluster.items.slice(0, 3).map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    className="absolute w-2 h-2 rounded-full bg-white/60"
                    style={{
                      x: Math.cos((itemIndex * 120) * Math.PI / 180) * 50,
                      y: Math.sin((itemIndex * 120) * Math.PI / 180) * 50,
                    }}
                    animate={{
                      scale: isHovered ? [1, 1.5, 1] : [0.8, 1, 0.8],
                      opacity: isHovered ? [0.6, 1, 0.6] : [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: itemIndex * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            )
          })}

          {/* Center Attraction Point */}
          <motion.div
            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent"
            style={{ x: springX, y: springY }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>

        {/* Selected Cluster Details */}
        <AnimatePresence>
          {selectedCluster && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="mt-16"
            >
              {(() => {
                const cluster = inspirationClusters.find(c => c.id === selectedCluster)
                if (!cluster) return null

                return (
                  <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-3xl p-8 border border-white/10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-2xl bg-gradient-to-r ${cluster.color}`}>
                          <cluster.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">{cluster.title}</h3>
                        <button
                          onClick={() => setSelectedCluster(null)}
                          className="ml-auto p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cluster.items.map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="brutalist-card p-6 hover:scale-105 transition-transform"
                          >
                            <div className="space-y-3">
                              <p className="text-lg leading-relaxed">
                                {item.content}
                              </p>
                              
                              {'author' in item && item.author && (
                                <p className="text-sm text-muted-foreground">
                                  — {item.author}
                                </p>
                              )}
                              
                              {'date' in item && item.date && (
                                <p className="text-xs text-muted-foreground">
                                  {item.date}
                                </p>
                              )}
                              
                              {item.tags && (
                                <div className="flex flex-wrap gap-2">
                                  {item.tags.map(tag => (
                                    <span 
                                      key={tag}
                                      className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary"
                                    >
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interaction Guide */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Hover over clusters to explore • Click to dive deeper • Move your mouse to shift the galaxy
          </p>
        </motion.div>
      </div>
    </section>
  )
} 