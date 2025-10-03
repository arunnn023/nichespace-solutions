import React from "react";
import { logos } from "./constant";
import { motion } from 'framer-motion';

const LogoMarquee = () => {
  return (
   <motion.div
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}} 
    
    
    
    
    
    className="w-full overflow-hidden bg-blac py-10 mt-">
      {/* Right to Left Marquee */}
      <div className="flex animate-marquee-rtl space-x-8">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`dup-rtl-${index}`}
            src={logo}
            alt={`Logo duplicate ${index + 1}`}
            className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          />
        ))}
      </div>
      <br />

      {/* Left to Right Marquee */}
      <div className="flex animate-marquee-ltr space-x-8 mt-4">
        {logos.map((logo, index) => (
          <img
            key={`ltr-${index}`}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`dup-ltr-${index}`}
            src={logo}
            alt={`Logo duplicate ${index + 1}`}
            className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LogoMarquee;