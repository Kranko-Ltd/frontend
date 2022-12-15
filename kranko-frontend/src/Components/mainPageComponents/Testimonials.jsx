import React from "react";
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Testimonials = () => {
  const Testimonies = [
    {
      imageName: "person1",
      personName: "Anita Hudson",
      profession: "Accountant",
      content:
        "KrankoJobs has made it easy to obtain clients in quest of my services",
    },
    {
      imageName: "person1",
      personName: "Sulivan Rosisky",
      profession: "Cloud Engineer",
      content:
        "I have generated more income for the last six months, thanks to krankoJobs,",
    },
    {
      imageName: "person1",
      personName: "Anita Hudson",
      profession: "Cloud Engineer",
      content:
        "I have generated more income for the last six months, thanks to krankoJobs,,",
    },
    {
      imageName: "person1",
      personName: "Cynthia Mpathi",
      profession: "UI/UX specialist",
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      imageName: "person7",
      personName: "Sofia Adeyemi",
      profession: "Accountant",
      content:
        "Krankojobs has given me an opportunity to explore my different diverse talents,",
    },
    {
      imageName: "person7",
      personName: "Anita Hudson",
      profession: "Accountant",
      content: "I love the service catalogue of KrankoJobs,",
    },
    {
      imageName: "person7",
      personName: "Anita Hudson",
      profession: "Accountant",
      content: "An equal opportunity provider to talented individuals,",
    },
  ];
  return (
    <div id="testimonials">
      <div className="flex flex-col items-center">
        <p className="font-bold text-4xl mt-4">Testimonials</p>
        <div className="w-16 h-2  bg-primary" />
      </div>

      <div className="flex items-center justify-center relative h-[80vh]  bg-opacity-80">
        {/* Bg Image */}
        <div className="mt-10 absolute">
          <div className="flex mt-10 w-[135%] md:w-[100%] justify-center items-center relative bg-opacity-80">
            {/* Bg Image */}
            <div className="z-1 bg-primary">
              <Image
                src="/about.jpg"
                width={1513}
                height={1011}
                objectFit="cover"
                quality={100}
                alt="Testimonials"
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  opacity: 0.8,
                  overflow: "hidden",
                }}
              />
            </div>

            <div className="absolute flex m-4 w-[89%] h-[60vh]  bg-primary ">
              Where is this div?
              <div className="flex flex-col absolute w-[90%] h-[90%] bg-primary z-5">
                <div className="hidden md:flex rounded-full w-40 h-40 bg-secondary ml-16 -mt-4 justify-center items-center">
                  <ImQuotesLeft size={80} fill="#ffffff" />
                </div>
                {/* carousel */}
                <div className="flex mt-16 ml-4">
                  {/* far left */}
                  <div className="hidden md:flex flex-col justify-center items-center mx-8">
                    <p className="text-white font-bold text-2xl">
                      Connect with members
                    </p>
                    <div className="flex mt-16 items-center">
                      <p className="text-secondary pr-2">Join us</p>
                      <Image
                        src="/forwardIcon.png"
                        className=" rounded-full antialiased"
                        width={40}
                        height={40}
                        objectFit="cover"
                        quality={100}
                        alt="Testimonials"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.5)",
                          opacity: 0.8,
                          overflow: "hidden",
                        }}
                      />
                    </div>
                  </div>
                  <div className="">
                    <Splide
                      options={{
                        perPage: 4,
                        gap: "1rem",
                        arrows: true,
                        pagination: true,
                        drag: "free",
                      }}
                    >
                      {Testimonies.map((testimony, index) => {
                        return (
                          <SplideSlide key={index}>
                            <div className="bg-white flex flex-col w-[100%] rounded-lg">
                              <img
                                src={`${testimony.imageName}.jpg`}
                                alt={`${testimony.imageName}`}
                                className="rounded-t-lg z-2"
                              />
                              <div className="bg-greyLight w-full h-3 -mt-1 z-3" />

                              <div className="rounded-full w-10 h-10 bg-secondary ml-2 -mt-4 flex justify-center items-center">
                                <ImQuotesLeft size={20} fill="#ffffff" />
                              </div>
                              <p className="font-bold text-sm p-4 text-ellipsis">
                                {testimony.content}
                              </p>
                              <p className="font-bold text-base px-4">
                                {testimony.personName}
                              </p>
                              <p className="text-grey-900 text-sm italic mb-2 px-4">
                                {testimony.profession}
                              </p>
                            </div>
                          </SplideSlide>
                        );
                      })}
                    </Splide>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
