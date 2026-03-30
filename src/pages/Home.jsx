import React from 'react'
import styles from "./Home.module.css";
import Navbar from '../components/navbar/NavBar';
import Hero from '../components/hero/Hero';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
