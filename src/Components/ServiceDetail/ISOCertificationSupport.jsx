import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';
import isoImage from '../../assets/images/iso-certification.png';

const ISOCertificationSupport = () => {
  const serviceData = {
    title: "ISO Certification Support",
    description: "Expert guidance through the ISO certification process to help your organization achieve international standards for quality, environmental management, and more.",
    heroImage: isoImage,
    features: [
      {
        icon: "📝",
        title: "Gap Analysis",
        description: "Comprehensive assessment of your current processes against ISO requirements."
      },
      {
        icon: "🔄",
        title: "Documentation",
        description: "Development of all necessary policies, procedures, and work instructions."
      },
      {
        icon: "👥",
        title: "Staff Training",
        description: "Customized training programs to ensure understanding and compliance."
      },
      {
        icon: "✅",
        title: "Internal Audits",
        description: "Preparation and execution of internal audits to verify compliance."
      },
      {
        icon: "🔍",
        title: "Certification Audit Support",
        description: "Assistance during the certification audit process with accredited bodies."
      },
      {
        icon: "🔄",
        title: "Continuous Improvement",
        description: "Ongoing support to maintain and improve your management system."
      }
    ],
    processSteps: [
      {
        title: "Initial Consultation",
        description: "Understand your organization's needs and determine the appropriate ISO standard(s)."
      },
      {
        title: "Gap Analysis",
        description: "Evaluate current processes against the standard's requirements."
      },
      {
        title: "System Development",
        description: "Create or update documentation and processes to meet ISO requirements."
      },
      {
        title: "Implementation",
        description: "Train staff and implement the new or improved processes."
      },
      {
        title: "Internal Audit & Review",
        description: "Conduct internal audits and management reviews to ensure readiness."
      },
      {
        title: "Certification Audit",
        description: "Support during the certification body's audit process."
      }
    ],
    faqs: [
      {
        question: "Which ISO standards do you support?",
        answer: "We support various ISO standards including ISO 9001 (Quality), ISO 14001 (Environmental), ISO 45001 (Occupational Health & Safety), and ISO 50001 (Energy Management)."
      },
      {
        question: "How long does the certification process take?",
        answer: "Typically 3-12 months, depending on your organization's size, complexity, and current level of compliance."
      },
      {
        question: "What are the benefits of ISO certification?",
        answer: "Benefits include improved efficiency, enhanced customer satisfaction, better risk management, competitive advantage, and compliance with regulatory requirements."
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
      ctaText="Start Your ISO Journey"
    />
  );
};

export default ISOCertificationSupport;