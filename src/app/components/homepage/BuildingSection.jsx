import Ignite from "../../../../public/ignite.svg";
import Engineering from "../../../../public/engineering.svg";
import Foundation from "../../../../public/foundation.svg";
import Image from "next/image";

const BuildingSection = () => {
  return (
    <div className="relative w-full h-auto py-20 container max-w-[1200px] px-4 mx-auto flex flex-col items-center bg-white overflow-hidden">
      <div className="w-[60px] h-[60px] absolute left-[105px] top-[-30px] rounded-full bg-gradient-to-r from-[#2D7EFF] to-[#57007B] hidden lg:flex"></div>
      <div className="w-[60px] h-[60px] absolute left-[105px] bottom-[-30px] rounded-full bg-gradient-to-r from-[#2D7EFF] to-[#57007B] hidden lg:flex"></div>
      <div className="bg-[#2D7EFF] h-[4px] w-[70px] mb-[10px]"></div>
      <p className="text-[#1A202C] text-3xl xl:text-5xl  leading-[45px] text-center mb-[30px] lg:mb-[100px]">
        Building For <br />{" "}
        <span className="font-bold">Stability & Growth</span>
      </p>
      <div className="w-full h-auto flex flex-col-reverse lg:flex-row justify-between mb-[70px] items-center relative">
        <div className="w-[50px] h-[50px] absolute left-[55%] top-[-20px] rounded-full bg-gradient-to-r from-[#FFEF5E] to-[#F7936F] hidden lg:flex"></div>
        <div className="lg:w-1/2 lg:pr-[50px]">
          <p className="text-[#1A202C] font-semibold text-[28px]">
            Ignite Your Digital Transformation Journey
          </p>
          <p className="text-[#2D3748] text-lg mt-5">
            Technology is evolving at a rapid pace. It is constantly responding
            to the challenges of tomorrow and leading in a market in flux.
            Having an experienced and trusted innovation partner is key to
            creating a business-relevant strategy and finding the right
            offerings in a growing sea of technologies.
          </p>
          <p className="text-[#2D3748] text-lg mt-3">
            By keeping our knowledge sharp, staying up to date with relevant
            upcoming technology offerings and practices, we can guide you
            through the implementation and adoption of powerful and effective
            digital solutions. Int+ goes beyond helping your business leverage
            these new opportunities and gives you the direction needed to become
            a leader in your industry.{" "}
          </p>
        </div>
        <div className="lg:w-1/2 h-full overflow-hidden rounded-[5px] z-10 mb-7 lg:mb-0 w-full">
          <Image src={Ignite} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="w-full h-auto flex flex-col-reverse lg:flex-row-reverse justify-between mb-[70px] items-center relative">
        <div className="w-[30px] h-[30px] absolute left-[40%] top-[-70px] rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] hidden lg:flex"></div>
        <div className="lg:w-1/2 ">
          <p className="text-[#1A202C] font-semibold text-[28px]">
            Engineering Your Digital Future
          </p>
          <p className="text-[#2D3748] text-lg mt-5">
            To adapt to today’s fast-changing markets and technologies,
            innovation through digital engineering has become a critical effort
            for businesses, helping them stand out among competitors and meet
            their customers’ evolving expectations.
          </p>
          <p className="text-[#2D3748] text-lg mt-3">
            Int+ provides digital engineering services that enable organizations
            to operate, innovate and scale their business by leveraging
            cutting-edge technologies, top talent, and cross-industry expertise.
          </p>
        </div>
        <div className="lg:w-1/2 overflow-hidden rounded-[5px] lg:pr-[50px] mb-7 lg:mb-0 w-full">
          <Image src={Engineering} alt="" className="w-full h-full" />
        </div>
        <div className="w-[30px] h-[30px] absolute left-[70%] bottom-0 rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] hidden lg:flex"></div>
      </div>
      <div className="w-full h-auto flex flex-col-reverse lg:flex-row justify-between mb-[50px] items-center">
        <div className="lg:w-1/2 lg:pr-[50px]">
          <p className="text-[#1A202C] font-semibold text-[28px]">
            Ignite Your Digital Transformation Journey
          </p>
          <p className="text-[#2D3748] text-lg mt-5">
            Technology is evolving at a rapid pace. It is constantly responding
            to the challenges of tomorrow and leading in a market in flux.
            Having an experienced and trusted innovation partner is key to
            creating a business-relevant strategy and finding the right
            offerings in a growing sea of technologies.
          </p>
          <p className="text-[#2D3748] text-lg mt-3">
            By keeping our knowledge sharp, staying up to date with relevant
            upcoming technology offerings and practices, we can guide you
            through the implementation and adoption of powerful and effective
            digital solutions. Int+ goes beyond helping your business leverage
            these new opportunities and gives you the direction needed to become
            a leader in your industry.{" "}
          </p>
        </div>
        <div className="lg:w-1/2 overflow-hidden rounded-[5px] mb-7 lg:mb-0 w-full">
          <Image src={Foundation} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default BuildingSection;
