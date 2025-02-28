'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, ArrowUpRight } from 'lucide-react'

export default function MediaRecognition() {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Text Content - Improved spacing and typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 space-y-4 sm:space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-black/[0.03] backdrop-blur-[2px] px-3 py-1.5 rounded-full text-sm text-black/70"
            >
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Industry Recognition</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black"
            >
             The 10 Most Influential Tech Leaders of 2021
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-black/70 leading-relaxed"
            >
             Recognized by Analytics Insight magazine for pioneering innovation in capital markets and innovative technologies. Featured for leadership in bridging traditional finance with cutting-edge blockchain securities solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3 sm:space-y-4"
            >
              {[
                {
                  title: "Strive For Success",
                  description: "Leveraging AI Strategies and AI Governance in Organizations"
                },
                {
                  title: "Essential Leadership",
                  description: "Skills to Inculcate in the Age of AI"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-2 sm:gap-3 group"
                >
                  <div className="flex-shrink-0 p-1.5 bg-black/[0.03] rounded group-hover:bg-black/[0.05] transition-colors duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black/70" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-black/70">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Publication details - Improved responsive layout */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base pt-2 sm:pt-4"
            >
              <div className="text-black/50">As featured in</div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-black">Analytics Insight</div>
              <div className="text-black/50">September 2021</div>
            </motion.div>
          </motion.div>

          {/* Magazine Cover - Improved responsive image handling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] w-full max-w-[280px] sm:max-w-sm mx-auto lg:max-w-none shadow-lg">
              <Image
                src="/Dave_About.jpeg"
                alt="David Hanegraaf featured in Analytics Insight Magazine"
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 45vw"
                className="object-cover rounded-lg backdrop-blur-[2px]"
                priority
              />
              <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none border border-black/[0.05]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

