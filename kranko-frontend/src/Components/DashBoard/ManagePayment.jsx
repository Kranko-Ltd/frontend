import React from "react";
import { useState } from "react";
import { BiListUl } from "react-icons/bi";
import { RiDashboardFill } from "react-icons/ri";
import PaymentCard from "./PaymentCard";
const ManagePayments = () => {
  const [pending, setPending] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [failed, setFailed] = useState(false);

  const userPayments = [
    {
      projectName: "Food Delivery App",
      professionalName: "Jessie Umuhire",
      date: "12th December 2022",
      totalAmount: 4000,
      depositAmount: 400,
      finalAmount: 3600,
    },
    {
      projectName: "Gym App",
      professionalName: "Benson Wachira",
      date: "10th December 2022",
      totalAmount: 5000,
      depositAmount: 500,
      finalAmount: 4600,
    },
    {
      projectName: "Wellness App",
      professionalName: "Aime Lumumba",
      date: "10th December 2022",
      totalAmount: 5000,
      depositAmount: 500,
      finalAmount: 4600,
    },
  ];
  return (
    <div className="bg-white  p-6 rounded-md">
      {/* tabs navigation section */}
      <p className="text-2xl text-primary  font-bold">Payments</p>
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
      <div className="mt-6 grid grid-cols-1  gap-4 ">
        {userPayments.map((payment, index) => {
          return(<div key={index}>        
            <PaymentCard
              projectName={payment.projectName}
              professionalName={payment.professionalName}
              date={payment.date}
              totalAmount={payment.totalAmount}
              depositAmount={payment.depositAmount}
              finalInstallment={payment.finalAmount}
            />
          </div>)
          
        })}
      </div>
    </div>
  );
};

export default ManagePayments;
