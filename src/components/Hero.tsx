'use client'

import { motion } from 'framer-motion'
import RollingCarousel from './RollingCarousel'
import { Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react'

const Hero: React.FC = () => {
  const titles = ["CEO", "Co-Founder", "Fintech Innovator", "Strategic Advisor", "Thought Leader"]

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
    <section className="bg-black text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
                David Hanegraaf
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <RollingCarousel 
              items={titles} 
              interval={3000} 
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed"
          >
            Shaping the future of technology and finance. Featured in Marquis Who&apos;s Who 2022 and recognized as one of the 10 Most Influential Tech Leaders.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center gap-6 mt-8 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Single CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10"
          >
            <motion.a
              href="#about"
              className="group inline-flex items-center justify-center px-12 py-4 text-lg md:text-xl font-medium rounded-full text-black bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-yellow-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
    </section>
  )
}

export default Hero

