export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  status: 'Active' | 'Planning' | 'Completed' | 'Backlog'
  priority: 'High' | 'Medium' | 'Low'
  progress: number
  category: string
  tags: string[]
  technologies: Technology[]
  startDate: string
  endDate?: string
  url?: string
  githubUrl?: string
  isExternal: boolean
  featured: boolean
  images: string[]
  demoUrl?: string
  processSteps: ProcessStep[]
  resources: Resource[]
  achievements: string[]
  challenges: string[]
  learnings: string[]
}

export interface Technology {
  name: string
  icon: string
  category: 'Frontend' | 'Backend' | 'Database' | 'Tool' | 'Language' | 'Framework'
  proficiency: number
  color: string
}

export interface ProcessStep {
  id: string
  title: string
  description: string
  status: 'Concept' | 'Design' | 'Development' | 'Launch'
  order: number
  completedAt?: string
}

export interface Resource {
  id: string
  title: string
  type: 'Documentation' | 'Article' | 'Video' | 'Code' | 'Design'
  url: string
  description: string
}

export interface TimelineEvent {
  id: string
  title: string
  description: string
  date: string
  category: 'Education' | 'Work' | 'Project' | 'Achievement' | 'Personal'
  icon: string
  color: string
  featured: boolean
  details?: string[]
  links?: Array<{
    title: string
    url: string
  }>
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  category: string
  icon: string
  metrics?: Array<{
    label: string
    value: string
  }>
  images?: string[]
  url?: string
}

export interface ValueStatement {
  id: string
  title: string
  description: string
  icon: string
  examples: string[]
  priority: number
}

export interface Recommendation {
  id: string
  name: string
  title: string
  company: string
  relationship: string
  text: string
  date: string
  avatar: string
  linkedinUrl?: string
  weight: number
  tags: string[]
}

export interface InspirationCluster {
  id: string
  title: string
  type: 'Quotes' | 'Visual Diaries' | 'Insights' | 'Moments'
  items: InspirationItem[]
  color: string
  position: {
    x: number
    y: number
  }
  size: 'small' | 'medium' | 'large'
}

export interface InspirationItem {
  id: string
  type: 'quote' | 'image' | 'voice' | 'sketch' | 'note'
  content: string
  author?: string
  date: string
  tags: string[]
  url?: string
  audioUrl?: string
  imageUrl?: string
}

export interface ContactInfo {
  email: string
  phone?: string
  location: string
  timezone: string
  availability: 'Available' | 'Busy' | 'Not Available'
  socialLinks: Array<{
    platform: string
    url: string
    icon: string
  }>
  calendlyUrl?: string
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  location: string
  avatar: string
  resumeUrl: string
  portfolioUrl: string
  skills: Technology[]
  interests: string[]
  languages: Array<{
    name: string
    proficiency: 'Native' | 'Fluent' | 'Conversational' | 'Basic'
  }>
}

export interface AnimationConfig {
  duration: number
  easing: string
  delay?: number
  stagger?: number
  repeat?: boolean
  yoyo?: boolean
}

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system'
  accent: string
  accessibility: {
    reducedMotion: boolean
    highContrast: boolean
    fontSize: 'small' | 'medium' | 'large'
  }
}

export interface InteractionEvent {
  type: 'click' | 'hover' | 'scroll' | 'gesture' | 'voice'
  target: string
  timestamp: number
  duration?: number
  data?: any
}

export interface EngagementMetrics {
  pageViews: number
  sessionDuration: number
  interactions: InteractionEvent[]
  mostViewedProjects: string[]
  deviceType: 'mobile' | 'tablet' | 'desktop'
  referrer: string
}

export interface LoadingState {
  isLoading: boolean
  progress: number
  stage: 'assets' | 'animations' | 'content' | 'complete'
  message: string
}

export interface GestureConfig {
  swipeThreshold: number
  panThreshold: number
  rotationThreshold: number
  scaleThreshold: number
  holdDuration: number
}

export interface VoiceCommand {
  phrase: string
  action: string
  parameters?: Record<string, any>
  confidence: number
}

export interface CursorState {
  x: number
  y: number
  isVisible: boolean
  type: 'default' | 'pointer' | 'grab' | 'grabbing' | 'zoom' | 'custom'
  scale: number
  rotation: number
}

export interface ParticleConfig {
  count: number
  size: {
    min: number
    max: number
  }
  speed: {
    min: number
    max: number
  }
  color: string[]
  opacity: {
    min: number
    max: number
  }
  shape: 'circle' | 'square' | 'triangle' | 'star'
  physics: {
    gravity: number
    friction: number
    bounce: number
  }
}

export interface ShaderConfig {
  vertexShader: string
  fragmentShader: string
  uniforms: Record<string, any>
  transparent: boolean
  blending: string
}

export interface Scene3DConfig {
  camera: {
    position: [number, number, number]
    fov: number
    near: number
    far: number
  }
  lights: Array<{
    type: 'ambient' | 'directional' | 'point' | 'spot'
    color: string
    intensity: number
    position?: [number, number, number]
  }>
  controls: {
    enabled: boolean
    autoRotate: boolean
    enableZoom: boolean
    enablePan: boolean
  }
} 