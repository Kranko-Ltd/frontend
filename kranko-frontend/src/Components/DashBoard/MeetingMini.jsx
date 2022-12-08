import React from "react";
import Image from "next/image";
import {
  RiDashboardFill,
  RiPassportFill,
  RiSuitcaseFill,
  RiCalendarTodoFill,
} from "react-icons/ri";

const MeetingMini = () => {
  return (
    <div className="flex  justify-between  mt-3 items-center hover:opacity-95  hover:scale-95  ">
      <Image
        src="/notiImage.jpg"
        width={50}
        height={50}
        className="rounded-full object-cover"
      />
      <div className="ml-1">
        <p className="text-sm text-grey-900 font-bold">Bessie Coleman</p>
        <span className="text-grey-900 text-xs flex items-center">
          <RiCalendarTodoFill /> Today at 14:30
        </span>
      </div>
      <button className="bg-secondary rounded text-xs mr-0 p-2 py-1 text-white">
        View
      </button>
    </div>
  );
};

export default MeetingMini;
