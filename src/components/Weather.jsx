import React from 'react';

function Weather() {
  const todayWeather = {
    temperature: '25°C',
    condition: 'Sunny',
  };

  const tomorrowWeather = {
    temperature: '22°C',
    condition: 'Partly Cloudy',
  };

  const perfectSeasonCrop = 'Corn';
  
  // Determine plants based on weather condition
  let recommendedPlants = [];
  if (todayWeather.condition === 'Sunny') {
    recommendedPlants = ['Sunflowers', 'Marigolds', 'Lavender'];
  } else if (todayWeather.condition === 'Partly Cloudy') {
    recommendedPlants = ['Tomatoes', 'Peppers', 'Lettuce'];
  }

  return (
    <div>
      {/* Weather Section */}
      <section className="w-full h-[400px] bg-gradient-to-r from-blue-400 to-blue-600 text-white p-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-2">Today's Weather</h1>

        <div className="flex justify-center items-center space-x-6 mt-4">
          {/* Today's Weather */}
          <div className="TODAY">
            <p className="text-2xl">Temperature: {todayWeather.temperature}</p>
            <p className="text-2xl">Condition: {todayWeather.condition}</p>
          </div>

          {/* Tomorrow's Weather */}
          <div className="TOMORROW">
            <p className="text-2xl">Temperature: {tomorrowWeather.temperature}</p>
            <p className="text-2xl">Condition: {tomorrowWeather.condition}</p>
          </div>
        </div>

        {/* Season Information */}
        <div className="SEASON mt-6">
          Perfect season for <span className="SEASON_CROP font-semibold">{perfectSeasonCrop}</span>!
        </div>
      </section>

      {/* Plants in Perfect Weather Section */}
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
