import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const ClientProjectCard = () => {
  const router = useRouter();
  return (
    <div className=" w-full shadow-2xl hover:scale-105 rounded-md">
      <div className="relative">
        <Image
          src="/clientprojectimage.jpg"
          width={298}
          height={194}
          layout="responsive"
          className="shadow-inner rounded-t-md botton-blur-sm "
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
      {/* progress bar */}
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
        <button
          className="bg-secondary  px-4 w-24 rounded-md text-white text-sm"
          onClick={() => {
            router.push("/client-dashboard/projectTimeline");
          }}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ClientProjectCard;
