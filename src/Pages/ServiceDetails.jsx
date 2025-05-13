// ServiceDetailPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import GreenTechnologySolutions from '../Components/ServiceDetail/GreenTechnologySolutions';
import EnvironmentalImpactAssessments from '../Components/ServiceDetail/EnvironmentalImpactAssessments';
import ISOCertificationSupport from '../Components/ServiceDetail/ISOCertificationSupport';
import ESGIntegrationReporting from '../Components/ServiceDetail/ESGIntegrationReporting';
import EcoFriendlyConsulting from '../Components/ServiceDetail/EcoFriendlyConsulting';

const serviceDetails = {
  'eco-friendly-consulting': {
    details: (
     <div>
        <EcoFriendlyConsulting />
      </div>
    ),
  },

  'green-technology-solutions': {
     details: (
      <div>
        <GreenTechnologySolutions />
      </div>
    ),
  },
  'environmental-impact-assessments': {
    details: (
      <div>
        <EnvironmentalImpactAssessments />
      </div>
    ),
  },
  'iso-certification-support': {
    details: (
      
      <div>
        <ISOCertificationSupport />
      </div>
    ),
   
  },
  'esg-integration-and-reporting': {
    
    details: (
      <div>
        <ESGIntegrationReporting />
      </div>
    ),
  },
};

function ServiceDetailPage() {
  const { serviceId } = useParams(); // Get the serviceId from the URL

  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8">Service Not Found</h1>
        <p className="text-lg text-gray-700 mb-6">The service you are looking for does not exist.</p>
        <Link to="/services" className="text-green-700 font-semibold hover:underline">
          &larr; Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* {/* <div className="flex items-center mb-6">
      //   <h1 className="text-3xl font-bold text-green-700">{service.title}</h1>
      // </div> */}
      {/* // <p className="text-lg text-gray-700 mb-6">{service.description}</p> */} 

      <div className="mb-8">
        <div className="text-gray-700">{service.details}</div>
      </div>
      <div className="flex justify-center">
        <Link to="/services" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
          &larr; Back to Services
        </Link>
      </div>
    </div>
  );
}

export default ServiceDetailPage;