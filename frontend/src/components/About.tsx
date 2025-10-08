import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import type { AboutData } from '../types'
import './About.css'

interface AboutProps {
  data: AboutData
}

const About = ({ data }: AboutProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-bio">{data.bio}</p>
            
            <div className="about-highlights">
              {data.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="highlight-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="highlight-icon">✓</div>
                  <p>{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="code-window">
              <div className="window-header">
                <div className="window-buttons">
                  <span className="btn-close"></span>
                  <span className="btn-minimize"></span>
                  <span className="btn-maximize"></span>
                </div>
                <div className="window-title">ai_engineer.py</div>
              </div>
              <div className="window-content">
                <pre>
{`class AIEngineer:
    def __init__(self):
        self.passion = "AI & ML"
        self.focus = "Innovation"
    
    def solve_problems(self):
        return "Creative Solutions"
    
    def build_systems(self):
        return "Scalable & Efficient"
    
    def continuous_learning(self):
        while True:
            self.skills += 1
            self.impact += 1`}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

