import Header from "../components/services/Header";
import ContactForm from "../components/ContactForm";
import ServiceList from "../components/services/ServiceList";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="">
      <Header />
      <div className="bg-[#F9F9FF]">
        <div className=" w-full h-auto p-7 lg:px-20 lg:py-10 text-[#333333] flex flex-col items-center text-center max-w-[1200px] mx-auto">
          <p className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-wider text-[#1A202C] pt-10">
            Our custom software development services
          </p>
          <p className="text-[16px] lg:w-[70%] mt-4 text-[#2D3748]">
            Take a look at the open Scale your business with our end-to-end
            software development solutions. int+ technology delivers a
            full-cycle software development services that adapt seamlessly to
            your project requirements and business needs.
          </p>
        </div>
      </div>
      <ServiceList />
      <ContactForm />
    </div>
  );
};

export default Services;
