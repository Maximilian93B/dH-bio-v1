'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-black via-black to-black/95 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.03)_1px,_transparent_1px)] bg-[length:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
              Areas of Expertise
            </span>
          </h2>
          <motion.p 
            className="mt-6 text-lg md:text-xl text-yellow-100/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Leveraging decades of experience to drive innovation and growth across industries
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: "easeOut"
                  }
                })
              }}
              custom={index}
              initial="hidden"
              animate={controls}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative p-6 md:p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-yellow-500/10 
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-yellow-500/5 before:to-transparent before:pointer-events-none
                after:absolute after:inset-0 after:bg-black/10 after:pointer-events-none
                group-hover:border-yellow-500/30 transition-all duration-300">
                
                <h3 className="text-2xl md:text-3xl font-semibold text-yellow-100 mb-4 flex items-center gap-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {specialty.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                
                <p className="text-base md:text-lg text-yellow-100/70 leading-relaxed">
                  {specialty.description}
                </p>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={hoveredIndex === index ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
    </section>
  )
}

