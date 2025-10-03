import React from 'react';
import { achievements } from './constant';
import { motion } from 'framer-motion';


const Achievements = () => {
  return (
    <motion.section
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}}
    
    className="bg-sky-400 py-12 px-6 md:px-16 rounded-full m-20 border-green-600 border-2">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 flex flex-row justify-center">Achievements</h2>
      <ul className="space-y-6">
        {achievements.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="text-2xl">{item.icon}</span>
            <p className="text-gray-800">{item.text}</p>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Achievements;