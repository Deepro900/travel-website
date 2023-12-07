import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import AboutImg from "../assets/8.jpg";
import Footer from '../component/Footer';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero cName="hero-mid"
                heroImg={AboutImg}
                title="contact"

                btnClass="hide"
            />
            <Footer />
        </div>
    );
};

export default Contact;