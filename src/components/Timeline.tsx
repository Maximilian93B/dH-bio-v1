'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'

const timelineEvents = [
  { year: 2022, event: "Featured in Marquis Who's Who", details: "Recognized for outstanding contributions to the tech industry and business leadership." },
  { year: 2021, event: "Named one of the 10 Most Influential Tech Leaders", details: "Honored by Analytics Insights Magazine for innovative approaches in fintech." },
  { year: 2021, event: "Recognized in Top 100 People in Finance Magazine", details: "Acknowledged for pioneering work in financial technology and corporate strategy." },
  { year: 2020, event: "Led successful IPO for tech startup", details: "Guided a cutting-edge AI company through a $500M initial public offering." },
  { year: 2018, event: "Launched renewable energy venture", details: "Co-founded a solar energy startup, securing $50M in Series A funding." },
  { year: 2015, event: "Appointed as CEO of major fintech company", details: "Took the helm of a leading financial technology firm, driving 300% growth in 3 years." },
  { year: 2010, event: "Began serving on multiple corporate boards", details: "Started advisory roles for tech startups and established corporations." },
  { year: 2005, event: "Completed MBA", details: "Graduated with distinction, focusing on international business and technology management." },
  { year: 2000, event: "Started first tech company", details: "Founded a software development firm specializing in e-commerce solutions." }
]

const Timeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.01)_1px,_transparent_1px)] bg-[length:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
            Career Milestones
          </h2>
          <motion.p 
            className="text-base md:text-xl text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A journey of innovation, leadership, and transformative achievements
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12"> 
          <div className="lg:w-2/3">
            <div className="relative">
              <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-px h-full w-0.5 bg-neutral-200"></div>
              {timelineEvents.map((event, index) => (
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
                  className="mb-6 md:mb-8 flex flex-col lg:flex-row items-start lg:items-center w-full pl-16 lg:pl-0"
                >
                  <div className="lg:w-5/12 lg:text-right pr-8 mb-2 lg:mb-0">
                    <h3 className="text-lg md:text-xl font-bold text-neutral-900">{event.year}</h3>
                  </div>
                  <div className="absolute left-6 lg:static lg:w-2/12 flex justify-start lg:justify-center">
                    <motion.div 
                      className="w-4 h-4 bg-neutral-900 rounded-full cursor-pointer flex items-center justify-center"
                      whileHover={{ scale: 1.2, backgroundColor: "#404040" }}
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      <motion.span
                        initial={{ rotate: 0 }}
                        animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white font-bold text-sm leading-none flex items-center justify-center"
                        style={{ 
                          height: '16px',
                          marginTop: '-1px'
                        }}
                      >
                        +
                      </motion.span>
                    </motion.div>
                  </div>
                  <div className="lg:w-5/12 pl-0 lg:pl-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="text-base md:text-lg font-semibold text-neutral-900 mb-2">{event.event}</p>
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm md:text-base text-neutral-600"
                          >
                            {event.details}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <div className="sticky top-32">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-sm border border-neutral-200">
                <Image
                  src="/Dave_About.jpeg"
                  alt="David Hanegraaf"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-200" />
      <div className="absolute top-0 left-0 w-full h-px bg-neutral-200" />
    </section>
  )
}

export default Timeline

