import React from "react";
import MeetingMini from "./MeetingMini";
import Notimini from "./Notimini";

const Notifications = () => {
  return (
    <div className="bg-white shadow-xl md:w-1/4 ml-2 p-4 rounded-md lg:block hidden">
      <div className="flex justify-between ">
        <p className="text-primary text-sm antialiased font-extrabold">
          Notifications
        </p>

        <p className="text-secondary text-sm font-extrabold antialiased hover:cursor-pointer">
          See All
        </p>
      </div>
      <Notimini />
      <Notimini />
      <div className="flex justify-between pt-2 hover:cursor-pointer">
        <p className="text-primary text-sm antialiased font-extrabold">
          Upcoming Meetings
        </p>

        <p className="text-secondary text-sm antialiased font-extrabold">
          See All
        </p>
      </div>
      <MeetingMini />
      <MeetingMini />
      <MeetingMini />
      <div className="flex justify-between pt-2 hover:cursor-pointer">
        <p className="text-primary text-sm antialiased font-extrabold">
          Past Meetings
        </p>

        <p className="text-secondary text-sm antialiased font-extrabold">
          See All
        </p>
      </div>
      <MeetingMini />
      <MeetingMini />
      <MeetingMini />
      <div className="flex justify-between pt-2 hover:cursor-pointer">
        <p className="text-primary text-sm antialiased font-extrabold">
          Recent Activities
        </p>

        <p className="text-secondary text-sm antialiased font-extrabold">
          See All
        </p>
      </div>
      <span className="text-primary text-xs flex justify-evenly item center">
        <p className="text-sm text-grey-900 font-bold">Bessie Coleman</p>{" "}
        Meeting scheduled
      </span>
      <span className="text-primary text-xs flex justify-evenly item center">
        <p className="text-sm text-grey-900 font-bold">Bessie Coleman</p>{" "}
        Meeting scheduled
      </span>
      <span className="text-primary text-xs flex justify-evenly item center">
        <p className="text-sm text-grey-900 font-bold">Bessie Coleman</p>{" "}
        Meeting scheduled
      </span>
    </div>
  );
};

export default Notifications;
