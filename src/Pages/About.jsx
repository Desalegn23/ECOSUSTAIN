import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* About Us Section */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-green-700 mb-4">About Us</h2>
        <p className="text-gray-700 mb-6">
          At EcoSustain Solutions, we are dedicated to helping businesses achieve sustainability through innovative strategies and technologies. Our team of experts is passionate about creating a greener future by integrating environmental, social, and governance (ESG) factors into every aspect of your operations.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="bg-green-50 p-8 rounded-lg shadow-md mb-12">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Story</h3>
        <p className="text-gray-700 mb-6">
          Founded in 2010, EcoSustain Solutions has grown from a small consultancy into a leading provider of sustainable solutions. Our journey began with a simple yet powerful idea: businesses can thrive while protecting the planet. Over the years, we've partnered with numerous organizations to implement green technologies, develop eco-friendly policies, and foster sustainable growth.
        </p>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Expertise</h3>
        <p className="text-gray-700 mb-6">
          Our team comprises environmental scientists, engineers, and consultants with extensive experience in various sectors, including energy, manufacturing, transportation, and urban development. We leverage cutting-edge technologies and best practices to deliver customized solutions that meet your unique needs.
        </p>
      </section>

      {/* Our Mission and Vision Section */}
      <section className="bg-green-50 p-8 rounded-lg shadow-md mb-12">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-6">
            To empower businesses to thrive sustainably by providing customized green solutions that integrate environmental, social, and governance (ESG) factors into every aspect of their operations.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Vision</h3>
          <p className="text-gray-700 mb-6">
            A world where businesses operate in harmony with the environment, ensuring a sustainable future for all. We envision a future where economic growth and environmental stewardship go hand in hand.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Values</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>Integrity:</strong> We act with honesty and transparency in all our interactions.</li>
          <li><strong>Innovation:</strong> We continuously seek new and better ways to achieve sustainability.</li>
          <li><strong>Collaboration:</strong> We believe in working together with our clients, partners, and communities.</li>
          <li><strong>Excellence:</strong> We strive for the highest standards in everything we do.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;