import { useMutation, useQuery } from "@apollo/client";
import { Controller } from "react-hook-form";
import Select from "react-select";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useContext } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { parseCookies } from "nookies";
import RightImage from "../UI/RightImage";
import FormButton from "../UI/FormButton";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useEffect } from "react";

const ForgotPassword = () => {
  const router = useRouter();

  const [isChecked, setIschecked] = useState(false);
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

  const onSubmit = async (data) => {};

  return (
    <div className=" font-Nunito" id="joinUs">
      <Head>
        <title>Set new Password</title>
        <meta name="description" content="Join Our Family" />
      </Head>
      <div className=" h-full min-h-screen bg-white bg-cover outline  grid grid-col-1 md:h-full md:grid-cols-2 2xl:h-screen text-primary">
        <div className="mx-3 pt-20">
          <div className="flex w-full justify-center antialiased">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full bg-white pt-6 pb-8 mb-4   px-2  md:w-full lg:w-5/6 xl:w-2/3"
            >
              <h3
                className={
                  "text-center text-primary text-3xl md:text-3xl mb-5 font-semibold "
                }
              >
                Set new Password
              </h3>

              <div className="mb-2">
                <label
                  className="text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="name"
                >
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "email is required",
                  })}
                  type="text"
                  placeholder="Enter your email "
                  className="block rounded-lg px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <FormButton BtnCaption="Reset Password" />

              <Link href="/login">
                <h3 className="hover:text-darkBlue-900 px-32 text-secondary">
                  <span className="text-secondary font-extrabold cursor-pointer ">
                    Back to Sign In
                  </span>
                </h3>
              </Link>
            </form>
          </div>
        </div>

        <RightImage />
      </div>
    </div>
  );
};
export default ForgotPassword;
export const getServerSideProps = async (context) => {
  const { ["auth_token"]: token } = parseCookies(context);

  if (token) {
    return {
      redirect: {
        destination: "/apply",
        permanet: false,
      },
    };
  }

  return {
    props: {},
  };
};
