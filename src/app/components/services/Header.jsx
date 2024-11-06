"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="min-h-screen w-full bg-servicesBackground bg-cover flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl text-white tracking-tight xl:leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empowering
          <span className="font-bold">
            {" "}
            Businesses Through Scalable Technology
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-base sm:text-2xl text-white/80 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We don&apos;t just build software, we build your future. We craft
          innovative and scalable technology solutions that empower your
          business to thrive in the digital age.
        </motion.p>
      </div>
    </div>
  );
}
