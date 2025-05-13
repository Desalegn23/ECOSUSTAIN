import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-400 via-white to-green-300 py-20 px-6 relative overflow-hidden">
      {/* Optional floating cloud shapes (decorative white blobs) */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full opacity-10 blur-2xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center md:text-left md:flex-row md:justify-between">
        {/* Text Content */}
        <div className="md:w-3/5">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">
            Empowering a Sustainable Future
          </h1>
          <p className="text-lg text-green-800 mb-6">
            Ecosustain Solutions partners with individuals and organizations to reduce environmental impact through innovative green technologies, eco-friendly consulting, and sustainable development strategies.
          </p>

          <ul className="text-green-900 space-y-2 mb-6 text-left">
            <li>🌱 Eco-Friendly Consulting</li>
            <li>⚡ Renewable Energy Solutions</li>
            <li>📊 Environmental Impact Assessments</li>
            <li>🧪 Green Product Development</li>
          </ul>

          <Link
            to="/contact"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
