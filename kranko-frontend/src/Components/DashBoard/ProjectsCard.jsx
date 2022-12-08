import React from "react";
import Image from "next/image";
// On the dashboard
const ProjectsCard = () => {
  return (
    <div className="w-full flex gap-2 p-2 hover:scale-95 bg-white shadow-xl hover:opacity-80 rounded ">
      <Image src="/Projects-image.png" width={300} height={80} />
      <div className="">
        <p className="text-grey-900 font-bold text -2xl">Food App Designs</p>
        <p className="text-greyLight font-bold text -2xl">
          Published May 28th 2029
        </p>
        <div className="flex gap-4">
          <span className="flex items-center space-x-2">
            <Image src="/heart.png " height={15} width={15} />
            <p className="font-bold text-primary">9234</p>
          </span>
          <span className="flex items-centre space-x-2">
            <Image src="/eye 1.png " height={8} width={20} />
            <p className="font-bold text-primary">12K</p>
          </span>
          <span className="flex items-center space-x-2">
            <Image src="/comment1.png " height={15} width={15} />
            <p className="font-bold text-primary">548</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
