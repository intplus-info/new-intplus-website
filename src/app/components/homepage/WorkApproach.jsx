import UX_Driven from "../../../../public/ux_driven.svg";
import SharedUnderstanding from "../../../../public/shared_understanding.svg";
import ExperienceExpertise from "../../../../public/experience_expertise.svg";
import SecurityIP from "../../../../public/security_ip.svg";
import CodeReviews from "../../../../public/code_reviews.svg";
import QualityAssurance from "../../../../public/quality_assurance.svg";
import Image from "next/image";

const approachData = [
  {
    image: UX_Driven,
    title: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    gradient: "from-[#29272E] to-[#29272E]",
  },
  {
    image: SharedUnderstanding,
    title: "Developing Shared Understanding",
    description:
      "We foster a collaborative environment where designers, developers, and clients work together seamlessly. This ensures a shared understanding of project goals and user needs, leading to a more successful outcome.",
    gradient: "from-[#68DBF2] to-[#509CF5]",
  },
  {
    image: ExperienceExpertise,
    title: "Proven Experience and Expertise",
    description:
      "Our team boasts extensive experience across various technologies and industries. We leverage this expertise to deliver innovative and effective software solutions.",
    gradient: "from-[#FF92AE] to-[#FF3D9A]",
  },
  {
    image: SecurityIP,
    title: "Security & Intellectual Property (IP)",
    description:
      "We prioritize the security of your data and intellectual property. We employ industry-standard security practices and ensure your ideas stay protected.",
    gradient: "from-[#67E9F1] to-[#24E795]",
  },
  {
    image: CodeReviews,
    title: "Code Reviews",
    description:
      "Our developers conduct rigorous code reviews throughout the development process. This ensures code quality, maintainability, and adherence to best practices.",
    gradient: "from-[#FFEF5E] to-[#F7936F]",
  },
  {
    image: QualityAssurance,
    title: "Quality Assurance & Testing",
    description:
      "We implement a comprehensive testing strategy throughout the development lifecycle. This ensures your software functions flawlessly and delivers a seamless user experience.",
    gradient: "from-[#F76680] to-[#57007B]",
  },
];

const WorkApproach = () => {
  return (
    <div className="bg-[#F7F7FA] py-12">
      <div className="container px-4 mx-auto flex flex-col items-center h-auto z-10">
        <div className="bg-[#2D7EFF] h-[4px] w-[70px] mb-[10px]"></div>
        <p className="text-[#1A202C] text-3xl xl:text-5xl leading-[45px] text-center mb-[30px] lg:mb-[100px]">
          Our design and <br />
          <span className="font-bold">development approach</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between gap-8">
          {approachData.map((item, index) => (
            <div
              key={index}
              className="flex w-full justify-between gap-10 flex-col lg:flex-row"
            >
              <div className="lg:flex-1 bg-[#E7DAED] items-center p-[1px] overflow-hidden">
                <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full px-8 py-10">
                  <div
                    className={`h-[60px] w-[60px] rounded-[10px] flex items-center justify-center bg-gradient-to-r ${item.gradient}`}
                  >
                    <Image
                      src={item.image}
                      alt="process-icon"
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="text-[#16205F] flex-1">
                    <p className="font-semibold text-2xl mb-2 text-[#1A202C]">
                      {item.title}
                    </p>
                    <p className="text-base text-[#4A5568]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkApproach;
