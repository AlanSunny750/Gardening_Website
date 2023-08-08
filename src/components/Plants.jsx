import Navbar from './Navbar.jsx'
import { useState } from 'react';
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
    // const plants = [[{plantName:'tomato'},{aboutPlant:'tomatoes are red and some idiots think they are fruits'}]]
    
    const [allPlants, setAllPlants] = useState('')

    // setInterval(() => {
    //     setAllPlants(allPlants + '<h1> hello man </h1>')
    // }, 1000);
    return(
        <>
        <div 
        className="HEAD 
        flex flex-col w-full p-[20px] mt-16 text-[16px] 
        text-center border border-b-4 border-black font-extralight">

            <h1 
            className='
            text-[44px] font-semibold'
            > Plants </h1>

            <p>There are a variety of plants to choose from, for different seasons and different weather conditions</p>
            <h1> These plants are being rendered from a database where all of them are stored.</h1>
        </div> 

        <div>
            {allPlants}
        </div>
        </>
    )
}