'use client'

import React, { useRef } from 'react'
import { useInView } from 'framer-motion' // We'll just use useInView for triggering
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import FullScreenSection from '@/components/ImageComponent'
import David_main from '../../public/PHOTO-2025-01-16-15-23-45.jpg'
import AboutSection from '@/components/About'
import MediaRecognition from '@/components/MediaPec'
import Footer from '@/components/Footer'
import FeaturedArticles from '@/components/FeaturedArticles'
import Script from 'next/script'
import { motion } from 'framer-motion'

const img = David_main.src

// This is a workaround to get the isInView prop to work with Framer Motion
interface ViewportSectionProps {
  children: React.ReactNode;
}

// This is a workaround to get the isInView prop to work with Framer Motion
interface WithIsInView {
  isInView?: boolean;
}

// This is a workaround to get the isInView prop to work with Framer Motion
const ViewportSection: React.FC<ViewportSectionProps> = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px 0px"
  })

  return (
    <div ref={ref} className="w-full px-4 md:px-6 lg:px-8">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isInView } as WithIsInView)
        }
        return child
      })}
    </div>
  )
}

// Update the GridBackground component for better mobile performance
const GridBackground: React.FC = () => {
  const [gridItems, setGridItems] = React.useState(500);
  const [activeNodes, setActiveNodes] = React.useState<number[]>([]);

  React.useEffect(() => {
    const updateGridItems = () => {
      setGridItems(window.innerWidth > 768 ? 1000 : 500);
    };
    updateGridItems();
    window.addEventListener('resize', updateGridItems);

    const interval = setInterval(() => {
      const newActiveNodes = Array.from({ length: 5 }, () => 
        Math.floor(Math.random() * gridItems)
      );
      setActiveNodes(newActiveNodes);
    }, 3000);

    return () => {
      window.removeEventListener('resize', updateGridItems);
      clearInterval(interval);
    };
  }, [gridItems]);

  return (
    <div className="absolute inset-0 w-full h-full bg-white">
      {/* Base grid */}
      <div className="absolute inset-0 w-full h-full 
        grid 
        grid-cols-[repeat(auto-fill,minmax(20px,1fr))] 
        md:grid-cols-[repeat(auto-fill,minmax(30px,1fr))] 
        lg:grid-cols-[repeat(auto-fill,minmax(40px,1fr))] 
        grid-rows-[repeat(auto-fill,minmax(20px,1fr))] 
        md:grid-rows-[repeat(auto-fill,minmax(30px,1fr))]
        lg:grid-rows-[repeat(auto-fill,minmax(40px,1fr))]
        opacity-70"
      >
        {Array.from({ length: gridItems }).map((_, index) => (
          <motion.div
            key={index}
            className={`
              relative border border-slate-100
              ${activeNodes.includes(index) ? 'before:absolute before:inset-0 before:bg-emerald-50' : ''}
            `}
            style={{
              boxShadow: 'inset 0 0 1px rgba(100, 116, 139, 0.05)',
            }}
          >
            {activeNodes.includes(index) && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Connection lines with modern gradient */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(52, 211, 153, 0)" /> {/* emerald-400 */}
            <stop offset="50%" stopColor="rgba(52, 211, 153, 0.2)" /> {/* emerald-400 */}
            <stop offset="100%" stopColor="rgba(96, 165, 250, 0.2)" /> {/* blue-400 */}
          </linearGradient>
        </defs>
        {activeNodes.map((node, i) => {
          if (i === activeNodes.length - 1) return null;
          const nextNode = activeNodes[i + 1];
          return (
            <motion.line
              key={`line-${i}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ pathLength: 0, opacity: 0 }}
              x1={`${(node % 40) * 2.5}%`}
              y1={`${Math.floor(node / 40) * 2.5}%`}
              x2={`${(nextNode % 40) * 2.5}%`}
              y2={`${Math.floor(nextNode / 40) * 2.5}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
            />
          );
        })}
      </svg>
    </div>
  );
};

// Add JSON-LD Schema
const PersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "David Hanegraaf",
  "jobTitle": [
    "Principal",
    "CFO",
    "Global Finance Expert",
    "Sustainability Leader"
  ],
  "description": "Senior financial executive with 25+ years of experience in global markets, sustainable investments, and technology innovation.",
  "url": "https://davidhanegraaf.com",
  "sameAs": [
    "https://linkedin.com/in/davidhanegraaf"
  ],
  "knowsAbout": [
    "Global Finance",
    "Sustainable Investment",
    "Technology Innovation",
    "Capital Markets",
    "Strategic Leadership"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Global Sustainability Fund",
    "description": "Leading sustainable investments and UN innovation initiatives"
  }
}

// This is the main component for the home page
export default function Home() {
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PersonSchema) }}
      />
      
      {/* Background layer */}
      <div className="fixed inset-0 z-0">
        <GridBackground />
      </div>
      
      {/* Content layer */}
      <main className="relative z-10 min-h-screen flex flex-col">
        <Hero />
        
        <ViewportSection>
          <MediaRecognition />
        </ViewportSection>

        <ViewportSection>
          <FullScreenSection 
            imageSrc={img} 
            title="About" 
            subtitle="David Hanegraaf" 
            paragraph="David Hanegraaf is a seasoned professional with over 25 years of experience in capital raising, corporate finance, public listings, and technology start-ups. He has a strong background in structuring and financing early-stage technology companies and renewable energy projects with on-the-ground experience in dozens of countries. His most recent endeavors include launching The Global Sustainability Fund in partnership with the UN." 
          />
        </ViewportSection>

        <ViewportSection>
          <AboutSection />
        </ViewportSection>

        <ViewportSection>
          <FeaturedArticles />
        </ViewportSection>

        <ViewportSection>
          <Timeline />
        </ViewportSection>

        <ViewportSection>
          <Footer />
        </ViewportSection>
      </main>
    </>
  )
}

