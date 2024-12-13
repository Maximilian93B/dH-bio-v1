'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface FullScreenSectionProps {
  imageSrc: string
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
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleImageError = () => {
    setImageError(true)
  }

  if (!isMounted) {
    return null
  }

  const imageSource = imageSrc && imageSrc.trim() !== '' 
    ? imageSrc 
    : '/placeholder.svg?height=1080&width=1920'

  return (
    <section  id='about' className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
      {/* Text Content */}
      <motion.div 
        className="flex-1 flex flex-col justify-center p-6 md:p-12 lg:p-16 relative z-10 bg-white"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-2xl">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.h2>
          {paragraph && (
            <motion.p 
              className="text-base md:text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {paragraph}
            </motion.p>
          )}
        </div>

        {/* Decorative element for text section */}
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent" />
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="flex-1 relative min-h-[400px] lg:min-h-screen bg-black"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {!imageError ? (
          <Image
            src={imageSource}
            alt="Section image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover object-center"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <span className="text-gray-400 text-lg">Image not available</span>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20 pointer-events-none" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
    </section>
  )
}

export default FullScreenSection

