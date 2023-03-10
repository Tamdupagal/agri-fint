import React from 'react'
import Calculator from "../components/HomePages/Calculator"
import Head from 'next/head'
const returnCalculator = () => {
  return (
    <div>
      <Head>
        <title> Agrifint | Return Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      
      <div className='lg:pt-32 pt-16'>
      <Calculator/>
      </div>
      </div>
  )
}

export default returnCalculator
