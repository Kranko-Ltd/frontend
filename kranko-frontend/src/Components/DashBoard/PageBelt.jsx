import React from "react";
import Link from "next/link";
import LeftbarICons from "./LeftbarICons";
import {
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

const PageBelt = () => {
  return (
    <div className=" bg-white p-2  py-? flex justify-end items-center stroke-1 ">
      <Link href="/client-dasboard/notifications">
        <button className="text-2xl bg-[#45BDE6] bg-opacity-25 rounded-full p-1">
          <IoMdNotificationsOutline />
        </button>
      </Link>

      <Link href="/client-dashboard/settings">
        <button className="ml-3 text-2xl bg-[#45BDE6] rounded-full bg-opacity-25 p-1">
          <AiOutlineSetting />
        </button>
      </Link>
    </div>
  );
};

export default PageBelt;
