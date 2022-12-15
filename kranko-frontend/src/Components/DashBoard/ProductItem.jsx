import React from 'react'
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";

const ProductItem = () => {
  return (
    <div className="flex cursor-pointer flex-col justify-center p-2 hover:scale-95 bg-white shadow-xl hover:opacity-80 rounded">
      <div className="p-4 flex items-center justify-center">
        <Image src="/laptop.jpg" width={204} height={180} className="" />
      </div>
      <p className="text-xs text-grey-Light p-4">
        Acer Aspire 5 A515-56-32DK Slim Laptop - 15.6" Full HD IPS Display -
        11th Gen Intel
      </p>
      <div className="flex justify-between w-full px-4">
        <p className="font-bold text-primary text-base">$128.99</p>
        <p className="text-xs text-secondary font-bold bg-secondary bg-opacity-10 px-2 flex items-center justify-center rounded-md">
          50% off
        </p>
      </div>
      <div className="text-sm px-4 flex text-[#787885] font-bold mt-2">
        <p>Manufacturer:</p>
        <p className="ml-2">Acer Inc</p>
      </div>
      <div className="flex items-center px-4 w-full justify-between mt-2 mb-4">
        <div className="flex gap-2 items-center">
          <div className="flex">
            <BsStarFill size={10} className="text-warning" />
            <BsStarFill size={10} className="text-warning" />
            <BsStarFill size={10} className="text-warning" />
            <BsStarFill size={10} className="text-warning" />
            <BsStarHalf size={10} className="text-warning" />
          </div>
          <p className="text-xs text-grey-900">4.87</p>
        </div>
        <button className='flex items-center gap-1.5 text-secondary border border-secondary text-sm rounded-md px-2 py-1 hover:bg-secondary hover:text-white'><BiHeart/>Cart</button>
      </div>
    </div>
  );
}

export default ProductItem