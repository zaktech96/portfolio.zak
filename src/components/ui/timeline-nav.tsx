"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  id: string;
  label: string;
}

const sections: TimelineItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'impact', label: 'Impact' },
  { id: 'capabilities', label: 'Craft' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export function TimelineNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px',
        threshold: 0
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-3 rounded-full border border-border/60 bg-background/55 px-3 py-4 shadow-sm backdrop-blur-xl">
        {sections.map(({ id, label }) => (
          <div key={id} className="group relative">
            <motion.div
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5
                         bg-card/80 backdrop-blur-md rounded-lg
                         border border-border/70 shadow-sm
                         opacity-0 -translate-x-2 group-hover:opacity-100
                         group-hover:translate-x-0 transition-all duration-300"
            >
              <span className="text-sm font-medium">{label}</span>
            </motion.div>
            <motion.button
              aria-label={`Scroll to ${label}`}
              onClick={() => {
                document.getElementById(id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                });
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300
                         ${activeSection === id
                           ? 'bg-primary scale-125 shadow-lg shadow-primary/30'
                           : 'bg-foreground/20 hover:bg-foreground/40'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            {id !== sections[sections.length - 1].id && (
              <div className="h-10 w-px bg-border/80 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
