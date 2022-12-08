import React from "react";
import {
  RiDashboardFill,
  RiPassportFill,
  RiSuitcaseFill,
  RiCalendarTodoFill,
} from "react-icons/ri";
import { BiListUl } from "react-icons/bi";
import { useState } from "react";
import ProfessionalCard from "./ProfessionalCard";
import ClientProjectCard from "./ClientProjectCard";

const ProjectsContainer = () => {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  return (
    <div className="bg-white p-5">
      <p className="text-2xl text-primary  font-bold">Projects</p>
      <div className="flex justify-between mt-5">
        <div className="flex ">
          {all ? (
            <button
              className=" bg-opacity-25 text-center  py-1  rounded w-32 bg-white text-secondary  shadow-inner"
              onClick={() => {
                setActive(false);
                setCompleted(false);
                setAll(true);
              }}
            >
              All
            </button>
          ) : (
            <button
              className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded w-32 hover:bg-white hover:text-secondary hover shadow-lg"
              onClick={() => {
                setActive(false);
                setCompleted(false);
                setAll(true);
              }}
            >
              All
            </button>
          )}

          {active ? (
            <button
              className=" bg-opacity-25 text-center  py-1  rounded w-32  bg-white text-secondary hover shadow-inner "
              onClick={() => {
                setActive(true);
                setCompleted(false);
                setAll(false);
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
                setAll(false);
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
                setAll(false);
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
                setAll(false);
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
      <div className="grid grid-cols-1 gap-12 grid-rows-2 pr-32 mt-10 md:grid-cols-3">
        <ClientProjectCard />
        <ClientProjectCard />
        <ClientProjectCard />
        <ClientProjectCard />
        <ClientProjectCard />
        <ClientProjectCard />
      </div>
    </div>
  );
};

export default ProjectsContainer;
