import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';
import greenTechImage from '../../assets/images/green-tech.jpg';

const GreenTechnologySolutions = () => {
  const serviceData = {
    title: "Green Technology Solutions",
    description: "Empowering the future through sustainable innovations in energy and technology.",
    heroImage: greenTechImage,
    features: [
      {
        icon: "🔋",
        title: "IoT for Smart Energy",
        description: "Implement smart IoT devices for monitoring and optimizing energy usage in real-time, enabling predictive maintenance and automation for maximum efficiency."
      },
      {
        icon: "☀️",
        title: "Solar Power Integration",
        description: "We help businesses and facilities switch to clean solar energy by designing and deploying cost-effective solar systems with modern monitoring tools."
      },
      {
        icon: "💨",
        title: "Wind Energy Solutions",
        description: "Harness wind power with scalable turbine solutions, suitable for both industrial and remote setups — reducing grid dependence and emissions."
      },
      {
        icon: "🤖",
        title: "AI for Sustainability",
        description: "Leverage AI to forecast energy demands, automate building systems, and optimize resource allocation for sustainability and cost-effectiveness."
      },
      {
        icon: "📊",
        title: "Machine Learning Optimization",
        description: "Use ML algorithms to detect inefficiencies in systems, predict equipment failures, and enable smart resource management across operations."
      },
      {
        icon: "📈",
        title: "Sustainable Data Centers",
        description: "We help design and transition to low-energy, renewable-powered data infrastructures — reducing digital carbon footprints while increasing resilience."
      }
    ],
    processSteps: [
      {
        title: "Technology Audit",
        description: "We analyze your current tech stack and energy systems."
      },
      {
        title: "Solution Design",
        description: "Custom proposals blending renewable energy, IoT, and intelligent systems."
      },
      {
        title: "Deployment",
        description: "Installation, system integration, and hands-on training."
      },
      {
        title: "Monitoring & Analytics",
        description: "Real-time dashboards, alerts, and insights using AI/ML."
      },
      {
        title: "Ongoing Support",
        description: "Regular updates, reports, and optimization cycles to evolve with your goals."
      }
    ],
    faqs: [
      {
        question: "What types of businesses benefit most from green technology solutions?",
        answer: "Businesses of all sizes and industries can benefit, especially those with high energy consumption, large facilities, or sustainability goals."
      },
      {
        question: "What's the typical ROI for green technology investments?",
        answer: "ROI varies but typically ranges from 2-5 years, with ongoing savings in energy and operational costs."
      },
      {
        question: "Do you provide financing options for green technology implementation?",
        answer: "Yes, we can help identify financing options, grants, and incentives to offset initial investment costs."
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
      ctaText="Start Building a Smarter, Greener Future"
    />
  );
};

export default GreenTechnologySolutions;
