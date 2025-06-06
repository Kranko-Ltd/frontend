import { useMutation, useQuery } from "@apollo/client";
import { Controller } from "react-hook-form";
//import Select from "react-select";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useContext } from "react";
import { toast } from "react-toastify";
import styles from "../../../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { parseCookies } from "nookies";
import RightImage from "../UI/RightImage";
import FormButton from "../UI/FormButton";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useEffect } from "react";
import Select from "react-select";

const ProfessionalSignUp = () => {
  const [selectedskill, setSelectedSkill] = useState();
  const onSelectFocus = () =>
    setSelectLabelStyles(
      "absolute z-0 text-sm top-6 origin-[0] left-2.5 duration-300 transform -translate-y-6 scale-75 text-secondary font-semibold"
    );

  const onSelectBlur = () => {
    if (!setSelectedSkill)
      setSelectLabelStyles(
        "absolute z-0 text-sm text-gray-500 top-6 origin-[0] left-2.5 duration-300 transform scale-100 translate-y-0"
      );
    else
      setSelectLabelStyles(
        "absolute z-0 text-sm text-gray-500 top-6 origin-[0] left-2.5 duration-300 transform -translate-y-6 scale-75 font-semibold"
      );
  };
  const [selectLabelStyles, setSelectLabelStyles] = useState(
    "absolute z-0 text-sm text-gray-500 top-6 origin-[0] left-2.5"
  );
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#45BDE6",
        primary: "secondary",
      },
    };
  }
  const skillOptions = [
    { value: 1, label: "React Js" },
    { value: 2, label: "Figma" },
    { value: 3, label: "Nextjs" },
    { value: 4, label: "Nodejs" },
    { value: 5, label: "UI/UX" },
    { value: 6, label: "Matlab" },
  ];
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.user === "client") {
      router.push("/signUp");
    }
    if (user?.user != "client" && user?.user != "professional") {
      router.push("/register1");
    }
  }, []);
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
      if (isChecked === true) {
        localStorage.setItem(
          "BasicInfo",
          JSON.stringify({
            ...data,
            selectedskill,
          })
        );
        router.push("/FinalsignUp");
      }
    } catch (error) {
      return toast.error(error.message);
    }
  };

  return (
    <div className=" font-Nunito" id="joinUs">
      <Head>
        <title>Sign Up to KrankoJobs</title>
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
                Create an account
              </h3>
              <div className="mb-2">
                <label
                  className="text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  {...register("name", {
                    required: "name is required",
                  })}
                  type="text"
                  placeholder="Enter your name "
                  className="block rounded-lg px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>
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
              <div className="mb-2">
                <label
                  className="text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="name"
                >
                  Occupation
                </label>
                <input
                  {...register("occupation", {
                    required: "occupation is required",
                  })}
                  type="text"
                  placeholder="Enter your occupation "
                  className="block rounded-lg px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">
                    {errors.occupation?.message}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <label
                  className="text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="name"
                >
                  Bio
                </label>
                <textarea
                  {...register("bio", {
                    required: "Bio is required",
                  })}
                  type="text"
                  placeholder="Enter your Bio "
                  className="block rounded-lg px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.bio?.message}</p>
                )}
              </div>
              <div className="mb-2">
                <label
                  className="text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="name"
                >
                  Certification Links
                </label>
                <input
                  {...register("certificationlink", {
                    required: "Certification link is required",
                  })}
                  type="text"
                  placeholder="Enter your Certification links "
                  className="block rounded-lg px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">
                    {errors.certificationlink?.message}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <label
                  className="text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="name"
                >
                  Years Of Experience
                </label>
                <input
                  {...register("yearsofexperience", {
                    required: "Years of experience is required",
                  })}
                  type="number"
                  placeholder="Enter your years of Experience "
                  className="block rounded-lg px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">
                    {errors.certificationlink?.message}
                  </p>
                )}
              </div>
              <div className="mb-2 ">
                <label
                  className="text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="name"
                >
                  Skills
                </label>
                <Controller
                  rules={{ required: "required" }}
                  name="skills"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      placeholder=" "
                      inputRef={ref}
                      classNamePrefix={"react-select"}
                      value={skillOptions?.find((c) => c.value === value)}
                      onChange={(val) => {
                        setSelectedSkill(true);
                        onChange(val.map((c) => c.label));
                      }}
                      options={skillOptions}
                      theme={customTheme}
                      isMulti
                      isSearchable
                      autoFocus
                      onFocus={onSelectFocus}
                      onBlur={onSelectBlur}
                    />
                  )}
                />
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

              <div className="mb-4 relative">
                <label
                  className="text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-green peer-focus:font-semibold peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="password2"
                >
                  Confirm password
                </label>
                <input
                  type={passwordShown ? "text" : "password"}
                  className="block rounded-lg px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-greyLight appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-[DDDDDD] peer"
                  id="password2"
                  ref={pass2}
                  name="password2"
                  placeholder=" "
                  required
                  {...register("password2", {
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />

                <button
                  onClick={togglePassword}
                  className="absolute h-[52px] inset-y-6 z-0 right-2.5 flex items-center text-sm  border-gray-300 peer-focus:border-green"
                  htmlFor="password2"
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
                {errors.password2 && (
                  <p className="text-red-500 text-xs ">
                    {errors.password2.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="SelectTc"
                  className="bg-secondary border-greyLight text-secondary  rounded-md w-6 h-6 focus:ring-white"
                  defaultChecked={isChecked}
                  {...register("SelectTc", {
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
                  I agree to the{" "}
                  <span className="text-secondary">Privacy Policy</span> and{" "}
                  <span className="text-secondary">Terms of Service</span>{" "}
                </label>
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs">
                  {errors.SelectTc?.message}
                </p>
              )}

              <FormButton BtnCaption="Sign Up" />
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
              <Link href="/login">
                <h3 className="hover:text-darkBlue-900 px-20">
                  Already have an Account?{" "}
                  <span className="text-secondary font-extrabold cursor-pointer">
                    Sign in
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

export default ProfessionalSignUp;
