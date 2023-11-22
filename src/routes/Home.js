import React from 'react';
import Hero from '../component/Hero';
import Navbar from '../component/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero cName="hero" heroImg="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            title="Your Journey Story"
        </div>
    );
};

export default Home;