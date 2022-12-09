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
import { userContext } from "../../context/userContext";

const LoginForm = () => {
  const { signIn } = useContext(userContext);
  const toastId = useRef(null);
  const router = useRouter();
  let profile;

  useEffect(() => {
    profile = JSON.parse(localStorage.getItem("profile"));
    if (profile?.role === "client") {
      router.push("/client-dashboard");
    } else if (profile?.role === "professional") {
      router.push("/professional-dashboard");
    }
  }, [profile]);
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

  const password = useRef({});
  const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
  password.current = watch("password", "");
  const pass2 = useRef({});

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const onSubmit = async (data) => {
    try {
      toastId.current = toast("Please Wait", { autoClose: false });
      await signIn(data);
      toast.update(toastId.current, {
        render: "Logged in successfully",
        type: toast.TYPE.SUCCESS,
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.message);
    }

    // here check if the user is logged in and redirect him to the /apply
  };

  return (
    <div className=" font-Nunito" id="joinUs">
      <Head>
        <title>Sign In to KrankoJobs</title>
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
                Welcome back!
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

              <div className="mb-2 relative">
                <label
                  className="text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="name"
                >
                  Password
                </label>

                <input
                  ref={password}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: PASS_REGEX,
                      message:
                        "Must have an uppercase, lowercase, number and be at least 6 chars",
                    },
                  })}
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  placeholder=" "
                  className="block rounded-lg px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
                />

                <button
                  onClick={togglePassword}
                  htmlFor="password"
                  className="absolute h-[52px] inset-y-6 z-0 right-2.5 flex items-center text-sm  border-gray-300 peer-focus:border-green"
                >
                  {passwordShown ? (
                    <svg
                      className="h-6 text-gray-500"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                        stroke="#646F79"
                        stroke-opacity="0.25"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                        stroke="#646F79"
                        stroke-opacity="0.25"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                  {/* {passwordShown ? "Hide password" : "Show Password"} */}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-xs ">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="SelectR"
                    className="bg-secondary border-greyLight text-secondary  rounded-md w-6 h-6 focus:ring-white"
                    defaultChecked={isChecked}
                    {...register("SelectR", {
                      required: "Kindly accept Terms and Conditions",
                    })}
                    onClick={() => {
                      if (isChecked === true) {
                        setIschecked(false);
                      } else {
                        setIschecked(true);
                      }
                    }}
                  />
                  <label htmlFor="checkbox" className="ml-1">
                    Remember me{" "}
                  </label>
                </div>
                <Link href="/auth/forgot-password">
                  <h3 className="hover:text-green ">
                    <span className="text-green font-semibold cursor-pointer">
                      Forgot Password?
                    </span>
                  </h3>
                </Link>
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs">
                  {errors.SelectR?.message}
                </p>
              )}

              <FormButton BtnCaption="Sign in" />
              <div className="flex">
                <button
                  className="bg-white shadow-lg border-none text-primary text-xs flex    focus:shadow-outline focus:outline-none  font-bold px-4 md:text-sm  rounded-md mt-8 mb-3 py-1 "
                  button="button"
                >
                  <span className="flex place-items-center stroke-white stroke-2 ">
                    <FcGoogle size={20} />
                    <span>Sign Up with Google</span>
                  </span>
                </button>
                <button
                  className="ml-5 bg-white shadow-lg border-none text-primary text-xs flex    focus:shadow-outline focus:outline-none  font-bold px-4 md:text-sm  rounded-md mt-8 mb-3 py-1"
                  button="button"
                >
                  <span className="flex place-items-center stroke-white stroke-2 ">
                    <BsFacebook size={20} />
                    <span>Sign up with Facebook</span>
                  </span>
                </button>
              </div>
              <Link href="/register1">
                <h3 className="hover:text-darkBlue-900 px-16">
                  You don't have an Account?{" "}
                  <span className="text-secondary font-extrabold cursor-pointer ">
                    Sign Up
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
export default LoginForm;
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
