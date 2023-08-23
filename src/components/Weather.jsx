import React, { useState, useEffect } from 'react';

function Weather() {
  const [city, setCity] = useState('london');
  const [weather, setWeather] = useState({});

  const config = {
   key: '318239f4451f31c089926250a80b0099',
   URL: 'https://api.openweathermap.org/data/2.5/'
  }
  
  useEffect(() => {

    fetch(`${config.URL}weather?q=${city}&appid=${config.key}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const celsius = parseInt(data.main.temp - 273.15);
        const fahrenheit = parseInt(celsius * 9/5 + 32)
        setWeather({
          celsius,
          fahrenheit,
          condition: data.weather[0].main,
          humidity: data.main.humidity + '%',
          pressure: data.main.pressure + ' hPa',
          wind: data.wind.speed + ' m/s ' + ' - ' +data.wind.deg + ' deg' 
        })
        console.log(weather)
      })
      .catch(err => console.log(err));

  }, [city]); // <-- run every time the 'city' value updates

  
  
  const perfectCrop = 'Corn';

  let recomended = [];
  
  if (weather.condition === 'Sunny') {
    recomended = [
      'Sunflowers',
      'Marigolds',
      'Lavender'
    ];
  } 
  else if (weather.condition === 'Partly Cloudy') {
    recomended = [
      'Tomatoes',
      'Peppers',
      'Lettuce'
    ];
  } 
  else {
    recomended = [
    'Kale', 
    'Broccoli', 
    'Brussels Sprouts'
    ];
  }
  

  return (
    <div>
      <section 
      className="w-full h-[400px] bg-gradient-to-r from-blue-400
       to-blue-600 text-white p-8 flex flex-col justify-center items-center">
        
        <h1
         className="text-4xl font-bold mb-2"
         >Today's Weather</h1>

      <input 
      className='input mt-4 text-black p-1'
      type="text"
      placeholder='Current city'
      onChange={(e) => setCity(e.target.value)}
      />
      <p className='mt-4'>{city}</p>

        <div 
        className="WEATHER flex justify-center items-center space-x-6 mt-4">
          <div className="CELSIUS">
            <p className="text-2xl"> {weather.celsius}&deg;C </p>
          </div>

        
          <div className="FAHRENHEIT">
            <p className="text-2xl">{weather.fahrenheit}&deg;F</p>
          </div>
        </div>

          <details className='mt-8 cursor-pointer' >
          <div className="MORE">
              <p>Pressure: <b> {weather.pressure} </b></p>
              <p>Humidity: <b> {weather.humidity} </b></p>
              <p>Wind: <b> {weather.wind} </b></p>
            </div>

          </details>

          {/* season info */}
          <div className="SEASON mt-6">
            Perfect season for <span className="SEASON_CROP font-semibold">{perfectCrop}</span>!
          </div>
          <p className="text-2xl">Condition: {weather.condition}</p>
      </section>

      <section 
      className="bg-green-100 p-10 text-center">
        <h2 
        className="text-4xl font-semibold mb-4"
        >Plants in Perfect Weather</h2>
        <p 
        className="text-lg mb-6"
        >Discover plants that thrive in today's weather conditions:</p>
        <div 
        className="grid grid-cols-3 gap-8">
          {recomended.map((plant, index) => (
            <div 
            key={index} 
            className="bg-yellow-200 cursor-pointer p-6 rounded-lg
             transition duration-300 transform hover:scale-105 hover:shadow-lg"
             >
              <h3 
              className="text-2xl font-semibold mb-2"
              >{plant}</h3>
              <p 
              className="text-lg">
                Learn how to grow and care for {plant.toLowerCase()} in your garden for optimal results.
              </p>
            </div> ))}

        </div>
      </section>

    </div>
  );
}

export default Weather;
