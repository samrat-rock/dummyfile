import Link from "next/link";

export default function JobCategories() {
  const jobCategories = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/medium-shot-security-officer-posing-studio_23-2150275721.jpg",
      name: "Security",
      roles: [
        "Security Supervisor, Security Foremen, Personal Bodyguard, Security Guard",
      ],
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Construction",
      roles: [
        "Engineer (Civil, Electric, Mechanical), Surveyor (Land and Quantity), Overseer, Supervisor, Draftsman, Foremen, Accountant, Time Keeper, Steel Fixer, Plumber, Welder, Rigger, Scaffolder",
      ],
    },
    {
      id: 3,
      image:
        "https://mccoymart.com/post/wp-content/uploads/The-Top-10-Benefits-Of-Hiring-A-Professional-Carpenter.jpg",
      name: "Carpentry",
      roles: [
        "Finishing, Shuttering",
      ],
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/man-operating-industrial-machine-factory_23-2149333655.jpg",
      name: "Machine Operation",
      roles: [
        "Heavy Machine Operator, Crane Operator, Forklift Operator",
      ],
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/free-photo/bricklayer-holding-brick-trowel_23-2149381068.jpg",
      name: "Masonry",
      roles: [
        "Bricklayer, Cement Finisher, Concrete Worker",
      ],
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/free-photo/hotel-receptionist-welcoming-guests_23-2149381068.jpg",
      name: "Hospitality",
      roles: [
        "Hotel Staff, Receptionist, Housekeeping, Chef",
      ],
    },
    {
      id: 7,
      image:
        "https://img.freepik.com/free-photo/warehouse-worker-checking-inventory-using-tablet_23-2149333656.jpg",
      name: "Logistics",
      roles: [
        "Warehouse Manager, Inventory Controller, Supply Chain Coordinator",
      ],
    },
    {
      id: 8,
      image:
        "https://img.freepik.com/free-photo/customer-service-representative-working-call-center_23-2149333661.jpg",
      name: "Customer Service",
      roles: [
        "Call Center Agent, Customer Support Representative, Technical Support",
      ],
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
        <div className="container mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1050px] font-poppins">
          {jobCategories.map((item, index) => (
            <div
              key={index}
              className="border-2 rounded-lg shadow-md overflow-hidden flex flex-col w-[250px] h-[350px] mx-auto mb-[20px]"
            >
              <div className="relative pt-[150px]">
                <img className="absolute top-0 left-0 w-full h-full object-cover" src={item.image} alt={item.name} />
              </div>
              <div className="pt-3 pb-3 px-3 text-center flex flex-col flex-1">
                <h3 className="font-serif text-md mb-2 text-left">{item.roles}</h3>
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
