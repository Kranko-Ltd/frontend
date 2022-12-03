import Router from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import FormButton from "../UI/FormButton";
import RightImage from "../UI/RightImage";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Context/userContext";
import { parseCookies } from "nookies";
import { useContext } from "react";

const FileUpload = () => {
  const { user, logout, register: signUp } = useContext(UserContext);
  const { handleSubmit } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const info = JSON.parse(localStorage.getItem("BasicInfo"));
    if (user?.user != "client" && info?.name === undefined) {
      router.push("/register1");
    } else if (info?.name === undefined) {
      router.push("/signUp");
    }
  });
  const [selectedPassport, setSelectedPassword] = useState();
  const [isPassportPicked, setIsPassportPicked] = useState(false);
  const [image, setImage] = useState();
  const [newSelectedPassport, setNewSelectedPassport] = useState();
  const [imageFromCloudinary, setImageFromCloudinary] = useState();
  const passportChangeHandler = (event) => {
    const files = event.target.files;
    if (files.length === 0) {
      alert("Please Upload the file");
    } else {
      const fileName = files[0]?.name;
      setSelectedPassword(fileName);
      setNewSelectedPassport(files[0]);
      setIsPassportPicked(true);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.onerror = () => {
        console.error(reader.error);
      };
    }
  };

  console.log(selectedPassport);

  const submitHandler = async () => {
    const info = JSON.parse(localStorage.getItem("BasicInfo"));
    console.log(newSelectedPassport);
    const formData = new FormData();
    formData.append("file", newSelectedPassport);
    formData.append("upload_preset", "Listing");
    console.log(...formData);
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dr9ck9zw0/image/upload",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((r) => r.json())
      .catch((error) => {
        console.log(error);
      });

    setImageFromCloudinary(data.secure_url);
    console.log(imageFromCloudinary);
    const BasicInfo = JSON.parse(localStorage.getItem("BasicInfo"));
    const roledefination = JSON.parse(localStorage.getItem("user"));
    const email = BasicInfo.email;
    const username = BasicInfo.name;
    const password = BasicInfo.password;
    const certification_link = "";
    const Years_of_experience = 0;
    const Field_of_specialisation = "";
    const image_url = imageFromCloudinary;
    const role = roledefination.user;

    await signUp({
      email,
      username,
      password,
      certification_link,
      Years_of_experience,
      Field_of_specialisation,
      image_url,
      role,
    });

    localStorage.removeItem("BasicInfo");
  };

  return (
    <React.Fragment>
      <div className=" h-full min-h-screen bg-white bg-cover outline  grid grid-col-1 md:h-full md:grid-cols-2 2xl:h-screen text-primary">
        <div className="mx-3 pt-20">
          <div className="flex w-full justify-center antialiased">
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="w-full bg-white pt-6 pb-8 mb-4   px-2  md:w-full lg:w-5/6 xl:w-2/3"
            >
              <label mb="0" fontSize="0.875rem" color="#303030" htmlFor="">
                Upload Passport Size Photograph
                <sup className="text-error mt-0 text-xl">*</sup>
              </label>
              <div className={styles.uploadCanvas}>
                {isPassportPicked ? (
                  <div className="flex justify-center">
                    <p>{selectedPassport}</p>
                  </div>
                ) : (
                  <input
                    type="file"
                    className={styles.fileUpload}
                    onChange={passportChangeHandler}
                    required
                  />
                )}
              </div>
              {image && (
                <React.Fragment>
                  <div className={styles.imagedisplay}>
                    <div className={styles.innerimagedisplay}>
                      <img
                        src={image}
                        alt="Thumbnail"
                        className={styles.image}
                      />
                    </div>
                  </div>

                  {/* {image.map((img: string, index: number) => (
              <img src={img} alt="Hey" key={index} className={styles.image} />
            ))} */}
                </React.Fragment>
              )}

              <FormButton
                handlesubmit={submitHandler}
                BtnCaption="Save and Complete"
              />
            </form>
          </div>
        </div>

        <RightImage />
      </div>
    </React.Fragment>
  );
};

export default FileUpload;
