import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Lightbulb, BarChart2 } from "lucide-react";
import Hero from "../Components/Hero";

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "Sustainable Solutions",
    description: "Innovative approaches that reduce environmental impact while driving business growth."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-green-600" />,
    title: "Expert Guidance",
    description: "Industry-leading expertise to navigate complex sustainability challenges."
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-green-600" />,
    title: "Measurable Impact",
    description: "Data-driven strategies that deliver tangible environmental and financial results."
  }
];

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Solutions</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
