import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const GlobalImpactHighlight: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-neutral-50/80 overflow-hidden">
      {/* Remove GridBackground component */}
      
      {/* Keep gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section - Updated styling */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/GlobalImpact.jpg"
                  alt="David Hanegraaf speaking at COP 27"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Updated overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
              </div>
              
              {/* Updated caption styling */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="text-sm font-medium tracking-wider uppercase text-emerald-200 mb-2">
                  Global Leadership Forum
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Strategic Investment Summit
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section - Updated styling */}
          <motion.div 
            className="w-full lg:w-1/2 px-2 sm:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Updated separator */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-8"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Updated typography and spacing */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-neutral-900 tracking-tight">
              Global Market Leadership
            </h1>

            <p className="text-lg text-neutral-600 leading-relaxed mb-10">
              With over two decades of experience across five continents, David Hanegraaf has led transformative initiatives in sustainable finance, technology innovation, and institutional investment. His work spans from Hong Kong&apos;s private equity markets to South Africa&apos;s digital securities, and Canada&apos;s sustainable energy sector.
            </p>

            {/* Updated list items styling */}
            <div className="space-y-4 mb-12">
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
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 flex items-center justify-center mt-1 group-hover:from-emerald-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-lg text-neutral-700 font-medium group-hover:text-neutral-900 transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Updated quote styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="relative border-l-4 border-gradient-to-b from-emerald-500 to-blue-500 pl-6 mt-8 bg-white/50 p-6 rounded-r-xl"
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

      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  )
}

export default GlobalImpactHighlight

