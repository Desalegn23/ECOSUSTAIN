import React from "react";
import PageLayout from "../Components/PageLayout";
import ServiceCard from "../Components/ServiceCard";
import ecoFriendlyImage from "../assets/images/consulting-service.jpg";
import greenTechImage from "../assets/images/green-tech.jpg";
import impactAssessmentImage from "../assets/images/impact-assessment.webp";
import isoCertificationImage from "../assets/images/iso-certification.png";
import esgReportingImage from "../assets/images/esg-reporting.png";

const services = [
  {
    title: "Eco-Friendly Consulting",
    description: "Helping businesses reduce their carbon footprint through sustainable strategies and operational improvements.",
    icon: "🌿",
    image: ecoFriendlyImage,
    link: "/eco-friendly-consulting"
  },
  {
    title: "Green Technology Solutions",
    description: "Implementing cutting-edge technology solutions that are both effective and environmentally responsible.",
    icon: "💡",
    image: greenTechImage,
    link: "/green-technology-solutions"
  },
  {
    title: "Impact Assessment",
    description: "Comprehensive analysis of your environmental impact and recommendations for improvement.",
    icon: "📊",
    image: impactAssessmentImage,
    link: "/environmental-impact-assessments"
  },
  {
    title: "ESG Reporting",
    description: "Helping you communicate your sustainability efforts through comprehensive ESG reporting.",
    icon: "📈",
    image: esgReportingImage,
    link: "/esg-integration-reporting"
  },
  {
    title: "ISO Certification",
    description: "Guiding businesses through the process of obtaining ISO 14001 and other environmental certifications.",
    icon: "✅",
    image: isoCertificationImage,
    link: "/iso-certification-support"
  },
  {
    title: "Sustainability Training",
    description: "Customized training programs to educate your team on sustainable business practices.",
    icon: "🎓",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    link: "/services/sustainability-training"
  }
];

const Services = () => {
  return (
    <PageLayout
      title="Our Services"
      description="Comprehensive sustainability solutions tailored to your business needs"
    >
      <div className="space-y-12">
        {/* Services Introduction */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Tailored Sustainability Solutions</h2>
          <p className="text-gray-700 leading-relaxed">
            Our comprehensive suite of services is designed to help businesses of all sizes integrate sustainable practices into their operations. From initial assessment to implementation and beyond, we're with you every step of the way on your sustainability journey.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              link={service.link}
            />
          ))}
        </section>

        {/* CTA Section */}
        <section className="bg-green-50 p-8 rounded-xl border border-green-100">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-green-800 mb-3">Ready to Start Your Sustainability Journey?</h3>
            <p className="text-gray-700 mb-6">
              Contact us today to learn how we can help your business become more sustainable and environmentally responsible.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Services;