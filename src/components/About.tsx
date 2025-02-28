'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Globe2, Users, TrendingUp } from 'lucide-react'


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
      className="group p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-lg hover:border-neutral-300 transition-all duration-300"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="mt-1 p-2 sm:p-3 bg-white rounded-lg group-hover:bg-neutral-200 transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
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
      title: "Global Finance Expert",
      content: "25 years driving innovation across international markets, with leadership roles in Asia, Africa, Europe and the Americas.",
      icon: <TrendingUp className="w-6 h-6 text-gray-700" />
    },
    {
      title: "Sustainable Investment",
      content: "Leading the Global Sustainability Fund, focusing on UN innovation, the 2030 Agenda, and supporting its 17 Sustainable Development Goals.",
      icon: <Award className="w-6 h-6 text-gray-700" />
    },
    {
      title: "Strategic Leadership",
      content: "Multiple C-Suite roles including CFO and CSO positions, successfully leading companies through public listings and M&A.",
      icon: <Users className="w-6 h-6 text-gray-700" />
    },
    {
      title: "Technology Innovation",
      content: "Pioneering fintech solutions and digital securities, bridging traditional finance with emerging technologies.",
      icon: <Globe2 className="w-6 h-6 text-gray-700" />
    },
    {
      title: "Capital Markets",
      content: "Extensive experience in public listings, having led multiple TSX-V listings and international market expansions.",
      icon: <GraduationCap className="w-6 h-6 text-gray-700" />
    }
  ]

  return (
    <section id="about" className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
      {/* Remove any background colors/gradients that might block the grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          >
           Combining institutional finance expertise with sustainable innovation to drive global market transformation.
          </motion.p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
          <motion.div 
            className="lg:col-span-4 space-y-4 sm:space-y-8"
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

            {/* Quick Stats - Updated based on david.md */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "25+", label: "Years Experience" },
                { value: "5", label: "Continents" },
                { value: "5+", label: "Public Listings" },
                { value: "$1B+", label: "Capital Raised" }
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
      </div>
    </section>
  )
}

export default About

