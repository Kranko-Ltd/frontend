import React from "react";
import Image from "next/image";

const ProfessionalCard = () => {
  return (
    <div className="bg-white shadow-xl w-full  rounded-xl overflow-hidden relative hover:scale-105 hover:opacity-80 hover:shadow-inner">
      <div className="w-full rounded-lg z-3">
        <Image
          src="/prof-bg.png "
          width={270}
          height={100}
          className="w-full "
        />
      </div>

      <p className="pl-24 text-primary text-sm  centre font-extrabold ">
        James Stallion
      </p>
      <p className="pl-24 text-grey-900 text-sm font-bold ">Graphic Designer</p>
      <div className="flex  justify-evenly text-xs p-2">
        <div>
          <p className="text-grey-900">Active projects</p>
          <p className="text-primary bold text-center font-bold">128</p>
        </div>
        <div>
          <p className="text-grey-900">Completed projects</p>
          <p className="text-primary  text-center font-bold">128</p>
        </div>
        <div>
          <p className="text-grey-900">Rating</p>
          <p className="text-primary font-bold text-center">3.4</p>
        </div>
      </div>
      <div className="justify-evenly flex pb-2">
        <button className="bg-secondary text-primary text-sm p-1 rounded">
          Frontend
        </button>
        <button className="bg-secondary text-primary text-sm p-1 rounded">
          Illustrations
        </button>
        <button className="bg-secondary text-primary text-sm p-1 rounded">
          Frontend
        </button>
      </div>

      <div className="rounded bg-white p-0  absolute top-20 left-10">
        <img
          src="/person7.jpg"
          width={60}
          height={60}
          className="rounded-xl bg-white   "
        />
      </div>
    </div>
  );
};

export default ProfessionalCard;
