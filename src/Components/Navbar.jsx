import React, { useState } from 'react';
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

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 relative">
        
        {/* Logo + Brand */}
        <Link to="/" onClick={closeMenu} className="flex flex-col items-center space-y-1">
          <img
            src={logo}
            alt="Ecosustain Logo"
            className="h-16 w-16 object-contain"
          />
          {/* <span className="text-white text-sm font-semibold">Ecosustain</span> */}
        </Link>

        {/* Hamburger Icon */}
        <button className="block md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* Nav Links */}
        <ul
          className={`${
            isOpen
              ? 'absolute top-full left-0 w-full flex flex-col bg-green-700 p-4 space-y-4 z-20'
              : 'hidden'
          } md:flex md:flex-row md:space-x-8 md:items-center md:static md:w-auto md:bg-transparent`}
        >
          {navItems.map((item) => (
            <li key={item.path} className="text-lg">
              <Link
                to={item.path}
                className={`block transition-colors duration-200 hover:text-green-300 ${
                  location.pathname === item.path ? 'font-semibold underline' : ''
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
