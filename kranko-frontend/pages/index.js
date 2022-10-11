import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import { Navbar,HeroSection,CallToAction,AboutUs,Mission,Footer, Testimonials} from '../src/Components/mainPageComponents'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <React.Fragment>
      <div className="bg-blue-300">
        <Navbar/>
        <HeroSection/>
        <AboutUs/>
        <Mission/>
        <Testimonials/>
        <CallToAction/>
        <Footer/>


        
      </div>
    </React.Fragment>
  )
}
