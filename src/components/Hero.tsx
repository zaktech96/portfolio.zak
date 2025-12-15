import { useTheme } from '../context/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { GooeyText } from './ui/gooey-text-morphing'
import { TextScramble } from './ui/text-scramble'
import { ScrollIndicator } from './ui/scroll-indicator'

const Hero = () => {
  const { theme, toggleTheme } = useTheme()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/zaktech96',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/zakariye-sahid-855b94151/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Zaktech96',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Theme Toggle - Centered */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={toggleTheme}
          className="p-4 rounded-full hover:bg-muted text-foreground/80 hover:text-foreground transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Orbital elements */}
      
<div className="orbit-container">
  <div 
    className="orbit-element w-32 h-32 top-[15%] left-[15%] bg-emerald-500/40 border-emerald-400/50" 
    style={{ animationDelay: '-2s' }}
  />
  <div 
    className="orbit-element w-24 h-24 top-[60%] right-[20%] bg-emerald-500/40 border-emerald-400/50" 
    style={{ animationDelay: '-4s' }}
  />
  <div 
    className="orbit-element w-16 h-16 bottom-[20%] left-[25%] bg-emerald-500/40 border-emerald-400/50" 
    style={{ animationDelay: '-6s' }}
  />
  <div 
    className="orbit-element w-20 h-20 top-[30%] right-[25%] bg-emerald-500/40 border-emerald-400/50" 
    style={{ animationDelay: '-8s' }}
  />
</div>

{/* Background blur effects */}
<div className="absolute inset-0 -z-10">
  <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl animate-pulse" />
  <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
</div>


      {/* Background blur effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="space-y-8 pt-24">
          <GooeyText 
            texts={[
              "Hi, I'm Zakariye",
              "I build things for the web"
            ]}
            className="h-24 mb-8"
            textClassName="text-primary font-bold"
          />

          {/* Role */}
          <div className="py-2">
            <TextScramble
              className="text-2xl md:text-3xl text-foreground/90 font-medium"
              trigger={true}
              duration={1.2}
              speed={0.05}
            >
              Full Stack Developer | Problem Solver | Freelancer
            </TextScramble>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card text-foreground/80 
                hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg 
                hover:-translate-y-0.5"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-24">
            <div className="flex justify-center gap-6">
              <a 
                href="#projects" 
                className="button-primary"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="button-secondary"
              >
                Get in Touch
              </a>
            </div>

            {/* Scroll indicator with more spacing */}
            <div className="pb-16">
              <ScrollIndicator />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 