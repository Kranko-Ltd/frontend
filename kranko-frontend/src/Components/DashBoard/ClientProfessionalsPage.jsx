import React from "react";
import { GrTextAlignFull } from "react-icons/gr"; //All icon
import { FaPhotoVideo, FaFilter } from "react-icons/fa"; //entertainment
import { BsMusicNoteBeamed, BsBank2 } from "react-icons/bs"; //music
import { BiDumbbell } from "react-icons/bi"; //sport/lifestyle
import { GiKnifeFork, GiTechnoHeart } from "react-icons/gi"; //hospitality
import { RiPlantFill, RiMentalHealthFill } from "react-icons/ri"; //Gardening, mentalhealth
import { GrTechnology } from "react-icons/gr"; //technology
import { MdHealthAndSafety } from "react-icons/md"; //Mental health
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProfessionalCard1 from "./ProfessionalCard1";
import { useQuery } from "@apollo/client";

import Select from "react-select";
import { GET_USER_PROFILE } from "../../Queries/auth";
import Link from "next/link";
const ClientProfessionalsPage = () => {
  // filter options
  const options = [
    { value: "myProfessionals", label: "My Professionals" },
    { value: "rating", label: "Rating" },
    { value: "recentyViewed", label: "Recently Viewed" },
  ];
  const { loading, error, data } = useQuery(GET_USER_PROFILE);
  console.log(data);

  const allUsers = data?.professionalDetails.data;
  console.log(allUsers);
  let professionals;
  if (!loading) {
    professionals = allUsers.filter(
      (profile) => profile.attributes.role === "professional"
    );
    console.log(professionals);
  }

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
      {/* filter */}
      <div className="flex justify-end mt-4">
        <div className="flex justify-center items-center rounded-md mr-2 px-2 bg-white border border-secondary text-secondary">
          <FaFilter />
          <p>Filter by</p>
        </div>

        <Select options={options} />
      </div>

      {/* professionals list */}
      <div className="bg-white rounded-md mt-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 py-2 gap-3 justify-center items-center">
        {professionals?.map((professional) => {
          return (
            <Link
              href={{
                pathname: "/client-dashboard/[id]",
                query: { id: professional.id },
              }}
              key={professional.id}
            >
              <div>
                <ProfessionalCard1
                  image={professional.attributes.image_url}
                  occupation={professional.attributes.Field_of_specialisation}
                  name={professional.name}
                />
              </div>
            </Link>
          );
        })}
        {/* <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard /> */}
        {/* <ProfessionalCard1 /> */}
      </div>
    </>
  );
};

export default ClientProfessionalsPage;
