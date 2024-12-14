'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform} from 'framer-motion'
import { Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react'

// TypewriterEffect Component
const TypewriterEffect: React.FC<{ items: string[], interval: number }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentWord = items[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % items.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, items]);

  return (
    <div className="h-16 flex items-center justify-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
        {text}
        <span className="animate-pulse ml-1">|</span>
      </h2>
    </div>
  );
};

//  GridBackground Component
const GridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full grid grid-cols-[repeat(auto-fill,minmax(15px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(25px,1fr))] grid-rows-[repeat(auto-fill,minmax(15px,1fr))] sm:grid-rows-[repeat(auto-fill,minmax(25px,1fr))]">
        {Array.from({ length: 4000 }).map((_, index) => (
          <div
            key={index}
            className="border border-black/5"
            style={{
              boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.05)',
            }}
          />
        ))}
      </div>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 800">
        <defs>
          <linearGradient id="sustainableGrowth" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(72, 187, 120, 0.2)" />
            <stop offset="100%" stopColor="rgba(4, 120, 87, 0.5)" />
          </linearGradient>
          <linearGradient id="globalInnovation" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(79, 70, 229, 0.2)" />
            <stop offset="100%" stopColor="rgba(67, 56, 202, 0.5)" />
          </linearGradient>
          <linearGradient id="techFuture" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(45, 212, 191, 0.2)" />
            <stop offset="100%" stopColor="rgba(17, 94, 89, 0.5)" />
          </linearGradient>
        </defs>
        <path
          d="M0,600 Q200,550 400,400 T800,100"
          fill="none"
          stroke="url(#sustainableGrowth)"
          strokeWidth="4"
          className="trend-line hidden sm:block"
        />
        <path
          d="M0,500 Q300,400 500,300 T800,200"
          fill="none"
          stroke="url(#globalInnovation)"
          strokeWidth="3"
          className="trend-line hidden sm:block"
        />
        <path
          d="M0,400 Q200,380 400,250 T800,50"
          fill="none"
          stroke="url(#techFuture)"
          strokeWidth="3"
          className="trend-line hidden sm:block"
        />
        <path
          d="M0,600 Q100,500 200,400 T400,100"
          fill="none"
          stroke="url(#sustainableGrowth)"
          strokeWidth="3"
          className="trend-line sm:hidden"
        />
        <path
          d="M0,500 Q150,400 250,300 T400,200"
          fill="none"
          stroke="url(#globalInnovation)"
          strokeWidth="2"
          className="trend-line sm:hidden"
        />
        <path
          d="M0,400 Q100,380 200,250 T400,50"
          fill="none"
          stroke="url(#techFuture)"
          strokeWidth="2"
          className="trend-line sm:hidden"
        />
      </svg>
    </div>
  )
}

// Main Hero Component
const Hero: React.FC = () => {
  const titles = ["CEO", "Co-Founder", "Fintech Innovator", "Strategic Advisor", "Thought Leader"]
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -100])

  const socialLinks = [
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: "https://www.linkedin.com/in/david-hanegraaf/",
      label: "LinkedIn"
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      href: "https://www.instagram.com/dave_hanegraaf999/",
      label: "Instagram"
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      href: "mailto:david.hanegraaf@hec.ca",
      label: "Email"
    }
  ]

  return (
    <section ref={containerRef} className="bg-white text-black min-h-screen flex items-center relative overflow-hidden">
      <GridBackground />
      <div className="absolute inset-0 bg-black/10" />
      
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 rounded-full bg-black/20 blur-xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-32 h-32 rounded-full bg-black/10 blur-2xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 inline-block relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-black to-black/80">
                David Hanegraaf
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <TypewriterEffect 
              items={titles} 
              interval={3000} 
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-black leading-relaxed"
          >
            Shaping the future of technology and finance. Featured in Marquis Who&apos;s Who 2022 and recognized as one of the 10 Most Influential Tech Leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center gap-6 mt-8 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-10"
          >
            <motion.a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="group inline-flex items-center justify-center px-12 py-4 text-lg md:text-xl font-medium rounded-full text-white  bg-gradient-to-r from-emerald-500 to-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              About Dave
              <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

