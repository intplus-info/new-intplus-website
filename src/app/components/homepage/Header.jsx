"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Header = () =>
  // {
  //   title,
  //   subtitle,
  //   buttonText,
  //   buttonLink
  // }
  {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
    };

    return (
      <div className="min-h-screen w-full bg-homepageBackground bg-no-repeat bg-cover bg-center flex px-4 flex-col justify-center items-center">
        <motion.div
          className="text-center container max-w-[1200px] flex flex-col gap-y-8 mt-28"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-white text-3xl md:text-5xl lg:text-6xl font-extralight tracking-wide md:leading-[70px]"
            variants={itemVariants}
          >
            Great{" "}
            <span className="font-bold bg-gradient-to-tr from-fuchsia-800 via-violet-700 to-purple-900 bg-clip-text text-transparent">
              Products
            </span>{" "}
            are <br />
            <span className="font-bold">
              built by great{" "}
              <span className="bg-gradient-to-tr from-fuchsia-800 via-violet-700 to-purple-900 bg-clip-text text-transparent">
                teams
              </span>
              .
            </span>
          </motion.h1>
          <motion.p
            className="text-white text-lg font-light tracking-wider"
            variants={itemVariants}
          >
            We help build and manage a team of world-class developers <br /> to
            bring your vision to life
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="/contacts"
              className="blue-button h-[60px] xl:h-[60px] mt-[24px] inline-flex items-center justify-center text-base md:text-lg font-medium text-white bg-blue border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Let&apos;s get started!
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  };

// Default props in case no values are passed
// Header.defaultProps = {
//   title: (
//     <p>
//       Great <span className="font-bold">Products</span> are <br />
//       <span className="font-bold">built by great teams.</span>
//     </p>
//   ),
//   subtitle:
//     "We help build and manage a team of world-class developers to bring your vision to life",
//   buttonText: "Let's get started",
//   buttonLink: "/contacts",
// };

export default Header;
