'use client'

import React, { useRef } from 'react'
import { useInView } from 'framer-motion' // We'll just use useInView for triggering
import Hero from '@/components/Hero'
import Specialties from '@/components/Specialities'
import Timeline from '@/components/Timeline'
import FullScreenSection from '@/components/ImageComponent'
import David_main from '../../public/Dave_Bio.jpg'
import AboutSection from '@/components/About'
import GlobalImpactHighlight from '@/components/GlobalImpact'
import Footer from '@/components/Footer'
import FeaturedArticles from '@/components/FeaturedArticles'
import Script from 'next/script'

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
    margin: "-100px"
  })

  return (
    <div ref={ref}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isInView } as WithIsInView)
        }
        return child
      })}
    </div>
  )
}

// Grid Background Component
const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute inset-0 w-full h-full grid grid-cols-[repeat(auto-fill,minmax(15px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(25px,1fr))] grid-rows-[repeat(auto-fill,minmax(15px,1fr))] sm:grid-rows-[repeat(auto-fill,minmax(25px,1fr))]">
        {Array.from({ length: 10000 }).map((_, index) => (
          <div
            key={index}
            className="border border-black/[0.03] dark:border-white/[0.03]"
            style={{
              boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.03)',
            }}
          />
        ))}
      </div>
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
      
      <main className="min-h-screen bg-white relative flex flex-col">
        {/* Single grid background for entire page */}
        <GridBackground />
        
        <Hero />
        
        <ViewportSection>
          <FullScreenSection 
            imageSrc={img} 
            title="About" 
            subtitle="David Hanegraaf" 
            paragraph="David Hanegraaf is a seasoned executive with over 20 years of experience in capital raising, corporate finance, operations management, public listings, and technology start-ups. He has a strong background in structuring and financing early-stage technology companies and renewable energy projects across Canada, USA, UK, Hong Kong, Iceland, South Africa, Australia, and Panama." 
          />
        </ViewportSection>

        <ViewportSection>
          <AboutSection />
        </ViewportSection>

        <ViewportSection>
          <FeaturedArticles />
        </ViewportSection>

        <ViewportSection>
          <Specialties />
        </ViewportSection>

        <ViewportSection>
          <GlobalImpactHighlight />
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

