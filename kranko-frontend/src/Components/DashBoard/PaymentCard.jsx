import React from "react";
import Image from "next/image";
import { BsCalendarDateFill } from "react-icons/bs";
import { loadStripe } from "@stripe/stripe-js";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../Queries/Projects";
import axios from "axios";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const PaymentCard = ({
  projectName,
  professionalName,
  date,
  totalAmount,
  depositAmount,
  finalInstallment,
  project_id,
}) => {
  let project;
  let stripeID;
  const {
    data: PaymentData,
    loading: PaymentLoading,
    error: PaymentError,
  } = useQuery(GET_PROJECTS);
  if (!PaymentLoading && !PaymentError) {
    console.log(PaymentData);
    const allProjects = PaymentData.projects.data;
    console.log(allProjects);
    project = allProjects.find((project) => project.id === project_id);
    if (project.attributes.downpayment60_status === "pending") {
      stripeID = 0.6 * project.attributes.actual_cost;
    } else if (project.attributes.finalpayment40_status === "pending") {
      stripeID = 0.4 * project.attributes.actual_cost;
    }
  }

  const handlePayments = async () => {
    const paymentID = project_id;
    async function createCheckOutSession() {
      const stripe = await stripePromise;

      const checkoutSession = await axios.post("/api/checkout_sessions", {
        price: stripeID,
        //email: user.email,
        paymentID: paymentID,
        Project_name: project.attributes.Project_name,
      });

      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });
      if (result.error) {
        toast(result.error.message);
      } else {
        toast.success("Procced to Payment!");
      }
    }
    createCheckOutSession();
  };
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
                <button
                  className="bg-secondary w-1/2 hover:bg-white hover:text-secondary border border-secondary font-bold  px-4 py-1.5  rounded-md text-white text-sm"
                  onClick={handlePayments}
                >
                  Process Payment
                </button>
                <button
                  className="bg-error border w-1/2 border-error hover:text-error hover:bg-white px-4  py-1.5 rounded-md text-white text-sm"
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
                <p className="text-grey-900 font-bold text-2xl">
                  $ {totalAmount}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <p className="text-xs text-grey-900">Deposit Amount</p>
                  <p className="text-grey-900 text-2xl font-bold">
                    $ {depositAmount}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-xs text-grey-900">Final Installment</p>
                  <p className="text-grey-900 text-2xl font-bold">
                    $ {finalInstallment}
                  </p>
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
