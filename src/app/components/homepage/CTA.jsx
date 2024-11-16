import Link from "next/link";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="p-7 lg:px-20 lg:py-10 w-full container mx-auto">
      <div className="bg-[#F1F1F5] rounded-[20px] w-full h-auto flex justify-between p-5 lg:px-12 lg:py-7 items-center gap-[40px] flex-col lg:flex-row">
        <p className="text-[#29272E] font-bold text-2xl lg:text-3xl leading-[50px] lg:w-[55%] text-center lg:text-left">
          Hire the best developers and designers around!
        </p>
        <div className="flex flex-col gap-5 items-center lg:w-[30%]">
          <Image src="/rays.svg" alt="" width={140} height={140} />
          <Link
            href="/contacts"
            className=" py-4 px-7 w-auto h-auto rounded-[5px] cta-gradient text-white font-bold text-xl"
          >
            Hire Top Developers
          </Link>
          <Image
            src="/rays.svg"
            alt=""
            width={140}
            height={140}
            className="rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
