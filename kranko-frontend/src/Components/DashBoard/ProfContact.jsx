import React from "react";
import Image from "next/image";
import { get, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT_MUTATION } from "../../mutations/Projects";

const getcontact = () => {
  const toastId = useRef(null);

  const contact = JSON.parse(localStorage.getItem("contact"));
  return contact;
};

const ProfContact = () => {
  const contact = getcontact();
  const [SaveProject, { data, loading, error }] = useMutation(
    CREATE_PROJECT_MUTATION
  );
  const router = useRouter();
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
  const onSubmit = async (data) => {
    const user_profile = JSON.parse(localStorage.getItem("profile"));
    //senders details
    const user_email = user_profile?.email;
    const user_name = user_profile?.name;
    const user_id = user_profile?.user;

    //project details

    const {
      project_title,
      project_description,
      time_estimation,
      budget_explanation,
    } = data;

    //prof details
    const prof_email = contact?.email;
    const prof_name = contact?.name;
    const prof_id = contact?.prof_id;

    console.log(prof_id, user_id);
    const projectInfo = await SaveProject({
      variables: {
        data: {
          Project_name: project_title,
          project_description: project_description,
          project_cost: budget_explanation,
          professional_email: prof_email,
          project_status: "requested",
          actual_cost: 0.0,
          downpayment60: 0.0,
          client_id: user_id,
          client_email: user_email,
          professional_id: prof_id,
          finalpayment40: 0.0,
          time_estimation: time_estimation,
          publishedAt: new Date(),
        },
      },
    });
    console.log(projectInfo);

    const sendEmail = async () => {
      const sendEmail = await axios.post("/api/contact_prof", {
        prof_email: prof_email,
        prof_name: prof_name,
        user_email: user_email,
        user_name: user_name,
        project_title: project_title,
        project_description: project_description,
        time_estimation: time_estimation,
        budget_explanation: budget_explanation,
      });

      const result = await sendEmail.data.status;
      console.log("email", result);
      if (result.error) {
        toast(result.error.message);
      } else {
        toast("message sent successfully");
      }
    };
    sendEmail();
    router.push("/client-dashboard/professionals");
  };
  React.useEffect(() => {});
  return (
    <div className="px-5  ">
      <p className="text-grey-900 text-2xl antialiased font-semibold mt-5 ">
        Contact Professional
      </p>
      <p className="text-sm text-grey-900 pr-10 lg:pr-96 mt-2">
        Our professional are at your disposal in every step. Kindly provide your
        indication of intent and a meeting will be scheduled immediately
      </p>
      <p className="text-xl text-grey-900 mt-4">To</p>
      <div className="w-72 bg-[#E2E3E6] p-3 flex items-center">
        {contact?.image_url && (
          <Image
            src="/person9.jpg"
            height={60}
            width={60}
            className="rounded-full"
          />
        )}

        <div className="ml-2">
          <p className="text-xl font-semibold text-grey-900">{contact?.name}</p>
          <p className="text-sm text-grey-900">{contact?.occupation}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2 mt-3">
          <label
            className="text-xl  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            htmlFor="name"
          >
            Project Title
          </label>
          <input
            {...register("project_title", {
              required: "Project title is required",
            })}
            type="text"
            placeholder="Enter your project title "
            className="mt-3 block rounded-lg px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">
              {errors.project_title?.message}
            </p>
          )}
        </div>
        <div className="mb-2 mt-3">
          <label
            className="text-xl  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            htmlFor="name"
          >
            Project Description
          </label>
          <textarea
            {...register("project_description", {
              required: "Project description is required",
            })}
            type="text"
            placeholder="Enter your project description "
            className="mt-3 block h-32 rounded-lg px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
          />

          {errors.name && (
            <p className="text-red-500 text-xs">
              {errors.project_description?.message}
            </p>
          )}
        </div>
        <div className="mb-2 mt-3">
          <label
            className="text-xl  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            htmlFor="name"
          >
            Time Estimation
          </label>
          <textarea
            {...register("time_estimation", {
              required: "Time estimation is required",
            })}
            type="text"
            placeholder="Enter your Time Estimation  "
            className="mt-3 block h-32 rounded-lg px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
          />

          {errors.name && (
            <p className="text-red-500 text-xs">
              {errors.time_estimation?.message}
            </p>
          )}
        </div>
        <div className="mb-2 mt-3">
          <label
            className="text-xl  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            htmlFor="name"
          >
            Budget Explanation
          </label>
          <textarea
            {...register("budget_explanation", {
              required: "Budget Explanation is required",
            })}
            type="text"
            placeholder="Enter your Budget Explanation in USD "
            className="mt-3 block h-32 rounded-lg px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
          />

          {errors.name && (
            <p className="text-red-500 text-xs">
              {errors.budget_explanation?.message}
            </p>
          )}
        </div>
        <div className="flex justify-center space-x-3">
          <button
            className="inline-flex items-center px-6 py-3 border-1 border-secondary text-lg md:text-base font-semibold rounded-md shadow-sm text-white bg-secondary  justify-center w-32 hover:border hover: border-greyLight hover:text-grey-900 hover:bg-white"
            button="Submit"
          >
            send
          </button>
          <button
            className="inline-flex items-center px-6 py-3 border-1 border-secondary text-lg md:text-base font-semibold rounded-md shadow-sm text-white bg-secondary  justify-center w-32 hover:border hover: border-greyLight hover:text-grey-900 hover:bg-white"
            button="button"
            onClick={() => {
              router.push("/client-dashboard/professionals");
              localStorage.removeItem("contact");
            }}
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfContact;
