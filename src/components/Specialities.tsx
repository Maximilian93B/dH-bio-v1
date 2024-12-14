'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const specialties = [
  { 
    title: "Corporate Finance", 
    description: "Structuring complex deals and optimizing capital allocation for maximum shareholder value."
  },
  { 
    title: "Tech Start-ups", 
    description: "Launching and scaling innovative companies from concept to market leadership."
  },
  { 
    title: "Capital Raising", 
    description: "Securing strategic funding from venture capital, private equity, and public markets."
  },
  { 
    title: "Operations Management", 
    description: "Implementing efficient systems and processes to drive organizational excellence."
  },
  { 
    title: "Public Listings", 
    description: "Guiding companies through IPO processes and maintaining strong investor relations."
  },
  { 
    title: "Renewable Energy", 
    description: "Developing and financing sustainable energy projects for a greener future."
  }
]

export default function Specialties() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="specialties" ref={ref} className="py-16 md:py-24 bg-white relative overflow-hidden">
     
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Areas of Expertise
          </h2>
          <motion.p 
            className="text-base md:text-xl text-black/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Leveraging decades of experience to drive innovation and growth across industries
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }
                })
              }}
              custom={index}
              initial="hidden"
              animate={controls}
              className="relative"
            >
              <motion.div 
                className="p-5 md:p-6 rounded-lg bg-white border border-black/5 
                  hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-black">
                    {specialty.title}
                  </h3>
                  <button
                    onClick={() => toggleExpand(index)}
                    aria-expanded={expandedIndex === index}
                    aria-controls={`specialty-description-${index}`}
                    className="text-black/60 hover:text-black transition-colors duration-300 
                      focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2 rounded-full p-1"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        expandedIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedIndex === index ? 'auto' : 0,
                    opacity: expandedIndex === index ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  id={`specialty-description-${index}`}
                >
                  <p className="text-sm md:text-base text-black/70 leading-relaxed">
                    {specialty.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative borders */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  )
}

