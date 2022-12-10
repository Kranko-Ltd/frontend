import React from "react";
import { useState } from "react";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { HiEllipsisHorizontal } from "react-icons/hi";
const ManagePayment = () => {
   const cardDetailsList = [
     { id: 1, cardNumberLastThree: "234", ExpiryMonth: 7, ExpiryDate: 27 },
     { id: 2, cardNumberLastThree: "432", ExpiryMonth: 8, ExpiryDate: 24 },
     { id: 3, cardNumberLastThree: "342", ExpiryMonth: 9, ExpiryDate: 21 },
   ];
  const [cardDetails, setCardDetails] = useState(cardDetailsList);
  const removeCard = (index) => {
    setCardDetails(current => current.filter(obj=>{
      return obj.id !== index
    }))
    console.log(cardDetails);
  };
  return (
    <div>
      <div className="bg-white rounded-md">
        <div>
          <p className="text-primary font-bold pt-4 pb-2 pl-4">
            Manage Payment Methods
          </p>
          <p className="text-grey-900 text-xs pl-4">
            These are the list of cards that you have added.
          </p>
        </div>

        <div className="flex justify-center my-4">
          <button className="flex justify-between border border-secondary text-sm py-1.5 hover:bg-white hover:border hover:border-secondary hover:text-secondary px-8 bg-secondary text-white font-bold rounded-md w-3/4">
            <div>+</div>
            <div>Add New Card</div>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center mb-4">
          {cardDetails.map((card, index) => {
            return (
              <div
                className="flex flex-col items-center gap-4 md:flex-row justify-evenly bg-greyLight my-2 rounded-md w-3/4 py-2"
                key={index}
              >
                <BsFillCreditCard2BackFill className="text-grey-900" />
                <div className="text-xs text-grey-900 font-bold">
                  *** **** {card.cardNumberLastThree}
                </div>
                <div className="text-xs text-grey-900 font-bold">
                  Exp {card.ExpiryDate}/{card.ExpiryMonth}
                </div>
                <div
                  className="text-xs text-error font-bold cursor-pointer"
                  onClick={() => removeCard(card.id)}
                >
                  Remove
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManagePayment;
