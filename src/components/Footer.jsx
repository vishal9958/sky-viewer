import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    © {new Date().getFullYear()} Sky Viewer. Powered by OpenWeatherMap.
  </footer>
);

export default Footer;
