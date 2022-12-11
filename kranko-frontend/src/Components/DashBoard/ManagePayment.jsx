import React from "react";
import { useState } from "react";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "react-overlays/Modal";

const ManagePayment = () => {
  //------ MODAL LOGIC-----
  const [showModal, setShowModal] = useState(false);
  // to close the modal
  var handleClose = () => setShowModal(false);
  // to save when save it clicked
  var handleSuccess = () => {
    console.log("Success");
  };
  //  backdrop of the modal
  const renderBackdrop = (props) => (
    <div
      className="fixed z-1000 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-30"
      {...props}
    />
  );

  const cardDetailsList = [
    { id: 1, cardNumberLastThree: "234", ExpiryMonth: 7, ExpiryDate: 27 },
    { id: 2, cardNumberLastThree: "432", ExpiryMonth: 8, ExpiryDate: 24 },
    { id: 3, cardNumberLastThree: "342", ExpiryMonth: 9, ExpiryDate: 21 },
  ];
  const [cardDetails, setCardDetails] = useState(cardDetailsList);
  const removeCard = (index) => {
    setCardDetails((current) =>
      current.filter((obj) => {
        return obj.id !== index;
      })
    );
    console.log(cardDetails);
  };
  return (
    <div className="relative">
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
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="flex justify-between border border-secondary text-sm py-1.5 hover:bg-white hover:border hover:border-secondary hover:text-secondary px-8 bg-secondary text-white font-bold rounded-md w-3/4"
          >
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
      {/* overlay Modal */}
      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div className="bg-white flex flex-col top-1/3 left-1/2 md:left-1/3 w-1/2 rounded-md absolute">
          {/* close icon */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary font-bold pt-4 pb-2 pl-4">
                Add New Card
              </p>
              <p className="text-grey-900 text-xs pl-4">
                Please enter the details of the card that you want to add
              </p>
            </div>
            <div className="flex justify-end mt-2 mr-4">
              <IoMdCloseCircle
                onClick={handleClose}
                className="hover:text-secondary"
              />
            </div>
          </div>

          {/* form */}
          <form className="bg-white rounded-lg w-full">
            {/* input fields */}
            <div className="mt-4 w-full flex flex-col items-center px-4">
              <div className="w-full">
                <label htmlFor="cardnumber" className="block text-sm font-bold">
                  Card Number
                </label>
                <input
                  className="p-1.5 border  w-full border-greyLight text-xs font-bold rounded-md focus:border-secondary focus:ring-secondary"
                  type="number"
                  placeholder="card number"
                  name=""
                  id=""
                />
              </div>
              <div className="mt-4 w-full">
                <label
                  htmlFor="expiryMonth"
                  className="block text-sm font-bold"
                >
                  Expiry Month
                </label>
                <input
                  className="p-1.5 border  w-full border-greyLight text-xs font-bold rounded-md focus:border-secondary focus:ring-secondary"
                  type="number"
                  placeholder="Expiry Month"
                  name=""
                  id=""
                />
              </div>
              <div className="mt-4 w-full">
                <label htmlFor="expiryDate" className="block text-sm font-bold">
                  Expiry Date
                </label>
                <input
                  className="p-1.5 w-full border border-greyLight text-xs font-bold rounded-md focus:border-secondary focus:ring-secondary"
                  type="number"
                  placeholder="Expiry Date"
                  name=""
                  id=""
                />
              </div>
              <div className="mt-4 w-full">
                <label htmlFor="CVC" className="block text-sm font-bold">
                  CVC
                </label>
                <input
                  className="p-1.5  w-full border border-greyLight text-xs font-bold rounded-md focus:border-secondary focus:ring-secondary"
                  type="number"
                  placeholder="CVC"
                  name=""
                  id=""
                />
              </div>
              <div className="flex items-center justify-center gap-4 w-full">
                <button className="bg-secondary border border-secondary text-white font-bold text-sm hover:bg-white hover:text-secondary px-4 py-1.5 rounded-md my-4">
                  Save
                </button>
                <button
                  onClick={handleClose}
                  className="bg-error border border-error text-white font-bold text-sm hover:bg-white hover:text-error px-4 py-1.5 rounded-md my-4"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ManagePayment;
