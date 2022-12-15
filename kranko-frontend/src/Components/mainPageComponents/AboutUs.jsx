import React from "react";
import Image from "next/image";
import Button1 from "../UI/Button1";

import About from "../../../public/about.jpg";
import Play from "../../../public/video_play.png";
const AboutUs = () => {
  return (
    <div className="bg-greyLight" id="aboutUs">
      {/* about us heading */}
      <div className="flex flex-col items-center">
        <p className="font-bold text-4xl mt-4">About us</p>
        <div className="w-16 h-2  bg-primary" />
      </div>
      {/* video and text */}
      <div className="flex flex-col md:flex-row mt-12 pb-8">
        {/* placeholder image */}
        <div className="pl-6 relative flex justify-center items-center">
          <Image
            className="antialiased"
            src={About}
            height={460}
            width={630}
            quality={100}
            alt="About us"
            style={{
              backgroundColor: "#45BDE6",
              opacity: 0.6,
              overflow: "hidden",
            }}
          />
          <div className="absolute z-20 cursor-pointer">
            <Image
              className=" rounded-full antialiased"
              src={Play}
              height={96}
              width={96}
              quality={100}
              alt="About us"
              style={{
                backgroundColor: "#45BDE6",
                // opacity: 0.6,
                overflow: "hidden",
              }}
            />
          </div>
        </div>

        {/* text */}
        <div className="w-full m-8 mt-16 md:mt-0.5 flex flex-col md:justify-center">
          <p className="text-2xl font-bold mb-8 mr-4">
            KrankoJobs offers its platform as a service
          </p>
          <p className="font-bold text-lg mb-8 mr-4 flex align-middle">
            Providing a seamless experience to both clients and professionals in
            their quest to fulfill their wants
          </p>
          <div className="w-1/2"></div>

          <div className="mb-4" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
