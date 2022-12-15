import React from "react";
import Training from "../../../public/training.png";
import Money from "../../../public/money.png";
import Goal from "../../../public/goal.png";
const Mission = () => {
  const MissionArray = [
    {
      imageName: "training",
      heading: "eradicate unemployment",
      content:
        "Data from World Bank shows Africa faces unemployment levels of 70% amongst its youth. ",
    },
    {
      imageName: "money",
      heading: "youth empowerment",
      content:
        "KrankoJobs will provide the youth with an opportunity to use their skills to make a living. ",
    },
    {
      imageName: "goal",
      heading: "Economic independency",
      content:
        "With unemployment, we are able enhance self reliance thereby improving standards of living. ",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-4xl mt-4">Mission</p>
        <div className="w-16 h-2  bg-primary" />
      </div>
      <div>
        {/* cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center">
          {MissionArray.map((mission, index) => (
            <div
              key={index}
              className="flex w-1/2 m-4 rounded-lg flex-col hover:shadow-none  shadow-MissionCard justify-center items-center"
            >
              <img
                src={`${mission.imageName}.png`}
                alt={`${mission.imageName}`}
                width={100}
                height={100}
                className="mt-4 mb-2"
              />
              <p className="font-bold text-lg mb-2">{mission.heading}</p>
              <p className="text-sm p-4">{mission.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
