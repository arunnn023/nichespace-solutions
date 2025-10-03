// src/components/CommitmentSection.jsx
import React from 'react'
import { motion } from 'framer-motion';

export  function CommitmentSection()  {
  return (
    <motion.section
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}} 
    
    className="bg-white py-12 px-4 sm:px-6 lg:px-12 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <img
          alt="Professional adjusting suit"
          src="/our-commitment.png"
          className="w-[450px] h-auto rounded-lg shadow-md object-cover rounded-xl shadow-lg border-green-600 border-2"
/>

        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-sm font-bold text-blue-600 uppercase mb-8 ">
            Who We Are
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            the bridge between tradition and innovation
          </h2>
          <p className="text-gray-700 mb-6">
            In the realm of Human Capital Management, we go 
            beyond recruitment. We are architects of careers, 
            sculptors of high-performing teams, and strategic 
            navigators of the talent landscape. With a foundation 
            built on experience, expertise, and excellence, Nichespace 
            IT empowers businesses to thrive through people.

          </p>
         
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-sm font-bold text-blue-600 uppercase mb-8 ">
             Why Choose Us
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            We build solutions to drive your talent forward
          </h2>
          <p className="text-gray-700 mb-6">
            our mission is to redefine the boundaries of talent acquisition, offering our clients unparalleled
            expertise and innovation. Our commitment goes beyond mere recruitment; we cultivate enduring partnerships
            built on trust, transparency, and results-driven solutions.

          </p>
         
        </div>
      </div>
    </motion.section>
  )
}
export default CommitmentSection