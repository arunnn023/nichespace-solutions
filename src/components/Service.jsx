
import React from 'react'
import { steps } from './constant'
import { motion } from 'framer-motion';

export  function Service() {
  return (
    <motion.section
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}}
  
    
    id="service" className="bg-green-500 rounded-large text-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Our Services </h2>
          <p className="text-black/90 mb-6">
            We developed an innovative and flexible process that allows us to
            understand your talent better.
          </p>
         
        </div>

        {/* Right Side */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 bg-white"
            >
              <div className="text-3xl font-bold mb-2 text-black">{step.number}</div>
              <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
              <p className="text-black/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
export default Service