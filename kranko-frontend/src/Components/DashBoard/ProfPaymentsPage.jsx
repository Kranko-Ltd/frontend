import React from "react";
import { useState } from "react";
import ProfPaymentCard from "./ProfPaymentCard";
import { BiListUl } from "react-icons/bi";
import { RiDashboardFill } from "react-icons/ri";
const ProfPaymentsPage = () => {
  const [pending, setPending] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <div className="bg-white  p-6 rounded-md">
      {/* tabs navigation section */}
      <p className="text-2xl text-primary  font-bold">Projects</p>
      <div className="flex justify-between mt-5">
        <div className="flex ">
          {pending ? (
            <button
              className=" bg-opacity-25 text-center  py-1  rounded w-32 bg-white text-secondary  shadow-inner"
              onClick={() => {
                setFailed(false);
                setCompleted(false);
                setPending(true);
              }}
            >
              Pending
            </button>
          ) : (
            <button
              className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded w-32 hover:bg-white hover:text-secondary hover shadow-lg"
              onClick={() => {
                setFailed(false);
                setCompleted(false);
                setPending(true);
              }}
            >
              Pending
            </button>
          )}
          {completed ? (
            <button
              className=" bg-opacity-25 text-center  py-1  rounded w-32  bg-white text-secondary hover shadow-lg"
              onClick={() => {
                setFailed(false);
                setCompleted(true);
                setPending(false);
              }}
            >
              Completed
            </button>
          ) : (
            <button
              className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded w-32  hover:bg-white hover:text-secondary hover shadow-lg"
              onClick={() => {
                setFailed(false);
                setCompleted(true);
                setPending(false);
              }}
            >
              Completed
            </button>
          )}

          {failed ? (
            <button
              className=" bg-opacity-25 text-center  py-1  rounded w-32  bg-white text-secondary hover shadow-inner "
              onClick={() => {
                setFailed(true);
                setCompleted(false);
                setPending(false);
              }}
            >
              Failed
            </button>
          ) : (
            <button
              className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded w-32  hover:bg-white hover:text-secondary hover shadow-lg "
              onClick={() => {
                setFailed(true);
                setCompleted(false);
                setPending(false);
              }}
            >
              Failed
            </button>
          )}
        </div>
        <div className="flex pr-5">
          <button className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded px-5  hover:bg-white hover:text-secondary hover shadow-lg">
            <BiListUl />
          </button>
          <button className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded px-5  hover:bg-white hover:text-secondary hover shadow-lg">
            <RiDashboardFill />
          </button>
        </div>
      </div>
      {/* end of tabs navigation section */}
      <div className="mt-6 grid grid-cols-1 gap-4 ">
        <ProfPaymentCard />
        <ProfPaymentCard />
        <ProfPaymentCard />
        <ProfPaymentCard />
        <ProfPaymentCard />
        <ProfPaymentCard />
      </div>
    </div>
  );
};

export default ProfPaymentsPage;
