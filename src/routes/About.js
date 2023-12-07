import React from 'react';
import Hero from '../component/Hero';
import Navbar from '../component/Navbar';
import AboutImg from "../assets/night.jpg";
import Footer from '../component/Footer';
import AboutUs from '../component/AboutUs';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero cName="hero-mid"
                heroImg={AboutImg}
                title="About"

                btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default About;