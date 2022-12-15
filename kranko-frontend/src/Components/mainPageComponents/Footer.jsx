import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="bg-primary flex flex-col sm:flex-row justify-between pr-8 py-8 items-center">
        {/* Logo */}
        <div className="w-1/2 mb-4 sm:w-1/4 sm:mb-0">
          <img src="/logo2.png" alt="Logo" />
        </div>

        <div className="text-white flex flex-col justify-center items-center">
          <p className="font-bold text-2xl">Contact Us</p>
          <p className="text-base text-grey-900">KrankoJobs@gmail.com</p>
          <p className="text-base text-grey-900">+25078956432</p>
          {/* <p className="text-base text-grey-900">Ipsum</p> */}
          <p className="text-base text-grey-900">KrankoJobs@support.com</p>
        </div>
        <div className="text-white flex flex-col justify-center items-center">
          <p className="font-bold text-2xl">Partners</p>
          <p className="text-base text-grey-900">World Bank</p>
          <p className="text-base text-grey-900">Suzuri Holdings</p>
          <p className="text-base text-grey-900">I Hub Foundation</p>
          <p className="text-base text-grey-900">Bill and Melinda Foundation</p>
        </div>
        <div className="text-white flex flex-col justify-center items-center">
          <p className="font-bold text-2xl">Address</p>
          <p className="text-base text-grey-900">KG 11, Kigali</p>
          <p className="text-base text-grey-900">Rwanda</p>
          <p className="text-base text-grey-900">East African</p>
          <p className="text-base text-grey-900">Regional Office</p>
        </div>
      </div>
      <div className="w-full bg-primary border-b-2 border-b-greyLight h-4" />
      <div className="bg-primary w-full pb-8 pt-8 px-4 flex flex-wrap items-center justify-center sm:justify-between">
        <p className="font-bold text-xl text-grey-900 mr-4">Copyright 2022</p>
        <div className="flex gap-6">
          {/* icons */}
          <BsLinkedin size={30} fill="#57626C" />
          <BsFacebook size={30} fill="#57626C" />
          <BsInstagram size={30} fill="#57626C" />
          <BsTwitter size={30} fill="#57626C" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
