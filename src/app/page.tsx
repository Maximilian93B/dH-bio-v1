
import Hero from '@/components/Hero'
import Specialties from '@/components/Specialities'
import Timeline from '@/components/Timeline'
import Dedication from '@/components/Para'
import FullScreenSection from '@/components/ImageComponent'
import David_main from '../../public/David_Tech.jpg'
import AboutSection from '@/components/About'

const img = David_main.src

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
     
      <Hero />
      <FullScreenSection imageSrc={img} title="About" subtitle="David Hanegraaf" paragraph="David Hanegraaf is a seasoned executive with over 20 years of experience in capital raising, corporate finance, operations management, public listings, and technology start-ups. He has a strong background in structuring and financing early-stage technology companies and renewable energy projects across Canada, USA, UK, Hong Kong, Iceland, South Africa, Australia, and Panama." />
      <AboutSection />
      <Specialties />
      <Timeline />
      <Dedication />

    </main>
  )
}

