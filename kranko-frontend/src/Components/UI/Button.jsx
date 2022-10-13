import React from "react";
import Link from "next/link";

const Button = ({ href, btnCaption }) => {
  return (
    <div>
      <Link href={"/" + href}>
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-lg md:text-base font-semibold rounded-md shadow-sm text-white bg-[#45BDE6] hover:bg-[#3a7e7b]">
          {btnCaption}
        </button>
      </Link>
    </div>
  );
};

export default Button;
