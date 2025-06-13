import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

import './index.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <ThemeProvider>
      <div className="bg-[#0f172a] min-h-screen flex flex-col text-white">
        <Navbar />
        <div className="p-6 flex-grow">
          <SearchBar setWeatherData={setWeatherData} />
          {weatherData && (
            <>
              <WeatherCard data={weatherData} forecast={weatherData.forecast} />
              {/* <HourlyForecast hourlyData={weatherData.forecast?.forecastday[0]?.hour} /> */}
            </>
          )}
        </div>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
