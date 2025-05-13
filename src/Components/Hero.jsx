import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/home hero.jfif'; // Replace with your image path

const Hero = () => {
  return (
    <section className="bg-green-50 py-20 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="%234a90e2"/></svg>')`, // Placeholder for actual image
        }}
      >
        {/* Overlay to enhance text readability */}
        <div className="absolute inset-0 bg-green-800 opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Empowering a Sustainable Future
          </h1>
          <p className="text-lg text-white mb-6">
            Ecosustain Solutions partners with individuals and organizations to reduce environmental impact through innovative green technologies, eco-friendly consulting, and sustainable development strategies.
          </p>

          <ul className="text-white space-y-2 mb-6 text-left">
            <li>🌱 Eco-Friendly Consulting</li>
            <li>⚡ Renewable Energy Solutions</li>
            <li>📊 Environmental Impact Assessments</li>
            <li>🧪 Green Product Development</li>
          </ul>

          <Link
            to="/contact"
            className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get In Touch
          </Link>
        </div>

        {/* Optional Image or Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={hero} 
            alt="Sustainable Future"
            className="w-full max-w-md rounded-lg shadow-lg hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;