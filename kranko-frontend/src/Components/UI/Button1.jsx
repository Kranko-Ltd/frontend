import React from "react";
import Link from "next/link";

const Button1 = ({ href, btnCaption }) => {
  return (
    <div>
      <Link href={"/" + href}>
        <button className="inline-flex items-center px-6 py-3 border border-secondary text-lg md:text-base font-semibold rounded-md shadow-sm text-white bg-secondary hover:bg-secondary hover:bg-opacity-5 justify-center w-full">
          {btnCaption}
        </button>
      </Link>
    </div>
  );
};

export default Button1;
