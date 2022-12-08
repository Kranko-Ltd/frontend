import React from "react";
import { GrTextAlignFull } from "react-icons/gr"; //All icon
import { FaPhotoVideo } from "react-icons/fa"; //entertainment
import { BsMusicNoteBeamed, BsBank2 } from "react-icons/bs"; //music
import { BiDumbbell } from "react-icons/bi"; //sport/lifestyle
import { GiKnifeFork, GiTechnoHeart } from "react-icons/gi"; //hospitality
import { RiPlantFill, RiMentalHealthFill } from "react-icons/ri"; //Gardening, mentalhealth
import { GrTechnology } from "react-icons/gr"; //technology
import { MdHealthAndSafety } from "react-icons/md"; //Mental health
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProfessionalCard from "./ProfessionalCard";
const ClientProfessionalsPage = () => {
  return (
    <>
      <div className="flex justify-center items-center text-xl">
        <p>Professionals</p>
      </div>
      {/* horizontal scroll menu */}
      <div className="bg-white rounded-md h-12 shadow-inner flex justify-center items-center">
        <Splide
          options={{
            perPage: 6,
            gap: "1px",
            arrows: true,
            pagination: false,
            drag: "free",
          }}
        >
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 items-center hover:text-secondary">
              <div>
                <GrTextAlignFull />
              </div>
              <p className="text-xs">All</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <FaPhotoVideo />
              </div>
              <p className="text-xs">Entertainment</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <BsMusicNoteBeamed />
              </div>
              <p className="text-xs">Music</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <BiDumbbell />
              </div>
              <p className="text-xs">Sport</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <GiKnifeFork />
              </div>
              <p className="text-xs">Hospitality</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <RiPlantFill />
              </div>
              <p className="text-xs">Gardening</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <GiTechnoHeart />
              </div>
              <p className="text-xs">IT</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <MdHealthAndSafety />
              </div>
              <p className="text-xs">Health</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <RiMentalHealthFill />
              </div>
              <p className="text-xs">Mental Health</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <RiMentalHealthFill />
              </div>
              <p className="text-xs">Mental Health</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <RiMentalHealthFill />
              </div>
              <p className="text-xs">Mental Health</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <RiMentalHealthFill />
              </div>
              <p className="text-xs">Mental Health</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <RiMentalHealthFill />
              </div>
              <p className="text-xs">Mental Health</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <RiMentalHealthFill />
              </div>
              <p className="text-xs">Mental Health</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* category */}
            <div className="flex flex-col text-grey-900 hover:text-secondary items-center">
              <div>
                <RiMentalHealthFill />
              </div>
              <p className="text-xs">Mental Health</p>
            </div>
          </SplideSlide>
        </Splide>
      </div>

      {/* professionals list */}
      <div className="bg-white rounded-md mt-12 flex flex-wrap px-4 py-2 gap-3 justify-center items-center">
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
      </div>
    </>
  );
};

export default ClientProfessionalsPage;
