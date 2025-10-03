
import React from 'react'
import { motion } from 'framer-motion';

export  function About() {
  return (
    <motion.section
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}}
    
    
    
    
    id="about" className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
      <img 
          src="/story.png"  alt="About Us" 
          className="w-[450px] h-[500px] rounded-lg shadow-md object-cover rounded-xl shadow-lg border-green-600 border-2"/>
        </div> 

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-big font-bold text-blue-600 uppercase mb-5">
            about us
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Nichespace IT Solutions Pvt Ltd, founded in 2020 and incorporated in 2021, is a forward-thinking
            IT services company dedicated to empowering businesses through innovative technology. With a team 
            of skilled professionals, the company delivers tailored solutions across software development, cloud
            computing, cybersecurity, and IT consulting. Nichespace emphasizes long-term client partnerships, staying
            ahead of industry trends to ensure quality, efficiency, and strategic impact. Their mission is to be a 
            trusted ally in digital transformation, helping organizations achieve their workforce and operational goals.  
          </p><br></br>
           <p className='text-gray-700 text-lg mb-6'>Founded with a vision in 2020, Nichespace IT Solutions Pvt Ltd delivers comprehensive IT services that help
            organizations optimize operations and achieve workforce goals. With a skilled team and a client-first approach, 
            the company specializes in custom software, cloud solutions, and cybersecurity—driving innovation and long-term
            success.</p>
         
        </div>
      </div>
    </motion.section>
  )
}
export default About