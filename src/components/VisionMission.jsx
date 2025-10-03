// src/components/ServicesSection.jsx
import React from 'react'
import { services } from './constant'
import { motion } from 'framer-motion';



export  function VisionMission() {
  return (
    <motion.section
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}}
    
    className="bg-white py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          We Inside Nichespace Our Vision & Values
        </h2>
        <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
          By combining our industry knowledge with cutting-edge tools and
          methodologies, we develop strategies that drive measurable results.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300 p-6 flex flex-col items-center text-center rounded-xl shadow-lg border-green-600 border-2"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-[300px] h-[400px] object-cover rounded-md mb-1"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
      
          </div>
        ))}
      </div>
    </motion.section>
  )
}
export default VisionMission 