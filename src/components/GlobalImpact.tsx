import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const GlobalImpactHighlight: React.FC = () => {
  return (
    <section className="relative py-16 md:py-32 bg-white overflow-hidden">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-lg overflow-hidden border border-neutral-200">
              <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]">
                <Image
                  src="/GlobalImpact.jpg"
                  alt="David Hanegraaf speaking at COP 27"
                  fill
                  className="object-cover transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Refined overlay */}
                <div className="absolute inset-0 bg-neutral-900/60" />
              </div>
              
              {/* Refined caption */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="text-sm font-medium tracking-wider uppercase text-neutral-200 mb-2">
                  Global Leadership Forum
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Strategic Investment Summit
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-1/2 px-2 sm:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Refined separator */}
            <motion.div
              className="w-24 h-px bg-neutral-300 mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-6 text-neutral-900">
              Global Market Leadership
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8">
              With over two decades of experience across five continents, David Hanegraaf has led transformative initiatives in sustainable finance, technology innovation, and institutional investment. His work spans from Hong Kong&apos;s private equity markets to South Africa&apos;s digital securities, and Canada&apos;s sustainable energy sector.
            </p>

            <div className="space-y-6 mb-10">
              {[
                "UN Sustainable Development Goals Advocate",
                "Global Capital Markets Strategist",
                "Technology & Innovation Leader",
                "Cross-Border M&A Expert"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center mt-1 group-hover:bg-neutral-200 transition-colors duration-300">
                    <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-lg text-neutral-600 font-medium group-hover:text-neutral-900 transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="border-l-2 border-neutral-200 pl-6 mt-8"
            >
              <p className="text-lg italic text-neutral-600">
                &quot;Our focus is on delivering sustainable value through strategic innovation and proven expertise in global markets.&quot;
              </p>
              <p className="mt-2 text-sm font-medium text-neutral-900">
                David Hanegraaf, Principal & CFO, Global Sustainability Fund
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced decorative borders */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  )
}

export default GlobalImpactHighlight

