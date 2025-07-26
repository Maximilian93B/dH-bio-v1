'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { getSocialLinks } from '@/utils/socialLinks'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const socialLinks = getSocialLinks("w-5 h-5")


  return (
    <footer className="relative overflow-hidden">
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Main Footer Content */}
        <div className="py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto font-light">
              Interested in discussing finance, technology, or sustainable innovation? 
              I am always open to meaningful conversations and collaborations.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 
                  transition-all duration-300 shadow-soft hover:shadow-medium"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top Button */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              onClick={scrollToTop}
              className="group p-4 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-primary-700 hover:border-primary-200 
                transition-all duration-300 shadow-soft hover:shadow-medium"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-neutral-200/50 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-sm text-neutral-500 font-light"
          >
            <p>© {new Date().getFullYear()} David Hanegraaf. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 