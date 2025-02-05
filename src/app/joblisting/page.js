import React from "react";
import { FaRegBell, FaLongArrowAltDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdPostAdd } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const jobListings = [
  { title: "UI UX Designer", applications: 5, status: "Expired", postedDate: "15th March, 2024", expiryDate: "15th March, 2024", isActive: false },
  { title: "Frontend Developer", applications: 3, status: "Active", postedDate: "15th March, 2024", expiryDate: "15th March, 2024", isActive: true },
  { title: "Backend Developer", applications: 0, status: "Active", postedDate: "15th March, 2024", expiryDate: "15th March, 2024", isActive: true },
  { title: "Backend Developer", applications: 0, status: "Active", postedDate: "15th March, 2024", expiryDate: "15th March, 2024", isActive: true },
  { title: "Backend Developer", applications: 0, status: "Active", postedDate: "15th March, 2024", expiryDate: "15th March, 2024", isActive: true },
  { title: "Backend Developer", applications: 0, status: "Active", postedDate: "15th March, 2024", expiryDate: "15th March, 2024", isActive: true },
  { title: "Backend Developer", applications: 0, status: "Active", postedDate: "15th March, 2024", expiryDate: "15th March, 2024", isActive: true },
  { title: "Backend Developer", applications: 0, status: "Active", postedDate: "15th March, 2024", expiryDate: "15th March, 2024", isActive: true },
  { title: "Backend Developer", applications: 0, status: "Active", postedDate: "15th March, 2024", expiryDate: "15th March, 2024", isActive: true },
  { title: "Backend Developer", applications: 0, status: "Active", postedDate: "15th March, 2024", expiryDate: "15th March, 2024", isActive: true },
  { title: "Backend Developer", applications: 0, status: "Active", postedDate: "15th March, 2024", expiryDate: "15th March, 2024", isActive: true },
  { title: "Backend Developer", applications: 0, status: "Active", postedDate: "15th March, 2024", expiryDate: "15th March, 2024", isActive: true },
  { title: "Backend Developer", applications: 0, status: "Active", postedDate: "15th March, 2024", expiryDate: "15th March, 2024", isActive: true },

];

function Page() {
  return (
    <>
     <nav className="mx-auto max-w-6xl bg-white shadow-lg p-6 mt-6 flex justify-between items-center font-poppins rounded-lg flex-wrap">
        <div className="font-bold text-2xl">
          <h3>Job Listings</h3>
        </div>
        <div className="flex gap-6 items-center font-bold flex-wrap mt-3 sm:mt-0">
          <button className="bg-yellow-500 text-white font-bold px-4 py-2 rounded-lg flex gap-2 items-center">
            <MdPostAdd className="text-2xl" /> Post Job
          </button>
          <FaRegBell className="text-2xl cursor-pointer" />
          <CgProfile className="text-3xl cursor-pointer" />
        </div>
      </nav>

      <section className="mx-auto max-w-6xl bg-white rounded-lg py-5 mt-5 font-poppins p-6 border">
        <div className="flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap gap-3 items-center">
            <h3 className="font-medium text-lg">Job Posts</h3>
            <p className="bg-[#F9F5FF] text-[#40A6B7] rounded px-3 py-1">
              {jobListings.length} Jobs found
            </p>
          </div>
          <div className="flex flex-wrap items-center w-full sm:w-auto border rounded-lg bg-[#F5F5F5]">
            <input
              type="text"
              placeholder="Search job"
              className="w-full sm:w-[700px] px-4 py-2 focus:outline-none bg-transparent"
            />
            <button className="bg-[#E6F4F6] text-blue-400 px-4 py-2 rounded-r-lg flex items-center gap-2 w-full sm:w-auto">
              <CiSearch className="text-xl" /> Search
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto font-poppins bg-[#F9FAFB] py-4 px-4 sm:px-6 rounded-lg">
        <ul className="flex justify-between items-center font-medium text-gray-600 hidden sm:flex">
          <li className="w-[25%] flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-400" />
            Job Details
          </li>
          <li className="w-[15%] flex items-center gap-2">
            Status <FaLongArrowAltDown />
          </li>
          <li className="w-[10%] text-center">Active</li>
          <li className="w-[15%] text-center">Posted Date</li>
          <li className="w-[15%] text-center">Expiry Date</li>
          <li className="w-[10%] text-center">Action</li>
        </ul>
      </section>

      <section className="container mx-auto font-poppins border-[1px] bg-white">
        {jobListings.map((job, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between items-center border-b-[1px] border-gray-300 py-4 px-4 sm:px-6"
          >
            <div className="w-full sm:w-[25%] flex items-center gap-3">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-lg border-gray-400"
              />
              <div>
                <h3 className="text-lg font-medium">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.applications} Applications</p>
              </div>
            </div>
            <div className="w-full sm:w-[15%] flex items-center gap-3 mt-3 sm:mt-0">
              <div
                className={`px-3 py-1 rounded-full flex items-center gap-2 ${
                  job.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    job.status === "Active" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                {job.status}
              </div>
            </div>

            <div className="w-full sm:w-[10%] text-center mt-3 sm:mt-0">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={job.isActive}
                  className="sr-only peer"
                  readOnly
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 transition-colors">
                  <span
                    className="absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-[20px]"
                  ></span>
                </div>
              </label>
            </div>

            <div className="w-full sm:w-[15%] text-center text-sm text-gray-500 mt-3 sm:mt-0">
              {job.postedDate}
            </div>
            <div className="w-full sm:w-[15%] text-center text-sm text-gray-500 mt-3 sm:mt-0">
              {job.expiryDate}
            </div>
            <div className="w-full sm:w-[10%] text-center text-gray-600 cursor-pointer mt-3 sm:mt-0">
              ...
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Page;
