import React from "react";
import { industriesData } from "./constant";
import { motion } from 'framer-motion';

const Industries = () => {
  return (
    <section
    
   
  
    id="career" className="bg-black/70 py-12 px-4 sm:px-6 lg:px-16 rounded-lg mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black-800">Industries We Serve</h2>
        <p className="mt-2 text-600 text-lg">
          Tailored recruitment solutions across diverse sectors.
        </p>
      </div>

     <motion.div
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}}

      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industriesData.map((industry) => (
          <div
            key={industry.id}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {industry.name}
            </h3>
            <p className="text-gray-600 text-sm">{industry.description}</p>
          </div>
        ))}
      </motion.div>
      
    </section>
  );
};

export default Industries;