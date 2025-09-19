"use client";

import { Calendar, Code, FileText, User, Clock, Target, Zap, Building2, Leaf, Smartphone, ChevronLeft, ChevronRight, Cross, ShirtIcon, TrendingUp } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const projectData = [
  {
    id: 1,
    name: "Roventis",
    description: "Adventure gear company bridging premium performance and accessible style with 'Where Adventure Meets Purpose.'",
    category: "Outdoor & Lifestyle",
    icon: Leaf,
    phases: [
      {
        id: 1,
        title: "Planning",
        date: "Q1 2024",
        content: "Core mission development, target market research, and sustainable production model planning for outdoor adventure gear.",
        category: "Planning",
        icon: Calendar,
        relatedIds: [2],
        status: "completed" as const,
        energy: 100,
      },
      {
        id: 2,
        title: "Design",
        date: "Q2 2024",
        content: "Brand identity creation with mountain logo, earth-tone palette, and hybrid outdoor-urban design concepts.",
        category: "Design",
        icon: FileText,
        relatedIds: [1, 3],
        status: "completed" as const,
        energy: 95,
      },
      {
        id: 3,
        title: "Development",
        date: "Q3 2024",
        content: "Website launch, first product line (hats), Shopify setup, and Founders' Circle donation program implementation.",
        category: "Development",
        icon: Code,
        relatedIds: [2, 4],
        status: "completed" as const,
        energy: 85,
      },
      {
        id: 4,
        title: "Testing",
        date: "Q4 2024",
        content: "Successfully sold 100 hats, gathered customer feedback, and tested market demand for outdoor apparel.",
        category: "Testing",
        icon: User,
        relatedIds: [3, 5],
        status: "completed" as const,
        energy: 90,
      },
      {
        id: 5,
        title: "Release",
        date: "Q1 2025",
        content: "Launching premium camo outdoor line (pants & jackets) using profits from initial hat sales for bulk orders. Website: roventis.shop",
        category: "Release",
        icon: Clock,
        relatedIds: [4],
        status: "in-progress" as const,
        energy: 75,
      },
    ]
  },
  {
    id: 2,
    name: "OBT",
    description: "Faith-driven apparel brand with 'Obsession Beats Talent' motto, featuring Kingdom Collection and Sanctified Strength lines.",
    category: "Faith & Apparel",
    icon: Cross,
    phases: [
      {
        id: 1,
        title: "Planning",
        date: "Q3 2024",
        content: "Mission development to equip believers with faith-rooted apparel, target audience research (ages 16-35), and market strategy.",
        category: "Planning",
        icon: Calendar,
        relatedIds: [2],
        status: "completed" as const,
        energy: 100,
      },
      {
        id: 2,
        title: "Design",
        date: "Q4 2024",
        content: "Distinctive white-circle OBT logo creation, dual-collection concepts (Kingdom & Sanctified Strength), and medieval-inspired motifs.",
        category: "Design",
        icon: FileText,
        relatedIds: [1, 3],
        status: "completed" as const,
        energy: 90,
      },
      {
        id: 3,
        title: "Development",
        date: "Q1 2025",
        content: "Print-on-demand setup, Shopify platform development, and product line finalization for both collections.",
        category: "Development",
        icon: Code,
        relatedIds: [2, 4],
        status: "in-progress" as const,
        energy: 45,
      },
      {
        id: 4,
        title: "Testing",
        date: "Q2 2025",
        content: "Beta testing with faith community, quality assurance, and pre-launch feedback collection from target audience.",
        category: "Testing",
        icon: User,
        relatedIds: [3, 5],
        status: "pending" as const,
        energy: 20,
      },
      {
        id: 5,
        title: "Release",
        date: "Q2 2025",
        content: "Soft launch to email subscribers, public launch with 500-unit sellout goal, and Christian athlete partnerships.",
        category: "Release",
        icon: Clock,
        relatedIds: [4],
        status: "pending" as const,
        energy: 10,
      },
    ]
  },
  {
    id: 3,
    name: "LXS Capital",
    description: "Investment and business development venture focused on strategic capital deployment and entrepreneurial growth.",
    category: "Investment & Capital",
    icon: TrendingUp,
    phases: [
      {
        id: 1,
        title: "Planning",
        date: "Q4 2024",
        content: "Strategic planning phase, market analysis, and investment framework development for capital deployment ventures.",
        category: "Planning",
        icon: Calendar,
        relatedIds: [2],
        status: "completed" as const,
        energy: 80,
      },
      {
        id: 2,
        title: "Design",
        date: "Q1 2025",
        content: "Business model design, investment criteria development, and portfolio strategy framework creation.",
        category: "Design",
        icon: FileText,
        relatedIds: [1, 3],
        status: "in-progress" as const,
        energy: 35,
      },
      {
        id: 3,
        title: "Development",
        date: "Q2 2025",
        content: "Tools and systems development, operational infrastructure setup, and partnership network establishment.",
        category: "Development",
        icon: Code,
        relatedIds: [2, 4],
        status: "pending" as const,
        energy: 15,
      },
      {
        id: 4,
        title: "Testing",
        date: "Q3 2025",
        content: "Investment strategy testing, portfolio validation, and market approach refinement through pilot investments.",
        category: "Testing",
        icon: User,
        relatedIds: [3, 5],
        status: "pending" as const,
        energy: 5,
      },
      {
        id: 5,
        title: "Release",
        date: "Q4 2025",
        content: "Official launch of LXS Capital, active investment deployment, and portfolio company development initiatives.",
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
    <section id="projects" className="section-padding relative overflow-hidden py-16 sm:py-32">
      <div className="container-elite relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
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
          className="relative h-[500px] sm:h-[900px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Left Arrow */}
          <button
            onClick={prevProject}
            className="absolute left-2 sm:left-8 z-30 glass p-2 sm:p-4 rounded-full hover-lift magnetic focus-elite shadow-championship touch-manipulation"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextProject}
            className="absolute right-2 sm:right-8 z-30 glass p-2 sm:p-4 rounded-full hover-lift magnetic focus-elite shadow-championship touch-manipulation"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
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