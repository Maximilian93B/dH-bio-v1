'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'

const timelineEvents = [
  { year: 2022, event: "Featured in Marquis Who's Who", details: "Recognized for outstanding contributions to the tech industry and business leadership." },
  { year: 2021, event: "Named Analytics Insights Magazine's Top 10 Most Influential Tech Leaders", details: "Honored by Analytics Insights Magazine for innovative approaches in fintech." },
  { year: 2021, event: "Recognized in Top 100 People in Finance Magazine", details: "Acknowledged for pioneering work in financial technology and capital markets." },
  { year: 2021, event: "Led Major Digital Securities Public Listing in the US", details: "Led the successful public listing of a major digital securities offering in the US." },
  { year: 2020, event: "Led successful IPO for tech startup", details: "Guided a cutting-edge blockchain company through a $100M initial public offering on a digital securities exchange." },
  { year: 2018, event: "Took a Year Off to Enjoy Life", details: "Mini-retirement, loved it!"},
  { year: 2015, event: "Founded Boutique Venture Capital Firm With Former CTO of Acer Group", details: "Principal and CEO of Hong Kong based venture capital advisory firm that sourced innovative technologies globally and partnered them with Taiwanese ODMs" },
  { year: 2011, event: "Began Serving on Multiple C-Suite Teams and Corporate Boards", details: "Acting and interim roles as CFO, CEO, COO, board seats, and advisory roles for tech startups, SMEs, and public companies." },
  { year: 2009, event: "Completed MBA", details: "Graduated top 5% of 250 student MBA cohort from HEC Montreal, voted by Forbes as a top-10 MBA program outside the US" },
  { year: 2006, event: "First IPO", details: "Over 5 year span helped build the second largest aquaculture and seafood company in the world which listed with a $1.2B valuation via IPO on the Oslo-Boors Stock Exchange." }
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
    <section 
      ref={ref} 
      className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-white/60 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50 pointer-events-none" />
      
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

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12"> 
          <div className="lg:w-2/3">
            <div className="relative">
              <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-px h-full w-0.5 bg-black/[0.05]"></div>
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
                  className="mb-4 sm:mb-6 md:mb-8 flex flex-col lg:flex-row items-start lg:items-center w-full pl-12 sm:pl-16 lg:pl-0"
                >
                  <div className="lg:w-5/12 lg:text-right pr-8 mb-2 lg:mb-0">
                    <h3 className="text-lg md:text-xl font-bold text-neutral-900">{event.year}</h3>
                  </div>
                  <div className="absolute left-6 lg:static lg:w-2/12 flex justify-start lg:justify-center">
                    <motion.div 
                      className="w-4 h-4 bg-black/80 hover:bg-black rounded-full cursor-pointer flex items-center justify-center"
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
                      <p className="text-sm sm:text-base md:text-lg font-semibold text-neutral-900 mb-2">{event.event}</p>
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
          
          <div className="lg:w-1/3">
            <div className="sticky top-32 flex items-center justify-center h-full">
              <div className="relative aspect-[3/4] w-full max-w-[280px] sm:max-w-md rounded-lg overflow-hidden">
                <Image
                  src="/David_Tech.jpg"
                  alt="David Hanegraaf"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-black/[0.05]" />
      <div className="absolute top-0 left-0 w-full h-px bg-black/[0.05]" />
    </section>
  )
}

export default Timeline

