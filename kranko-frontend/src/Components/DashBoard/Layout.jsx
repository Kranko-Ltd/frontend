import React from "react";
import Head from "next/head";
import styles from "../../../styles/dashboard.module.css";
import LeftBar from "./LeftBar";
import PageBelt from "./PageBelt";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kranko Jobs Client Dashboard</title>
        <meta name="KrankoJobs Dashboard" content="KrankoJobs Dashboard" />
        <link rel="icon" href="" />
      </Head>
      <div className="bg-secondary bg-opacity-10 w-full h-full">
        <div className="flex">
          {/* <LeftBar />
          {children} */}
          <LeftBar />
          <div className=" flex-1 ">
            <PageBelt />

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout
