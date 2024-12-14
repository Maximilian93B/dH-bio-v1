'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Globe2, Users, Languages, ArrowRight } from 'lucide-react'

const InfoSection: React.FC<{ title: string; content: string; icon: React.ReactNode; index: number }> = ({ 
  title, 
  content, 
  icon,
  index 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
      className="group p-5 md:p-6 bg-white border border-black/5 rounded-lg hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 p-2 bg-black/5 rounded-lg group-hover:bg-black/10 transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-base md:text-lg font-semibold text-black mb-2">
            {title}
          </h3>
          <p className="text-sm md:text-base text-black/70 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const About: React.FC = () => {
  const sections = [
    {
      title: "Experience",
      content: "20+ years in executive roles, specializing in finance and tech startups.",
      icon: <Award className="w-5 h-5 text-black/70" />
    },
    {
      title: "Education",
      content: "DipT, BSc., MBA - Bridging technical expertise with business acumen.",
      icon: <GraduationCap className="w-5 h-5 text-black/70" />
    },
    {
      title: "Global Impact",
      content: "Structured projects across North America, Europe, Asia, Africa, and Australia.",
      icon: <Globe2 className="w-5 h-5 text-black/70" />
    },
    {
      title: "Leadership",
      content: "C-Suite roles (CEO, CFO, CSO) and active board memberships.",
      icon: <Users className="w-5 h-5 text-black/70" />
    },
    {
      title: "Languages",
      content: "Fluent in English and Spanish for global business communication.",
      icon: <Languages className="w-5 h-5 text-black/70" />
    }
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_1px,_transparent_1px)] bg-[length:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Where Finance Meets Innovation
          </h2>
          <motion.p 
            className="text-base md:text-xl text-black/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bridging the gap between traditional finance and cutting-edge technology to drive innovation and growth.
          </motion.p>
        </motion.div>

        {/* Profile and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Section */}
          <motion.div 
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border border-black/5 rounded-lg p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-6 max-w-[240px] mx-auto">
                <Image
                  src="/david-about-pic.jpg"
                  alt="David Hanegraaf"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl md:text-3xl font-semibold text-black mb-2">
                David Hanegraaf
              </h3>
              <p className="text-base md:text-lg text-black/70">
                Financial Innovator & Tech Enthusiast
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "50+", label: "Global Projects" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className=" bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg p-4 text-center hover:bg-black/10 transition-colors duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-base md:text-lg text-white">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info Sections Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <InfoSection
                key={index}
                index={index}
                title={section.title}
                content={section.content}
                icon={section.icon}
              />
            ))}
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div 
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a 
            href="#specialties" 
            className="inline-block p-4 text-black/70 hover:text-black transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ArrowRight className="w-5 h-5 rotate-90" />
          </a>
        </motion.div>
      </div>

      {/* Decorative borders */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  )
}

export default About

