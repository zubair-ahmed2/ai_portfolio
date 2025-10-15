import type { PortfolioData } from '../types'

// Static portfolio data
export const getPortfolioData = (): PortfolioData => {
  return {
    hero: {
      name: "Zubair Ahmed",
      title: "Full Stack AI Engineer & ML Specialist",
      tagline: "Building intelligent systems that solve real-world problems with cutting-edge AI technology",
      avatar_url: ""
    },
    about: {
      bio: "Passionate AI Engineer with two year of experience in machine learning, deep learning, and natural language processing. I specialize in building scalable AI systems and deploying production-ready models. My work spans computer vision, NLP, and reinforcement learning, with a focus on creating practical solutions that drive business value.",
      highlights: [
        "2 years of experience in AI/ML engineering",
        "Published research in Conference on Sustainability (ICSDI'24)",
        "Expert in PyTorch, TensorFlow, scikit-learn, LangChain, LangGraph, Hugging Face, OpenAI API, Keras, Docker, AWS SageMaker, MLflow, FastAPI, Flask, CI/CD Pipelines",
        "Deployed 20+ production ML models serving millions of users",
        "Developed and assisted teams in building end-to-end AI pipelines"
      ]
    },
    skills: {
      categories: [
        {
          name: "Machine Learning & AI",
          items: [
            "Deep Learning",
            "Neural Networks",
            "Computer Vision",
            "Natural Language Processing",
            "Reinforcement Learning",
            "Generative AI",
            "Transfer Learning",
            "Model Optimization"
          ]
        },
        {
          name: "Frameworks & Libraries",
          items: [
            "PyTorch",
            "TensorFlow",
            "scikit-learn",
            "LangChain",
            "OpenAI API",
            "Keras",
            "LangGraph",
            "CrewAI"
          ]
        },
        {
          name: "Programming & Tools",
          items: [
            "Python",
            "SQL",
            "CUDA",
            "Git",
            "GitHub",
            "GitLab",
            "Linux",
            "Cursor",
            "VS Code"
          ]
        },
        {
          name: "MLOps & Deployment",
          items: [
            "Docker",
            "AWS SageMaker",
            "MLflow",
            "FastAPI",
            "Flask",
            "Apache Airflow",
            "CI/CD Pipelines"
          ]
        }
      ]
    },
    projects: [
      {
        id: 1,
        title: "LLM-Powered AI Assistant",
        description: "Developed an intelligent chatbot using GPT-4 and LangChain with custom retrieval-augmented generation (RAG) for domain-specific knowledge. Implemented vector databases and semantic search for accurate context retrieval. Achieved 92% user satisfaction rate.",
        technologies: ["Python", "LangChain", "OpenAI API", "FastAPI", "PostgreSQL", "pgvector", "Docker"],
        github_url: "https://github.com",
        demo_url: "https://example.com"
      },
      {
        id: 2,
        title: "Real-time Object Detection System",
        description: "Built a high-performance real-time object detection system using YOLOv8 deployed as a REST API. Optimized for edge deployment with 30+ FPS on standard hardware. Integrated with video streaming pipeline for surveillance applications.",
        technologies: ["PyTorch", "YOLOv8", "OpenCV", "FastAPI", "Docker", "NVIDIA TensorRT"],
        github_url: "https://github.com",
        demo_url: "https://example.com"
      },
      {
        id: 3,
        title: "Sentiment Analysis Pipeline",
        description: "Created an end-to-end sentiment analysis pipeline for social media data with automated retraining and monitoring. Implemented BERT-based models with fine-tuning on custom datasets. Achieved 89% accuracy on multi-class sentiment classification.",
        technologies: ["Transformers", "Hugging Face", "MLflow", "Apache Airflow", "AWS", "PostgreSQL"],
        github_url: "https://github.com",
        demo_url: "https://example.com"
      },
      {
        id: 4,
        title: "Neural Style Transfer Application",
        description: "Implemented an artistic style transfer application using deep convolutional neural networks. Optimized inference time by 60% using model quantization and pruning. Built an interactive web interface for real-time style application.",
        technologies: ["PyTorch", "CNN", "Flask", "React", "Docker", "ONNX Runtime"],
        github_url: "https://github.com",
        demo_url: "https://example.com"
      },
      {
        id: 5,
        title: "Predictive Maintenance ML Model",
        description: "Developed a predictive maintenance system using time-series analysis and ensemble methods. Reduced equipment downtime by 35% through early anomaly detection. Deployed on AWS with automated retraining pipeline.",
        technologies: ["scikit-learn", "XGBoost", "Pandas", "AWS SageMaker", "Lambda", "S3"],
        github_url: "https://github.com",
        demo_url: "https://example.com"
      },
      {
        id: 6,
        title: "Image Segmentation for Medical Imaging",
        description: "Built a U-Net based image segmentation model for medical image analysis. Achieved state-of-the-art accuracy on CT scan segmentation. Collaborated with medical professionals to ensure clinical applicability.",
        technologies: ["PyTorch", "U-Net", "Albumentations", "MONAI", "Flask", "PostgreSQL"],
        github_url: "https://github.com",
        demo_url: "https://example.com"
      }
    ],
    experience: [
      {
        id: 1,
        title: "Senior AI Engineer",
        company: "TechCorp AI Solutions",
        duration: "2022 - Present",
        description: "Leading AI initiatives and building production-ready ML systems for enterprise clients. Managing a team of 5 ML engineers and driving best practices in MLOps and model deployment.",
        achievements: [
          "Improved model accuracy by 25% through advanced feature engineering and ensemble methods",
          "Reduced inference latency by 40% through model optimization and quantization",
          "Led the development of a computer vision system processing 1M+ images daily",
          "Established MLOps practices reducing deployment time from weeks to hours",
          "Mentored 10+ junior engineers in ML best practices"
        ]
      },
      {
        id: 2,
        title: "Machine Learning Engineer",
        company: "AI Innovations Inc",
        duration: "2020 - 2022",
        description: "Developed and deployed machine learning models for various applications including NLP, computer vision, and recommendation systems. Collaborated with cross-functional teams to integrate ML solutions into products.",
        achievements: [
          "Built and deployed 15+ production ML models serving 500K+ users",
          "Implemented CI/CD pipelines for automated model testing and deployment",
          "Reduced cloud infrastructure costs by 30% through optimization",
          "Developed a recommendation system increasing user engagement by 45%",
          "Created reusable ML components reducing development time by 50%"
        ]
      },
      {
        id: 3,
        title: "AI Research Engineer",
        company: "Research Labs",
        duration: "2019 - 2020",
        description: "Conducted research in deep learning and published papers on novel architectures for computer vision tasks. Implemented and tested cutting-edge algorithms from recent papers.",
        achievements: [
          "Published 3 papers in top-tier conferences (NeurIPS, ICML, CVPR)",
          "Developed novel attention mechanisms improving model performance by 15%",
          "Open-sourced research implementations with 1000+ GitHub stars",
          "Collaborated with industry partners on transfer learning projects",
          "Presented research findings at international conferences"
        ]
      }
    ],
    contact: {
      email: "zubairahmeddev02@gmail.com",
      github: "https://github.com/zubair-ahmed2",
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

