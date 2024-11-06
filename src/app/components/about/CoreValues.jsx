const CoreValues = () => {
  const values = [
    {
      title: "Vision",
      description:
        "To empower businesses and individuals through innovative software solutions that seamlessly integrate technology into everyday life, fostering a future where human potential is amplified.",
    },
    {
      title: "Mission",
      description:
        "We strive to create intuitive, reliable, and user-centric software that solves real-world problems, drives efficiency, and unlocks new opportunities. We are committed to fostering a collaborative environment where creativity thrives, pushing the boundaries of what's possible through cutting-edge technology and a passion for excellence.",
    },
  ];
  return (
    <div className="w-full h-auto bg-[#F9F9FF] p-7 lg:px-20 lg:pb-10 flex flex-col gap-y-[50px] text-[#333333] items-center mb-[50px]">
      {values.map((value) => (
        <div
          key={value.title}
          className="flex flex-col text-center lg:w-[80%] bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-[5px] items-center p-[2px] overflow-hidden"
        >
          <div className="p-12 items-center flex flex-col text-center w-full bg-white overflow-hidden rounded-[2px]">
            <p className="text-[32px] font-semibold gradient-text">
              {value.title}
            </p>
            <div className="w-full lg:w-[70%] h-[1px] bg-gray-200 m-3"></div>
            <p className="text-[16px] mt-2">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoreValues;
