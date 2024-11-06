"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calistoga } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calistoga",
});

const Navbar = () => {
  const [navClicked, setNavClicked] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const pathname = usePathname();

  // Toggle mobile navigation
  const toggleNavClicked = () => {
    setNavClicked(!navClicked);
  };

  // Debounce function for better scroll performance
  const debounce = (func, wait) => {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  };

  useEffect(() => {
    // Change background color based on scroll position
    const handleScroll = debounce(() => {
      const scrollPos = window.scrollY;
      if (scrollPos > 650) {
        setBgColor("bg-white shadow-md border-none"); // 2nd scroll point
      } else if (scrollPos > 50) {
        setBgColor(
          "bg-gray-400 border-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
        ); // 1st scroll point
      } else {
        setBgColor("bg-transparent"); // Default color
      }
    }, 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Career", href: "/career" },
  ];

  return (
    <nav
      className={`fixed border-none z-50 w-full py-4 md:py-8 transition-all duration-1000 ${bgColor}`}
    >
      <div className="flex justify-between items-center container mx-auto px-6 md:px-8 xl:px-0">
        {/* Logo Section */}
        <div className="flex gap-1 items-center">
          <div
            className={`${calistoga.variable}
            ${bgColor.includes("bg-white") ? "bg-[#1E1E1E]" : "bg-white"}
                      font-calistoga w-auto flex py-[2px] px-3 rounded-[1px] transition-all ease-in-out`}
          >
            <p
              className={`text-xl font-medium  ${
                bgColor.includes("bg-white") ? "text-white" : "text-[#1E1E1E]"
              }`}
            >
              int<sup className="text-base">+</sup>
            </p>
          </div>
          <p
            className={` text-lg font-semibold ${
              bgColor.includes("bg-white") ? "text-[#1E1E1E]" : "text-white"
            } `}
          >
            Technology
          </p>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleNavClicked}
          aria-label="Toggle Navigation Menu"
          className={`lg:hidden ${
            navClicked ? "hidden" : ""
          } p-2 focus:outline-none`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`transition-colors duration-300 ${
              bgColor.includes("bg-white") ? "text-[#1E1E1E]" : "text-white"
            }`}
          >
            <path d="M3 12h18" />
            <path d="M3 18h18" />
            <path d="M3 6h18" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:items-center lg:w-auto lg:static top-0 h-screen lg:h-auto transition-all duration-300 ease-in-out bg-white lg:bg-transparent w-full p-7 lg:p-0 fixed z-[9999] ${
            navClicked ? "right-0" : "right-[-100%]"
          }`}
        >
          {/* Close Mobile Menu Icon */}
          <Image
            className="lg:hidden ml-auto"
            src="/times icon.svg"
            alt="Close Navigation Menu"
            width={25}
            height={15}
            onClick={toggleNavClicked}
            aria-label="Close Navigation Menu"
          />

          {/* Navigation List */}
          <ul className="font-normal text-2xl lg:text-lg flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mt-10 lg:mt-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setNavClicked(false)}
                  className={`${
                    pathname === item.href
                      ? "bg-gradient-to-tr from-fuchsia-800 via-violet-700 to-purple-900 bg-clip-text text-transparent font-semibold" // Active link style
                      : bgColor.includes("bg-white")
                      ? "lg:text-primary"
                      : "lg:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <Link
              href="/contacts"
              className="blue-button cursor-pointer w-fit lg:hidden"
              onClick={() => setNavClicked(false)}
            >
              Contact Us
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
