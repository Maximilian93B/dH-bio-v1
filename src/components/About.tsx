'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Globe2, Users, TrendingUp, ArrowRight } from 'lucide-react'

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
      className="group p-6 md:p-8 bg-white border border-neutral-200 rounded-lg hover:border-neutral-300 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 p-3 bg-neutral-100 rounded-lg group-hover:bg-neutral-200 transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-2">
            {title}
          </h3>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
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
      title: "Fintech Pioneer",
      content: "20+ years driving innovation at the intersection of finance and technology.",
      icon: <TrendingUp className="w-6 h-6 text-gray-700" />
    },
    {
      title: "Executive Leadership",
      content: "C-Suite roles (CEO, CFO, CSO) in multiple successful Fintech startups.",
      icon: <Award className="w-6 h-6 text-gray-700" />
    },
    {
      title: "Global Impact",
      content: "Led transformative Fintech projects across North America, Europe, and Asia.",
      icon: <Globe2 className="w-6 h-6 text-gray-700" />
    },
    {
      title: "Thought Leadership",
      content: "Regular speaker at global Fintech conferences and active board member.",
      icon: <Users className="w-6 h-6 text-gray-700" />
    },
    {
      title: "Education",
      content: "MBA in Finance, BSc in Computer Science - Bridging technology with financial acumen.",
      icon: <GraduationCap className="w-6 h-6 text-gray-700" />
    }
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative">
      {/* Subtle background pattern - more refined */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Strategic Financial Leadership
          </h2>
          <motion.p 
            className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Delivering exceptional value through strategic innovation and proven expertise in institutional finance and technology.
          </motion.p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div 
            className="lg:col-span-4 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border border-neutral-200 rounded-lg p-8 md:p-10 text-center">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-8 max-w-[280px] mx-auto border-2 border-neutral-100">
                <Image
                  src="/david-about-pic.jpg"
                  alt="David Hanegraaf"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                David Hanegraaf
              </h3>
              <p className="text-lg md:text-xl text-neutral-600">
                Investment Strategist & Technology Pioneer
              </p>
            </div>

            {/* Quick Stats - More refined styling */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "20+", label: "Years of Excellence" },
                { value: "$500M+", label: "Capital Deployed" },
                { value: "5", label: "Strategic Exits" },
                { value: "30+", label: "Global Markets" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="bg-white border border-neutral-200 rounded-lg p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                  <div className="text-sm md:text-base text-neutral-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info Sections Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Removed decorative borders and simplified scroll arrow */}
        <motion.div 
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a 
            href="#specialties" 
            className="inline-block p-4 text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ArrowRight className="w-6 h-6 rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About

