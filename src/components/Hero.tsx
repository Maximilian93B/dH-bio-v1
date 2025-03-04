'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Linkedin, Mail, Instagram } from 'lucide-react'

// Modern Title Transition Component
const ModernTitleTransition: React.FC<{ titles: string[] }> = ({ titles }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="h-16 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
        >
          {titles[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

//  MinimalBars Component
const MinimalBars: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-72 opacity-[0.35]">
      <div className="flex items-end h-full gap-[2px] sm:gap-[2px]">
        {Array.from({ length: 40 }).map((_, i) => {
          const gradientClass = i % 3 === 0 
            ? "bg-gradient-to-t from-emerald-500 via-emerald-400 to-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.35)]"
            : i % 3 === 1
            ? "bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.35)]"
            : "bg-gradient-to-t from-teal-500 via-teal-400 to-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.35)]";
          
          return (
            <motion.div
              key={i}
              className={`hidden sm:block flex-1 ${gradientClass}`}
              initial={{ height: '20%' }}
              animate={{ 
                height: `${20 + Math.random() * 60}%`,
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                height: {
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.05,
                },
                opacity: {
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.05,
                }
              }}
            />
          );
        })}
        
        {/* Mobile bars with enhanced gradients */}
        {Array.from({ length: 20 }).map((_, i) => {
          const gradientClass = i % 3 === 0 
            ? "bg-gradient-to-t from-emerald-500 via-emerald-400 to-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.35)]"
            : i % 3 === 1
            ? "bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.35)]"
            : "bg-gradient-to-t from-teal-500 via-teal-400 to-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.35)]";
          
          return (
            <motion.div
              key={i}
              className={`block sm:hidden flex-1 ${gradientClass}`}
              initial={{ height: '20%' }}
              animate={{ 
                height: `${20 + Math.random() * 60}%`,
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                height: {
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.05,
                },
                opacity: {
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.05,
                }
              }}
            />
          );
        })}
      </div>
    </div>
  )
}

// Main Hero Component
const Hero: React.FC = () => {
  const titles = [
    "Principal",
    "CFO",
    "Global Finance Expert",
    "Sustainability Leader",
  ]
  
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -100])

  const socialLinks = [
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: "https://www.linkedin.com/in/david-hanegraaf/",
      label: "LinkedIn"
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      href: "mailto:David.hanegraaf@hec.ca",
      label: "Email"
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      href: "https://www.instagram.com/dave_hanegraaf999/profilecard/?igsh=NGxtMGYxYnBmZTNy",
      label: "Instagram"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-24 min-h-screen flex items-center overflow-hidden">
      <MinimalBars />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50 pointer-events-none" />
      
      {/* Floating orbs with modern gradients */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-400/20 blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-emerald-400/20 blur-2xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 inline-block relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-black to-black/80">
                David Hanegraaf
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <ModernTitleTransition titles={titles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-black leading-relaxed"
          >
            Senior financial executive with 25+ years of experience in global capital markets, sustainability investments, and technology innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center gap-6 mt-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black/80 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Modern decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
    </section>
  )
}

export default Hero

