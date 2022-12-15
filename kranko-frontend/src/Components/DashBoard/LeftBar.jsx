import React, { useState, useContext } from "react";
import styles from "../../../styles/dashboard.module.css";
import { BsArrowLeftShort, BsSearch, BsPerson } from "react-icons/bs";
import {
  RiDashboardFill,
  RiPassportFill,
  RiSuitcaseFill,
  RiCalendarTodoFill,
} from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import {
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { userContext } from "../../context/userContext";
import { toast } from "react-toastify";
import LeftbarICons from "./LeftbarICons";
import Image from "next/image";
// import HiOutlineBanknotes from "react-icons/hi1";

const LeftBar = () => {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const router = useRouter();
  const { logout, user } = useContext(userContext);

  console.log("User: ", user);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out succesfully", {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const MainMenus = [
    {
      title: "Dashboard",
      href: "/client-dashboard",
      icon: <RiDashboardFill />,
    },
    {
      title: "Projects",
      href: "/client-dashboard/projects",
      icon: <LeftbarICons icon_image="/projects_icon.png" />,
    },
    {
      title: "My Calendar",
      href: "/client-dashboard/mycalendar",
      // icon: <RiCalendarTodoFill />,
      icon: <LeftbarICons icon_image="/calendar-icon.png" />,
    },
  ];
  const ServicesMenus = [
    {
      title: "Professionals",
      href: "/client-dashboard/professionals",

      icon: <LeftbarICons icon_image="/professionals_icon.png" />,
    },
    {
      title: "Products",
      href: "/client-dashboard/products",
      icon: <LeftbarICons icon_image="/products_icon.png" />,
    },
    {
      title: "Payments",
      href: "/client-dashboard/payments",
      icon: <LeftbarICons icon_image="/payment_icon.png" />,
    },
  ];

  return (
    <>
      <div
        className={`h-screen sticky bg-primary p-3 pt-5 pb-1 ${
          showLeftBar ? "w-55" : "w-20"
        } 
            relative duration-300 top-0 max-h-screen md:sticky md:top-0 z-50`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purpule text-3xl rounded-full 
                absolute -right-3 top-10 border border-green cursor-pointer 
                ${!showLeftBar && "rotate-180"}`}
          onClick={() => setShowLeftBar(!showLeftBar)}
        />

        <div className="w-3/4 mb-4 sm:w-full sm:mt-0 overflow-hidden">
          <img
            src="/logo2.png"
            alt="Logo"
            className={`" w-3/4 ${showLeftBar ? "h-16 " : "h-8 w-full"}`}
          />
        </div>
        <p
          className={`text-grey-900  uppercase ${
            showLeftBar ? "text-xl" : "text-sm"
          } `}
        >
          MAIN
        </p>
        <ul className="pt-1">
          {MainMenus.map((menu, index) => (
            <>
              <Link href={menu.href}>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center
                                gap-x-4 cursor-pointer py-1 hover:bg-light-white rounded-md 
                                ${menu.spacing ? "mt-9" : "mt-0"} ${
                    !showLeftBar ? "px-2.5" : "px-4"
                  }
                                ${
                                  router.asPath === menu.href &&
                                  "bg-indigo-800 text-gray- border-l-4 rounded-none border-secondary"
                                }`}
                >
                  <span
                    className={`text-white text-lg block float-left cursor-pointer 
                                ${showLeftBar && "mr-2"} ${
                      router.asPath === menu.href &&
                      "bg-primary text text-secondary"
                    }`}
                  >
                    {menu.icon}
                  </span>
                  <span
                    className={`text-base font-xs flex-1 text-white 
                                ${!showLeftBar && "hidden"} ${
                      router.asPath === menu.href &&
                      "bg-primary text text-secondary"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            </>
          ))}
          <p
            className={`text-grey-900  uppercase pt-8 ${
              showLeftBar ? "text-xl" : "text-sm"
            } `}
          >
            Services
          </p>
          {ServicesMenus.map((menu, index) => (
            <>
              <Link href={menu.href}>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center 
                                gap-x-4 cursor-pointer py-1 hover:bg-light-white rounded-md 
                                ${menu.spacing ? "mt-9" : "mt-0"} ${
                    !showLeftBar ? "px-2.5" : "px-4"
                  }
                                ${
                                  router.asPath === menu.href &&
                                  "bg-indigo-800 text-secondary border-l-2 border-secondary "
                                }`}
                >
                  <span
                    className={`text-white text-lg block float-left cursor-pointer 
                                ${showLeftBar && "mr-2"} ${
                      router.asPath === menu.href &&
                      "bg-indigo-800 text-secondary"
                    }`}
                  >
                    {menu.icon}
                  </span>
                  <span
                    className={`text-base font-xs flex-1 text-white 
                                ${!showLeftBar && "hidden"} ${
                      router.asPath === menu.href &&
                      "bg-indigo-800 text-secondary"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            </>
          ))}
          <p
            className={`text-grey-900  uppercase pt-20 ${
              showLeftBar ? "text-xl" : "text-sm"
            } `}
          >
            Profile
          </p>
          <>
            <Link
              href="/client-dashboard/profile"
              className="pt-1 w-full text-left"
            >
              <li
                className={`text-gray-300 text-sm flex items-center
                            gap-x-4 cursor-pointer py-2 hover:bg-light-white rounded-md 
                             ${!showLeftBar ? "px-2.5" : "px-4"} 
                            `}
              >
                <span
                  className={`text-white text-lg block float-left cursor-pointer 
                            ${showLeftBar && "mr-2"}`}
                >
                  <Image
                    src="/person1.jpg"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                </span>
                <span
                  className={`text-base font-sm flex-1 text-white 
                            ${!showLeftBar && "hidden"}`}
                >
                  Samuel
                </span>
              </li>
            </Link>
          </>

          <>
            <button
              onClick={handleLogout}
              className="text-left
            rounded-xl shadow-xl  bg-grey-900 bg-opacity-20 mt-16 w-full "
            >
              <li
                className={`text-gray-300 text-sm flex items-center
                            gap-x-4 cursor-pointer py-1.5 hover:bg-light-white rounded-md 
                             ${!showLeftBar ? "px-2.5" : "px-4"}
                            `}
              >
                <span
                  className={`text-white text-lg block float-left cursor-pointer 
                            ${showLeftBar && "mr-2"}`}
                >
                  <FiLogOut />
                </span>
                <span
                  className={`text-base font-sm flex-1 text-white 
                            ${!showLeftBar && "hidden"}`}
                >
                  Logout
                </span>
              </li>
            </button>
          </>
        </ul>
      </div>
    </>
  );
};

export default LeftBar;
