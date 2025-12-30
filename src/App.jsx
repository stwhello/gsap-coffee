import React from 'react'
import gsap from "gsap";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import  { ScrollTrigger } from "gsap/all";
import MessageSection from "./sections/MessageSection.jsx";
import FlavorSection from "./sections/FlavorSection.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <MessageSection />
            <FlavorSection />
        </main>
    )
}
export default App
