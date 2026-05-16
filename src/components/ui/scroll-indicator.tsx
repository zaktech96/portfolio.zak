"use client";

import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      aria-label="Scroll to About section"
      className="group inline-flex flex-col items-center gap-6 rounded-lg px-5 py-3 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <span className="text-base md:text-lg text-foreground/60 font-medium transition-colors group-hover:text-foreground">
        Explore
      </span>
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDownIcon className="w-8 h-8 md:w-10 md:h-10 text-primary transition-transform group-hover:translate-y-1" />
      </motion.div>
    </motion.a>
  );
}
