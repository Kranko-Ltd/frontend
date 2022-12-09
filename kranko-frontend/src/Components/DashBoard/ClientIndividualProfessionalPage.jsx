import React from "react";
import Image from "next/image";
import Button1 from "../UI/Button1";
import Button from "../UI/Button";

const ClientIndividualProfessionalPage = () => {
  const professional = {
    fname: "Cynthia",
    lname: "Mpathi",
    jobtitle: "Software Engineer",
    bio: "A mid-level software engineeer with 5 years of experience in large corporates",
    completedProjects: 128,
    activeProjects: 30,
    rating: 4.0,
    skills: ["ReactJs", "VueJs", "AWS", "Git/Github"],
    experience: [
      {
        jobTitle: "Frontend Developer",
        startDate: 2002,
        endDate: 2019,
        // duration: endDate - startDate,
        jobDescription:
          "Build quality User interfaces in React and React Native",
      },
      {
        jobTitle: "Frontend Developer",
        startDate: 2002,
        endDate: 2019,
        // duration: endDate - startDate,
        jobDescription:
          "Build quality User interfaces in React and React Native",
      },
    ],
    reviews: [
      {
        fname: "Mac",
        lname: "Jordan",
        jobtitle: "Graphic Designer",
        review:
          "I applaude Cynthia for her professionalism, dedication and discipline. She is really good at her work. Would absolutely recommend!",
      },
      {
        fname: "Jade",
        lname: "Onyango",
        jobtitle: "UI/UX designer",
        review:
          "I applaude Cynthia for her professionalism, dedication and discipline. She is really good at her work. Never thought I would see my designs be brought to life as accurately as she had done. Would absolutely recommend!",
      },
      {
        fname: "Sammiel",
        lname: "James",
        jobtitle: "UI/UX designer",
        review:
          "I applaude Cynthia for her professionalism, dedication and discipline. She is really good at her work. Never thought I would see my designs be brought to life as accurately as she had done. Would absolutely recommend!",
      },
    ],
  };
  return (
    <>
      <div>
        {/* Intro section */}
        <div className="bg-white p-6 rounded-md">
          {/* left */}
          <div className="">
            <p className="ml-4">Profile</p>

            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* image */}
              <div className="bg-greyLight w-24 m-4 h-24 rounded-md flex justify-center items-center p-1">
                <Image
                  src="/person9.jpg"
                  width={90}
                  height={90}
                  //   layout="responsive"
                  className="rounded-md "
                />
              </div>

              {/* center */}
              <div className="flex flex-col">
                <div className="flex flex-col items-center">
                  <p className="text-lg text-primary font-bold">
                    {professional.fname} {professional.lname}
                  </p>
                  <p className="text-sm text-primary">
                    {professional.jobtitle}
                  </p>
                </div>

                <p className="text-grey-900 text-sm mt-4">{professional.bio}</p>
                <div className="flex justify-evenly items-center mt-4">
                  <div className="flex flex-col items-center">
                    <p className="text-grey-900 text-sm font-bold">Completed</p>
                    <p className="text-primary text-sm font-extrabold">
                      {professional.completedProjects}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-grey-900 text-sm font-bold">Active</p>
                    <p className="text-primary text-sm font-extrabold">
                      {professional.activeProjects}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-grey-900 text-sm font-bold">Rating</p>
                    <p className="text-primary text-sm font-extrabold">
                      {professional.rating}
                    </p>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="flex flex-col items-center">
                <p className="text-md font-bold text-primary mb-2 mt-4">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {professional.skills.map((skill, index) => (
                    <div
                      className="text-xs rounded-md text-secondary bg-secondary bg-opacity-30 font-bold px-1"
                      key={index}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 px-4 w-full bg-secondary text-white rounded-md text-sm py-1.5"> Request Professional</button>
              </div>
            </div>
          </div>
          {/* Portfolio Section */}
          {/* Experience Section */}
          {/* Reviews Section */}
        </div>
      </div>
    </>
  );
};

export default ClientIndividualProfessionalPage;
