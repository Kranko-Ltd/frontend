import React from "react";
import Image from "next/image";

const ClientProjectCard = () => {
  return (
    <div className=" w-full shadow-2xl hover:scale-105">
      <div className="relative">
        <Image
          src="/clientprojectimage.png"
          width={250}
          height={200}
          layout="responsive"
          className="shadow-inner botton-blur-sm "
        />
        <div className="absolute bottom-0 w-full bg-white  py-2 overflow-y-hidden bg-opacity-70 ">
          <p className="text-xl text-[#646F79] antialiased font-extrabold ml-1">
            Discover Food Ordering App
          </p>
        </div>
      </div>
      <p className="text-sm text-[#646F79] antialiased  bg-opacity-30 px-2">
        {" "}
        September 12th 2021
      </p>
      <div className="flex justify-between px-2">
        <div className="h-2 rounded w-1/2 bg-greyLight mt-2">
          <div className="h-2 rounded w-1/2 bg-secondary"></div>
        </div>
        <p className="text-secondary text-sm pr-2">50% Completed</p>
      </div>
      <div className="flex justify-between px-2 mt-3 pb-3">
        <div className="flex items-center">
          <Image
            src="/notiImage.jpg"
            height={50}
            width={50}
            className="rounded-full"
          />
          <p className="text-xs text-primary pl-3">By:Jessica Mwakazi</p>
        </div>
        <button className="bg-secondary  px-4 w-24 rounded text-white text-sm">
          VIEW
        </button>
      </div>
    </div>
  );
};

export default ClientProjectCard;
