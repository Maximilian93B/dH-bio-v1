'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, ArrowUpRight } from 'lucide-react'

export default function MediaRecognition() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-neutral-50/70 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Text Content - Improved mobile spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 space-y-6 sm:space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-black/5 px-3 py-1.5 rounded-full text-sm text-black/70"
            >
              <Award className="w-4 h-4" />
              <span>Industry Recognition</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
            >
              Among The 10 Most Influential Tech Leaders of 2021
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-black/70 leading-relaxed"
            >
              Recognized by Analytics Insight magazine for pioneering innovation in capital markets technology and AI governance. Featured for exceptional leadership in bridging traditional finance with cutting-edge artificial intelligence solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
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
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 p-1.5 bg-black/5 rounded group-hover:bg-black/10 transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-black/70" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-base sm:text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-black/70">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Publication details - Improved mobile layout */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base pt-4"
            >
              <div className="text-black/50">As featured in</div>
              <div className="text-base sm:text-lg font-semibold text-black">Analytics Insight</div>
              <div className="text-black/50">September 2021</div>
            </motion.div>
          </motion.div>

          {/* Magazine Cover - Improved mobile image handling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none shadow-2xl">
              <Image
                src="/Dave_About.jpeg"
                alt="David Hanegraaf featured in Analytics Insight Magazine"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none border border-black/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative borders */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  )
}

