import React from 'react'
import {
  RiDashboardFill,
  RiPassportFill,
  RiSuitcaseFill,
  RiCalendarTodoFill,
} from "react-icons/ri";
import { BiListUl } from "react-icons/bi";
import { useState } from "react";
import ProfessionalCard from "./ProfessionalCard";
import ProfProjectCard from "./ProfProjectCard";

const ProfProjects = () => {
    const [Requested, setRequested] = useState(true);
    const [active, setActive] = useState(false);
    const [completed, setCompleted] = useState(false);
  return (
    <div className="bg-white  p-6 rounded-md">
      {/* tabs navigation section */}
      <p className="text-2xl text-primary  font-bold">Projects</p>
      <div className="flex justify-between mt-5">
        <div className="flex ">
          {Requested ? (
            <button
              className=" bg-opacity-25 text-center  py-1  rounded w-32 bg-white text-secondary  shadow-inner"
              onClick={() => {
                setActive(false);
                setCompleted(false);
                setRequested(true);
              }}
            >
              Requested
            </button>
          ) : (
            <button
              className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded w-32 hover:bg-white hover:text-secondary hover shadow-lg"
              onClick={() => {
                setActive(false);
                setCompleted(false);
                setRequested(true);
              }}
            >
              Requested
            </button>
          )}

          {active ? (
            <button
              className=" bg-opacity-25 text-center  py-1  rounded w-32  bg-white text-secondary hover shadow-inner "
              onClick={() => {
                setActive(true);
                setCompleted(false);
                setRequested(false);
              }}
            >
              Active
            </button>
          ) : (
            <button
              className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded w-32  hover:bg-white hover:text-secondary hover shadow-lg "
              onClick={() => {
                setActive(true);
                setCompleted(false);
                setRequested(false);
              }}
            >
              Active
            </button>
          )}
          {completed ? (
            <button
              className=" bg-opacity-25 text-center  py-1  rounded w-32  bg-white text-secondary hover shadow-lg"
              onClick={() => {
                setActive(false);
                setCompleted(true);
                setRequested(false);
              }}
            >
              Completed
            </button>
          ) : (
            <button
              className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded w-32  hover:bg-white hover:text-secondary hover shadow-lg"
              onClick={() => {
                setActive(false);
                setCompleted(true);
                setRequested(false);
              }}
            >
              Completed
            </button>
          )}
        </div>
        <div className="flex pr-5">
          <button className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded px-5  hover:bg-white hover:text-secondary hover shadow-lg">
            <BiListUl />
          </button>
          <button className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded px-5  hover:bg-white hover:text-secondary hover shadow-lg">
            <RiDashboardFill />
          </button>
        </div>
      </div>
      {/* end of tabs navigation section */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
        <ProfProjectCard />
        <ProfProjectCard />
        <ProfProjectCard />
        <ProfProjectCard />
        <ProfProjectCard />
        <ProfProjectCard />
        <ProfProjectCard />
      </div>
    </div>
  );
}

export default ProfProjects