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
import ProfProjectCard from "./ProfProjectCard";
import ProfProjectCard1 from "./ProfProjectCard1";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PROJECTS } from "../../Queries/Projects";

// const getProfile = () => {
//   const loggedInProfessional = JSON.parse(localStorage.getItem("profile"));
//   return loggedInProfessional;
// };

const ProfProjects = () => {
  const [loggedInProfessional, setLoggedProfessional] = useState(" ");
  React.useEffect(() => {
    const loggedProfessional = JSON.parse(localStorage.getItem("profile"));
    setLoggedProfessional(loggedProfessional);
  }, []);
  console.log(loggedInProfessional);

  const [Requested, setRequested] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  let requestedProjects = [];
  let activeProjects = [];
  let completedProjects = [];
  let allProfProjects = [];

  const {
    data: projectData,
    loading: projectLoading,
    error: ProjectError,
  } = useQuery(GET_PROJECTS);
  const prof_id = loggedInProfessional?.id;
  console.log(prof_id);

  if (!projectLoading && !ProjectError) {
    console.log(projectData);
    const allProjects = projectData.projects.data;
    console.log(allProjects);
    allProfProjects = allProjects.filter(
      (project) => project.attributes.professional_id === prof_id
    );
    console.log(allProfProjects);
    requestedProjects = allProfProjects.filter(
      (project) => project.attributes.project_status === "requested"
    );
    console.log("requested_projects", requestedProjects);
    activeProjects = allProfProjects.filter(
      (project) => project.attributes.project_status === "active"
    );
    completedProjects = allProfProjects.filter(
      (project) => project.attributes.status === "completed"
    );
  }

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
        {Requested
          ? requestedProjects.length > 0
            ? requestedProjects.map((project) => {
                return (
                  <ProfProjectCard1
                    project_name={project.attributes.Project_name}
                    client_name={project.attributes.client_name}
                    date_published={project.attributes.publishedAt}
                    project_id={project.id}
                  />
                );
              })
            : " "
          : active
          ? activeProjects.length > 0
            ? activeProjects.map((project) => {
                return (
                  <ProfProjectCard1
                    project_name={project.attributes.Project_name}
                    client_name={project.attributes.client_name}
                    date_published={project.attributes.publishedAt}
                    project_id={project.id}
                  />
                );
              })
            : " "
          : completedProjects.length > 0
          ? completedProjects.map((project) => {
              return (
                <ProfProjectCard1
                  project_name={project.attributes.Project_name}
                  client_name={project.attributes.client_name}
                  date_published={project.attributes.publishedAt}
                  project_id={project.id}
                />
              );
            })
          : " "}
        {/* <ProfProjectCard1 /> */}
        {/* <ProfProjectCard />
        <ProfProjectCard />
        <ProfProjectCard />
        <ProfProjectCard />
        <ProfProjectCard />
        <ProfProjectCard /> */}
      </div>
    </div>
  );
};

export default ProfProjects;
