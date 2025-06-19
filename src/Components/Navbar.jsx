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
        <Link to="/" onClick={closeMenu} className="relative flex items-center space-x-3">
          <div className="relative h-16 w-16">
            <img
              src={logo}
              alt="Ecosustain Logo"
              className="h-full w-full object-cover rounded-full border-2 border-emerald-300 p-0.5 transition-all duration-300 hover:shadow-lg hover:border-emerald-200"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-lg font-semibold">ECOSUSTAIN</span>
            <span className="text-emerald-300 text-sm font-semibold">SOLUTIONS</span>
          </div>
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
            <li key={item.path} className="relative text-lg">
              <Link
                to={item.path}
                className={`block px-2 py-1 transition-colors duration-200 rounded-md ${
                  location.pathname === item.path
                    ? 'bg-green-500 text-white font-semibold'
                    : 'text-white hover:bg-green-500 hover:text-white'
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