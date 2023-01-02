import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/HomePages/Banner'
import Contact from '../components/HomePages/Contact'
import Features from '../components/HomePages/Features'
import HomeAbout from '../components/HomePages/HomeAbout'
import Projects from '../components/HomePages/Projects'
import Services from '../components/HomePages/Services'
import Success from '../components/HomePages/Success'
import Testimonial from '../components/HomePages/Testimonial'
import styles from '../styles/Home.module.css'
import Button from '../utilities/Button'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Agrifint | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
        <Banner />
        <HomeAbout />
        
        <Services />
        <Features />

        <Testimonial />
        <Success />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
