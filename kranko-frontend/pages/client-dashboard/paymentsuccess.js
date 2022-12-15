import React, { useState, useEffect, useMemo } from "react";
import { AUTH_TOKEN } from "../../src/Components/constant";

import styles from "../../styles/dashboard.module.css";
import { BsPerson } from "react-icons/bs";
import Layout from "../../src/Components/DashBoard/Layout";
import { parseCookies } from "nookies";
import PageBelt from "../../src/Components/DashBoard/PageBelt";
import DashboardPage from "../../src/Components/DashBoard/DashboardPage";
import PaymentSuccess from "../../src/Components/DashBoard/PaymentSuccess";
export default function paymentsuccess() {

  return (
    <div className="flex-1 mb-8 mr-3 ml-2 mt-2">
      <PaymentSuccess />
    </div>
  );
}

paymentsuccess.getLayout = function getLayout(paymentsuccess) {
  return <Layout>{paymentsuccess}</Layout>;
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
