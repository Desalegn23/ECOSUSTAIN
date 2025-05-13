import React from "react";
import ServiceCard from "../Components/ServiceCard";


const services = [
  {
    title: "Eco-Friendly Consulting",
    description: "Helping businesses reduce their carbon footprint through sustainable strategies.",
    icon: "🌿",
    link: "/services/eco-friendly-consulting",
  },
  // {
  //   title: "Sustainable Product Development",
  //   description: "Designing and developing products with sustainability in mind.",
  //   icon: "🔧",
  //   link: "/services/sustainable-product-development",
  // },
  {
    title: "Green Technology Solutions",
    description: "Implementing tech solutions that are both effective and environmentally responsible.",
    icon: "💡",
    link: "/services/green-technology-solutions",
  },
  {
    title: "Environmental Impact Assessments",
    description: "Analyzing and reporting the ecological impact of projects and operations.",
    icon: "📊",
    link: "/services/environmental-impact-assessments",
  },
  {
    // title: "ISO 14001 & 45001 Certification Support",
    title: "ISO Certification Support",
    description: "Guiding organizations through the certification process for environmental and occupational health and safety management systems.",
    icon: "📜",
    link: "/services/iso-certification-support",
  },
  {
    title: "ESG Integration & Reporting",
    description: "Helping companies integrate Environmental, Social, and Governance (ESG) factors into their business strategies and reporting.",
    icon: "📈",
    link: "/services/esg-integration-and-reporting",
  },
];

function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-4">Our Services</h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Explore our range of eco-friendly services designed to promote sustainability and environmental responsibility.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            link ={service.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
