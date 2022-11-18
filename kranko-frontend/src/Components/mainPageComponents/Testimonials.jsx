import React from 'react'
import Image from "next/image";
const Testimonials = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-4xl mt-4">Testimonials</p>
        <div className="w-16 h-2  bg-primary" />
      </div>

      <div className="flex items-center justify-center relative h-[80vh]  bg-opacity-80">
        {/* Bg Image */}
        <div className="mt-10 absolute">
          <Image
            src="/about.jpg"
            width={1513}
            height={1011}
            objectFit="cover"
            quality={100}
            alt="Testimonials"
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              opacity: 0.8,
              overflow: "hidden",
            }}
          />
        </div>
        <div className="absolute flex m-4 w-[89%] h-[60vh]  bg-primary ">
          Where is this div?
        </div>
      </div>
    </div>
  );
}

export default Testimonials