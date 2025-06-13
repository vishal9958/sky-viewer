import React, { useState } from 'react';
import './SearchBar.css';
import axios from 'axios';

const API_KEY = '7e2e69cbfa794aa788381009250906';

const SearchBar = ({ setWeatherData }) => {
  const [city, setCity] = useState('');

  const fetchWeather = async () => {
    if (!city) return;

    try {
      console.log('Fetching weather for city:', city);

      // WeatherAPI returns current weather in one step
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );

      console.log('WeatherAPI response:', response.data);

      // You can directly set response.data
      setWeatherData(response.data);
    } catch (e) {
      console.error('Error fetching weather data:', e);
      alert('City not found or API error');
    }
  };

  return (
    <div className="search-bar">
      <input
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Search for a city..."
      />
      <button onClick={fetchWeather}>🔍</button>
    </div>
  );
};

export default SearchBar;
