import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
const ProjectsNext = () => {
  const [forward, setForward] = useState(true);
  const [backward, setBackward] = useState(false);
  return (
    <div className="flex justify-center mt-8">
      <div className="flex justify-between space-x-2">
        <button
          className={` bg-white border-1 border-grey-900 w-8 rounded flex justify-center items-center text-xl font-semibold ${
            forward ? "bg-secondary text-white" : "bg-white text-primary"
          }`}
          onClick={() => {
            setBackward(false);
            setForward(true);
          }}
        >
          <IoIosArrowBack />
        </button>
        <button className=" bg-white border-1 border-grey-900 w-8 rounded flex justify-center items-center text-xl font-semibold">
          1
        </button>
        <button className=" bg-white border-1 border-grey-900 w-8 rounded flex justify-center items-center text-xl font-semibold">
          2
        </button>
        <button className=" bg-white border-1 border-grey-900 w-8 rounded flex justify-center items-center text-xl font-semibold">
          ...
        </button>
        <button className=" bg-white border-1 border-grey-900 w-8 rounded flex justify-center items-center text-xl font-semibold">
          9
        </button>
        <button className=" bg-white border-1 border-grey-900 w-8 rounded flex justify-center items-center text-xl font-semibold">
          10
        </button>

        <button
          className={` border-1 border-grey-900 w-8 rounded flex justify-center items-center text-xl font-semibold ${
            backward ? " bg-secondary text-white" : "bg-white text-primary"
          }`}
          onClick={() => {
            setBackward(true);
            setForward(false);
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default ProjectsNext;
