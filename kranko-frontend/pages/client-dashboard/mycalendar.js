import React, { useState, useEffect, useMemo } from "react";
import { AUTH_TOKEN } from "../../src/Components/constant";

import styles from "../../styles/dashboard.module.css";
import { BsPerson } from "react-icons/bs";
import Layout from "../../src/Components/DashBoard/Layout";
//import DevMsg from "../../src/Components/DashBoard/DevMsg";
import { parseCookies } from "nookies";
import PageBelt from "../../src/Components/DashBoard/PageBelt";
import DashboardPage from "../../src/Components/DashBoard/DashboardPage";
import MyCalendar from "../../src/Components/DashBoard/MyCalendar";

export default function mycalendar() {
  return (
    <div className="flex-1 mb-8 mr-3 ml-2 mt-2">
      <MyCalendar />
    </div>
  );
}

mycalendar.getLayout = function getLayout(mycalendar) {
  return <Layout>{mycalendar}</Layout>;
};

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
