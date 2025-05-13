import React from "react";
import Hero from "../Components/Hero";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* You can add more sections below */}
  <section className="relative min-h-[28rem] bg-gradient-to-b from-blue-100 via-white to-green-100 flex items-center justify-center text-center overflow-hidden">
      {/* Optional decorative cloud shapes */}
      <div className="absolute top-8 left-8 w-40 h-40 bg-white rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-8 right-10 w-32 h-32 bg-white rounded-full opacity-10 blur-2xl animate-pulse"></div>

      <div className="relative z-10 px-6">
        <h1 className="text-4xl font-bold text-green-800">
          Sustainable Solutions for a Greener Future
        </h1>
        <p className="mt-2 text-xl text-green-900 max-w-3xl mx-auto">
          Empower your business with eco-friendly strategies and technologies
          that drive sustainability and success.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/services"
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            Explore Our Services
          </Link>
          <Link
            to="/contact"
            className="bg-green-700 text-white font-semibold px-6 py-3 rounded shadow hover:bg-green-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
