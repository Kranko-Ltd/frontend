import React from "react";
import Image from "next/image";
import { AiFillCamera } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const ClientProfile = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div className="pl-10 pt-5">
      <p className="text-xl text-primary font-semibold">Profile Information</p>
      <div className="w-[120px] h-[100px] bg-greyLight rounded relative mt-5">
        <Image src="/person9.jpg" width={120} height={100} objectFit="cover" />
        <AiFillCamera className="absolute bottom-[-5%] left-[40%] " />

        <input type="file" className=" absolute bottom-0 left-0 opacity-0" />
      </div>
      <label
        className="text-sm mt-3 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        htmlFor="Full Name"
      >
        Full Name
      </label>
      <input
        type="text"
        disabled
        placeholder="Cynthia Mpathi "
        className="block rounded-lg px-2.5 pb-2.5 pt-2.5 mt-3 w-96 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
      />
      <label
        className="text-sm mt-3 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        htmlFor="Full Name"
      >
        Occupation
      </label>
      <input
        type="text"
        disabled
        placeholder="Designer "
        className="block rounded-lg px-2.5 pb-2.5 mt-3 pt-2.5 w-96 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
      />
      <label
        className="text-sm mt-3 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        htmlFor="Full Name"
      >
        Email
      </label>
      <input
        type="text"
        disabled
        placeholder="c.mpathi@gmail.com "
        className="block rounded-lg px-2.5 mt-3 pb-2.5 pt-2.5 w-96 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
      />
      <label
        className="text-sm mt-3 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        htmlFor="Full Name"
      >
        Bio
      </label>
      <textarea
        type="textarea"
        placeholder="I have a multi faceted expeience in user interface design in sub saharan Africa, having won the best designer in Bostwana Tech Society 2014  Awards "
        className="block rounded-lg px-2.5 mt-3 pb-2.5 pt-2.5 w-96 h-32 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
      />
      <label className="text-sm mt-3 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Payments
      </label>
      <button className="text-grey-900 text-sm px-2.5 pb-2.5 pt-2.5 mt-3 flex justify-between items-center w-96 rounded bg-greyLight bg-opacity-10">
        <p>Manage Payments methods</p>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default ClientProfile;
