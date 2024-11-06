import Header from "../components/career/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import JobListings from "../components/career/JobListings";

const Career = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden relative">
      <Header />
      <div className="bg-[#F9F9FF] w-full h-auto p-7 lg:px-20 lg:py-10 text-[#333333] flex flex-col items-center text-center">
        <p className="text-3xl md:text-5xl  font-bold text-[#1A202C]">
          Care to join us?
        </p>
        <p className="text-[16px] lg:w-[70%] mt-4 text-[#2D3748]">
          Take a look at the open positions below. If none of them suit you, or
          you feel you could help us in other ways, please fill out the form
          below or contact us directly at{" "}
          <span className="font-semibold">carrers@intplus.co</span>
        </p>
      </div>
      <JobListings />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Career;
