'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { StaticImageData } from 'next/image'

interface FullScreenSectionProps {
  imageSrc: string | StaticImageData
  title: string
  subtitle: string
  paragraph?: string
}

const FullScreenSection: React.FC<FullScreenSectionProps> = ({
  imageSrc,
  title,
  subtitle,
  paragraph
}) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax effect for image
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  
  // Text reveal animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay * 0.2,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    })
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
  }

  const imageSource = imageSrc 
    ? imageSrc
    : '/placeholder.svg?height=1080&width=1920'

  return (
    <section
      ref={sectionRef}
      id='about'
      className="min-h-[80vh] sm:min-h-screen flex flex-col lg:flex-row relative overflow-hidden"
    >
      {/* Text Content */}
      <motion.div
        className="flex-1 flex flex-col justify-center p-4 sm:p-6 md:p-12 lg:p-16 relative z-10 bg-white/40 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl relative">
          {/* Decorative line above title */}
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-emerald-500/60 to-blue-500/60 mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-black"
          >
            {title}
          </motion.h1>

          <motion.h2
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-xl sm:text-2xl lg:text-3xl text-black mb-6"
          >
            {subtitle}
          </motion.h2>

          {paragraph && (
            <motion.p
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-base md:text-lg text-gray-700 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          )}

          {/* Decorative elements */}
          <motion.div
            className="absolute -left-16 top-1/2 w-12 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-500"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </div>

        {/* Right border gradient */}
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-black/[0.07] to-transparent" />
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex-1 relative min-h-[300px] sm:min-h-[400px] lg:min-h-screen bg-white/30"
        initial={{ opacity: 0, scale: 1.0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Loading state */}
        {!imageLoaded && (
          <motion.div
            className="absolute inset-0 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <div className="w-12 h-12 border-4 border-black/20 border-t-black/80 rounded-full animate-spin" />
          </motion.div>
        )}

        {/* Main image */}
        {!imageError ? (
          <motion.div style={{ y: imageY }} className="absolute inset-0">
            <Image
              src={imageSource}
              alt="Section image"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              priority
              style={{
                objectFit: 'cover',
                objectPosition: 'center 20%'
              }}
              className={`object-cover transition-opacity duration-700 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </motion.div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <span className="text-gray-400 text-lg">Image not available</span>
          </div>
        )}

        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20 pointer-events-none" />
      </motion.div>

      {/* Global decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-black/[0.07] to-transparent" />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-px"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-black/[0.07] to-transparent" />
      </motion.div>
    </section>
  )
}

export default FullScreenSection

