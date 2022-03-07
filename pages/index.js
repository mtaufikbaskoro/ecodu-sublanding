import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Jumbotron from '../parts/Jumbotron'
import Pricing from '../parts/Pricing'
import Testimonial from '../parts/Testimonial'
import Navbar from "../components/Navbar";
import Contact from '../parts/Contact';
import Footer from '../parts/Footer';
import MobileMenu from '../components/MobileMenu';
import StanPage from './stan'

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
    <><StanPage /></>
  )
}
