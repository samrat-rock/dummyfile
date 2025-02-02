import Link from "next/link";

export default function JobCategories() {
  const jobCategories = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/medium-shot-security-officer-posing-studio_23-2150275721.jpg",
      name: "Security",
      description:
        "Security professionals ensure safety in various environments, overseeing safety measures and protecting individuals from harm. Attention to detail and emergency handling are key."
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Construction",
      description:
        "Construction workers design, build, and maintain infrastructure. They handle materials and equipment to ensure projects are completed safely and on time."
    },
    {
      id: 3,
      image:
        "https://mccoymart.com/post/wp-content/uploads/The-Top-10-Benefits-Of-Hiring-A-Professional-Carpenter.jpg",
      name: "Carpentry",
      description:
        "Carpenters work with wood to build structures like furniture and frameworks. They use various tools to create precise measurements and cuts for functional and aesthetic results."
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/man-operating-industrial-machine-factory_23-2149333655.jpg",
      name: "Machine Operation",
      description:
        "Machine operators control and maintain industrial machines. They ensure smooth and safe operation, troubleshooting any issues that arise."
    },
    {
      id: 5,
      image:
        "https://www.ny-engineers.com/hubfs/Webp-Images/Masonry-Construction.webp",
      name: "Masonry",
      description:
        "Masons work with brick and stone to create walls and buildings. They ensure structures are stable and durable through precise cutting and laying of materials."
    },
    {
      id: 6,
      image:
        "https://qtxasset.com/quartz/qcloud1/media/image/2016-05/hotel-staff.jpg?VersionId=Vzk8oKyP3_euUBt83rNM.ixVNZSjc5NA",
      name: "Hospitality",
      description:
        "Hospitality professionals manage guest relations, food services, and hotel operations, ensuring a welcoming and comfortable experience for visitors."
    },
    {
      id: 7,
      image:
        "https://img.freepik.com/free-photo/warehouse-worker-checking-inventory-using-tablet_23-2149333656.jpg",
      name: "Logistics",
      description:
        "Logistics professionals manage the flow of goods, ensuring inventory is properly tracked and products are delivered on time."
    },
    {
      id: 8,
      image:
        "https://img.freepik.com/free-photo/customer-service-representative-working-call-center_23-2149333661.jpg",
      name: "Customer Service",
      description:
        "Customer service representatives assist customers with inquiries and complaints, ensuring satisfaction through effective communication and problem-solving."
    },
    {
      id: 9,
      image:
        "https://adasitecompliance.com/wp-content/uploads/2022/05/Digital-Healthcare-Trends.jpg",
      name: "Healthcare",
      description:
        "Healthcare professionals diagnose, treat, and care for patients, playing a critical role in maintaining public health and well-being."
    },
    {
      id: 10,
      image:
        "https://www.dorsey.edu/wp-content/uploads/2023/05/what-is-culinary-arts.jpg",
      name: "Culinary Arts",
      description:
        "Culinary professionals prepare, cook, and present food, using creativity and technical skill to enhance dining experiences."
    },
    {
      id: 11,
      image:
        "https://img.freepik.com/free-photo/pilot-cockpit-aircraft-aviation_23-2149333663.jpg",
      name: "Aviation",
      description:
        "Aviation professionals ensure safe air travel by operating aircraft, managing air traffic, and assisting passengers during flights."
    },
  ];

  return (
    <>
      <div>
        <h2 className="font-poppins text-center font-bold py-2 text-[30px]">Available Sector</h2>
        <p className="text-center font-poppins">
          Available sectors include security, construction, carpentry, masonry, machine operations, and hospitality,
          offering diverse job <br /> opportunities in skilled labor and service industries.
        </p>
        <div className="container mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1300px] font-poppins">
          {jobCategories.map((item, index) => (
            <div
              key={index}
              className="border-2 rounded-lg shadow-md overflow-hidden flex flex-col w-[300px] h-[auto] mx-auto mb-[20px] transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="relative">
                <img className="w-full h-[200px] object-cover" src={item.image} alt={item.name} />
              </div>

              <div className="pt-3 pb-3 px-3 text-center flex flex-col flex-1">
                <div className="text-lg font-bold text-left">{item.name}</div>
                <p className="text-sm text-left text-gray-600 font-poppins ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Link href="/newpage">
            <button className="btn px-4 py-2 bg-blue-500 text-white rounded-lg">NEXT PAGE</button>
          </Link>
        </div>
      </div>
    </>
  );
}
