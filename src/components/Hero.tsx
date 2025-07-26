'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TypewriterEffect } from '@/components/ui/text-animation-typewriter'
import { getSocialLinks } from '@/utils/socialLinks'


//  MinimalBars Component
const MinimalBars: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-72 opacity-20">
      <div className="flex items-end h-full gap-1">
        {Array.from({ length: 40 }).map((_, i) => {
          const gradientClass = i % 3 === 0 
            ? "bg-gradient-to-t from-primary-600/40 via-primary-500/30 to-primary-400/20"
            : i % 3 === 1
            ? "bg-gradient-to-t from-secondary-600/40 via-secondary-500/30 to-secondary-400/20"
            : "bg-gradient-to-t from-primary-500/40 via-primary-400/30 to-secondary-400/20";
          
          return (
            <motion.div
              key={i}
              className={`hidden sm:block flex-1 rounded-t ${gradientClass}`}
              initial={{ height: '20%' }}
              animate={{ 
                height: `${30 + Math.random() * 50}%`,
              }}
              transition={{
                height: {
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.08,
                },
              }}
            />
          );
        })}
        
        {/* Mobile bars with enhanced gradients */}
        {Array.from({ length: 20 }).map((_, i) => {
          const gradientClass = i % 3 === 0 
            ? "bg-gradient-to-t from-primary-600/40 via-primary-500/30 to-primary-400/20"
            : i % 3 === 1
            ? "bg-gradient-to-t from-secondary-600/40 via-secondary-500/30 to-secondary-400/20"
            : "bg-gradient-to-t from-primary-500/40 via-primary-400/30 to-secondary-400/20";
          
          return (
            <motion.div
              key={i}
              className={`block sm:hidden flex-1 rounded-t ${gradientClass}`}
              initial={{ height: '20%' }}
              animate={{ 
                height: `${30 + Math.random() * 50}%`,
              }}
              transition={{
                height: {
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.08,
                },
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
  
  const socialLinks = getSocialLinks("w-6 h-6")


  return (
    <section ref={containerRef} className="relative py-16 sm:py-24 md:py-32 min-h-screen flex items-center overflow-hidden">
      <MinimalBars />
      
      <motion.div
        className="absolute bottom-20 right-10 sm:bottom-40 sm:right-40 w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-gradient-to-r from-secondary-400/10 to-primary-400/10 blur-2xl sm:blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6 inline-block relative">
              <span className="text-neutral-900">
                David Hanegraaf
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 sm:mb-8 h-16 sm:h-20 flex items-center justify-center"
          >
            <TypewriterEffect 
              words={titles}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900"
              typingSpeed={100}
              duration={1500}
              deletingSpeed={50}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 sm:mt-8 max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-700 leading-relaxed font-light px-4 sm:px-0"
          >
            Senior financial executive with 25+ years of experience in global capital markets, sustainability investments, and technology innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 text-neutral-600 hover:text-primary-700 transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                aria-label={link.label}
              >
                <span className="absolute inset-0 rounded-xl bg-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">{link.icon}</span>
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Modern decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" />
    </section>
  )
}

export default Hero

