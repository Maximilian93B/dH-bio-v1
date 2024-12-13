'use client'

import { useEffect, useRef , useState} from 'react'
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
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-black via-black to-black/95 relative overflow-hidden">
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
              Career Milestones
            </span>
          </h2>
          <motion.p 
            className="mt-6 text-lg md:text-xl text-yellow-100/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A journey of innovation, leadership, and transformative achievements
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:hidden mb-8 px-4">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl border border-yellow-500 max-w-[300px] mx-auto">
              <Image
                src="/Dave_About.jpeg"
                alt="David Hanegraaf"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="lg:w-2/3 pr-0 lg:pr-12">
            <div className="relative">
              <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-px h-full w-0.5 bg-gradient-to-b from-yellow-500/50 via-yellow-500/30 to-transparent"></div>
              {timelineEvents.map((event, index) => (
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
                  className="mb-8 md:mb-12 flex flex-col lg:flex-row items-start lg:items-center w-full pl-16 lg:pl-0"
                >
                  <div className="lg:w-5/12 lg:text-right pr-8 mb-2 lg:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-yellow-500">{event.year}</h3>
                  </div>
                  <div className="absolute left-6 lg:static lg:w-2/12 flex justify-start lg:justify-center">
                    <motion.div 
                      className="w-4 h-4 md:w-5 md:h-5 bg-yellow-500 rounded-full cursor-pointer flex items-center justify-center"
                      whileHover={{ scale: 1.2, backgroundColor: "#FCD34D" }}
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      <motion.span
                        initial={{ rotate: 0 }}
                        animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-black font-bold text-base md:text-lg"
                      >
                        +
                      </motion.span>
                    </motion.div>
                  </div>
                  <div className="lg:w-5/12 pl-0 lg:pl-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-lg md:text-xl font-semibold text-white mb-2">{event.event}</p>
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-base md:text-lg text-gray-100"
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
          <div className="hidden lg:block lg:w-1/4 mt-8 lg:mt-0">
            <div className="sticky top-32">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl border border-yellow-500">
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

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
    </section>
  )
}

export default Timeline

