import Image from "next/image";
import React from "react";

const LeftbarICons = ({ icon_image }) => {
  return (
    <div className="flex items-center">
      <Image src={icon_image} width={20} height={20} alt="icon" />
    </div>
  );
};

export default LeftbarICons;
