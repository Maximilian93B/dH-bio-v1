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
import { BackgroundDots } from '@/components/ui/background-dots'

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
    margin: "-100px 0px"
  })

  return (
    <div ref={ref} className="w-full">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isInView } as WithIsInView)
        }
        return child
      })}
    </div>
  )
}


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
      <div className="fixed inset-0 bg-white" style={{ zIndex: 0 }}>
        <BackgroundDots />
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

