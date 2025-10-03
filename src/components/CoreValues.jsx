// src/components/ProcessSection.jsx
import React from 'react'
import { cores } from './constant'
import { scrollToSection } from '../utils/scrollToSection'
import { motion } from 'framer-motion';




export  function CoreValues() {
  return (
    <motion.section
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}}
    
    id="corevalues" className="bg-green-600 text-white py-12 px-4 sm:px-6 lg:px-12 mt-24 rounded-lg ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-white/90 mb-6">
            We developed an innovative and flexible process that allows us to
            understand your talent better.
          </p>
        
        </div>

        {/* Right Side */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cores.map((core, index) => (
            <div
              key={index}
              className="bg-sky-300 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-3xl text-black font-bold mb-2 rounded-lg">{core.number}</div>
              <h3 className="text-xl text-green-1100 font-semibold mb-2">{core.title}</h3>
              <p className="text-black/80">{core.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
export default CoreValues