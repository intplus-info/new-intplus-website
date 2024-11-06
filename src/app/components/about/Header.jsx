"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <div className="min-h-screen w-full bg-servicesBackground bg-cover flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Who We <span className="text-secondary font-extrabold">Are</span> &{" "}
          <br />
          <span className="text-secondary font-extrabold">How We Can Help</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-base sm:text-2xl text-white/80 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We&apos;re more than just developers. We&apos;re a team of strategic
          thinkers and problem solvers passionate about helping businesses
          succeed in the digital age.
        </motion.p>

        <motion.p
          className="mt-4 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Let&apos;s explore how we can help you achieve your goals
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/contacts"
            className="blue-button h-[60px] xl:h-[60px] mt-[24px] inline-flex items-center justify-center text-base md:text-lg xl:text-xl font-medium text-white bg-blue border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
