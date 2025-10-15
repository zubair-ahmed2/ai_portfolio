import type { PortfolioData } from '../types'

// Static portfolio data
export const getPortfolioData = (): PortfolioData => {
  return {
    hero: {
      name: "Zubair Ahmed",
      title: "Full Stack AI Engineer",
      tagline: "Dedicated AI Engineer with expertise in computer vision, machine learning, and intelligent systems development",
      avatar_url: ""
    },
    about: {
      bio: "I am a dedicated Artificial Intelligence Engineer with 6 months of Industrial and Research Experience. My expertise spans various areas of AI and machine learning, where I have developed innovative solutions and efficient deployment pipelines. I bring a blend of technical proficiency and creative problem-solving to every project. My objective is to secure a position where I can efficiently contribute my skills and abilities to the growth of the organization and build my professional career.",
      highlights: [
        "11 months of industrial and research experience in AI/ML",
        "Published research paper: 'A Novel Deep Learning Framework for Contraband Items Recognition in Smart City' at ICSDI 2024",
        "Bachelor's in Computer Engineering with major in Artificial Intelligence and Embedded Systems",
        "Expertise in RAG Systems, No-Code/Code Automations, Agentic AI, and Computer Vision",
        "Skills in LangChain, LangGraph, TensorFlow, OpenCV, Scikit-Learn, FastAPI, and DevOps tools"
      ]
    },
    skills: {
      categories: [
        {
          name: "AI Expertise",
          items: [
            "RAG Systems",
            "No-Code/Code Automations and Workflows",
            "Agentic AI",
            "Stable Diffusion",
            "LoRA Training and Inference",
            "Voice AI Agent",
            "Agent Orchestration"
          ]
        },
        {
          name: "AI Tools and Frameworks",
          items: [
            "LangChain",
            "LangGraph",
            "LLM (GPT, DeepSeek, Mistral, Grok)",
            "TensorFlow",
            "OpenCV",
            "Scikit-Learn"
          ]
        },
        {
          name: "Backend Stack",
          items: [
            "FastAPI",
            "Flask"
          ]
        },
        {
          name: "DevOps",
          items: [
            "Docker",
            "CI/CD Pipelines",
            "AWS",
            "GitLab",
            "GitHub"
          ]
        },
        {
          name: "Operating Systems",
          items: [
            "Ubuntu",
            "Windows"
          ]
        }
      ]
    },
    projects: [
      {
        id: 1,
        title: "Multi-Tenant Document Management SaaS Platform",
        description: "Developing a multi-tenant, enterprise-level SaaS platform for secure document management, enabling companies to upload and manage documents with strict data isolation. Integrating Azure Active Directory for authentication and role-based access control, and built automated ingestion pipelines from Google Drive, OneDrive, and SharePoint.",
        technologies: ["FastAPI", "Azure AD", "Google Drive API", "OneDrive API", "SharePoint API", "Docker"],
        github_url: "",
        demo_url: ""
      },
      {
        id: 2,
        title: "GPT-based Chatbot for Car Management Company",
        description: "Developed GPT-based chatbot for a Car Management Company, offering ChatGPT-like capabilities tailored to vehicles, including maintenance support, sound and image analysis, vehicle number-based history reports, and real-time market valuation.",
        technologies: ["OpenAI GPT", "FastAPI", "Python", "Voice AI", "Image Analysis"],
        github_url: "",
        demo_url: ""
      },
      {
        id: 3,
        title: "AI-Powered Music Generation Pipeline",
        description: "Developed an AI-powered music generation pipeline using Suno/Chirp for song synthesis and OpenAI for lyric generation, replicating an AI music generation platform.",
        technologies: ["Suno AI", "Chirp AI", "OpenAI API", "Python", "Music Generation"],
        github_url: "",
        demo_url: ""
      },
      {
        id: 4,
        title: "AI-Powered Job Portal Cover Letter Generator",
        description: "Building an AI-powered job portal module to generate personalized, data-driven cover letters based on user input.",
        technologies: ["OpenAI API", "FastAPI", "React", "Natural Language Generation"],
        github_url: "",
        demo_url: ""
      },
      {
        id: 5,
        title: "Multimodal RAG-based Chatbot for E-commerce",
        description: "Created a multimodal RAG-based chatbot for an e-commerce platform, integrating image and text data to handle customer queries in real time.",
        technologies: ["RAG", "Vector Databases", "OpenAI", "FastAPI", "Image Processing"],
        github_url: "",
        demo_url: ""
      },
      {
        id: 6,
        title: "Voice-Enabled Chatbot with Google Speech-to-Text",
        description: "Designed and implemented a voice-enabled chatbot using Google Speech-to-Text and OpenAI, enabling seamless natural voice interactions.",
        technologies: ["Google Speech-to-Text", "OpenAI", "FastAPI", "Voice AI", "Python"],
        github_url: "",
        demo_url: ""
      },
      {
        id: 7,
        title: "Deepfake Detection System",
        description: "Developed a deepfake detection system by implementing research paper methodologies, fulfilling client requirements. Designed and implemented both backend and frontend using React for seamless integration.",
        technologies: ["Deep Learning", "Computer Vision", "React", "FastAPI", "Python"],
        github_url: "",
        demo_url: ""
      },
      {
        id: 8,
        title: "Crack and Pothole Detection System",
        description: "Developed a crack and pothole detection system by implementing YOLOv8m detection algorithm, fulfilling client requirements. Designed and implemented both backend and frontend using React for seamless integration.",
        technologies: ["YOLOv8", "Computer Vision", "React", "FastAPI", "Python"],
        github_url: "",
        demo_url: ""
      }
    ],
    experience: [
      {
        id: 1,
        title: "AI Engineer",
        company: "Codistan Ventures",
        duration: "Jan 2025 - Present",
        description: "Working as an AI Engineer at Codistan Ventures, developing various AI-powered solutions including multi-tenant SaaS platforms, chatbots, music generation systems, and computer vision applications.",
        achievements: [
          "Developing a multi-tenant document management SaaS platform with Azure AD integration",
          "Built GPT-based chatbot for car management with voice and image analysis capabilities",
          "Created AI-powered music generation pipeline using Suno/Chirp and OpenAI",
          "Developed multimodal RAG-based chatbot for e-commerce platforms",
          "Implemented voice-enabled chatbot using Google Speech-to-Text and OpenAI",
          "Built deepfake detection system using advanced computer vision techniques",
          "Developed crack and pothole detection system using YOLOv8",
          "Completed 10+ projects on Fiverr platform"
        ]
      },
      {
        id: 2,
        title: "Freelance AI Developer",
        company: "Fiverr",
        duration: "Jan 2023 - May 2024",
        description: "Worked as a freelance AI developer on Fiverr, delivering custom AI solutions including computer vision systems, deep learning models, and full-stack applications.",
        achievements: [
          "Developed deepfake detection system implementing research paper methodologies",
          "Built crack and pothole detection system using YOLOv8m",
          "Created Python Tikinter desktop application for football data visualization",
          "Delivered 10+ successful projects with high client satisfaction",
          "Gained expertise in client requirement analysis and solution delivery"
        ]
      }
    ],
    contact: {
      email: "zubairahmedqazi23@gmail.com",
      github: "",
      linkedin: "https://www.linkedin.com/in/zubair-ahmed-0a21ba22a/",
    }
  }
}

export const sendContactMessage = async (data: {
  name: string
  email: string
  message: string
}) => {
  // Simulate API call for contact form
  console.log('Contact message received:', data)

  // In a real application, you would integrate with email service or backend
  return {
    status: 'success',
    message: 'Thank you for your message! I\'ll get back to you soon.'
  }
}

