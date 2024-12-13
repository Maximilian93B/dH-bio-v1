'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Award, GraduationCap, Globe2, Users, Languages } from 'lucide-react'

// Card Component with enhanced glass effect
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <motion.div 
      className={`relative bg-black/40 backdrop-blur-xl rounded-3xl border border-yellow-500/10 overflow-hidden p-6 md:p-8 
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-yellow-500/5 before:to-transparent before:pointer-events-none
        after:absolute after:inset-0 after:bg-black/10 after:pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        boxShadow: '0 0 30px rgba(234, 179, 8, 0.15)',
        transform: 'translateY(-5px)'
      }}
    >
      {children}
    </motion.div>
  )
}

// Enhanced Separator Component
const Separator: React.FC<{ className?: string }> = ({ className = '' }) => {
  return <motion.div 
    className={`h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent ${className}`}
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 0.7 }}
  />
}

// Main About Component
const About: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  const sections = [
    {
      title: "Experience",
      content: "20+ years in executive roles, specializing in finance and tech startups.",
      icon: <Award className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Education",
      content: "DipT, BSc., MBA - Bridging technical expertise with business acumen.",
      icon: <GraduationCap className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Global Impact",
      content: "Structured projects across North America, Europe, Asia, Africa, and Australia.",
      icon: <Globe2 className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Leadership",
      content: "C-Suite roles (CEO, CFO, CSO) and active board memberships.",
      icon: <Users className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Languages",
      content: "Fluent in English and Spanish for global business communication.",
      icon: <Languages className="w-6 h-6 text-yellow-500" />
    }
  ]

  return (
    <section id="about" className="bg-gradient-to-b from-black via-black to-black/95 py-20 md:py-32 relative overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.03)_1px,_transparent_1px)] bg-[length:20px_20px]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Where Finance Meets Innovation
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Profile Card */}
          <Card className="col-span-1">
            <motion.div 
              className="relative aspect-square rounded-2xl overflow-hidden mb-8 border-2 border-yellow-500/20 max-w-[300px] mx-auto
                before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/60 before:to-transparent before:z-10"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image
                src="/david-about-pic.jpg"
                alt="David Hanegraaf"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </motion.div>
            <h2 className="text-2xl md:text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r mb-4 from-yellow-400 via-yellow-500 to-yellow-600">
              David Hanegraaf
            </h2>
            <p className="text-xl text-yellow-100/80 text-center">
              Financial Innovator & Tech Enthusiast
            </p>
          </Card>

          {/* Info Card */}
          <Card className="col-span-1 md:col-span-2">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer mb-6 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-3"
                  whileHover={{ x: 5 }}
                  onClick={() => setHoveredSection(hoveredSection === section.title ? null : section.title)}
                >
                  {section.icon}
                  <h3 className="text-xl md:text-2xl font-medium text-yellow-100 group-hover:text-yellow-400 transition-colors duration-300">
                    {section.title}
                  </h3>
                  <ChevronRight className={`w-5 h-5 text-yellow-500/50 transition-transform duration-300 ml-auto
                    ${hoveredSection === section.title ? 'rotate-90' : ''}`} />
                </motion.div>
                
                <AnimatePresence>
                  {hoveredSection === section.title && (
                    <motion.p
                      className="text-lg text-yellow-100/70 pl-14 border-l-2 border-yellow-500/30"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {section.content}
                    </motion.p>
                  )}
                </AnimatePresence>
                {index !== sections.length - 1 && <Separator className="mt-6" />}
              </motion.div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About

