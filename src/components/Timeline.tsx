'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'

const timelineEvents = [
  { year: 2022, event: "Featured in Marquis Who's Who", details: "Recognized for outstanding contributions to the tech industry and business leadership." },
  { year: 2021, event: "Named Analytics Insights Magazine's Top 10 Most Influential Tech Leaders", details: "Honored by Analytics Insights Magazine for innovative approaches in digital securities and blockchain." },
  { year: 2021, event: "Recognized in Top 100 People in Finance Magazine", details: "Acknowledged for pioneering work in financial technology and capital markets. " },
  { year: 2021, event: "Led Major Digital Securities Public Listing in the US", details: "Led the successful public listing of a major digital securities offering in the US." },
  { year: 2020, event: "Led successful IPO for tech startup", details: "Guided a cutting-edge blockchain company through a $100M initial public offering on a digital securities exchange." },
  { year: 2018, event: "Took a Year Off to Enjoy Life", details: "Mini-retirement, loved it!"},
  { year: 2015, event: "Founded Boutique VC Firm With Former CTO of Acer Group", details: "Principal and CEO of Hong Kong based venture capital advisory firm that sourced innovative technologies globally and partnered them with Taiwanese ODMs." },
  { year: 2011, event: "Began Serving on Multiple C-Suite Teams and Corporate Boards", details: "Acting and interim roles as CEO, CFO, COO, board seats, and senior advisory roles for tech startups, SMEs, and public companies." },
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
      className="py-20 sm:py-28 md:py-36 relative overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Career Milestones
          </h2>
          <motion.p 
            className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            A journey of innovation, leadership, and transformative achievements
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16"> 
          <div className="lg:w-2/3">
            <div className="relative">
              <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-secondary-200"></div>
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
                  className="mb-8 flex flex-col lg:flex-row items-start lg:items-center w-full pl-16 lg:pl-0"
                >
                  <div className="lg:w-5/12 lg:text-right lg:pr-8 mb-2 lg:mb-0">
                    <h3 className="text-xl font-semibold text-neutral-900">{event.year}</h3>
                  </div>
                  <div className="absolute left-6 lg:left-auto lg:relative lg:w-2/12 flex justify-start lg:justify-center">
                    <motion.button 
                      className="w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-full cursor-pointer flex items-center justify-center shadow-soft hover:shadow-medium transition-all duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      aria-label={expandedIndex === index ? "Collapse details" : "Expand details"}
                    >
                      <motion.span
                        initial={{ rotate: 0 }}
                        animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-white font-medium text-lg leading-none"
                      >
                        +
                      </motion.span>
                    </motion.button>
                  </div>
                  <div className="lg:w-5/12 lg:pl-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="glass rounded-xl p-6 hover:shadow-soft transition-all duration-300"
                    >
                      <p className="text-lg font-semibold text-neutral-900 mb-2">{event.event}</p>
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="text-base text-neutral-600 mt-3"
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
            <motion.div 
              className="sticky top-32 flex items-center justify-center h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] w-full max-w-[320px] rounded-xl overflow-hidden shadow-large">
                <Image
                  src="/David_Tech.jpg"
                  alt="David Hanegraaf"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Timeline

