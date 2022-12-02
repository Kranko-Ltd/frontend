import React from "react";

const RightImage = () => {
  return (
    <div className="md:flex hidden text-white bg-[url('/loginimage.svg')]  bg-cover  sm:bg-center md:bg-bottom lg:bg-bottom xl:bg-bottom 2xl:center">
      <div className="flex flex-col pt-[30vh] h-full w-4/5 items-center gap-y-2">
        <h3 className="text-4xl w-2/3 text-green font-bold ">
          Expertise at its best
        </h3>
        <p className="text-sm w-2/3 antialiased font-light">
          KrankoJobs, A platform<br></br>of guaranteed minimum returns
        </p>
      </div>
    </div>
  );
};

export default RightImage;
