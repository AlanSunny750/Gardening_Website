import Navbar from './Navbar.jsx'
import { useEffect, useState } from 'react';
function Plants() {

    return(
        <>
        <Navbar />
        <PlantsSection />
        </>
    )
}

export default Plants


    function PlantsSection() {
        const plantData = [
            {
                name: 'Rose',
                about: 'A symbol of love and beauty.',
                imageSrc: './src/assets/images/Rose.jpg',
            },
            {
                name: 'Lily',
                about: 'Known for its elegance and fragrance.',
                imageSrc: './src/assets/images/Lily.jpg',
            },
            {
                name: 'Sunflower',
                about: 'Bright and cheerful flowers that follow the sun.',
                imageSrc: './src/assets/images/Sunflower.jpg',
            },
            {
                name: 'Tulip',
                about: 'Popular spring flowers with a wide range of colors.',
                imageSrc: './src/assets/images/Tulip.jpg',
            },
            {
                name: 'Daffodil',
                about: 'Yellow flowers that herald the arrival of spring.',
                imageSrc: './src/assets/images/Daffodil.jpg',
            },
            {
                name: 'Orchid',
                about: 'Exotic flowers with intricate shapes and vibrant colors.',
                imageSrc: './src/assets/images/Orchid.jpg',
            },
            {
                name: 'Carnation',
                about: 'Sweet-smelling flowers often used for special occasions.',
                imageSrc: './src/assets/images/Carnation.jpg',
            },
            {
                name: 'Daisy',
                about: 'Simple and cheerful flowers with a classic look.',
                imageSrc: './src/assets/images/Daisy.jpg',
            },
            {
                name: 'Hibiscus',
                about: 'Large, showy flowers with tropical appeal.',
                imageSrc: './src/assets/images/Hibiscus.jpg',
            },
            {
                name: 'Lavender',
                about: 'Fragrant flowers often used for aromatherapy and relaxation.',
                imageSrc: './src/assets/images/Lavender.jpg',
            },
            {
                name: 'Peony',
                about: 'Elegant and lush flowers with a romantic charm.',
                imageSrc: './src/assets/images/Peony.jpg',
            },
            {
                name: 'Hydrangea',
                about: 'Clusters of flowers that change color based on soil pH.',
                imageSrc: './src/assets/images/Hydrangea.jpg',
            },
            // Add more plant objects with name, about, and imageSrc properties
        ];
    
        const [currentPlantIndex, setCurrentPlantIndex] = useState(0);
        const [currentPlant, setCurrentPlant] = useState(plantData[currentPlantIndex]);
    
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentPlantIndex(prevIndex => (prevIndex + 1) % plantData.length);
            }, 1000);
    
            return () => {
                clearInterval(interval);
            };
        }, [currentPlantIndex]);
    
        useEffect(() => {
            setCurrentPlant(plantData[currentPlantIndex]);
        }, [currentPlantIndex]);
    
        return (
            <>
                <div className="HEAD flex flex-col w-full p-[20px] mt-16 text-[16px] text-center border border-b-4 border-black font-extralight">
                    <h1 className="text-[44px] font-semibold">Plants</h1>
                    <p>There are a variety of plants to choose from, for different seasons and different weather conditions</p>
                    <h1>These plants are being rendered from a database where all of them are stored.</h1>
                </div>
    
                <div className="plantsContainer w-[80%] mx-auto mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
                        {plantData.map((plant, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                                <img src={plant.imageSrc} alt={plant.name} className="w-full h-40 object-cover mb-2" />
                                <h3 className="text-lg font-semibold mb-1">{plant.name}</h3>
                                <p className="text-gray-500">{plant.about}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }

