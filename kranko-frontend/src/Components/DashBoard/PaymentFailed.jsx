import React from "react";
import { MdOutlineCreditCardOff } from "react-icons/md";
import { useRouter } from "next/router";
const PaymentFailed = () => {
  const router = useRouter();
  return (
    <div className=" h-screen flex flex-col items-center bg-white rounded-md">
      <p className="text-xl font-bold text-grey-900  mt-32">Payment Failed</p>
      <MdOutlineCreditCardOff size={150} className="mt-4 text-error" />
      <p className="text-grey-900">Your Payment Failed. Please try again.</p>
      <p className="text-grey-900">
        If issue Persists please contact the administrator
      </p>
      <button
        className="text-white hover:text-secondary border border-secondary bg-secondary hover:bg-white rounded-md px-4 py-2 mt-8"
        onClick={() => {
          router.push("/client-dashboard/projects");
        }}
      >
        Projects
      </button>
    </div>
  );
};

export default PaymentFailed;
