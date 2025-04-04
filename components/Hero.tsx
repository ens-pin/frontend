"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <motion.section
      id="aboutus"
      className="relative flex min-h-screen items-center justify-center px-8 py-24 text-gray-200"
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-white text-5xl md:text-9xl font-extrabold">
          Hey, this is
        </h1>
        <h1 className="bg-gradient-to-br from-white to-blue-400 bg-clip-text font-extrabold leading-tight text-transparent text-5xl md:text-9xl">
            PinSync
        </h1>
        <p className="max-w-xl text-base md:text-lg text-gray-300">
            You flex the name. ENS pin your receipts.
        </p>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="flex items-center gap-2 rounded-full px-6 py-3 bg-gray-800 text-white shadow-lg"
          >
            Start Building
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="flex items-center gap-2 rounded-full px-6 py-3 bg-gray-800 text-white shadow-lg"
          >
            Explore
            <FiArrowRight />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
