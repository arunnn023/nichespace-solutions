import React, { useState,useEffect } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { scrollToSection } from '../utils/scrollToSection';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

export function FooterSection() {
  const [showForm, setShowForm] = useState(false);
  const [result, setResult] = useState("");

    useEffect(() => {
    const shouldOpen = localStorage.getItem('openContactForm');
    if (shouldOpen === 'true') {
      setShowForm(true);
      localStorage.removeItem('openContactForm');
    }
  }, []);


  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "69e0a273-f5a4-4be3-88e4-5f18750fd02a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.footer
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}} 
    
    
    
    
    
    id="contact" className="bg-green-900 text-white pt-8">
      {/* CTA Section */}
      <div className="text-center px-4 sm:px-6 lg:px-12 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to transform your business?
        </h2>
        <button
          onClick={handleToggleForm}
          className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-green-600 transition duration-300"
        >
          Get started
        </button>
      </div>

      {/* Email Form */}
      {showForm && (
        <div className="max-w-xl mx-auto bg-white text-green-900 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your email"
              />
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
            >
              Send
            </button>
            {result && <p className="text-sm text-gray-600 mt-2">{result}</p>}
          </form>
        </div>
      )}

      <hr className="border-white/30 my-6" />

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-12 pb-12">
        {/* Column 1: Branding & Social */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img
                src="/footer-log.png" // adjust path based on your project
                alt="NicheSpace Logo"
                className="h-8 w-auto"
                loading="lazy"
/>

          </div>
          <p className="text-white/80 mb-4">
            Industry-leading consulting firm with innovative solutions
          </p>
          <div className="flex gap-4 text-white text-lg">
            <a
              href="https://www.facebook.com/Nichespaceit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/nichespace-it-solutions-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/company/nichespace-it-solutions-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>


        {/* Column 3: Pages */}
        <div>
          <h4 className="font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <button
                onClick={() => scrollToSection('home', 80)}
                className="hover:underline text-left w-full"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about', 80)}
                className="hover:underline text-left w-full"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('service', 80)}
                className="hover:underline text-left w-full"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('team', 80)}
                className="hover:underline text-left w-full"
              >
                Team
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('career', 80)}
                className="hover:underline text-left w-full"
              >
                Career
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-gray-700 py-4 mt-5 flex justify-center items-center text-white/50">
        Copyright 2025 Nichespace. All Rights Reserved.
      </div>
    </motion.footer>
  );
}

export default FooterSection;