import React from 'react';
import PageLayout from '../Components/PageLayout';

const AboutUs = () => {
  return (
    <PageLayout 
      title="About Us"
      description="Learn about our mission, vision, and the team behind EcoSustain Solutions"
    >
      <div className="space-y-12">
        {/* Mission Section */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At EcoSustain Solutions, we empower businesses to achieve sustainability through innovative strategies and technologies. Our team of experts is dedicated to creating a greener future by integrating environmental, social, and governance (ESG) factors into every aspect of your operations.
          </p>
        </section>

        {/* Our Story */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Our Story</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Founded in 2025, EcoSustain Solutions has grown from a small consultancy into a leading provider of sustainable solutions. Our journey began with a simple yet powerful idea: businesses can thrive while protecting the planet.
            </p>
            <p>
              Over the years, we've partnered with numerous organizations to implement green technologies, develop eco-friendly policies, and foster sustainable growth. Our commitment to excellence and innovation has made us a trusted partner for businesses looking to make a positive environmental impact.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Sustainability",
                description: "We're committed to solutions that benefit both business and the environment.",
                icon: "🌱"
              },
              {
                title: "Innovation",
                description: "We leverage cutting-edge technology to create sustainable solutions.",
                icon: "💡"
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty, transparency, and accountability.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutUs;