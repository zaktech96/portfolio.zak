"use client";

import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiDocker, SiAmazon, SiVercel,
  SiJavascript, SiSupabase, SiPrisma, SiVite
} from 'react-icons/si';
import { LightBulbIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';

// Custom icon components for technologies without react-icons
const ConvexIcon = () => (
  <svg className="w-5 h-5" fill="#FFD700" viewBox="0 0 24 24">
    <path d="M12 0L0 6v12l12 6 12-6V6L12 0zm0 2.18l9 4.5v9l-9 4.5-9-4.5v-9l9-4.5zm0 2.16L4.5 8.1v7.8L12 19.66l7.5-3.76V8.1L12 4.34z"/>
  </svg>
);

const ClerkIcon = () => (
  <svg className="w-5 h-5" fill="#6C47FF" viewBox="0 0 24 24">
    <path d="M12 22.75c-3.92 0-7.36-2.91-7.36-6.65 0-1.97 1.18-4.76 3.51-8.3a.74.74 0 0 1 1.01-.27c.35.2.47.64.27.99-2.14 3.27-3.23 5.84-3.23 7.58 0 3.01 2.87 5.4 6.11 5.4s6.11-2.39 6.11-5.4c0-1.74-1.09-4.31-3.23-7.58a.74.74 0 0 1 .27-.99c.35-.2.79-.08.99.27 2.33 3.54 3.51 6.33 3.51 8.3 0 3.74-3.44 6.65-7.36 6.65zM12 1.25a.74.74 0 0 1 .75.75v7a.75.75 0 1 1-1.5 0V2a.74.74 0 0 1 .75-.75z"/>
  </svg>
);

const ReactRouterIcon = () => (
  <svg className="w-5 h-5" fill="#CA4245" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6S17.302 21.6 12 21.6 2.4 17.302 2.4 12 6.698 2.4 12 2.4z"/>
  </svg>
);

const FramerMotionIcon = () => (
  <svg className="w-5 h-5" fill="#0055FF" viewBox="0 0 24 24">
    <path d="M12 0L0 12l12 12 12-12L12 0zm0 2.828L21.172 12 12 21.172 2.828 12 12 2.828z"/>
  </svg>
);

const PolarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const ResendIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const skills = [
  { 
    name: 'Frontend', 
    items: [
      { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'React Router v7', icon: <ReactRouterIcon /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      { 
        name: 'JavaScript', 
        icon: <SiJavascript className="text-[#F7DF1E] bg-[#0c0c0b] rounded-sm" />,
        textClassName: "text-black dark:text-white font-semibold"
      },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'Framer Motion', icon: <FramerMotionIcon /> }
    ]
  },
  { 
    name: 'Backend', 
    items: [
      { name: 'Convex', icon: <ConvexIcon /> },
      { name: 'Clerk', icon: <ClerkIcon /> },
      { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: 'Express', icon: <SiExpress className="text-black dark:text-white" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
      { name: 'Prisma', icon: <SiPrisma className="text-[#2D3748]" /> },
      { name: 'Polar.sh', icon: <PolarIcon /> },
      { name: 'Resend', icon: <ResendIcon /> }
    ]
  },
  { 
    name: 'Tools', 
    items: [
      { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
      { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
      { name: 'AWS', icon: <SiAmazon className="text-[#FF9900]" /> },
      { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
      { name: 'Vite', icon: <SiVite className="text-[#646CFF]" /> }
    ]
  },
  { 
    name: 'Soft Skills', 
    items: [
      { name: 'Problem Solving', icon: <LightBulbIcon className="w-5 h-5 text-primary" /> },
      { name: 'Communication', icon: <ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-primary" /> },
      { name: 'Team Work', icon: <UserGroupIcon className="w-5 h-5 text-primary" /> },
      { name: 'Adaptability', icon: <SparklesIcon className="w-5 h-5 text-primary" /> }
    ]
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate Full Stack Developer with a keen eye for design and a love for creating
              seamless user experiences. With years of experience in web development, I specialise in
              building modern, responsive, and scalable applications.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a career focused on
              solving complex problems through elegant solutions. I believe in writing clean,
              maintainable code and staying up-to-date with the latest technologies.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Projects Completed', value: '10+' },
                { label: 'Years Experience', value: '2+' },
                { label: 'Technologies', value: '5+' },
                { label: 'Communities involved in', value: '5+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-card/70 dark:bg-card/50 backdrop-blur-sm p-4 rounded-lg 
                             shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-2xl font-bold text-primary/90">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-card/70 dark:bg-card/50 backdrop-blur-sm p-6 rounded-lg 
                           shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">{category.name}</h3>
                <div className="space-y-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * skillIndex }}
                      className="flex items-center gap-3 px-4 py-2 bg-primary/20 dark:bg-primary/10 rounded-lg 
                                 hover:bg-primary/30 dark:hover:bg-primary/20 transition-colors"
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className={`text-sm text-foreground/90 ${skill.textClassName || ''}`}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default About; 