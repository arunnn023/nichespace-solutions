import React from "react";
import { navbar } from "./constant";
import { scrollToSection } from "../utils/scrollToSection";
import { motion } from 'framer-motion';

const Navbar = () => {

   
  return (
    <motion.nav
  initial={{ opacity: 0, x: 200 }}
  transition={{ duration: 1 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 py-1 z-50 bg-black/70 backdrop-blur-md rounded-b-lg"
>

      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/company-logo.png"
          alt="NicheSpace"
          className="w-[200px] object-contain"
        />
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-6 text-white font-medium">
        <button
          onClick={() => scrollToSection("home", 80)}
          className="border-green-400 border-2 rounded-full px-4 py-1 hover:bg-white/20 transition"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about", 80)}
          className="border-green-400 border-2 rounded-full px-4 py-1 hover:bg-white/20 transition"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("service", 80)}
          className="border-green-400 border-2 rounded-full px-4 py-1 hover:bg-white/20 transition"
        >
          Service
        </button>
        <button
          onClick={() => scrollToSection("team", 80)}
          className="border-green-400 border-2 rounded-full px-4 py-1 hover:bg-white/20 transition"
        >
          Team
        </button>
        <button
          onClick={() => scrollToSection("career", 80)}
          className="border-green-400 border-2 rounded-full px-4 py-1 hover:bg-white/20 transition"
        >
          Career
        </button>
      </div>

      {/* Contact Button */}
      <button
        onClick={() => scrollToSection("contact", 80)}
        className="ml-6 px-5 py-2 rounded-full bg-green-600 text-white border border-white/20 hover:bg-blue-700 transition"
      >
        Contact Us
      </button>
    </motion.nav>
  );
};

export default Navbar;