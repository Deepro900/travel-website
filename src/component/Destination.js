import React from 'react';
import cox1 from '../assets/cox1.jpg';
import cox2 from '../assets/cox2.jpg';
import thai1 from '../assets/thai1.jpg';
import thai4 from '../assets/thai4.jpg';

import "./DestinationStyles.css";
import DestinationData from './DestinationData';

const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular  Destinations</h1>
            <p>Tours give you the opportunity</p>

            <DestinationData
                className="first-des"
                heading="Cox's Bazar"
                text="Cox's Bazar is a well-known district and town located in southeastern Bangladesh, situated along the Bay of Bengal. It is renowned for hosting one of the longest and most captivating natural sea beaches in the world"
                img1={cox1}
                img2={cox2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Phuket and the Phi Phi Islands"
                text="Phuket and the Phi Phi Islands are two of the most famous and picturesque destinations in Thailand, offering a perfect blend of natural beauty, vibrant culture, and exciting activities for travelers."
                img1={thai1}
                img2={thai4}
            />

        </div>


    );
};

export default Destination;