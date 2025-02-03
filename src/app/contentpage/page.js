import { CiSearch } from "react-icons/ci";
import { AiOutlineInfoCircle } from "react-icons/ai";  
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoIosDocument } from "react-icons/io";
import { CiMedicalCase } from "react-icons/ci";
import { PiTrademarkRegistered } from "react-icons/pi";
import { TfiReceipt } from "react-icons/tfi";
import { MdClass } from "react-icons/md";
import { GiStakeHammer } from "react-icons/gi";
import { GrDeploy } from "react-icons/gr";
import React from "react";

const sections = [
  {
    id: 1,
    title: "PRE-SELECTION",
    description: "he pre-selection process nvoves advertsing in local mass media to inform potential appicants about the job Some applications are drawn from our existing database The pre-selection is carried out by our company management, which assesses the capabilities and competencies of individuals to ensure, they meet employer expectations.",
    icon: <CiSearch className="text-blue-500 text-3xl" />,  
  },
  {
    id: 2,
    title: "FINAL SELECTION",
    description: "general, the final selectico is made. from those lected in the preliminary stage through a drect terview conducted by the employer or ds presentative It consists of both an cral and a practical ade test Many companies authorize our agency to andle the final selection on their behalf, Sometimes, a kype interview is also conducted with the emplover",
    icon: <AiOutlineInfoCircle className="text-blue-500 text-3xl" />,  
  },
  {
    id: 3,
    title: "TRADE TEST",
    description: "Trade tests are conducted by a competent testing board and committee consisting of professionals, experts, and instructors at the concern’s Trade Test Centers",
    icon: <PiTrademarkRegistered className="text-blue-500 text-3xl" />,  
  },
  {
    id: 4,
    title: "MEDICAL CHECKUP",
    description: "A medical board, including psychiatrists, conducts check-ups of selected candidates Candidates are sent to the doctor, hospital or clinic nominated by the embassy of the respective country, which is approved by the Nepal Government medical board as advised by the emplover, toothe examination.",
    icon: <CiMedicalCase className="text-blue-500 text-3xl" />,  
  },
  {
    id: 5,
    title: "DOCUMENTATION",
    description: "We assume the responsibility of accumulating the necessary documentation of medically fit candidates Required documents include passports, photographs, and related certificates to meet their job specifications. We do not merely gather documents, we also make an effort to check the authenticity of these documents to the best of our ability",
    icon: <IoIosDocument className="text-blue-500 text-3xl" />,  
  },
  {
    id: 6,
    title: "APPLICATION & RECEIPTS OF VISA",
    description: "The selection candidates visa applications are submitted to the resceptive embassy as authorized by the employer.The process varies from country to country. upon receipt of the visa, we iniate the deparutre procedures for the workes",
    icon: <TfiReceipt className="text-blue-500 text-3xl" />,  
  },
  {
    id: 7,
    title: "ORIENTATION",
    description: "After receiving the confirmed joining ticket from the employer, but before deploymentcandidates attendan orientation class conducted by our company management, it is a crucial factor for employees to understand the working conditions, political climate, climatic conditions, socio-cultural values, and rules and regulations of their destination country to help them adapt to the work environment. The orientation program provides with necessary information related ther recruitment it also guides trem nima nanine good conduct and motivates them to full their duties and responsibilities",
    icon: <MdClass className="text-blue-500 text-3xl" />,  
  },
  {
    id: 8,
    title: "DEPARTMENT OF LABOUR",
    description: "Once we receive the visa from the employer, we arrange for the candidates to complete mandatory insurance amounting to Nepalese Rupees 10,00,000 by paying the required insurance premium under the foreign employment insurance scheme. We apply for the Department of Labor approval, which takes about 4 working days to get final approval from them.",
    icon: <GiStakeHammer className="text-blue-500 text-3xl" />,  
  },
  {
    id: 9,
    title: "DEPLOYMENT",
    description: "The total deployment period would be 15-20 working days at most, depending on visa processing times and the consent of both parties. Once we receive final approval from the concerned authorities, we request the employer to provide the joining ticket for the earliest available date:",
    icon: <GrDeploy className="text-blue-500 text-3xl" />,  
  }
];

function Page() {
  return (
    <div className="container mx-auto py-10 mt-10 flex flex-col items-center bg-[#D6E3EC] font-poppins">
      <div className="flex items-center gap-5">
        <div className="border-blue-500 border-2 w-40 hidden lg:block"></div>
        <div className="text-blue-400 text-center">
          <h3 className="font-bold text-2xl">SELECTION</h3>
          <p className="text-sm">PROCEDURE</p>
        </div>
        <div className="border-blue-500 border-2 w-40 hidden lg:block"></div>
      </div>

      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-10">
  {sections.map((section) => (
    <div key={section.id} className="relative w-52 flex flex-col items-center group">
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
        <p className="text-sm overflow-y-auto px-2 pb-2 scrollbar-hide">{section.description}</p>
        <div className="absolute right-1 top-44">
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
