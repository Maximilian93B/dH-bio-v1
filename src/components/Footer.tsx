'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Linkedin, Mail, FileText } from 'lucide-react'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/davidhanegraaf',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Email',
      href: 'mailto:david@hanegraaf.com',
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: 'Resume',
      href: '/david-hanegraaf-resume.pdf',
      icon: <FileText className="w-5 h-5" />,
    },
  ]

  return (
    <footer className="relative bg-white overflow-hidden">
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-neutral-200" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-base md:text-xl text-neutral-600 max-w-2xl mx-auto">
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
                className="p-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 
                  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-300"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
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
              className="group p-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 
                transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-neutral-200 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-base text-neutral-600"
          >
            <p>© {new Date().getFullYear()} David Hanegraaf. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 