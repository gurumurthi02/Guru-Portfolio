import './App.css'
import AboutSection from './components/organisms/aboutSection'
import ContactSection from './components/organisms/contactSection'
import ExperienceSection from './components/organisms/experience'
import Footer from './components/organisms/footerSection'
import HeroSection from './components/organisms/homeSection'
import { Navbar } from './components/organisms/navbar'
import ProjectsSection from './components/organisms/projectSection'
import SkillsSection from './components/organisms/skillSection'

function App() {

  return (
    <div className=" overflow-clip min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
