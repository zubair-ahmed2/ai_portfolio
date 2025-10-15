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
  // Load static portfolio data directly
  const data: PortfolioData = getPortfolioData()

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

export default App

