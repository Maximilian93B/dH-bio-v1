'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, ArrowUpRight } from 'lucide-react'

export default function MediaRecognition() {
  return (
    <section className="py-20 sm:py-28 md:py-36 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
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
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 rounded-full text-sm font-medium text-primary-800"
            >
              <Award className="w-4 h-4" />
              <span>Industry Recognition</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900"
            >
             The 10 Most Influential Tech Leaders of 2021
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light"
            >
             Recognized by Analytics Insight magazine for pioneering innovation in capital markets and blockchain technologies. Featured for leadership in bridging traditional finance with cutting-edge digital securities solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3 sm:space-y-4"
            >
              {[
                {
                  title: "Digital Securities are the Future of Capital Markets",
                  description: "The speed, transparency, and efficiency of digital securities versus traditional equities makes them a foregone conclusion as the backbone of Capital Markets of the future"
                },
                {
                  title: "Surround Yourself With The Best",
                  description: "Create your team with like-minded people who have complimentary skill sets, rely on them, and the rest will do itself"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 group glass rounded-xl p-4 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-2 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-base text-neutral-600">
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
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 text-sm pt-6"
            >
              <div className="text-neutral-500 font-medium">As featured in</div>
              <div className="text-lg font-semibold text-primary-700">Analytics Insight</div>
              <div className="text-neutral-500 font-medium">September 2021</div>
            </motion.div>
          </motion.div>

          {/* Magazine Cover - Improved responsive image handling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] w-full max-w-[320px] sm:max-w-sm mx-auto lg:max-w-none rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/Dave_About.jpeg"
                alt="David Hanegraaf featured in Analytics Insight Magazine"
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 45vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

