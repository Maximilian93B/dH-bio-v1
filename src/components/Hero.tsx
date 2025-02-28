'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform} from 'framer-motion'
import { Linkedin, Mail, Instagram } from 'lucide-react'

// TypewriterEffect Component
const TypewriterEffect: React.FC<{ items: string[], interval: number }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentWord = items[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % items.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, items]);

  return (
    <div className="h-16 flex items-center justify-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
        {text}
        <span className="animate-pulse ml-1">|</span>
      </h2>
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
      href: "https://linkedin.com/in/davidhanegraaf",
      label: "LinkedIn"
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      href: "mailto:david@hanegraaf.com",
      label: "Email"
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      href: "https://www.instagram.com/dave_hanegraaf999/profilecard/?igsh=NGxtMGYxYnBmZTNy",
      label: "Instagram"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-24 bg-gradient-to-b from-white/90 to-neutral-50/70 min-h-screen flex items-center overflow-hidden">
      <MinimalBars />
      
      {/* Reduce opacity of gradient overlays to make grid more visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/30 to-transparent pointer-events-none" />
      
      {/* Floating orbs with reduced opacity */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 rounded-full bg-black/10 blur-xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-32 h-32 rounded-full bg-black/5 blur-2xl"
        animate={{
          y: [0, -30, 0],
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
            <TypewriterEffect 
              items={titles} 
              interval={3000} 
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-black leading-relaxed"
          >
           "Senior financial executive with 25+ years of experience in global markets, sustainability investments, and technology innovation.
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
                className="text-black hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
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
      
      {/* Add matching decorative elements at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  )
}

export default Hero

