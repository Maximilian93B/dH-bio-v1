'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Award, TrendingUp, Zap, Globe, ArrowRight } from 'lucide-react'

const achievements = [
  { 
    icon: <Award className="w-10 h-10 text-yellow-500" />, 
    title: "Industry Recognition",
    text: "Featured in Marquis Who's Who 2022",
    detail: "Recognized for outstanding leadership and innovation in technology and finance."
  },
  { 
    icon: <TrendingUp className="w-10 h-10 text-yellow-500" />, 
    title: "Growth Leadership",
    text: "Led 300% growth in fintech company",
    detail: "Implemented strategic initiatives resulting in exponential revenue growth within 36 months."
  },
  { 
    icon: <Zap className="w-10 h-10 text-yellow-500" />, 
    title: "IPO Success",
    text: "Guided $500M tech startup IPO",
    detail: "Successfully navigated complex public offering process, exceeding market expectations."
  },
  { 
    icon: <Globe className="w-10 h-10 text-yellow-500" />, 
    title: "Global Impact",
    text: "Impact across 8+ countries",
    detail: "Established and scaled operations across multiple international markets."
  },
]

const Finale: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black via-black to-black/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.03)_1px,_transparent_1px)] bg-[length:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.h1 
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-2"
          >
            Achievements
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white px-2"
          >
            Proven Track Record
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Delivering exceptional results through strategic vision and execution
          </motion.p>
        </motion.div>

        <div className="flex flex-col space-y-4 md:space-y-6 max-w-4xl mx-auto mb-16 md:mb-24">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: (i) => ({
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: i * 0.15,
                    duration: 0.8,
                    ease: "easeOut"
                  }
                })
              }}
              custom={index}
              initial="hidden"
              animate={controls}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 transform transition-all duration-500 group-hover:scale-[1.02] 
                border border-yellow-500/10 group-hover:border-yellow-500/30
                shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] group-hover:shadow-[0_8px_30px_-4px_rgba(234,179,8,0.2)]">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="mb-4 sm:mb-0 sm:mr-8 transform transition-transform duration-500 group-hover:scale-110">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-yellow-400">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg mb-2">{achievement.text}</p>
                    <motion.p 
                      className="text-gray-400 text-sm sm:text-base"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: hoveredCard === index ? 1 : 0,
                        height: hoveredCard === index ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {achievement.detail}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center px-4"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 md:mb-12 text-white">
            Ready to transform your business?
          </p>
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium rounded-full 
              bg-gradient-to-r from-yellow-400 to-yellow-500 text-black 
              hover:from-yellow-500 hover:to-yellow-600
              transition-all duration-300 ease-in-out shadow-lg hover:shadow-yellow-500/25
              w-full sm:w-auto max-w-xs mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
    </section>
  )
}

export default Finale