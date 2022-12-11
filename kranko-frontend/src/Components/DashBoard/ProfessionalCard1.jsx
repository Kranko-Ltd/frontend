import React from "react";
import Image from "next/image";

const ProfessionalCard1 = ({ image, name, occupation }) => {
  return (
    <div className="bg-white shadow-xl  rounded-xl overflow-hidden relative hover:scale-105 hover:opacity-80 hover:shadow-inner">
      <div className="w-full rounded-lg z-3 ">
        <Image
          src="/prof-bg.png"
          width={250}
          height={104}
          layout="responsive"
          className=" "
        />
      </div>

      <p className="pl-24 text-darkBlue-900 text-sm  centre font-extrabold ">
        {name}
      </p>
      <p className="pl-24 text-grey-900 text-xs font-bold ">{occupation}</p>
      <div className="flex  justify-evenly text-xs p-2 xl:gap-2">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-grey-900">Active projects</p>
          <p className="text-grey-900 font-extrabold">128</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-grey-900">Completed projects</p>
          <p className="text-grey-900 font-extrabold">128</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-grey-900 mb-4 xl:mb-0">Rating</p>
          <p className="text-grey-900 font-extrabold">3.4</p>
        </div>
      </div>

      <div className="justify-evenly flex pb-1.5 px-1.5 gap-1.5">
        <button className="bg-secondary bg-opacity-30 h-4 flex items-center py-1.5 px-1.5 text-secondary text-bold text-xs rounded">
          Frontend
        </button>
        <button className="bg-secondary bg-opacity-30 h-4 flex items-center py-1.5 px-1.5 text-secondary text-bold text-xs rounded">
          Illustrations
        </button>
        <button className="bg-secondary bg-opacity-30 h-4 flex items-center py-1.5 px-1.5 text-secondary text-bold text-xs rounded">
          Frontend
        </button>
      </div>

      <div className="rounded-md bg-white p-1  absolute top-[30%] md:top-[25%] left-3">
        <img
          src={image}
          alt="prof image"
          width={60}
          height={60}
          className="rounded-md bg-white   "
        />
      </div>
    </div>
  );
};

export default ProfessionalCard1;
