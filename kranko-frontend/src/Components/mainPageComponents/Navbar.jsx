import React, { useEffect, useState, useContext } from "react";
import router from "next/router";
//import { toast } from "react-toastify";
import { userContext } from "../../context/userContext";
import Link from "next/link";
import Logo from "../UI/Logo";
import Button from "../UI/Button";
import styles from "../UI/Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MdAccountCircle } from "react-icons/md";
import { toast } from "react-toastify";

//import  LoadingAnimation from "./LoadingAnimation";
// import  ErrorPage from "./ErrorPage";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = (props) => {
  console.log(props.props);

  const { user, logout } = useContext(userContext);

  // console.log("this is the user: ", user);
  const handleLogout = () => {
    logout();
    toast.success("Logged out succesfully");
  };

  const [show, handleShow] = useState();
  const [nav, setNav] = useState(false);
  const [loggedInuser, setLoggedInuser] = useState("");
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    const role = profile?.role;
    setLoggedInuser(role);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else handleShow(false);
      });
    };
  }, [loggedInuser]);

  const handleDashboard = () => {
    if (loggedInuser == "professional") {
      router.push("/professional-dashboard");
    } else {
      router.push("/client-dashboard");
    }
  };

  return (
    <div className={`${styles.nav} ${show && `${styles.nav__black}`}`}>
      <div
        className={`flex items-center ${props.props} justify-between antialiased`}
      >
        <Logo />

        <div className="hidden md:flex items-center space-x-20 mr-7 text-base font-medium ">
          <Link href="/">
            <h3 className="cursor-pointer">Home</h3>
          </Link>
          <Link href="#aboutUs">
            <h3 className="cursor-pointer">About</h3>
          </Link>
          <Link href="#testimonials">
            <h3 className="cursor-pointer">Testimonials</h3>
          </Link>
          <Link href="#">
            <h3 className="cursor-pointer">Contact Us</h3>
          </Link>
        </div>
        <div className="hidden md:flex  gap-4 text-base font-medium ">
          {user?.id ? (
            <Disclosure as="nav">
              {({ open }) => (
                <>
                  {/* <div className=""> */}
                  <div className="relative flex justify-between h-16">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-0 sm:pr-0">
                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="bg-[#418D89] rounded-full flex text-sm focus:outline-none">
                            <span className="sr-only">Open user menu</span>
                            <MdAccountCircle size={30} fill="#fff" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-secondary ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                                  )}
                                  onClick={handleDashboard}
                                >
                                  Dashboard
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                                  )}
                                  onClick={handleLogout}
                                >
                                  Logout
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  {/* </div> */}
                </>
              )}
            </Disclosure>
          ) : (
            <Link href="/login">
              <h3 className="cursor-pointer text-medium text-[#45BDE6] py-3">
                Sign in
              </h3>
            </Link>
          )}
          <Link href="/register1">
            <Button btnCaption="Sign Up" href="/register1" />
          </Link>
        </div>

        {/* The Humbergur Menu */}
        <div className="md:hidden cursor-pointer z-10" onClick={handleClick}>
          {!nav ? <FaBars size={30} /> : <FaTimes size={30} fill="#00000" />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full bg-slate-100 h-screen text-[#444] text-xl flex flex-col gap-6 justify-center items-center"
          }
        >
          <li>
            <Link href="/">
              <h3 className="cursor-pointer" onClick={handleClick}>
                Home
              </h3>
            </Link>
          </li>

          <li>
            <Link href="#">
              <h3 className="cursor-pointer" onClick={handleClick}>
                About
              </h3>
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleClick}>
              <h3 className="cursor-pointer">Contact Us</h3>
            </Link>
          </li>

          <li onClick={handleClick}>
            {user?.jwt ? (
              <div>
                <div className="mt-2 mb-4">
                  <li>
                    <Link href="/dashboard" onClick={handleClick}>
                      <h3 className="cursor-pointer">Dashboard</h3>
                    </Link>
                  </li>
                </div>
                <Button
                  btnCaption="Logout"
                  onClick={handleLogout}
                  className="cursor-pointer"
                />
              </div>
            ) : (
              <Link
                href="/login"
                onClick={handleClick}
                className="cursor-pointer"
              >
                <Button btnCaption="Sign in" href="SignIn" />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
