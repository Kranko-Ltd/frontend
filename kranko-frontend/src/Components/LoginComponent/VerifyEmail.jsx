import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useContext } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { parseCookies } from "nookies";
import RightImage from "../UI/RightImage";
import FormButton from "../UI/FormButton";
import { useEffect } from "react";
import axios from "axios";

const VerifyEmail = () => {
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

  const onSubmit = async () => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    const user_type = profile?.role;
    const email = profile?.email;
    async function createSendEmail() {
      let sendEmail;
      if (user_type === "client") {
        sendEmail = await axios.post("/api/send_email", {
          email: email,
        });
      } else {
        sendEmail = await axios.post("/api/send_email_", {
          email: email,
        });
      }

      const result = await sendEmail.data.status;
      console.log("email", result);
      if (result.error) {
        toast(result.error.message);
      }
    }
    createSendEmail();
  };

  return (
    <div className=" font-Nunito" id="joinUs">
      <Head>
        <title>Verify Your Email</title>
        <meta name="description" content="Join Our Family" />
      </Head>
      <div className=" h-full min-h-screen bg-white bg-cover outline  grid grid-col-1 md:h-full md:grid-cols-2 2xl:h-screen text-primary">
        <div className="mx-3 pt-20">
          <div className="flex w-full justify-center antialiased">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full bg-white pt-6 pb-8 mb-4   px-2  md:w-full lg:w-5/6 xl:w-2/3"
            >
              <h3 className="text-center text-primary text-3xl md:text-3xl mb-5 font-semibold ">
                Verify your email
              </h3>

              <div className="mb-2">
                <p className="text-primary text-sm text-center">
                  Check you email for verification
                </p>
              </div>

              <FormButton BtnCaption="Resend Email" />

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
export default VerifyEmail;
export const getServerSideProps = async (context) => {
  const { ["auth_token"]: token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanet: false,
      },
    };
  }

  return {
    props: {},
  };
};
