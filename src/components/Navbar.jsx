import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  return (
    <nav className="navbar">
      <div className="logo">🌤️ Sky-Viewer</div>
      <div className="right-icons">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌞' : '🌙'}
        </button>
        <span className="account">👤 Account</span>
      </div>
    </nav>
  );
};

export default Navbar;
