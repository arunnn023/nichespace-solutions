import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { features } from './constant';
import Achievements from './Achievements';
import Industries from './Industries';
import TeamSection from './Team';
import { motion } from 'framer-motion';

export function Empowering() {
  const [activeSection, setActiveSection] = useState(null);

  const renderSection = () => {
    switch (activeSection) {
      case 'Achievements':
        return <Achievements />;
      case 'Industries We Cater To':
        return <Industries />;
      case 'Meet Our Management':
        return <TeamSection />;
      default:
        return null;
    }
  };

  return (
    <motion.section
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}} 
    
    className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Empowering Businesses Through Innovation
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          We are dedicated to providing the highest level of service, delivering
          innovative solutions, and exceeding expectations in everything we do.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300 border-green-600 border-2"
          >
            <CheckCircleIcon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <button
              onClick={() => setActiveSection(feature.title)}
              className="text-blue-600 hover:text-blue-800 font-medium transition rounded-lg px-4 py-2 border border-blue-600 hover:bg-blue-100"
            >
              {feature.link} →
            </button>
          </div>
        ))}
      </div>

      {/* Conditionally render section with close button */}
      {activeSection && (
        <div className="max-w-5xl mx-auto">
          <div className="mb-4 text-right">
            <button
              onClick={() => setActiveSection(null)}
              className="text-red-600 hover:text-red-800 font-semibold transition rounded-lg px-4 py-2 border border-red-600 hover:bg-red-100"
            >
              ✕ Close
            </button>
          </div>
          {renderSection()}
        </div>
      )}
    </motion.section>
  );
}

export default Empowering;