// Components/ServiceCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function ServiceCard({ title, description, icon, image, link }) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-2xl font-bold text-[#2D5A3D]">{title}</h3>
        </div>
        
        <p className="text-gray-700 mb-6">{description}</p>
        
        <div className="mt-auto">
          <Link
            to={link}
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Learn More
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;