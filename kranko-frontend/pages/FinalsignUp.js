import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FileUpload } from "../src/Components/SignUpComponents";

export default function FinalsignUp() {
  return (
    <React.Fragment>
      <div className="bg-white overflow-x-hidden">
        <FileUpload />
      </div>
    </React.Fragment>
  );
}
