import React from 'react';
import dayjs from 'dayjs';
import './WeatherCard.css'; 

const WeatherCard = ({ data }) => {
  const { location, current } = data;

  const temperature = Math.round(current.temp_c);
  const feelsLike = Math.round(current.feelslike_c);
  const humidity = current.humidity;
  const pressure = current.pressure_mb;
  const windSpeed = current.wind_kph;
  const weatherMain = current.condition.text;
  const weatherIcon = current.condition.icon;
  const uvIndex = current.uv;
  const formattedDate = dayjs(location.localtime).format('dddd, MMMM D, YYYY');

  return (
    <div className="weather-card">
      <div className="top-section">
        <div>
          <h1 className="city-name">{location.name}</h1>
          <p className="date">{formattedDate}</p>
          <p className="condition">{weatherMain}</p>
        </div>
        <div className="temp-section">
          <img
            src={weatherIcon}
            alt="weather icon"
            className="weather-icon"
          />
          <div>
            <h2 className="temperature">{temperature}°C</h2>
            <p className="feels-like">Feels like: {feelsLike}°C</p>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="info-card">
          <p>🌫 Humidity</p>
          <p className="value">{humidity}%</p>
        </div>
        <div className="info-card green">
          <p>☀️ UV Index</p>
          <p className="value">{uvIndex}</p>
        </div>
        <div className="info-card purple">
          <p>🌬 Wind</p>
          <p className="value">{windSpeed} kph</p>
        </div>
        <div className="info-card brown">
          <p>🧭 Pressure</p>
          <p className="value">{pressure} mb</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
