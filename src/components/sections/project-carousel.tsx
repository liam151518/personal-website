"use client";

import { Calendar, Code, FileText, User, Clock, Target, Zap, Building2, Leaf, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const projectData = [
  {
    id: 1,
    name: "Roventis",
    description: "Sustainable outdoor gear company focused on eco-friendly adventure equipment for modern explorers.",
    category: "Sustainability",
    icon: Leaf,
    phases: [
      {
        id: 1,
        title: "Planning",
        date: "Jan 2024",
        content: "Market research, sustainable materials sourcing, and business model development for eco-friendly outdoor gear.",
        category: "Planning",
        icon: Calendar,
        relatedIds: [2],
        status: "completed" as const,
        energy: 100,
      },
      {
        id: 2,
        title: "Design",
        date: "Feb 2024",
        content: "Product line design, sustainable material selection, and brand identity development.",
        category: "Design",
        icon: FileText,
        relatedIds: [1, 3],
        status: "completed" as const,
        energy: 90,
      },
      {
        id: 3,
        title: "Development",
        date: "Mar 2024",
        content: "Prototype development, manufacturing partnerships, and supply chain establishment.",
        category: "Development",
        icon: Code,
        relatedIds: [2, 4],
        status: "in-progress" as const,
        energy: 60,
      },
      {
        id: 4,
        title: "Testing",
        date: "Apr 2024",
        content: "Product testing, quality assurance, and user feedback collection.",
        category: "Testing",
        icon: User,
        relatedIds: [3, 5],
        status: "pending" as const,
        energy: 30,
      },
      {
        id: 5,
        title: "Release",
        date: "May 2024",
        content: "Market launch, distribution setup, and customer acquisition.",
        category: "Release",
        icon: Clock,
        relatedIds: [4],
        status: "pending" as const,
        energy: 10,
      },
    ]
  },
  {
    id: 2,
    name: "Mealify",
    description: "AI-powered nutrition app specifically designed for athletes to optimize performance through personalized meal planning.",
    category: "Technology",
    icon: Smartphone,
    phases: [
      {
        id: 1,
        title: "Planning",
        date: "Mar 2024",
        content: "AI algorithm research, athlete nutrition requirements analysis, and technical architecture planning.",
        category: "Planning",
        icon: Calendar,
        relatedIds: [2],
        status: "completed" as const,
        energy: 100,
      },
      {
        id: 2,
        title: "Design",
        date: "Apr 2024",
        content: "UI/UX design for mobile app, AI interface design, and user experience mapping.",
        category: "Design",
        icon: FileText,
        relatedIds: [1, 3],
        status: "completed" as const,
        energy: 80,
      },
      {
        id: 3,
        title: "Development",
        date: "May 2024",
        content: "AI algorithm development, mobile app development, and backend infrastructure setup.",
        category: "Development",
        icon: Code,
        relatedIds: [2, 4],
        status: "in-progress" as const,
        energy: 30,
      },
      {
        id: 4,
        title: "Testing",
        date: "Jun 2024",
        content: "AI accuracy testing, user acceptance testing, and performance optimization.",
        category: "Testing",
        icon: User,
        relatedIds: [3, 5],
        status: "pending" as const,
        energy: 0,
      },
      {
        id: 5,
        title: "Release",
        date: "Jul 2024",
        content: "App store launch, athlete onboarding, and community building.",
        category: "Release",
        icon: Clock,
        relatedIds: [4],
        status: "pending" as const,
        energy: 0,
      },
    ]
  },
  {
    id: 3,
    name: "OBT",
    description: "Christian apparel brand inspiring faith-driven excellence and purpose-centered living through premium clothing.",
    category: "Lifestyle",
    icon: Building2,
    phases: [
      {
        id: 1,
        title: "Planning",
        date: "Dec 2023",
        content: "Brand vision development, target audience research, and faith-based messaging strategy.",
        category: "Planning",
        icon: Calendar,
        relatedIds: [2],
        status: "completed" as const,
        energy: 100,
      },
      {
        id: 2,
        title: "Design",
        date: "Jan 2024",
        content: "Apparel design, brand identity creation, and faith-inspired graphics development.",
        category: "Design",
        icon: FileText,
        relatedIds: [1, 3],
        status: "completed" as const,
        energy: 100,
      },
      {
        id: 3,
        title: "Development",
        date: "Feb 2024",
        content: "Manufacturing partnerships, e-commerce platform development, and supply chain setup.",
        category: "Development",
        icon: Code,
        relatedIds: [2, 4],
        status: "completed" as const,
        energy: 90,
      },
      {
        id: 4,
        title: "Testing",
        date: "Mar 2024",
        content: "Product quality testing, website testing, and community feedback collection.",
        category: "Testing",
        icon: User,
        relatedIds: [3, 5],
        status: "completed" as const,
        energy: 100,
      },
      {
        id: 5,
        title: "Release",
        date: "Apr 2024",
        content: "Brand launch, community building, and faith-based marketing campaigns.",
        category: "Release",
        icon: Clock,
        relatedIds: [4],
        status: "completed" as const,
        energy: 90,
      },
    ]
  },
  {
    id: 4,
    name: "Future Ventures",
    description: "Exploring new opportunities in sports technology, sustainable business models, and faith-based entrepreneurship.",
    category: "Innovation",
    icon: Target,
    phases: [
      {
        id: 1,
        title: "Planning",
        date: "2025+",
        content: "Market opportunity analysis, innovation research, and strategic planning for future ventures.",
        category: "Planning",
        icon: Calendar,
        relatedIds: [2],
        status: "pending" as const,
        energy: 10,
      },
      {
        id: 2,
        title: "Design",
        date: "2025+",
        content: "Concept development, innovation design, and future technology integration planning.",
        category: "Design",
        icon: FileText,
        relatedIds: [1, 3],
        status: "pending" as const,
        energy: 5,
      },
      {
        id: 3,
        title: "Development",
        date: "2025+",
        content: "Prototype development, technology integration, and innovation implementation.",
        category: "Development",
        icon: Code,
        relatedIds: [2, 4],
        status: "pending" as const,
        energy: 0,
      },
      {
        id: 4,
        title: "Testing",
        date: "2025+",
        content: "Innovation testing, market validation, and user feedback collection.",
        category: "Testing",
        icon: User,
        relatedIds: [3, 5],
        status: "pending" as const,
        energy: 0,
      },
      {
        id: 5,
        title: "Release",
        date: "2025+",
        content: "Future venture launch, market disruption, and innovation leadership.",
        category: "Release",
        icon: Clock,
        relatedIds: [4],
        status: "pending" as const,
        energy: 0,
      },
    ]
  },
];

export function ProjectCarousel() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projectData[currentProjectIndex];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projectData.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevProject();
      } else if (event.key === 'ArrowRight') {
        nextProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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



        {/* Radial Orbital Timeline with Navigation */}
        <motion.div
          className="relative h-[900px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Left Arrow */}
          <button
            onClick={prevProject}
            className="absolute left-8 z-30 glass p-4 rounded-full hover-lift magnetic focus-elite shadow-championship"
          >
            <ChevronLeft className="w-8 h-8 text-primary" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextProject}
            className="absolute right-8 z-30 glass p-4 rounded-full hover-lift magnetic focus-elite shadow-championship"
          >
            <ChevronRight className="w-8 h-8 text-primary" />
          </button>



          <RadialOrbitalTimeline 
            timelineData={currentProject.phases} 
            centerContent={{
              title: currentProject.name,
              icon: currentProject.icon,
              description: currentProject.description
            }}
          />
        </motion.div>


      </div>
    </section>
  );
} 