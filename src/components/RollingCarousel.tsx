'use client'

import React, { useState, useEffect } from 'react'

interface RollingCarouselProps {
  items: string[]
  interval?: number
}

const RollingCarousel: React.FC<RollingCarouselProps> = ({ items, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [items, interval])

  return (
    <div className="h-20 md:h-24 lg:h-28 overflow-hidden relative">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute w-full h-full flex items-center justify-center transition-transform duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `translateY(${(index - currentIndex) * 100}%)`,
            transition: 'transform 1000ms ease-in-out, opacity 500ms ease-in-out',
          }}
          aria-hidden={index !== currentIndex}
        >
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}

export default RollingCarousel

