// Components/ServiceCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ title, description, icon, link }) {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-green-50 hover:-translate-y-2 transition duration-300 transform border border-gray-200"
    >
      <div className="flex items-center mb-4">
        <span
          className="text-4xl mr-4 hover:text-green-700 hover:rotate-12 transition duration-300 transform"
          style={{ display: 'inline-block' }}
        >
          {icon}
        </span>
        <h2 className="text-xl font-semibold text-green-700">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-right">
        <Link
          to={`/services/${title.toLowerCase().replace(/&/g, 'and').replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
          
        >
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;