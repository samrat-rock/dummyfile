import React from "react";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegFilePdf } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import Image from "next/image";

function Page() {
  return (
    <main className="bg-gray-100 px-4 md:px-10 lg:px-20 py-6">
      <nav className="bg-white shadow px-4 py-5 flex justify-between font-poppins items-center rounded-lg">
        <h3 className="font-bold text-2xl">My Applications</h3>
        <div className="flex gap-3 items-center font-bold">
          <span className="text-2xl">
            <FaRegBell />
          </span>
          <span className="text-3xl">
            <CgProfile />
          </span>
          <p>Samrat Pandey</p>
        </div>
      </nav>

      <section className="bg-white rounded-lg py-5 my-5 font-poppins px-4 border">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              className="h-12 w-12 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Author's profile"
              width={100}
              height={100}
            />
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <h3 className="font-bold text-lg">Edxplor • UI UX Designer</h3>
              <span className="bg-[#49ADD6] text-white px-2 rounded text-sm">
                Interview
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <h3 className="text-sm font-bold text-[#4AAAB9]">My Profile</h3>
            <button className="bg-[#0395A9] px-5 py-2 font-bold text-white rounded">
              View Job Post
            </button>
          </div>
        </div>

        <div className="border-gray-200 border my-5"></div>

        <div className="font-poppins py-5">
          <p className="py-2">Application ID: #HRX24324</p>
          <p className="py-2">Applied on: 12th March, 2024 </p>
          <p className="py-2">
            Interview: 15th March, 2024
            <span className="bg-blue-200 text-blue-800 px-3 py-1 ml-3 rounded">
              3 days left
            </span>
          </p>
          <p className="py-2">
            Time: 03:30PM
            <span className="bg-red-200 text-red-800 px-3 py-1 ml-3 rounded">
              3 days left
            </span>
          </p>
          <p>
            Meet Link: 
            <a
              href="https://meet.google.com/abc-defg-hij"
              target="_blank"
              className="text-blue-600 border-blue-500 border-b-2"
            >
              https://meet.google.com/abc-defg-hij
            </a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <h4 className="font-bold py-5">Resume</h4>
            <div className="bg-[#013F47] rounded-3xl w-full md:w-72 h-72 text-white">
              <div className="py-7 px-5 flex justify-between items-center">
                <div className="flex gap-2">
                  <FaRegFilePdf className="text-red-700 text-2xl " />
                  <p>Myresume.pdf</p>
                </div>
                <span className="py-1">
                  <HiDotsVertical />
                </span>
              </div>
              <div className="mx-auto w-56 h-44 rounded-lg overflow-hidden">
                <Image
                  className="object-contain"
                  src="https://s3.eu-west-2.amazonaws.com/resumedone-eu-west-2-staging/BN5jKoqcY5-photo.png"
                  alt="Resume Preview"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-bold py-5">Cover Letter</h3>
            <div className="border border-gray-200 py-2 px-2 text-gray-400 rounded h-full">
              <p>
                Lorem ipsum dolor sit amet consectetur. Faucibus integer diam condimentum sit dolor. Lacinia nisi fringilla amet ut.
                Ipsum enim varius sem pharetra eget. Consectetur vulputate dignissim sollicitudin sit commodo risus vel at semper.
                Gravida dolor fermentum massa cursus. Egestas ac vel vestibulum sit semper curabitur, in eu posuere adipiscing non.
                Condimentum vulputate nibh diam amet. Nullam donec a sodales nunc. Dictum praesent tellus commodo faucibus donec.
                Interdum praesent auctor varius consequat adipiscing consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
