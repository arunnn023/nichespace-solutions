import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';
import { motion } from 'framer-motion';

export function CustomServiceBanner() {
  const handleRequestEmail = () => {
    scrollToSection('contact', 80); // scroll to footer
    localStorage.setItem('openContactForm', 'true'); // flag to open form
  };

  return (
    <motion.div
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}} 
    
    className="bg-green-600 text-white py-10 px-4 sm:px-6 lg:px-12 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-8 mt-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
        Need customized services?
      </h2>
      <button
        onClick={handleRequestEmail}
        className="bg-white text-blue-600 font-medium px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300"
      >
        Request as Email
      </button>
    </motion.div>
  );
}

export default CustomServiceBanner;