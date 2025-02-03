import { CiSearch } from "react-icons/ci";
import React from "react";

const sections = [
  {
    id: 1,
    title: "OPTIONS 01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "OPTIONS 02",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "OPTIONS 03",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    id: 4,
    title: "OPTIONS 04",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    id: 5,
    title: "OPTIONS 05",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
];

function Page() {
  return (
    <div className="container mx-auto py-10 mt-10 flex flex-col items-center bg-blue-200 font-poppins">
      {/* Title and Dividers */}
      <div className="flex items-center gap-5">
        <div className="border-blue-500 border-2 w-40"></div>
        <div className="text-blue-400 text-center">
          <h3 className="font-bold text-2xl">BUSINESS</h3>
          <p className="text-sm">INFOGRAPHIC</p>
        </div>
        <div className="border-blue-500 border-2 w-40"></div>
      </div>

  
      <section className="flex gap-10 justify-center flex-wrap mt-10">
        {sections.map((section) => (
          <div key={section.id} className="relative w-[250px] flex flex-col items-center">
            <div className="bg-blue-500 rounded-full w-[100px] h-[100px] flex pl-[35px] py-[20px] text-white font-bold text-2xl">
              <h3>{`0${section.id}`}</h3>
            </div>

          
            <div className="relative w-[200px] h-[250px] border-4 border-white rounded-xl shadow-lg bottom-[70px] overflow-hidden mt-5">
              <div className="w-full h-full backdrop-blur-sm bg-white/40"></div>
            </div>

      
            <div className="absolute top-[60px] w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center shadow-md">
              <CiSearch className="text-blue-500 text-3xl" />
            </div>


            <div className="text-blue-400 text-center max-w-[180px]  relative bottom-[250px] mt-5">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <p className="text-sm">{section.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Page;
