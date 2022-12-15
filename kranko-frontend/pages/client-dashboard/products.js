import React, { useState, useEffect, useMemo } from "react";
import { AUTH_TOKEN } from "../../src/Components/constant";

import styles from "../../styles/dashboard.module.css";
import { BsPerson } from "react-icons/bs";
import Layout from "../../src/Components/DashBoard/Layout";
import { parseCookies } from "nookies";
import ProductsPage from "../../src/Components/DashBoard/ProductsPage";

export default function products() {
  return (
    <div className="flex-1 mb-8 mr-3 ml-2 mt-2">
      <ProductsPage />
    </div>
  );
}

products.getLayout = function getLayout(products) {
  return <Layout>{products}</Layout>;
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
