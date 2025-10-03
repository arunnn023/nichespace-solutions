// src/components/TestimonialsSection.jsx
import React from 'react'
import { testimonials } from './constant'
import { motion } from 'framer-motion';



export  function TestimonialSection() {
  return (
   <motion.section
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}} 
    
    className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-12 mt-20">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h3 className="text-sm font-bold text-blue-600 uppercase mb-2">
          Testimonials
        </h3>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Trusted by people around the world..
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
         Hear directly from our partners about how Nichespace IT transformed their hiring strategy and helped scale their workforce with precision.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto  ">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition duration-300 rounded-xl shadow-lg border-green-600 border-2"
          >
            {/* Star Rating */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${
                    i < t.stars ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.174 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 mb-4">{t.quote}</p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-green-600 border-2 "
              />
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
export default TestimonialSection