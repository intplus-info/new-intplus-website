import trophy from "../../../../public/Trophy.svg";
import Image from "next/image";

const DevelopmentProcess = () => {
  return (
    <div className="w-full h-auto p-7 lg:px-20 lg:pb-10 flex flex-col items-center mb-5 container mx-auto">
      <div className="bg-[#2D7EFF] h-[4px] w-[70px] mb-[10px]"></div>
      <p className="text-[#1A202C] text-3xl leading-[45px] max-w-[400px] text-center mb-[30px] lg:mb-[100px]">
        How development <span className="font-bold">through Int+ works</span>
      </p>
      <div className="process-section flex flex-col w-full">
        <div className="flex gap-10 justify-between mr-10">
          <div className="flex flex-col items-center">
            <div className="border border-[#E7DAED] rounded-lg p-4 w-[300px]">
              <p className="font-bold flex gap-2 text-lg pb-1">
                <span className="text-[#2D7EFF]">#1</span> Assemble the right
                team
              </p>
              <p className="text-[#718096]">
                We handle all aspects of vetting and choosing the right team
                that you don{"'"}t have the time, expertise, or desire to do.
              </p>
            </div>
            <div className="w-[2px] h-[30px] bg-[#2D7EFF]"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="border border-[#E7DAED] rounded-lg p-4 w-[300px]">
              <p className="font-bold flex gap-2 text-lg pb-1">
                <span className="text-[#2D7EFF]">#3</span>Tech architecture
              </p>
              <p className="text-[#718096]">
                We break monolithic apps into microservices. Decoupling the code
                allows teams to move faster and more independently.
              </p>
            </div>
            <div className="w-[2px] h-[30px] bg-[#2D7EFF]"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="border border-[#E7DAED] rounded-lg p-4 w-[300px]">
              <p className="font-bold flex gap-2 text-lg pb-1">
                <span className="text-[#2D7EFF]">#5</span> Code reviews
              </p>
              <p className="text-[#718096]">
                Code reviews before release help detect issues like memory
                leaks, file leaks, performance signs, and general bad smells.
              </p>
            </div>
            <div className="w-[2px] h-[30px] bg-[#2D7EFF]"></div>
          </div>
        </div>
        <div className="bg-[#2D7EFF] h-[2px] w-[1020px] lg:w-full flex relative">
          <Image
            src={trophy}
            alt="trophy-icon"
            width={42}
            height={42}
            className="w-[42px] h-[42px] absolute top-[-10px] right-[-50px]"
          />
          <div className="bg-[#2D7EFF] h-full lg:w-full flex-1"></div>
        </div>
        <div className="flex gap-10 ml-10 justify-between">
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-[30px] bg-[#2D7EFF]"></div>
            <div className="border border-[#E7DAED] rounded-lg p-4 w-[300px]">
              <p className="font-bold flex gap-2 text-lg pb-1">
                <span className="text-[#2D7EFF]">#2</span> Sprint planning
              </p>
              <p className="text-[#718096]">
                Sprint roadmap is a collective planning effort. Team members
                collaborate to clarify items and ensure shared understanding.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-[30px] bg-[#2D7EFF]"></div>
            <div className="border border-[#E7DAED] rounded-lg p-4 w-[300px]">
              <p className="font-bold flex gap-2 text-lg pb-1">
                <span className="text-[#2D7EFF]">#4</span> Standups & weekly
                demos
              </p>
              <p className="text-[#718096]">
                Standups, weekly demos, and weekly reviews make sure everyone is
                on the same page and can raise their concerns.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-[30px] bg-[#2D7EFF]"></div>
            <div className="border border-[#E7DAED] rounded-lg p-4 w-[300px]">
              <p className="font-bold flex gap-2 text-lg pb-1">
                <span className="text-[#2D7EFF]">#6</span> Iterative delivery
              </p>
              <p className="text-[#718096]">
                We divide the implementation process into several checkpoints
                rather than a single deadline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
