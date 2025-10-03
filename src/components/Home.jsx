import React from "react";
import { hero } from "./constant"
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}}
    
    

    id="home" className="relative w-full h-screen bg-neutral-900 text-white flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/profile.png" 
          alt="hero"
          className="w-full h-full object-cover mt-1"
        />
        <div className="absolute inset-0 bg-black/50 pt "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Left text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-10">
            Connecting Talent <br /> With Opportunity With Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-lg">
           the company's self-perception as a bridge between tradition and innovation, 
           emphasizing that they are not just recruiters but "architects of careers"
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-green-600 hover:bg-sky-600 px-6 py-3 rounded-full text-white font-medium transition">
              Discover our services
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-400 text-white hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 mt-10 lg:mt-0 lg:ml-10 hidden lg:block">
          <img
            src="/profile.png" 
            alt="consultant"
            className="rounded-xl shadow-lg border-green-600 border-4"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
