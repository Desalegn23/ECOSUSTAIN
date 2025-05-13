import React from 'react';
import Hero from '../Components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* You can add more sections below */}
      <section className="relative h-96 bg-blue-100 flex items-center justify-center text-center">
  <div className="absolute inset-0 bg-[url('/images/home-hero.jpg')] bg-cover bg-center opacity-30"></div>
  <div className="relative z-10">
    <h1 className="text-4xl font-bold text-green-800">Sustainable Solutions for a Greener Future</h1>
    <p className="mt-2 text-xl text-green-900 max-w-3xl mx-auto">
      Empower your business with eco-friendly strategies and technologies that drive sustainability and success.
    </p>
    <div className="mt-6 flex justify-center space-x-4">
      <Link to="/services" className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
        Explore Our Services
      </Link>
      <Link to="/contact" className="bg-green-700 text-white font-semibold px-6 py-3 rounded shadow hover:bg-green-800 transition">
        Contact Us
      </Link>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
