import React from 'react';
import "./TripStyles.css";
import TripData from './TripData';
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";


const Trip = () => {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover Uniqune
                destination using google map
            </p>
            <div className="tripCard">
                <TripData
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="Embark on a captivating 10-day Indonesian adventure, starting in Bali with visits to Ubud's Monkey Forest, Tegallalang Rice Terraces, and the vibrant art scene. Head to the Gili Islands for two days of beach bliss and snorkeling. Fly to Yogyakarta to explore the ancient wonders of Borobudur and Prambanan temples, along with the cultural richness of the Kraton. Conclude your journey with a flight to Labuan Bajo, where Komodo National Park awaits, offering encounters with Komodo dragons, snorkeling in Pink Beach, and the serene beauty of Kanawa Island. Immerse yourself in Indonesia's diverse landscapes, culture, and natural wonders, creating memories to last a lifetime."
                />
                <TripData
                    image={Trip2}
                    heading="Trip in Malaysia"
                    text="Embark on a vibrant 7-day tour of Malaysia, commencing in Kuala Lumpur, where the iconic Petronas Towers and Batu Caves beckon. Explore the cultural melting pot of Penang, savoring its renowned street food and visiting historical sites in George Town. Immerse yourself in the lush landscapes of Cameron Highlands, known for tea plantations and cool climate. Journey to Langkawi for pristine beaches and cable car adventures, and then experience the UNESCO-listed Malacca with its rich history and vibrant street art. This Malaysia tour promises a seamless blend of urban sophistication, cultural exploration, and natural beauty.."
                />
                <TripData
                    image={Trip3}
                    heading="Trip in France"
                    text="Embark on a captivating 8-day tour of France, starting in Paris with iconic landmarks like the Eiffel Tower and Louvre Museum. Explore the charming streets of Montmartre and cruise the Seine River. Journey to the picturesque Provence region, known for lavender fields and historic towns like Avignon. Continue to the French Riviera, enjoying the glamour of Nice and the artistic allure of Saint-Paul-de-Vence. Conclude your tour in the enchanting city of Lyon, savoring exquisite cuisine and exploring its UNESCO-listed Old Town. This French escapade promises a delightful blend of cultural richness, scenic beauty, and culinary delights."
                />
            </div>
        </div>
    );
};

export default Trip;