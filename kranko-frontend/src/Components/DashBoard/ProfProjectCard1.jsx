import React from "react";
import Image from "next/image";
import { useState, useRef } from "react";
import Modal from "react-overlays/Modal";
import { IoMdCloseCircle } from "react-icons/io";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UPDATE_PROJECT } from "../../mutations/Projects";
import { useMutation } from "@apollo/client";
const ProfProjectCard1 = ({
  project_name,
  client_name,
  date_published,
  project_id,
}) => {
  const toastId = useRef(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });
  const [
    updateProject,
    { data: projectData, loading: ProjectLoading, error: ProjectError },
  ] = useMutation(UPDATE_PROJECT);

  //------ MODAL LOGIC-----
  const [showModal, setShowModal] = useState(false);
  // to close the modal
  var handleClose = () => setShowModal(false);
  const onSubmit = async (data) => {
    const { comments, finalAmount } = data;
    console.log(comments, finalAmount);
    console.log(project_id);
    console.log(typeof finalAmount);

    try {
      toastId.current = toast("Please Wait", { autoClose: false });
      await updateProject({
        variables: {
          id: project_id,
          data: {
            actual_cost: Number(finalAmount),
            prof_comments: comments,
            downpayment60_status: "pending",
          },
        },
      });
      toast.update(toastId.current, {
        render: "Price updated successfully",
        type: toast.TYPE.SUCCESS,
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

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

  //------ END OF MODAL LOGIC-----
  return (
    <div className=" w-full shadow-2xl hover:scale-105 rounded-md relative">
      <div className="-z-10">
        {/* Image section */}
        <div className="relative">
          <Image
            src="/ProjectImage.jpg"
            width={298}
            height={194}
            layout="responsive"
            className="shadow-inner rounded-t-md botton-blur-sm "
          />
          <div className="absolute bottom-0 w-full bg-white  py-2 overflow-y-hidden bg-opacity-70 ">
            <p className="text-xl text-[#646F79] antialiased font-extrabold ml-1">
              {project_name}
            </p>
          </div>
        </div>
        {/* End of Image section */}

        <div className="flex justify-between mx-4 mt-4">
          <div className="flex items-center">
            <Image
              src="/notiImage.jpg"
              height={50}
              width={50}
              className="rounded-full sm:display-none"
            />
            <p className="text-primary text-grey-90 text-sm pl-3 mr-2">
              Requested By:
            </p>
            <p className="text-primary font-bold text-sm">{client_name}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-grey-900 text-sm">Date:</p>
            <p className="text-primary font-bold text-sm">{date_published}</p>
          </div>
        </div>

        <div className="flex justify-between items-center px-2 mt-3 pb-3">
          <div>
            <p className="text-secondary ml-2 hover:font-bold text-sm">
              View request
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-secondary hover:bg-white hover:text-secondary border border-secondary font-bold  px-4 py-1.5 w-24 rounded-md text-white text-sm"
              onClick={() => setShowModal(true)}
            >
              Accept
            </button>
            <button
              className="bg-error border border-error hover:text-error hover:bg-white px-4 w-24 py-1.5 rounded-md text-white text-sm"
              onClick={() => {
                router.push("/client-dashboard/projectTimeline");
              }}
            >
              Reject
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {/* overlay Modal */}
      <Modal
        className="modal absolute top-[40%] left-[30%] w-1/2 flex flex-col  md:left-1/3  rounded-md"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div className="">
          {/* close icon */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary font-bold pt-4 pb-2 pl-4">
                Project Acceptance Form
              </p>
              <p className="text-grey-900 text-xs pl-4">
                Please enter the following details to be sent to the Client
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
          <form
            className="bg-white rounded-lg w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* input fields */}
            <div className="mt-4 w-full flex flex-col items-center px-4">
              <div className="w-full">
                <label
                  htmlFor="finalamount"
                  className="block text-sm font-bold"
                >
                  Final Amount
                </label>
                <input
                  {...register("finalAmount", {
                    required: "Final Amount  is required",
                  })}
                  className="p-1.5 border  w-full border-greyLight text-xs font-bold rounded-md focus:border-secondary focus:ring-secondary"
                  type="number"
                  placeholder="Enter the Project's final costing"
                  id=""
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">
                    {errors.finalAmount?.message}
                  </p>
                )}
              </div>
              <div className="mt-4 w-full">
                <label
                  htmlFor="expiryMonth"
                  className="block text-sm font-bold"
                >
                  Comments
                </label>
                <input
                  {...register("comments", {
                    required: "comments are required",
                  })}
                  className="p-1.5 border h-16 w-full border-greyLight text-xs font-bold rounded-md focus:border-secondary focus:ring-secondary"
                  type="message"
                  placeholder="Any Comments"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">
                    {errors.comments?.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-center gap-4 w-full">
                <button
                  className="bg-secondary  border border-secondary text-white font-bold text-sm hover:bg-white hover:text-secondary px-4 py-1.5 rounded-md my-4"
                  button="Submit"
                >
                  Send
                </button>
                <button
                  onClick={handleClose}
                  className="bg-error border  border-error text-white font-bold text-sm hover:bg-white hover:text-error px-4 py-1.5 rounded-md my-4"
                  button="Button"
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

export default ProfProjectCard1;
