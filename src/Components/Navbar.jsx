import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-4 sm:px-6 lg:px-12 py-3">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative h-14 w-14 sm:h-16 sm:w-16">
            <img
              src={logo}
              alt="Ecosustain Logo"
              className="h-full w-full object-cover rounded-full border-2 border-emerald-300 p-0.5 transition-all duration-300 hover:shadow-lg hover:border-emerald-200"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-lg font-semibold">ECOSUSTAIN</span>
            <span className="text-emerald-300 text-xs sm:text-sm font-semibold">SOLUTIONS</span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* Navigation Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-20 left-0 w-full md:w-auto bg-green-700 md:bg-transparent z-50`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            {navItems.map((item) => (
              <li key={item.path} className="text-center md:text-left">
                <Link
                  to={item.path}
                  className={`block px-4 py-2 rounded-md transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-green-600 text-white font-semibold'
                      : 'text-white hover:bg-green-600 hover:text-white'
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
}

export default Navbar;