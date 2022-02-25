import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Jumbotron from '../parts/Jumbotron'
import Pricing from '../parts/Pricing'
import Testimonial from '../parts/Testimonial'
import Navbar from "../components/Navbar";
import Contact from '../parts/Contact';
import Footer from '../parts/Footer';
import MobileMenu from '../components/MobileMenu';

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position)
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return() => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <div className='relative overflow-hidden'>
      <Head>
        <title>Ecodu.id - STAN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${scrollPosition > 150 ? "translate-y-24" : ""} fixed -top-24 w-full z-20 bg-additional-color-200 shadow transition ease-in-out`}>
        <Navbar handleToggle={handleToggle} />
      </div>
      <div className='bg-hero bg-opacity-25 bg-no-repeat bg-cover'>
        <Navbar handleToggle={handleToggle} />
        <Jumbotron />
      </div>
      <Pricing />
      <div className="mt-56 mb-24 py-20 bg-primary-color">
          <Testimonial />
      </div>
      <div className='relative'>
        <Contact />
      </div>
      <div className="bg-additional-color-100 pt-24">
        <Footer />
      </div>
      <MobileMenu toggle={toggle} handleToggle={handleToggle} />
    </div>
  )
}
