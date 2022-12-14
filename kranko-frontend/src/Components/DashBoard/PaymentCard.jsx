import React from "react";
import Image from "next/image";
import { BsCalendarDateFill } from "react-icons/bs";
const PaymentCard = ({ projectName, professionalName, date,totalAmount, depositAmount,finalInstallment }) => {
  return (
    <div className=" w-full shadow-2xl hover:scale-105 rounded-md relative">
      <div>
        <div className="flex flex-col justify-between mx-4 mt-4">
          <div className="mb-2">
            <p className="text-grey-900 font-bold">{projectName}</p>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="flex items-center">
                <Image
                  src="/notiImage.jpg"
                  height={30}
                  width={30}
                  className="rounded-full sm:display-none"
                />
                <p className="text-primary font-bold text-grey-90 text-sm pl-3 mr-2">
                  Professional:
                </p>
                <p className="text-primary text-sm">{professionalName}</p>
              </div>

              <div className="flex mt-2 ml-2 gap-7">
                <BsCalendarDateFill className="text-grey-900" />
                <p className="text-primary text-sm">{date}</p>
              </div>
              <div className="flex gap-4 my-2 w-full">
                <button className="bg-secondary w-1/2 hover:bg-white hover:text-secondary border border-secondary font-bold  px-4 py-1.5 w-24 rounded-md text-white text-sm">
                  Process Payment
                </button>
                <button
                  className="bg-error border w-1/2 border-error hover:text-error hover:bg-white px-4 w-24 py-1.5 rounded-md text-white text-sm"
                  onClick={() => {
                    router.push("/client-dashboard/projectTimeline");
                  }}
                >
                  Reject Payment
                </button>
              </div>
            </div>
            <div className="pl-1.5 flex items-center bg-secondary bg-opacity-20 ml-1.5 w-1/2 mb-2 rounded-md">
              {/* Amounts */}
              <div className="flex items-center gap-4 mr-4">
                <p className="text-xs text-grey-900">Total Amount</p>
                <p className="text-grey-900 font-bold text-2xl">$ {totalAmount}</p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <p className="text-xs text-grey-900">Deposit Amount</p>
                  <p className="text-grey-900 text-2xl font-bold">$ {depositAmount}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-xs text-grey-900">Final Installment</p>
                  <p className="text-grey-900 text-2xl font-bold">$ {finalInstallment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
