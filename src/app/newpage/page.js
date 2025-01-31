import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="container mx-auto border-2 border-black rounded-lg shadow-lg w-[400px] mt-5 p-3">
      <img
        className="h-auto max-w-full rounded-lg"
        src="/docs/images/examples/image-1@2x.jpg"
        alt="Example"
      />

      <div className="pt-[50px] pb-[30px] text-center font-serif">
        <h3 className="font-bold">
            The  Coldest Sunset
        </h3>
        <p className="text-left pl-[40px]">Lorem ipsum dolor sit amet, consectetur <br/>
        adisping eilt. Voluptatiubs aquia, nulla!, <br/>
        Marios et perferendis eaqua <br/>
        exercitatioem praesentium nihil
        </p>
        <div className="flex gap-3 pl-[70px] py-3 " >
            <p className="bg rounded-lg p-1">#photography</p>
            <p className="bg rounded-lg p-1">#travel</p>
            <p className="bg rounded-lg p-1">#winter</p>
        </div>
      </div>
   <div className="flex justify-center">
   <Link href='/' > <button className="bg-slate-800 p-1 text-white font-bold">Back</button></Link>
    </div>  
    </div>
  );
}

export default Page;
