import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NewPassword } from "../src/Components/LoginComponent";

export default function newPassword() {
  return (
    <React.Fragment>
      <div className="bg-white overflow-x-hidden">
        <NewPassword />
      </div>
    </React.Fragment>
  );
}
