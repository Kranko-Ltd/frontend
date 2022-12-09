import React from "react";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

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
        jobTitle: "Frontend Developer at GGV",
        startDate: 2002,
        endDate: 2019,
        // duration: endDate - startDate,
        jobDescription:
          "Build quality User interfaces in React and React Native",
      },
      {
        jobTitle: "Fullstack Developer at Meta",
        startDate: 2019,
        endDate: 2022,
        // duration: endDate - startDate,
        jobDescription:
          "Build and deploy the front and backend of new features on Facebook",
      },
    ],
    reviews: [
      {
        fname: "Mac",
        lname: "Jordan",
        jobtitle: "Graphic Designer",
        rating: 4,
        review:
          "I applaude Cynthia for her professionalism, dedication and discipline. She is really good at her work. Would absolutely recommend!",
      },
      {
        fname: "Jade",
        lname: "Onyango",
        jobtitle: "UI/UX designer",
        rating: 3.9,
        review:
          "I applaude Cynthia for her professionalism, dedication and discipline. She is really good at her work. Never thought I would see my designs be brought to life as accurately as she had done. Would absolutely recommend!",
      },
      {
        fname: "Sammiel",
        lname: "James",
        jobtitle: "UI/UX designer",
        rating: 4.5,
        review:
          "I applaude Cynthia for her professionalism, dedication and discipline. She is really good at her work. Never thought I would see my designs be brought to life as accurately as she had done. Would absolutely recommend!",
      },
    ],
    portfolio: [
      {
        imageName: "p1",
        projectName: "AR/VR App",
      },
      {
        imageName: "p2",
        projectName: "Full Planner App",
      },
      {
        imageName: "p3",
        projectName: "UI/UX Palette Design",
      },
      {
        imageName: "p4",
        projectName: "Recipe Backend API",
      },
      {
        imageName: "p5",
        projectName: "Food Delivery Service App",
      },
      {
        imageName: "p6",
        projectName: "Online Learning App",
      },
      {
        imageName: "p7",
        projectName: "Food Delivery Service App",
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
            <p className="ml-4 text-grey-900 text-center text-xl font-extrabold">
              Profile
            </p>

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
                <p className="text-md font-bold text-primary mb-2 mt-4">
                  Skills
                </p>
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

                <button className="mt-6 px-4 w-full bg-secondary text-white rounded-md text-sm py-1.5">
                  {" "}
                  Request Professional
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Section */}

        <div className="bg-white rounded-md px-4 mt-4 flex flex-col items-center">
          <div className="text-grey-900 text-xl font-extrabold my-2">
            Portfolio
          </div>
          <Splide
            options={{
              perPage: 5,
              gap: "1rem",
              arrows: true,
              pagination: true,
              drag: "free",
            }}
          >
            {professional.portfolio.map((item, index) => {
              return (
                <SplideSlide key={index}>
                  <div className="flex flex-col items-center">
                    <img
                      src={`/${item.imageName}.jpg`}
                      alt={`${item.projectName}`}
                      className="h-36 w-36 rounded-md bg-gradient-to-r from-primary"
                    />

                    <p className="text-xs text-grey-900 font-bold my-2">
                      {item.projectName}
                    </p>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-md flex flex-col items-center mt-4">
          <div className="text-grey-900 text-xl font-extrabold my-2">
            Experience
          </div>
          <div className="w-full px-8">
            {professional.experience.map((job, index) => {
              return (
                <div
                  className="border-b border-b-greyLight flex flex-col md:flex-row items-start my-4 w-full"
                  key={index}
                >
                  <div className="bg-secondary w-10 h-10 mr-4 mb-2 md:mb-0 flex items-center justify-center bg-opacity-20 rounded-full text-center text-xs font-extrabold p-6 text-secondary">
                    {job.endDate - job.startDate} years
                  </div>
                  <div>
                    <p className="text-primary text-xs font-bold">
                      {job.jobTitle}
                    </p>
                    <p className="text-greyLight font-bold text-xs">
                      {job.startDate} - {job.endDate}
                    </p>
                    <p className="text-xs text-primary mb-4">
                      {job.jobDescription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Reviews Section */}
        <div className="bg-white rounded-md mt-4">
          <div className="text-grey-900 text-xl text-center font-extrabold my-2">
            Reviews
          </div>
          <div className="px-4 py-2">
            {professional.reviews.map((review, index) => {
              return (
                <div
                  key={index}
                  className="my-2 p-3 flex flex-col lg:flex-row shadow rounded-md"
                >
                  <div className="flex flex-col lg:flex-row w-1/4">
                    <div className="bg-secondary mx-2 bg-opacity-20 w-10 h-10 flex items-center justify-center text-secondary font-bold rounded-full">
                      {review.rating}
                    </div>
                    <div>
                      <p className="text-primary text-sm font-extrabold">
                        {review.fname} {review.lname}
                      </p>
                      <p className="text-grey-900 text-xs mt-1.5">
                        {review.jobtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs mt-2 lg:w-1/2">"{review.review}"</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientIndividualProfessionalPage;
