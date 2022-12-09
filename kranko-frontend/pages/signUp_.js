import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ProfessionalSignUp } from "../src/Components/SignUpComponents";

export default function signUp() {
  return (
    <React.Fragment>
      <div className="bg-white overflow-x-hidden">
        <ProfessionalSignUp />
      </div>
    </React.Fragment>
  );
}
