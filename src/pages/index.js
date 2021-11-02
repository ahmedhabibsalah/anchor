import React from 'react'
import { useState } from 'react'
import About from '../components/About'
import { homeObjOne } from '../components/About/Data'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import Technologies from '../components/Technologies'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Hero />
        <About {...homeObjOne}/>
        <Services />
        <Technologies />
        <Footer />
        </>
    )
}

export default Home
