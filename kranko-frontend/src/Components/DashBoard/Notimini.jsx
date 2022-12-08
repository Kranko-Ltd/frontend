import Image from "next/image";
import React from "react";

const Notimini = () => {
  return (
    <div className="relative mt-1 shadow-inner hover:scale-105 hover:cursor-pointer">
      <div className="flex space-x-2 mt-3 items-center  ">
        <Image
          src="/notiImage.jpg"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div className="">
          <div className="flex justify-between">
            <p className="text-sm text-grey-900 font-bold">Bessie Coleman</p>
            <span className="text-sm text-greyLight font-bold"> 20 min</span>
          </div>
          <p className="text-xs text-grey-900">Scheduled A meeting with You</p>
        </div>
      </div>
      <div className="p-1 py-0 bg-secondary font-bold text-white rounded-full absolute top-0 left-8">
        <p className="text-xs">2</p>
      </div>
    </div>
  );
};

export default Notimini;
