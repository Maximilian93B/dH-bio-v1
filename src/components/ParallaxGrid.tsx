'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxGrid: React.FC = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 3000], [0, -1000]) // Adjust these values to control parallax speed

  return (
    <motion.div 
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      style={{ y }}
    >
      <div className="absolute inset-0 w-full h-[200vh] grid grid-cols-[repeat(auto-fill,minmax(15px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(25px,1fr))] grid-rows-[repeat(auto-fill,minmax(15px,1fr))] sm:grid-rows-[repeat(auto-fill,minmax(25px,1fr))]">
        {Array.from({ length: 8000 }).map((_, index) => (
          <div
            key={index}
            className="border border-black/5"
            style={{
              boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.05)',
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default ParallaxGrid 