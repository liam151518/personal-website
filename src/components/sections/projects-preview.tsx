'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, Trophy, Target, Award, Clock, ChevronRight, Filter, Star } from 'lucide-react'

const projectCategories = [
  { id: 'active', title: 'Active', color: 'from-green-500 to-emerald-500', count: 2 },
  { id: 'completed', title: 'Launched', color: 'from-purple-500 to-pink-500', count: 1 },
  { id: 'planning', title: 'Planning', color: 'from-blue-500 to-cyan-500', count: 0 },
  { id: 'backlog', title: 'Backlog', color: 'from-orange-500 to-red-500', count: 0 }
]

const projects = {
  active: [
    {
      id: 1,
      title: 'Roventis',
      description: 'Sustainable outdoor gear company focused on eco-friendly adventure equipment for modern explorers',
      progress: 60,
      priority: 'High',
      tags: ['Sustainability', 'Outdoor Gear', 'E-commerce', 'B2C'],
      dueDate: '2025-08-01',
      team: 4,
      status: 'Development',
      mission: 'Revolutionizing outdoor gear with sustainable materials and innovative design'
    },
    {
      id: 2,
      title: 'Mealify',
      description: 'AI-powered nutrition app specifically designed for athletes to optimize performance through personalized meal planning',
      progress: 30,
      priority: 'High',
      tags: ['AI Technology', 'Sports Nutrition', 'Mobile App', 'Health Tech'],
      dueDate: '2025-12-01',
      team: 3,
      status: 'Development',
      mission: 'Empowering athletes with intelligent nutrition guidance for peak performance'
    }
  ],
  completed: [
    {
      id: 3,
      title: 'OBT (Obsession Beats Talent)',
      description: 'Christian apparel brand inspiring faith-driven excellence and purpose-centered living through premium clothing',
      progress: 90,
      priority: 'High',
      tags: ['Christian Apparel', 'Faith', 'Lifestyle Brand', 'E-commerce'],
      dueDate: '2024-12-01',
      team: 2,
      status: 'Launch',
      mission: 'Building a movement of faith-driven individuals pursuing excellence in all areas of life'
    }
  ],
  planning: [],
  backlog: []
}

const categories = ['Active', 'Launched', 'Tech', 'Sustainability']

export function ProjectsPreview() {
  const [selectedCategory, setSelectedCategory] = useState('Active')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState('')

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'from-red-500 to-orange-500'
      case 'Medium': return 'from-yellow-500 to-green-500'
      case 'Low': return 'from-green-500 to-blue-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Development': return <Clock className="w-4 h-4" />
      case 'Launch': return <Trophy className="w-4 h-4" />
      case 'Champion': return <Award className="w-4 h-4" />
      default: return <Target className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Development': return 'from-blue-500 to-indigo-500'
      case 'Launch': return 'from-green-500 to-emerald-500'
      case 'Champion': return 'from-yellow-500 to-orange-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  // Get projects based on selected category
  const getCurrentProjects = () => {
    switch (selectedCategory) {
      case 'Active': return projects.active
      case 'Launched': return projects.completed
      case 'Tech': return [...projects.active, ...projects.completed].filter(p => 
        p.tags.some(tag => tag.includes('AI') || tag.includes('Tech') || tag.includes('App'))
      )
      case 'Sustainability': return [...projects.active, ...projects.completed].filter(p => 
        p.tags.some(tag => tag.includes('Sustainability') || tag.includes('Outdoor'))
      )
      default: return projects.active
    }
  }

  const currentProjects = getCurrentProjects()

  return (
    <section id="projects" className="section-padding relative overflow-hidden py-32">
      <div className="container-elite relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="status-elite mb-6">Entrepreneurial Ventures</div>
          <h2 className="text-responsive-lg gradient-text mb-6">
            Building the Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creating innovative solutions across sustainability, technology, and faith-driven lifestyle through strategic business ventures
          </p>
          <div className="flex items-center justify-center mt-8">
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`glass px-6 py-3 rounded-full font-semibold transition-all magnetic focus-elite ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-championship'
                  : 'hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Rugby Journey Grid */}
        <motion.div
          className="grid-elite gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card-elite p-8 hover-lift group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Elite Status Indicator */}
              <div className="absolute top-4 right-4">
                <div className={`status-champion text-xs ${getStatusIcon(project.status)}`}>
                  {getStatusIcon(project.status)}
                  <span className="ml-1">{project.status}</span>
                </div>
              </div>

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getPriorityColor(project.priority)}`} />
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {project.priority} Priority
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Progress & Stats */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold">Progress</span>
                  <span className="text-sm font-bold text-primary">{project.progress}%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </div>

              {/* Mission Statement */}
              <div className="glass-strong p-4 rounded-xl mb-6">
                <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Mission</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.mission}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="glass px-3 py-1 text-xs font-semibold rounded-full border border-primary/20 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass p-3 rounded-lg text-center">
                  <Users className="w-4 h-4 text-primary mx-auto mb-1" />
                  <div className="text-lg font-bold">{project.team}</div>
                  <div className="text-xs text-muted-foreground">Team Size</div>
                </div>
                <div className="glass p-3 rounded-lg text-center">
                  <Calendar className="w-4 h-4 text-primary mx-auto mb-1" />
                  <div className="text-sm font-bold">{new Date(project.dueDate).getFullYear()}</div>
                  <div className="text-xs text-muted-foreground">Season</div>
                </div>
              </div>

              {/* Expandable Details */}
              <AnimatePresence>
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border/50 pt-6"
                  >
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Key Achievements</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {project.id === 1 && (
                            <>
                              <li className="flex items-start gap-2">
                                <Star className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                                Sustainable materials research and sourcing established
                              </li>
                              <li className="flex items-start gap-2">
                                <Star className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                                Product line design and prototype development
                              </li>
                              <li className="flex items-start gap-2">
                                <Star className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                                Brand identity and mission definition completed
                              </li>
                            </>
                          )}
                          {project.id === 2 && (
                            <>
                              <li className="flex items-start gap-2">
                                <Trophy className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                                AI algorithm development for personalized nutrition
                              </li>
                              <li className="flex items-start gap-2">
                                <Trophy className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                                Athletic performance tracking integration
                              </li>
                              <li className="flex items-start gap-2">
                                <Trophy className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                                Market research with elite athletes completed
                              </li>
                            </>
                          )}
                          {project.id === 3 && (
                            <>
                              <li className="flex items-start gap-2">
                                <Award className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                                Successfully launched Christian apparel line
                              </li>
                              <li className="flex items-start gap-2">
                                <Award className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                                Built strong community of faith-driven customers
                              </li>
                              <li className="flex items-start gap-2">
                                <Award className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                                Established distribution and fulfillment systems
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expand Indicator */}
              <div className="flex items-center justify-center pt-4">
                <motion.div
                  animate={{ rotate: selectedProject === project.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary"
                >
                  <ChevronRight size={20} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-strong p-8 rounded-2xl max-w-2xl mx-auto">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Building Tomorrow's Solutions
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              From sustainable outdoor gear to AI-powered nutrition and faith-driven lifestyle brands, 
              the entrepreneurial journey continues with purpose and innovation.
            </p>
            <button className="btn-primary magnetic shadow-championship">
              Join the Mission
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 