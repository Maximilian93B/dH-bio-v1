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

const img = David_main.src

interface ViewportSectionProps {
  children: React.ReactNode;
}

interface WithIsInView {
  isInView?: boolean;
}

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

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero doesn't need viewport detection as it's always visible on load */}
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
        <GlobalImpactHighlight />
      </ViewportSection>

      <ViewportSection>
        <Timeline />
      </ViewportSection>

      <ViewportSection>
        <Specialties />
      </ViewportSection>

      <ViewportSection>
        <Footer />
      </ViewportSection>
    </main>
  )
}

