export interface HeroData {
  name: string
  title: string
  tagline: string
  avatar_url?: string
}

export interface AboutData {
  bio: string
  highlights: string[]
}

export interface SkillCategory {
  name: string
  items: string[]
}

export interface SkillsData {
  categories: SkillCategory[]
}

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github_url?: string
  demo_url?: string
  image_url?: string
}

export interface ExperienceItem {
  id: number
  title: string
  company: string
  duration: string
  description: string
  achievements: string[]
}

export interface ContactData {
  email: string
  github?: string
  linkedin?: string
  twitter?: string
}

export interface PortfolioData {
  hero: HeroData
  about: AboutData
  skills: SkillsData
  projects: Project[]
  experience: ExperienceItem[]
  contact: ContactData
}

