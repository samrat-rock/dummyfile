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
        "https://img.freepik.com/free-photo/medium-shot-security-officer-posing-studio_23-2150275721.jpg",
      name: "Security",
      roles: [
        "Security Supervisor, Security Foremen, Personal Bodyguard, Security Guard",
      ],
    },

    {
      id: 5,
      image:
        "https://img.freepik.com/free-photo/medium-shot-security-officer-posing-studio_23-2150275721.jpg",
      name: "Security",
      roles: [
        "Security Supervisor, Security Foremen, Personal Bodyguard, Security Guard",
      ],
    },

    {
      id: 6,
      image:
        "https://img.freepik.com/free-photo/medium-shot-security-officer-posing-studio_23-2150275721.jpg",
      name: "Security",
      roles: [
        "Security Supervisor, Security Foremen",
        " Personal Bodyguard, Security Guard",
      ],
    },

    {
      id: 7,
      image:
        "https://img.freepik.com/free-photo/medium-shot-security-officer-posing-studio_23-2150275721.jpg",
      name: "Security",
      roles: [
        "Security Supervisor, Security Foremen",
        " Personal Bodyguard, Security Guard",
      ],
    },

    {
      id: 8,
      image:
        "https://img.freepik.com/free-photo/medium-shot-security-officer-posing-studio_23-2150275721.jpg",
      name: "Security",
      roles: [
        "Security Supervisor, Security Foremen",
        " Personal Bodyguard, Security Guard",
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Available Job Categories</h1>
      <div className="grid  lg:grid-cols-2 gap-4">
        {jobCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white p- rounded-lg shadow-md flex items-center gap-4"
          >
            <img src={category.image} alt={category.name} className="w-32 h-32 object-cover rounded-lg img" />
            <div>
              <h2 className="text-xl font-semibold mb-3">{category.name}</h2>
              <ul>
                {category.roles.map((role, index) => (
                  <li key={index} className="text-gray-700 mb-1">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
