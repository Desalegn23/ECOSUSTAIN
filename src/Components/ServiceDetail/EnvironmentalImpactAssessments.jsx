import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';
import impactImage from '../../../assets/images/impact-assessment.png';

const EnvironmentalImpactAssessments = () => {
  const serviceData = {
    title: "Environmental Impact Assessments",
    description: "Comprehensive evaluations to identify, predict, and mitigate the environmental effects of your projects. Our assessments ensure regulatory compliance and sustainable development practices.",
    heroImage: impactImage,
    features: [
      {
        icon: "🔍",
        title: "Baseline Studies",
        description: "Detailed analysis of existing environmental conditions before project commencement."
      },
      {
        icon: "📈",
        title: "Impact Prediction",
        description: "Scientific modeling to forecast potential environmental effects of proposed activities."
      },
      {
        icon: "🔄",
        title: "Mitigation Strategies",
        description: "Proactive measures to avoid, minimize, or compensate for environmental impacts."
      },
      {
        icon: "📋",
        title: "Regulatory Compliance",
        description: "Ensuring your project meets all local and international environmental regulations."
      },
      {
        icon: "🤝",
        title: "Stakeholder Engagement",
        description: "Facilitating meaningful participation from communities and interested parties."
      },
      {
        icon: "📊",
        title: "Monitoring Plans",
        description: "Long-term strategies to track and manage environmental performance."
      }
    ],
    processSteps: [
      {
        title: "Screening & Scoping",
        description: "Determine the level of assessment required and identify key issues to address."
      },
      {
        title: "Baseline Data Collection",
        description: "Gather comprehensive data on existing environmental and social conditions."
      },
      {
        title: "Impact Analysis",
        description: "Evaluate potential effects and their significance using industry-standard methodologies."
      },
      {
        title: "Mitigation & Management",
        description: "Develop strategies to avoid, minimize, or compensate for identified impacts."
      },
      {
        title: "Reporting & Approval",
        description: "Prepare comprehensive documentation and support the approval process."
      }
    ],
    faqs: [
      {
        question: "When is an Environmental Impact Assessment required?",
        answer: "EIAs are typically required for large-scale projects or those in sensitive areas, but requirements vary by jurisdiction and project type."
      },
      {
        question: "How long does the EIA process take?",
        answer: "The duration varies but typically ranges from 3-12 months depending on the project's complexity and regulatory requirements."
      },
      {
        question: "What's the difference between an EIA and an Environmental Audit?",
        answer: "An EIA is conducted before project implementation to predict impacts, while an audit evaluates ongoing compliance and performance of existing operations."
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
      ctaText="Schedule an Assessment"
    />
  );
};

export default EnvironmentalImpactAssessments;