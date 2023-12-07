import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import AboutImg from "../assets/2.jpg";
import Footer from '../component/Footer';
import Trip from '../component/Trip';
const service = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Hero cName="hero-mid"
                heroImg={AboutImg}
                title="Servive"

                btnClass="hide"
            />
            <Trip />
            <Footer />
        </div>
    );
};

export default service;