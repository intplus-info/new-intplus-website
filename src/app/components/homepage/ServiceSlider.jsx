"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper";
import Image from "next/image";
import DevelopmentTeam from "../../../../public/development-team.svg";
import MobileDevelopment from "../../../../public/mobile-development.svg";
import ProductEngineering from "../../../../public/product-engineering.svg";
import UI_UX from "../../../../public/ui-ux.svg";
import IT_Consulting from "../../../../public/it-consulting.svg";
import SolutionArchitecture from "../../../../public/solution-architecture.svg";
import WebDesign from "../../../../public/web_design.svg";

const slidesData = [
  {
    name: "Dedicated Development Team",
    description:
      "We understand the importance of building strong partnerships.  Our approach allows you to have a dedicated team of experienced developers working exclusively on your project, ensuring clear communication and focused results.",
    icon: DevelopmentTeam,
  },
  {
    name: "Mobile Development",
    description:
      "Bring your ideas to life on the go. We design and develop user-friendly and engaging mobile applications for all platforms (iOS and Android) that seamlessly integrate with your existing systems.",
    icon: MobileDevelopment,
  },
  {
    name: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: WebDesign,
  },
  {
    name: "Product Engineering",
    description:
      "From concept to completion, we engineer your software products with a focus on scalability, performance, and long-term maintainability. We leverage cutting-edge technologies and best practices to deliver robust and reliable solutions.",
    icon: ProductEngineering,
  },
  {
    name: "UI/UX Design",
    description:
      "We create user interfaces (UI) that are not only visually appealing but also intuitive and user-friendly. Our user experience (UX) design process prioritizes user needs and ensures your applications are easy to understand and navigate.",
    icon: UI_UX,
  },
  {
    name: "IT Consulting",
    description:
      "Our IT consultants offer expert advice and guidance to help you achieve your business goals.  We can assist with strategic planning, technology selection, infrastructure management, and cybersecurity solutions.",
    icon: IT_Consulting,
  },
  {
    name: "Solution Architecture",
    description:
      "We design and implement comprehensive IT solutions  tailored to your specific needs. We consider your unique challenges and requirements to create a scalable and secure architecture that supports your business growth.",
    icon: SolutionArchitecture,
  },
];

const ServiceSlider = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#F9F9FF] min-h-screen relative">
      <p className="text-[#1A202C] leading-[45px] text-4xl xl:text-5xl font-bold mb-16">
        Services we offer
      </p>
      <div className="container">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination.custom-pagination",
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] pb-10"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="w-[333px] !h-[350px] bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-[5px] items-center p-[2px] overflow-hidden mb-5 lg:mb-0"
            >
              <div className="bg-white text-[#16205F] flex flex-col gap-[20px] h-full p-7 rounded-[2px]">
                <div className="bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-full items-center p-[1px] overflow-hidden w-[70px] !h-[70px]">
                  <div className="bg-white h-full w-full rounded-full flex items-center justify-center">
                    <Image
                      src={slide.icon}
                      alt="service-icon"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="text-[#16205F] flex-1">
                  <p className="font-semibold text-2xl mb-2 gradient-text">
                    {slide.name}
                  </p>
                  <p className="text-[14px] text-[#4A5568]">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="swiper-pagination custom-pagination relative mt-5 mb-5"></div>
    </div>
  );
};

export default ServiceSlider;
