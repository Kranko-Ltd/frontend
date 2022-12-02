import React from "react";

const FormButton = ({ handlesubmit, BtnCaption }) => {
  return (
    <div className="w-full mt-10 hover:bg-darkBlue-900">
      <button
        className="inline-flex items-center px-6 py-3 border-1 border-secondary text-lg md:text-base font-semibold rounded-md shadow-sm text-white bg-secondary hover:bg-secondary hover:bg-opacity-5 justify-center w-full"
        onClick={handlesubmit}
        button="Submit"
      >
        {BtnCaption}
      </button>
    </div>
  );
};

export default FormButton;
