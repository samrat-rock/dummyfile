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
        "Engineer(civil, Electric, Mechanical)/Surveyor(land and Quantity) Overseer, Supervisor, Drafts man foremen, Accountant, Time Keeper, Steel Fixer,plumber, Weilder, Rigger, Scaffolder",
      ],
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Construction",
      roles: [
        "Engineer(civil, Electric, Mechanical)/Surveyor(land and Quantity) Overseer, Supervisor, Drafts man foremen, Accountant, Time Keeper, Steel Fixer,plumber, Weilder, Rigger, Scaffolder",
      ],
    },

    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Construction",
      roles: [
        "Engineer(civil, Electric, Mechanical)/Surveyor(land and Quantity) Overseer, Supervisor, Drafts man foremen, Accountant, Time Keeper, Steel Fixer,plumber, Weilder, Rigger, Scaffolder",
      ],
    },

    {
      id: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Construction",
      roles: [
        "Engineer(civil, Electric, Mechanical)/Surveyor(land and Quantity) Overseer, Supervisor, Drafts man foremen, Accountant, Time Keeper, Steel Fixer,plumber, Weilder, Rigger, Scaffolder",
      ],
    },

    {
      id: 6,
      image:
        "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Construction",
      roles: [
        "Engineer(civil, Electric, Mechanical)/Surveyor(land and Quantity) Overseer, Supervisor, Drafts man foremen, Accountant, Time Keeper, Steel Fixer,plumber, Weilder, Rigger, Scaffolder",
      ],
    },
    {
      id: 7,
      image:
        "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Construction",
      roles: [
        "Engineer(civil, Electric, Mechanical)/Surveyor(land and Quantity) Overseer, Supervisor, Drafts man foremen, Accountant, Time Keeper, Steel Fixer,plumber, Weilder, Rigger, Scaffolder",
      ],
    },

    {
      id: 8,
      image:
        "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Construction",
      roles: [
        "Engineer(civil, Electric, Mechanical)/Surveyor(land and Quantity) Overseer, Supervisor, Drafts man foremen, Accountant, Time Keeper, Steel Fixer,plumber, Weilder, Rigger, Scaffolder",
      ],
    },

    
  ];

  return (
    <>
    <div>

      <h2 className="font-poppins text-center font-bold py-2 text-[30px]">Available Sector</h2>
      <p className="text-center font-poppins font-bold ">Available sectors include security, construction, carpentry, masonry, machine operations, and hospitality, offering <br /> diverse job opportunities in skilled labor and service industries.</p>
    <div className="container mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-[1050px] font-poppins">
        
        
        {jobCategories.concat(jobCategories).map((item, index) => (
          <div
            key={index}
            className="border-2 rounded-lg shadow-md overflow-hidden flex flex-col w-[250px] h-[350px] mx-auto"
          >
            <div className="relative pt-[150px]">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className="pt-3 pb-3 px-3 text-center flex flex-col flex-1">
              <h3 className="font-serif text-md mb-2 text-left">{item.roles}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Link href="/newpage">
          <button className="btn px-4 py-2 bg-blue-500 text-white rounded-lg">
            NEXT PAGE
          </button>
        </Link>
      </div>
      </div>

      
     
    </>
  );
}
