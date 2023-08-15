import React, { useState, useEffect } from 'react';

function Weather() {
  const [city, setCity] = useState('london'); // set a default city
  const [weather, setWeather] = useState({});

  const API_KEY = '318239f4451f31c089926250a80b0099';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

  useEffect(() => {
    fetch(`${BASE_URL}weather?q=${city}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
          setWeather(data);
          console.log(data);
      })
      .catch(err => console.log(err));
  }, [city]); // This fetch will run every time the 'city' state changes

  const perfectSeasonCrop = 'Corn';

  let recommendedPlants = [];
  
  if (weather?.weather?.[0]?.main === 'Sunny') {
    recommendedPlants = ['Sunflowers', 'Marigolds', 'Lavender'];
  } else if (weather?.weather?.[0]?.main === 'Partly Cloudy') {
    recommendedPlants = ['Tomatoes', 'Peppers', 'Lettuce'];
  } else if (weather?.weather?.[0]?.main === 'Clouds') {
    recommendedPlants = ['Kale', 'Broccoli', 'Brussels Sprouts'];
  }
  

  return (
    <div>
      <section className="w-full h-[400px] bg-gradient-to-r from-blue-400 to-blue-600 text-white p-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-2">Today's Weather</h1>

      <input 
      className='input'
      type="text"
      placeholder='Current city'
      onChange={(e) => setCity(e.target.value)}
      />

        <div className="flex justify-center items-center space-x-6 mt-4">
          {/*  Weather today */}
          <div className="TODAY">
            <p className="text-2xl">Temperature: {weather?.main?.temp}</p>
            <p className="text-2xl">Condition: {weather?.weather?.[0]?.main}</p>
          </div>

          {/*  Weather tomorrow */}
          {/* i kept this section but remember your not fetching tomorrow's weather with the current api call */}
          <div className="TOMORROW">
            <p className="text-2xl">Temperature: {weather?.main?.temp}</p>
            <p className="text-2xl">Condition: {weather?.weather?.[0]?.main}</p>
          </div>
        </div>

        {/* Season Information */}
        <div className="SEASON mt-6">
          Perfect season for <span className="SEASON_CROP font-semibold">{perfectSeasonCrop}</span>!
        </div>
      </section>

      <section className="bg-green-100 p-10 text-center">
        <h2 className="text-4xl font-semibold mb-4">Plants in Perfect Weather</h2>
        <p className="text-lg mb-6">Discover plants that thrive in today's weather conditions:</p>
        <div className="grid grid-cols-3 gap-8">
          {recommendedPlants.map((plant, index) => (
            <div key={index} className="bg-yellow-200 cursor-pointer  p-6 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{plant}</h3>
              <p className="text-lg">
                Learn how to grow and care for {plant.toLowerCase()} in your garden for optimal results.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Weather;
