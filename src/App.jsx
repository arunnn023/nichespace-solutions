import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Service  from './components/Service'
import CommitmentSection from './components/CommitmentSection'
import TestimonialSection from './components/TestimonialSection'
import CustomServiceBanner from './components/CustomServiceBanner'
import FooterSection from './components/FooterSection'
import Empowering  from './components/Empowering'
import VisionMission  from './components/VisionMission'
import Map from './components/Map'
import CoreValues from './components/CoreValues'
import LogoMarquee from './components/LogoMarquee'
import Industries from './components/Industries'
import Achievements from './components/Achievements'
import Team from './components/Team'
import ToastWrapper from './components/ToastWrapper'
import 'react-toastify/dist/ReactToastify.css';





function App() {
  return (
    
     <div className="scroll-smooth">
      <Navbar />
      <Home />
      <VisionMission />
      <About />
      <CommitmentSection />
      <Service/>
      <Empowering />
      <CustomServiceBanner />
      <Achievements/>
      <Industries />
      <Team/>
      <TestimonialSection />
      <CoreValues/>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <LogoMarquee />
      </div>
      <Map />
      <ToastWrapper  />
      <FooterSection /> 
    </div>  
  )
}

export default App
