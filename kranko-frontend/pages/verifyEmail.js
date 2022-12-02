import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { VerifyEmail } from "../src/Components/LoginComponent";

export default function verifyEmail() {
  return (
    <React.Fragment>
      <div className="bg-white overflow-x-hidden">
        <VerifyEmail />
      </div>
    </React.Fragment>
  );
}
