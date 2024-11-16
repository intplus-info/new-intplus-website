import React from "react";
import { Calistoga } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calistoga",
});

const Footer = () => {
  return (
    <div className="h-auto w-full text-[#718096] mt-[100px] border-t-[2px] container mx-auto">
      <div className="flex flex-col lg:flex-row gap-[70px] h-auto w-full  px-7 py-12 lg:p-20">
        <div className="flex flex-col justify-between gap-[40px]">
          <div className="flex flex-col gap-[15px]">
            <div className="flex gap-1 items-center mb-[20px]">
              <div
                className={`${calistoga.variable} font-calistoga bg-[#2D7EFF] w-auto flex py-[2px] px-3 rounded-[1px]`}
              >
                <p className="text-xl font-medium text-white">
                  int<sup className="text-base">+</sup>
                </p>
              </div>
              <p className="text-[#2D7EFF] font-semibold text-lg">Technology</p>
            </div>
            <div className="text-[#718096] font-light text-[16px] flex gap-[10px] items-baseline">
              <Image src="/phone.svg" alt="" width={15} height={15} />
              <p>+234 703 957 4358</p>
            </div>
            <div className="text-[#718096] font-light text-[16px] flex gap-[10px] items-baseline">
              <Image src="/email.svg" alt="" width={15} height={20} />
              <p>hello@intplus.co</p>
            </div>
            <div className="text-[#718096] font-light text-[16px] flex gap-[10px] items-start">
              <Image src="/location.svg" alt="" width={20} height={20} />
              <p>Int+ Technology Limited Lagos, Nigeria.</p>
            </div>
          </div>
          <div className="">
            <p className="text-[#718096] text-[18px] font-medium">Follow us</p>
            <div className="flex gap-[30px] mt-[10px] items-center">
              <Image src="/LinkedIn.svg" alt="" width={22} height={22} />
              <Image src="/Facebook.svg" alt="" width={22} height={22} />
              <Image src="/Instagram.svg" alt="" width={22} height={22} />
              <Image src="/Twitter.svg" alt="" width={22} height={22} />
              <Image src="/YouTube.svg" alt="" width={22} height={22} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="font-semibold text-lg mb-[20px]">Company</p>
          <div className="text-[16px] flex gap-[10px] flex-col font-light">
            <p>About us</p>
            <p>Career</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="font-semibold text-lg mb-[20px]">Services</p>
          <div className="text-[16px] flex gap-[10px] flex-col font-light">
            <p>Dedicated Development Team</p>
            <p>Mobile Development</p>
            <p>Product Engineering</p>
            <p>UI/UX Design</p>
            <p>IT Consulting</p>
            <p>Solution Architecture</p>
            <p>MVP for Startup & Enterprises</p>
            <p>Enterprise Software Development</p>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="font-semibold text-lg mb-[20px]">Industries</p>
          <div className="text-[16px] flex gap-[10px] flex-col font-light">
            <p>Fintech</p>
            <p>eCommerce</p>
            <p>Travel & Hospitality</p>
            <p>Logistics</p>
            <p>Real Estate</p>
          </div>
        </div>
      </div>
      <div className="border-t-[2px]  px-7 py-12 lg:px-20 lg:py-5">
        © 2024 Copyright by{" "}
        <span
          className="
      font-bold text-[#4A5568]"
        >
          Int+.
        </span>{" "}
        All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
