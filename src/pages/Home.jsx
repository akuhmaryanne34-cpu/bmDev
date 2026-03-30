import React from 'react'
import styles from "./Home.module.css";
import Navbar from '../components/navbar/NavBar';
import Hero from '../components/hero/Hero';
import Marquee from '../components/marquee/Marquee';
import Services from '../components/services/Services';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
    </div>
  )
}

export default Home
