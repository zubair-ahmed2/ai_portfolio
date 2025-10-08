import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import { getPortfolioData } from './api/portfolio'
import type { PortfolioData } from './types'
import './App.css'

function App() {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfolioData = await getPortfolioData()
        setData(portfolioData)
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
        // Use fallback data if API fails
        setData(getFallbackData())
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading Portfolio...</p>
      </div>
    )
  }

  if (!data) {
    return <div>Error loading portfolio data</div>
  }

  return (
    <div className="app">
      <Navigation />
      <Hero data={data.hero} />
      <About data={data.about} />
      <Skills data={data.skills} />
      <Projects data={data.projects} />
      <Experience data={data.experience} />
      <Contact data={data.contact} />
    </div>
  )
}

// Fallback data if API is not available
function getFallbackData(): PortfolioData {
  return {
    hero: {
      name: "AI Engineer",
      title: "Machine Learning & AI Specialist",
      tagline: "Building intelligent systems that solve real-world problems",
      avatar_url: ""
    },
    about: {
      bio: "Passionate AI Engineer with expertise in machine learning, deep learning, and natural language processing. I specialize in building scalable AI systems and deploying models to production.",
      highlights: [
        "5+ years of experience in AI/ML",
        "Published research in top-tier conferences",
        "Expert in PyTorch, TensorFlow, and scikit-learn"
      ]
    },
    skills: {
      categories: [
        {
          name: "Machine Learning",
          items: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP", "Reinforcement Learning"]
        },
        {
          name: "Frameworks & Tools",
          items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "LangChain", "OpenAI API"]
        },
        {
          name: "Programming",
          items: ["Python", "C++", "JavaScript", "SQL", "CUDA"]
        },
        {
          name: "MLOps & Deployment",
          items: ["Docker", "Kubernetes", "AWS SageMaker", "MLflow", "FastAPI", "Flask"]
        }
      ]
    },
    projects: [
      {
        id: 1,
        title: "LLM-Powered Chatbot",
        description: "Built an intelligent chatbot using GPT-4 and LangChain with custom retrieval-augmented generation (RAG) for domain-specific knowledge.",
        technologies: ["Python", "LangChain", "OpenAI API", "FastAPI", "PostgreSQL"],
        github_url: "#",
        demo_url: "#",
        image_url: ""
      },
      {
        id: 2,
        title: "Real-time Object Detection",
        description: "Developed a real-time object detection system using YOLO and deployed it as a REST API with 30+ FPS performance.",
        technologies: ["PyTorch", "YOLO", "OpenCV", "FastAPI", "Docker"],
        github_url: "#",
        demo_url: "#",
        image_url: ""
      },
      {
        id: 3,
        title: "Sentiment Analysis Pipeline",
        description: "Created an end-to-end sentiment analysis pipeline for social media data with automated retraining and monitoring.",
        technologies: ["Transformers", "Hugging Face", "MLflow", "Apache Airflow", "AWS"],
        github_url: "#",
        demo_url: "#",
        image_url: ""
      }
    ],
    experience: [
      {
        id: 1,
        title: "Senior AI Engineer",
        company: "Tech Company",
        duration: "2022 - Present",
        description: "Leading AI initiatives and building production-ready ML systems. Mentoring junior engineers and driving best practices.",
        achievements: [
          "Improved model accuracy by 25%",
          "Reduced inference time by 40%",
          "Led team of 5 engineers"
        ]
      },
      {
        id: 2,
        title: "ML Engineer",
        company: "AI Startup",
        duration: "2020 - 2022",
        description: "Developed and deployed machine learning models for various applications including NLP and computer vision.",
        achievements: [
          "Built 10+ production ML models",
          "Implemented CI/CD for ML pipelines",
          "Reduced infrastructure costs by 30%"
        ]
      }
    ],
    contact: {
      email: "contact@aiportfolio.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }
}

export default App

