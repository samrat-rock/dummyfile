import Link from "next/link";

export default function JobCategories() {
  const jobCategories = [
    {
      id: 1,
      image:
        "https://emiratiguard.com/wp-content/uploads/2024/03/Guard-security-UAE.jpg",
      name: "Security",
      description:
        "Security professionals ensure safety in various environments, overseeing safety measures and protecting individuals from harm. Attention to detail and emergency handling are key."
    },
    {
      id: 2,
      image:
        "https://www.ilo.org/sites/default/files/styles/hero_basic_desktop/public/2024-07/Qatar-construction-site-2048x900.jpg.webp?itok=gMfWycNu",
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
        "https://www.shutterstock.com/image-photo/factory-worker-programming-cnc-milling-260nw-702099169.jpg",
      name: "Machine Operation",
      description:
        "Machine operators control and maintain industrial machines. They ensure smooth and safe operation, troubleshooting any issues that arise."
    },
    {
      id: 5,
      image:
        "https://wellmadeconstructionengineering.wordpress.com/wp-content/uploads/2018/08/structural-masonry.jpg?w=640",
      name: "Masonry",
      description:
        "Masons work with brick and stone to create walls and buildings. They ensure structures are stable and durable through precise cutting and laying of materials."
    },
    {
      id: 6,
      image:
        "https://fnbreport.ph/wp-content/uploads/2018/04/chuttersnap-461239-unsplash.jpg",
      name: "Hospitality",
      description:
        "Hospitality professionals manage guest relations, food services, and hotel operations, ensuring a welcoming and comfortable experience for visitors."
    },
    {
      id: 7,
      image:
        "https://www.falconfulfillment.com/wp-content/uploads/2023/03/ff_logistics_001_misc_1920x1280.jpg",
      name: "Logistics",
      description:
        "Logistics professionals manage the flow of goods, ensuring inventory is properly tracked and products are delivered on time."
    },
    {
      id: 8,
      image:
        "https://britishbusinessexcellenceawards.co.uk/wp-content/uploads/2024/03/shutterstock_712414813-jpg.webp",
      name: "Customer Service",
      description:
        "Customer service representatives assist customers with inquiries and complaints, ensuring satisfaction through effective communication and problem-solving."
    },
    {
      id: 9,
      image:
        "https://www.philips.com/c-dam/corporate/innovation-and-you/global/jun-2024/bridging-gaps-in-healthcare-hero.jpg",
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
        "https://commercial.allianz.com/news-and-insights/news/aviation-trends-2024/_jcr_content/root/stage/stageimage.img.82.3360.jpeg/1721654537661/commercial-aviation-report-press-release-2024-stage.jpeg",
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

        <div className="flex justify-center pb-4 col-span-full">
          <Link href="/contentpage">
            <button className="bg-slate-800 px-6 py-3 text-white font-bold rounded-lg hover:bg-slate-700 transition">
              Forward
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
