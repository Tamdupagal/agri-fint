import React from 'react'
import Head from 'next/head';
import About from '../components/AboutPages/About'
const about = () => {
  return (
    <div>
      <Head>
        <title> Agrifint | About Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <About />
    </div>
  );
}

export default about
