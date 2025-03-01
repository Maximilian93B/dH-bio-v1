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

  React.useEffect(() => {
    // Update grid items based on window width
    const updateGridItems = () => {
      setGridItems(window.innerWidth > 768 ? 1000 : 500);
    };

    // Set initial value
    updateGridItems();

    // Add event listener for window resize
    window.addEventListener('resize', updateGridItems);

    // Cleanup
    return () => window.removeEventListener('resize', updateGridItems);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute inset-0 w-full h-full 
        grid 
        grid-cols-[repeat(auto-fill,minmax(20px,1fr))] 
        md:grid-cols-[repeat(auto-fill,minmax(30px,1fr))] 
        lg:grid-cols-[repeat(auto-fill,minmax(40px,1fr))] 
        grid-rows-[repeat(auto-fill,minmax(20px,1fr))] 
        md:grid-rows-[repeat(auto-fill,minmax(30px,1fr))]
        lg:grid-rows-[repeat(auto-fill,minmax(40px,1fr))]
        opacity-[0.4]"
      >
        {Array.from({ length: gridItems }).map((_, index) => (
          <div
            key={index}
            className="border border-black/[0.05] dark:border-white/[0.05]"
            style={{
              boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.03)',
            }}
          />
        ))}
      </div>
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
      
      <main className="min-h-screen bg-white relative flex flex-col overflow-x-hidden">
        {/* Single grid background for entire page */}
        <GridBackground />
        
        <Hero />
        
        <ViewportSection>
          <MediaRecognition />
        </ViewportSection>

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
          <Timeline />
        </ViewportSection>

        <ViewportSection>
          <Footer />
        </ViewportSection>
      </main>
    </>
  )
}

