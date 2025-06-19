import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';
import esgImage from '../../assets/images/esg-reporting.png';

const ESGIntegrationReporting = () => {
  const serviceData = {
    title: "ESG Integration & Reporting",
    description: "Comprehensive ESG strategy development and reporting solutions that align with global standards and stakeholder expectations, helping you communicate your sustainability performance effectively.",
    heroImage: esgImage,
    features: [
      {
        icon: "📊",
        title: "Materiality Assessment",
        description: "Identify and prioritize the most relevant ESG issues for your business and stakeholders."
      },
      {
        icon: "📈",
        title: "Performance Metrics",
        description: "Develop and track key performance indicators (KPIs) to measure ESG progress."
      },
      {
        icon: "📋",
        title: "Regulatory Compliance",
        description: "Ensure compliance with local and international ESG reporting requirements."
      },
      {
        icon: "🌍",
        title: "Stakeholder Engagement",
        description: "Facilitate meaningful dialogue with investors, customers, and communities."
      },
      {
        icon: "📱",
        title: "Digital Reporting",
        description: "Leverage technology for transparent and accessible ESG communication."
      },
      {
        icon: "🔄",
        title: "Continuous Improvement",
        description: "Implement feedback loops to enhance ESG performance over time."
      }
    ],
    processSteps: [
      {
        title: "ESG Assessment",
        description: "Evaluate current ESG practices and identify gaps and opportunities."
      },
      {
        title: "Strategy Development",
        description: "Create a tailored ESG strategy aligned with business objectives."
      },
      {
        title: "Data Collection & Analysis",
        description: "Gather and analyze relevant ESG data across your organization."
      },
      {
        title: "Report Preparation",
        description: "Develop comprehensive ESG reports following recognized frameworks."
      },
      {
        title: "Stakeholder Communication",
        description: "Effectively communicate your ESG performance to key stakeholders."
      }
    ],
    faqs: [
      {
        question: "What are the benefits of ESG reporting?",
        answer: "ESG reporting enhances transparency, improves risk management, attracts responsible investors, and strengthens brand reputation while identifying opportunities for operational improvements."
      },
      {
        question: "Which reporting frameworks do you support?",
        answer: "We support various frameworks including GRI, SASB, TCFD, and the UN SDGs, helping you choose the most relevant for your industry and stakeholders."
      },
      {
        question: "How often should we report on our ESG performance?",
        answer: "Most organizations report annually, but the frequency depends on your industry, stakeholder expectations, and regulatory requirements. We can help determine the optimal reporting cadence for your business."
      }
    ]
  };

  return (
    <ServiceDetailLayout
      title={serviceData.title}
      description={serviceData.description}
      heroImage={serviceData.heroImage}
      features={serviceData.features}
      processSteps={serviceData.processSteps}
      faqs={serviceData.faqs}
      ctaText="Enhance Your ESG Strategy"
    />
  );
};

export default ESGIntegrationReporting;