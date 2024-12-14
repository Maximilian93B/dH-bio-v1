import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const GlobalImpactHighlight: React.FC = () => {
  return (
    <section className="relative py-16 md:py-32 bg-white overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_1px,_transparent_1px)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Enhanced Image Section */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-black/5 border border-black/5 shadow-2xl">
              {/* Aspect ratio container */}
              <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]">
                <Image
                  src="/Untitled design.png"
                  alt="David Hanegraaf speaking at COP 27"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105 hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              </div>
              
              {/* Enhanced image caption */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="text-sm font-medium tracking-wider uppercase text-emerald-400 mb-2">
                  COP 27 Climate Change
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Global Innovation Hub
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div 
            className="w-full lg:w-1/2 px-2 sm:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative elements */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-black/90 to-black/80">
              Global Sustainability Impact
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              David Hanegraaf has been at the forefront of global sustainability efforts, leveraging his expertise in technology and finance to drive meaningful change. His work with the United Nations and participation in key global forums like COP 27 demonstrate his commitment to addressing climate change and promoting sustainable development worldwide.
            </p>

            <div className="space-y-6 mb-10">
              {[
                "Speaker at COP 27 Climate Change Global Innovation Hub",
                "Advisor on UN Sustainable Development Goals",
                "Pioneer in renewable energy project financing",
                "Advocate for sustainable technology adoption"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-lg text-gray-700 font-medium group-hover:text-black transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a
                href="#sustainability-projects"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full text-white bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/20"
              >
                Explore Sustainability Projects
                <svg className="ml-2 -mr-1 w-5 h-5 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
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

