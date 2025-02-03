import { CiSearch } from "react-icons/ci";
import { AiOutlineInfoCircle } from "react-icons/ai";  
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoIosDocument } from "react-icons/io";
import { CiMedicalCase } from "react-icons/ci";
import { PiTrademarkRegistered } from "react-icons/pi";





import React from "react";

const sections = [
  {
    id: 1,
    title: "PRE-SELECTION",
    description: "The-pre-selection process involves advertising in local noss media to inform potential appacants about the joo Stine applications are drawn from our existing database",
    icon: <CiSearch className="text-blue-500 text-3xl" />,  
  },
  {
    id: 2,
    title: "FINAL SELECTION",
    description: "In general, the final selection is made from those selected in the preliminary stage through a direct interview conduct by the employer or its representative. It consists of both  ",
    icon: <AiOutlineInfoCircle className="text-blue-500 text-3xl" />,  
  },
  {
    id: 3,
    title: "TRADE TEST",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    icon: <PiTrademarkRegistered className="text-blue-500 text-3xl" />,  
  },
  {
    id: 4,
    title: "MEDICAL CHECKUP",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    icon: <CiMedicalCase className="text-blue-500 text-3xl" />,  
  },
  {
    id: 5,
    title: "DOCUMENTATION",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.",
    icon: <IoIosDocument className="text-blue-500 text-3xl" />,  
  },
];

function Page() {
  return (
    <div className="container mx-auto py-10 mt-10 flex flex-col items-center bg-[#D6E3EC] font-poppins">
    
      <div className="flex items-center gap-5">
        <div className="border-blue-500 border-2 w-40 hidden lg:block"></div>
        <div className="text-blue-400 text-center">
          <h3 className="font-bold text-2xl">BUSINESS</h3>
          <p className="text-sm">INFOGRAPHIC</p>
        </div>
        <div className="border-blue-500 border-2 w-40 hidden lg:block"></div>
      </div>

      <section className="flex gap-10 justify-center flex-wrap mt-10">
        {sections.map((section) => (
          <div
            key={section.id}
            className="relative w-52 flex flex-col items-center group"
          >
            <div className="bg-blue-500 rounded-full aspect-square w-30 flex h-28 justify-center pt-6 text-white font-bold text-2xl">
              <h3>{`0${section.id}`}</h3>
            </div>

        
            <div className="relative w-60 h-72 border-4 border-white rounded-3xl shadow-lg bottom-[70px] overflow-hidden mt-5 group-hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="w-full h-full backdrop-blur-xl bg-white/20 "></div>
            </div>

          
            <div className="absolute top-[80px] w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center shadow-md">
              {section.icon} 
            </div>

            
            <div className="text-blue-400 text-center w-[180px] absolute top-[140px] h-[160px] flex flex-col">
  <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
  <p className="text-sm overflow-y-auto px-2 pb-2 scrollbar-hide">
    {section.description}
  </p>
  <div className="absolute right-1  top-44">
    <TbPlayerTrackNextFilled className="text-blue-500 text-2xl" />
  </div>
</div>

          </div>
        ))}
      </section>
    </div>
  );
}

export default Page;
