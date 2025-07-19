'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Building2, Trophy, Users } from 'lucide-react'

const rugbyTestimonials = [
  {
    id: 1,
    name: 'Mziwakhe Nkosi',
    role: 'Lions Rugby U21 & Currie Cup Head Coach',
    company: 'Lions Rugby Union',
    location: 'Johannesburg, South Africa',
    avatar: '/placeholder-avatar-1.jpg',
    rating: 5,
    content: 'Liam\'s work ethic and leadership qualities set him apart at Lions U19 level. His tactical awareness and ability to read the game make him a natural loose forward. A player with genuine international potential who consistently delivers under pressure.',
    project: 'Lions U19/U21 Development Program',
    date: '2024-08-15',
    tags: ['Elite Rugby', 'Leadership', 'Tactical Awareness', 'International Potential'],
    achievements: ['Lions U19 Squad Selection', 'Elite Development Program']
  },
  {
    id: 2,
    name: 'Foxy Ntleki',
    role: 'Lions U19 Head Coach & Wits Young Guns Head Coach',
    company: 'Lions Rugby Union & Wits University',
    location: 'Johannesburg, South Africa',
    avatar: '/placeholder-avatar-2.jpg',
    rating: 5,
    content: 'As captain of our championship-winning Wits Young Guns team, Liam demonstrated exceptional leadership under pressure. His ability to motivate teammates and execute game plans makes him special. A true champion and natural leader.',
    project: 'Wits Young Guns Championship Campaign',
    date: '2025-01-20',
    tags: ['Championship', 'Leadership', 'Tactical Excellence', 'Captain'],
    achievements: ['Young Guns Champions 2025', 'Captain Leadership']
  },
  {
    id: 3,
    name: 'Jannie Geldenhuys',
    role: 'Grey College First-Team Coach',
    company: 'Grey College',
    location: 'Bloemfontein, South Africa',
    avatar: '/placeholder-avatar-3.jpg',
    rating: 5,
    content: 'Liam was our First Team captain and Player of the Year. His rugby intelligence, combined with natural leadership, made him stand out at school level. He has the dedication and skill to succeed at the highest levels of rugby.',
    project: 'Grey College Elite Rugby Program',
    date: '2023-10-30',
    tags: ['School Rugby', 'Captain', 'Player of the Year', 'Elite Development'],
    achievements: ['First Team Captain', 'Player of the Year 2022']
  },
  {
    id: 4,
    name: 'Tiaan Liebenberg',
    role: 'Former Springbok & Cheetahs Forwards Coach',
    company: 'Cheetahs Rugby',
    location: 'Bloemfontein, South Africa',
    avatar: '/placeholder-avatar-4.jpg',
    rating: 5,
    content: 'Working with Liam during his development, I could see his exceptional understanding of forward play and lineout mechanics. His technical skills and rugby IQ are beyond his years. A player destined for professional rugby.',
    project: 'Elite Forwards Development',
    date: '2024-03-12',
    tags: ['Professional Rugby', 'Forward Play', 'Technical Skills', 'Rugby IQ'],
    achievements: ['Elite Forwards Training', 'Professional Development']
  },
  {
    id: 5,
    name: 'João Silva',
    role: 'Portugal Sevens Teammate',
    company: 'Portugal Rugby Union',
    location: 'Lisbon, Portugal',
    avatar: '/placeholder-avatar-5.jpg',
    rating: 5,
    content: 'Playing alongside Liam in the Portugal Senior Sevens team during our HSBC Challenger Series victory was incredible. His game awareness and ability to perform in crucial moments helped secure our championship. A true champion mindset.',
    project: 'HSBC Sevens Challenger Series',
    date: '2025-02-28',
    tags: ['International Rugby', 'Sevens', 'Championship', 'Team Player'],
    achievements: ['HSBC Challenger Series Winner', 'International Debut']
  }
]

export function RugbyTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % rugbyTestimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovering])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % rugbyTestimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + rugbyTestimonials.length) % rugbyTestimonials.length)
  }

  return (
    <section id="rugby-testimonials" className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-primary/5">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Quote className="w-4 h-4 text-primary/20" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="status-elite mb-6">Coach Testimonials</div>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            What Rugby Coaches Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real testimonials from elite rugby coaches who have witnessed Liam's development and championship success
          </p>
        </motion.div>

        {/* Testimonials Container */}
        <div 
          ref={containerRef}
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass border border-white/20 hover:border-white/40 transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass border border-white/20 hover:border-white/40 transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `${-currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {rugbyTestimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
                  <motion.div
                    className="glass-strong p-8 md:p-12 rounded-2xl mx-auto max-w-4xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-8">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Quote size={24} className="text-white" />
                      </motion.div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 + 0.3 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mx-1" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-xl md:text-2xl text-center leading-relaxed mb-8 text-foreground font-medium">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Project Context */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                        <Trophy size={16} />
                        <span className="text-sm font-semibold">{testimonial.project}</span>
                      </div>
                    </div>

                    {/* Author Info */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                      {/* Avatar */}
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                            <Users size={24} className="text-primary" />
                          </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-background"></div>
                      </motion.div>

                      {/* Details */}
                      <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold mb-1">{testimonial.name}</h4>
                        <p className="text-primary font-semibold mb-2">{testimonial.role}</p>
                        <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building2 size={14} />
                            <span>{testimonial.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                      {testimonial.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 + 0.5 }}
                          className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="mt-8 pt-6 border-t border-border/30">
                      <h5 className="text-sm font-semibold text-center mb-4 text-muted-foreground uppercase tracking-wider">
                        Related Achievements
                      </h5>
                      <div className="flex flex-wrap justify-center gap-4">
                        {testimonial.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs">
                            <Star size={12} />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {rugbyTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center p-6 glass rounded-xl">
            <div className="text-3xl font-bold gradient-text mb-2">5</div>
            <div className="text-sm text-muted-foreground">Elite Coaches</div>
          </div>
          <div className="text-center p-6 glass rounded-xl">
            <div className="text-3xl font-bold gradient-text mb-2">4</div>
            <div className="text-sm text-muted-foreground">Rugby Levels</div>
          </div>
          <div className="text-center p-6 glass rounded-xl">
            <div className="text-3xl font-bold gradient-text mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Years Coaching</div>
          </div>
          <div className="text-center p-6 glass rounded-xl">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Elite Rating</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-strong p-8 rounded-2xl max-w-2xl mx-auto">
            <Quote className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Elite Rugby References
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Testimonials from international, provincial, university, and school rugby coaches who have witnessed Liam's elite development and championship success.
            </p>
            <button className="btn-primary magnetic shadow-championship">
              Request Coach References
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 