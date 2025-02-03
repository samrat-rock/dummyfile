import Link from "next/link";

const data = [
    {
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatibus quia, nulla! Marios et perferendis eaque exercitationem praesentium nihil.",
      tags: ["photography", "travel", "winter"],
      image:
        "https://media.istockphoto.com/id/879088762/photo/splendid-christmas-scene-in-the-mountain-forest.jpg?s=2048x2048&w=is&k=20&c=E_Es4ZP-6sWrMDLCzcojwVcHfY0XRiz2fA3tw5pQxHY=",
    },
    {
      title: "Winter Wonderland",
      description:
        "Nunc ut nulla nunc sit amet felis. Nunc commodo neque nulla, sed aliquet odio feugiat vitae.",
      tags: ["snow", "nature", "holiday"],
      image:
        "https://t4.ftcdn.net/jpg/00/64/81/97/360_F_64819783_bO18d6WGTEmDreGV8kHJd1uQ0w7ALl9n.jpg",
    },
  ];

 function Page() {
    return (
      <div className="container mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] font-poppins">
        {data.concat(data).map((item, index) => (
          <div 
            key={index} 
            className="border-2 rounded-lg shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105"
          >
            <div className="relative pt-[200px]">
              <img 
                className="absolute top-0 left-0 w-full h-full object-cover transition duration-300" 
                src={item.image} 
                alt={item.title} 
              />
            </div>
  
            <div className="pt-4 pb-4 px-4 text-center flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
    
              <p className="text-left text-sm mb-4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        <div className="flex justify-center pb-4 col-span-full">
          <Link href="/">
            <button className="bg-slate-800 px-6 py-3 text-white font-bold rounded-lg hover:bg-slate-700 transition">
              Back
            </button>
          </Link>
        </div>

        
      </div>
    );
  }
  
  export default Page;