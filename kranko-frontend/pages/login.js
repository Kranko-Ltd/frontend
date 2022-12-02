import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { LoginForm } from "../src/Components/LoginComponent";

export default function login() {
  return (
    <React.Fragment>
      <div className="bg-white overflow-x-hidden">
        <LoginForm />
      </div>
    </React.Fragment>
  );
}
