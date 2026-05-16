import { ThemeProvider } from './context/ThemeContext'
import Hero from './components/Hero'
import ProductSignals from './components/ProductSignals'
import About from './components/About'
import Impact from './components/Impact'
import Capabilities from './components/Capabilities'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { TimelineNav } from './components/ui/timeline-nav'

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <Navbar />
        <TimelineNav />
        <div className="min-h-screen">
          <main>
            <Hero />
            <ProductSignals />
            <About />
            <Impact />
            <Capabilities />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
