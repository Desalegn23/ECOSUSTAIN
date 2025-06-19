import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';
import consultingImage from '../../assets/images/consulting-service.jpg';

const EcoFriendlyConsulting = () => {
  const serviceData = {
    title: "Eco-Friendly Consulting",
    description: "Empowering businesses to thrive sustainably through custom green strategies.",
    heroImage: consultingImage,
    features: [
      {
        icon: "📊",
        title: "Carbon Footprint Audits",
        description: "We assess your business operations to measure emissions and offer reduction plans."
      },
      {
        icon: "🌱",
        title: "Sustainable Supply Chain",
        description: "Transition to environmentally responsible suppliers and logistics strategies."
      },
      {
        icon: "💡",
        title: "Green Policy Development",
        description: "We help you create internal policies and standards to promote sustainability culture."
      },
      {
        icon: "🔄",
        title: "Eco-Certification Preparation",
        description: "Get ready for certifications like ISO 14001, Energy Star, and more."
      }
    ],
    processSteps: [
      {
        title: "Consultation",
        description: "We understand your business, industry, and sustainability goals."
      },
      {
        title: "Assessment",
        description: "We analyze operations, energy usage, waste, emissions, and more."
      },
      {
        title: "Strategy Design",
        description: "We tailor an eco-strategy that fits your operations and budget."
      },
      {
        title: "Implementation Support",
        description: "We assist with training, change management, and monitoring."
      },
      {
        title: "Follow-up",
        description: "We track progress, refine strategies, and help you maintain compliance."
      }
    ],
    faqs: []
  };

  return (
    <ServiceDetailLayout
      title={serviceData.title}
      description={serviceData.description}
      heroImage={serviceData.heroImage}
      features={serviceData.features}
      processSteps={serviceData.processSteps}
      faqs={serviceData.faqs}
      ctaText="Book a Free Consultation"
    />
  );
};

export default EcoFriendlyConsulting;
