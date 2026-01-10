import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomeSection() {
  const roles = [
    "Software Engineer",
    "Digital Design Engineer",
    "FPGA Researcher",
    "Track Athlete"
  ];
  
  const [currentRole, setCurrentRole] = useState(0);
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentRole, roles.length]);

  return (
    <section className="home" id="home">
      <div className="relative min-h-screen overflow-hidden bg-[#f5f3ef]">
        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm font-semibold tracking-wider text-gray-600 uppercase mb-4">
                {today}
              </p>
            </motion.div>
            
            <motion.h1 
              className="text-7xl lg:text-8xl font-black leading-[0.9] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block text-gray-900">BRINGING YOUR</span>
              <span className="block text-gray-900 italic">VISION</span>
              <span className="block text-gray-900">TO LIFE.</span>
            </motion.h1>

            <motion.p 
              className="max-w-xl text-lg text-gray-700 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Where engineering meets creativity, and innovation meets dedication. 
              I transform complex challenges into elegant solutions across hardware, 
              software and everything in between.
            </motion.p>

            <motion.div 
              className="mb-6 h-12 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-gray-600 mr-3">Currently:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.a
              href="#about"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>

          {/* Floating Image Cards */}
          <div className="absolute right-8 top-32 hidden lg:block">
            <motion.div
              className="relative w-80 h-96"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.div
                className="absolute w-72 h-80 rounded-3xl overflow-hidden shadow-2xl bg-white"
                animate={{ 
                  rotate: [0, -8, -8],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <img
                  src="/img/home.png"
                  alt="Olly Cassidy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                className="absolute top-8 left-8 w-72 h-80 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-indigo-100 to-violet-100 opacity-30"
                animate={{ 
                  rotate: [0, 8, 8],
                  y: [0, 10, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.3
                }}
              >
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Social Links Section */}
        <motion.div 
          className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="https://linkedin.com/in/oliver-cassidy-286ba3235"
               className="group bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
            >
              <img
                src="/img/linkedin.png"
                alt="LinkedIn"
                className="w-6 h-6 object-contain"
              />
              <span className="font-medium text-gray-700">LinkedIn</span>
            </motion.a>
            
            <motion.a 
              href="https://github.com/ollycassidy13"
               className="group bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
            >
              <img
                src="/img/github.png"
                alt="GitHub"
                className="w-6 h-6 object-contain"
              />
              <span className="font-medium text-gray-700">GitHub</span>
            </motion.a>
            
            <motion.a 
              href="https://scholar.google.com/citations?user=CzGdJSAAAAAJ&hl=en"
               className="group bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
            >
              <img
                src="/img/scholar.png"
                alt="Google Scholar"
                className="w-6 h-6 object-contain"
              />
              <span className="font-medium text-gray-700">Scholar</span>
            </motion.a>
            
            <motion.a 
              href="Oliver_Cassidy_CV.pdf"
              download="Oliver_Cassidy_CV.pdf"
               className="group bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-5 h-5 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m-2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              <span className="font-medium text-white">Download CV</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}