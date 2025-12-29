import React from 'react'
import gsap from "gsap";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import  { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <Navbar />
            <HeroSection />
        </main>
    )
}
export default App
