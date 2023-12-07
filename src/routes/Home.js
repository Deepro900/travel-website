import React from 'react';
import Destination from '../component/Destination';
import Footer from '../component/Footer';
import Hero from '../component/Hero';
import Navbar from '../component/Navbar';
import Trip from '../component/Trip';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero cName="hero"
                heroImg="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Your Journey Story"
                text="choose Your Favourite Destination"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
            <Footer />
        </div>
    );
};

export default Home;