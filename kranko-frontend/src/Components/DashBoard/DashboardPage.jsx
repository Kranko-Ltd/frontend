import React from "react";
import Notifications from "./Notifications";
import ProfessionalCard from "./ProfessionalCard";
import ProjectsCard from "./ProjectsCard";

const DashboardPage = () => {
  return (
    <React.Fragment>
      <div className="gap-5 flex">
        <div className="bg-white rounded-md">
          <p className="text-2xl text-primary p-5">Featured Professionals</p>
          <div className=" lg:flex gap-5 relative block space-y-2">
            <ProfessionalCard />
            <ProfessionalCard />
            <ProfessionalCard />
          </div>
          <p className="text-2xl text-primary p-5">Most Appreciated Projects</p>
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
        </div>
        <Notifications />
      </div>
    </React.Fragment>
  );
};

export default DashboardPage;
