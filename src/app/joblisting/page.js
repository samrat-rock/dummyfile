import React from 'react';
import { FaRegBell, FaLongArrowAltDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdPostAdd } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const jobListings = [
  { title: "UI UX Designer", applications: 5, status: "Active" },
  { title: "Frontend Developer", applications: 8, status: "Pending" },
  { title: "Backend Developer", applications: 3, status: "Closed" },
  { title: "Project Manager", applications: 6, status: "Active" }
];

function Page() {
  return (
    <>
      <nav className="container mx-auto bg-white shadow-lg px-4 mt-6 flex justify-between font-poppins py-5 items-center rounded-lg">
        <div className="pl-4 font-bold text-2xl">
          <h3>Job Listings</h3>
        </div>
        <div className="pr-4 flex gap-8 items-center font-bold">
          <button className='bg-yellow-500 text-white font-bold p-3 rounded-lg flex gap-2'>
            <MdPostAdd className='font-bold text-2xl'/> Post Job
          </button>
          <span className="pr-5 text-2xl">
            <FaRegBell />
          </span>
          <span className="text-3xl">
            <CgProfile />
          </span>
        </div>
      </nav>

      <section className="container mx-auto bg-white rounded-lg py-5 my-5 font-poppins px-4 border-[1px]">
        <div className='flex justify-around items-center'>
          <div className='flex gap-3'>
            <h3>Job Posts</h3>
            <p className='bg-[#F9F5FF] text-[#40A6B7] rounded px-3'>{jobListings.length} Jobs found</p>
          </div>

          <div className='border-[1px] rounded-xl py-2 flex bg-[#F5F5F5]'>
            <input 
              type='text'
              placeholder='Search job'
              className='w-[900px] pl-5 focus:outline-none bg-transparent' 
            />
            <button className='bg-[#E6F4F6] text-blue-400 px-4 mr-3 rounded-lg flex gap-3 items-center text-2xl'>
              <CiSearch/> Search
            </button>
          </div>
        </div>
      </section>

     

    <main>

    <section className='bg-[#F9FAFB] container mx-auto font-poppins'>
        <div className='py-4 px-10'>
          <ul className='flex justify-between items-center'>
            <li className='flex items-center'>
              <input type="checkbox" className="mr-5 w-5 h-5 rounded-lg appearance-none border-2 border-gray-400 checked:bg-blue-500 checked:border-blue-500" />
              Job Details
            </li>
            <li className='flex items-center'>Status <FaLongArrowAltDown /></li>
            <li className='flex items-center'>Active <FaLongArrowAltDown /></li>
            <li className='flex items-center'>Posted Date <FaLongArrowAltDown /></li>
            <li className='flex items-center'>Expiry Date <FaLongArrowAltDown /></li>
            <li className='flex items-center'>Action <FaLongArrowAltDown /></li>
          </ul>
        </div>
      </section>
    <section className="container mx-auto font-poppins border-[1px] ">
  <div className=" ">
    {jobListings.map((job, index) => (
      <div key={index} className="my-6 border-b-[1px] border-gray-400 pb-7  w-full">
        <h3 className="text-xl flex items-center pl-9">
          <input 
            type="checkbox" 
            className="mr-5 w-5 h-5 rounded-lg appearance-none border-2 border-gray-400 checked:bg-blue-500 checked:border-blue-500" 
          />
          {job.title}
        </h3>
        <p className="text-sm text-gray-500 pl-20">{job.applications} applications found</p>
      </div>
    ))}
  </div>
</section>
    </main>

    </>
  );
}

export default Page;
