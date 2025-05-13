import React from "react";
import { 
  Globe, 
  Leaf, 
  CheckCircle, 
  Building2, 
  Factory, 
  TreePine 
} from "lucide-react";
import { Link } from "react-router-dom";

function EnvironmentalImpactAssessments() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-72 bg-green-100 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/images/environmental-impact-assessments.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-green-800">📊 Environmental Impact Assessments</h1>
          <p className="mt-2 text-lg text-green-900 max-w-xl mx-auto">
            Analyzing and reporting the ecological impact of projects and operations to ensure sustainability and compliance.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Why Conduct an Environmental Impact Assessment?</h2>
        <p className="text-gray-700 mb-6">
          Environmental Impact Assessments (EIAs) are essential for evaluating the potential environmental and social effects of proposed projects and operations. They help organizations identify, predict, and mitigate adverse impacts, ensuring that developments are sustainable and compliant with regulations. Whether you're planning a new project or expanding existing operations, an EIA is a crucial step towards responsible and ethical business practices.
        </p>
      </section>

      {/* Comprehensive EIA Process Section */}
      <section className="bg-green-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Our Comprehensive EIA Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Screening</h3>
            <p className="text-gray-600">
              We assess the project to determine whether an EIA is required based on its type, size, and potential environmental impacts.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Scoping</h3>
            <p className="text-gray-600">
              Our team identifies the key environmental and social issues that need to be addressed, ensuring a focused and relevant assessment.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Baseline Study</h3>
            <p className="text-gray-600">
              We conduct a detailed analysis of the existing environmental conditions to establish a benchmark for comparison.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Impact Analysis</h3>
            <p className="text-gray-600">
              Using advanced tools and methodologies, we evaluate the potential environmental, social, and economic impacts of the project.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Mitigation & Enhancement</h3>
            <p className="text-gray-600">
              We develop strategies to minimize negative impacts and enhance positive outcomes, ensuring sustainable project development.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Reporting</h3>
            <p className="text-gray-600">
              Our comprehensive EIA reports provide clear, concise, and evidence-based findings and recommendations to decision-makers.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Stakeholder Engagement</h3>
            <p className="text-gray-600">
              We facilitate open dialogue with stakeholders, including local communities, NGOs, and government agencies, to gather input and address concerns.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Monitoring & Compliance</h3>
            <p className="text-gray-600">
              We establish monitoring plans to track the project's environmental performance and ensure ongoing compliance with regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Benefits of Conducting an EIA</h2>
        <p className="text-gray-700 mb-6">
          Conducting an EIA offers numerous advantages beyond regulatory compliance. It helps organizations:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            <strong>Ensure Regulatory Compliance:</strong> Meet all environmental regulations and standards, avoiding costly penalties and delays.
          </li>
          <li>
            <strong>Manage Risks:</strong> Identify potential environmental risks early, allowing for proactive mitigation and reducing the likelihood of project setbacks.
          </li>
          <li>
            <strong>Promote Sustainable Development:</strong> Integrate environmental and social considerations into project planning, fostering long-term sustainability.
          </li>
          <li>
            <strong>Build Stakeholder Trust:</strong> Demonstrate a commitment to environmental responsibility and transparency, enhancing relationships with stakeholders.
          </li>
          <li>
            <strong>Achieve Cost Savings:</strong> Prevent expensive environmental damage and legal issues by addressing issues upfront, leading to more cost-effective project execution.
          </li>
        </ul>
      </section>

      {/* Expertise Section */}
      <section className="bg-green-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Our Expertise</h2>
        <p className="text-gray-700 mb-6">
          Our team of environmental scientists, engineers, and consultants has extensive experience in conducting EIAs across various sectors, including:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Energy and utilities</li>
          <li>Construction and infrastructure</li>
          <li>Manufacturing and industry</li>
          <li>Transportation and logistics</li>
          <li>Urban development and planning</li>
        </ul>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Case Studies</h2>
        <p className="text-gray-700 mb-6">
          Here are some examples of our recent EIA projects:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            <strong>Wind Farm Development:</strong> Conducted an EIA for a large-scale wind farm, identifying key environmental impacts and recommending mitigation strategies that were implemented successfully.
          </li>
          <li>
            <strong>Urban Redevelopment Project:</strong> Assessed the environmental impacts of a major urban redevelopment project, leading to improved design and construction practices that minimized ecological disruption.
          </li>
          <li>
            <strong>Manufacturing Facility Expansion:</strong> Evaluated the environmental and social impacts of a manufacturing facility expansion, resulting in the development of a comprehensive sustainability plan.
          </li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-green-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Why Choose EcoSustain Solutions?</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>
            <strong>Expertise:</strong> Our team has a deep understanding of environmental science and regulatory requirements.
          </li>
          <li>
            <strong>Customized Solutions:</strong> We tailor our EIA process to meet the unique needs of each project.
          </li>
          <li>
            <strong>Stakeholder Engagement:</strong> We prioritize open communication and collaboration with all stakeholders.
          </li>
          <li>
            <strong>Proven Track Record:</strong> Our successful projects and satisfied clients speak to our capabilities and dedication.
          </li>
          <li>
            <strong>Commitment to Sustainability:</strong> We are dedicated to promoting environmental stewardship and sustainable development.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to Ensure Environmental Compliance?</h2>
        <p className="mb-4">Contact us today to discuss your EIA needs and explore how we can help you achieve your sustainability goals.</p>
        <Link to="/contact" className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default EnvironmentalImpactAssessments;