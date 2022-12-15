import React from 'react'
import { MdOutlineCreditScore } from "react-icons/md";
const PaymentSuccess = () => {
  return (
    <div className=" h-screen flex flex-col items-center bg-white rounded-md">
      <p className="text-xl font-bold text-grey-900  mt-32">
        Payment Successful
      </p>
      <MdOutlineCreditScore size={150} className="mt-4 text-secondary" />
      <p className="text-grey-900">
        Your project will now be activated. Stay tuned for updates
      </p>
      <button className="text-white hover:text-secondary border border-secondary bg-secondary hover:bg-white rounded-md px-4 py-2 mt-8">
        Project Page
      </button>
    </div>
  );
}

export default PaymentSuccess