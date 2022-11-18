import React from 'react'
import Button1 from "../UI/Button1";
const CallToAction = () => {
  return (
    <div className="bg-secondary bg-opacity-20">
      <div className="flex flex-col items-center">
        <p className="font-bold text-4xl mt-4">Get Started With KrankoJobs</p>
        <div className="w-16 h-2  bg-primary" />
      </div>

      <div className="mt-8 flex flex-col justify-center items-center">
        <p className="font-bold text-xl mb-12">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit.
        </p>
        <div className='w-1/3'>
          <Button1 btnCaption="Sign Up" href="SignUp" />
        </div>

        <div className="mb-12" />
      </div>
    </div>
  );
}

export default CallToAction