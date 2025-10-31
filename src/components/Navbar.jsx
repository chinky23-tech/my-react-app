import { useState } from 'react';
import './Navbar.css'; // Optional CSS file

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <a href="/">YourLogo</a>
        </div>

        {/* Navigation Items */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          
          {/* Dropdown Menu */}
          <li className="nav-item dropdown">
            <button 
              className="dropdown-toggle"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
            >
              Apps ▼
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu" aria-label="Apps submenu">
                <li><a href="/calendar" className="dropdown-link">Calendar</a></li>
                <li><a href="/chat" className="dropdown-link">Chat</a></li>
                <li><a href="/email" className="dropdown-link">Email</a></li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;