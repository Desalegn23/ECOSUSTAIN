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

function ESGIntegrationReporting() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-72 bg-green-100 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/images/esg-integration-reporting.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-green-800">📈 ESG Integration & Reporting</h1>
          <p className="mt-2 text-lg text-green-900 max-w-xl mx-auto">
            Helping companies integrate Environmental, Social, and Governance (ESG) factors into their business strategies and reporting for sustainable growth.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Why Integrate ESG Factors?</h2>
        <p className="text-gray-700 mb-6">
          In today's business landscape, integrating Environmental, Social, and Governance (ESG) factors into your operations is no longer optional—it's essential. Companies that prioritize ESG considerations are better positioned to manage risks, capitalize on opportunities, and build long-term value. At EcoSustain Solutions, we help businesses embed ESG principles into their core strategies and reporting frameworks.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="bg-green-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Our ESG Services Include</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">ESG Strategy Development</h3>
            <p className="text-gray-600">
              We work with you to develop a comprehensive ESG strategy that aligns with your business goals and stakeholder expectations.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Materiality Assessment</h3>
            <p className="text-gray-600">
              Identify the ESG issues that matter most to your business and stakeholders through our materiality assessment process.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">ESG Reporting Frameworks</h3>
            <p className="text-gray-600">
              We guide you in selecting and implementing the right ESG reporting frameworks, such as GRI, SASB, and TCFD.
            </p>
          </div>
          <div class="p-6 bg-white shadow rounded-xl">
            <h3 class="text-lg font-semibold text-green-700 mb-2">Performance Tracking &amp; Analytics</h3>
            <p class="text-gray-600">
              Utilize our tools and expertise to track, analyze, and report on your ESG performance.
            </p>
          </div>
          <div class="p-6 bg-white shadow rounded-xl">
            <h3 class="text-lg font-semibold text-green-700 mb-2">Stakeholder Engagement</h3>
            <p class="text-gray-600">
              We facilitate meaningful engagement with stakeholders to ensure your ESG initiatives resonate with your audience.
            </p>
          </div>
          <div class="p-6 bg-white shadow rounded-xl">
            <h3 class="text-lg font-semibold text-green-700 mb-2">Sustainability Reporting</h3>
            <p class="text-gray-600">
              Produce detailed sustainability reports that communicate your ESG efforts and achievements to stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-green-800 text-center mb-8">Our Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li><strong>Consultation:</strong> We engage with your team to understand your business, goals, and ESG priorities.</li>
          <li><strong>Assessment:</strong> We conduct a thorough assessment of your current ESG performance and identify areas for improvement.</li>
          <li><strong>Strategy Development:</strong> We collaborate with you to develop a tailored ESG strategy that aligns with your business objectives.</li>
          <li><strong>Implementation Support:</strong> We assist with the implementation of your ESG initiatives, providing guidance and resources.</li>
          <li><strong>Reporting:</strong> We help you compile and publish comprehensive ESG reports that highlight your progress and achievements.</li>
          <li><strong>Continuous Improvement:</strong> We work with you to monitor, evaluate, and refine your ESG strategy over time.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Benefits of ESG Integration</h2>
        <p className="text-gray-700 mb-6">
          Integrating ESG factors into your business strategy offers a multitude of benefits:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            <strong>Risk Management:</strong> Identify and mitigate risks related to environmental, social, and governance issues.
          </li>
          <li>
            <strong>Enhanced Reputation:</strong> Build a positive brand image and gain the trust of customers, investors, and stakeholders.
          </li>
          <li>
            <strong>Increased Efficiency:</strong> Improve operational efficiency by reducing waste, conserving resources, and optimizing processes.
          </li>
          <li>
            <strong>Access to Capital:</strong> Attract investors and secure funding by demonstrating a commitment to sustainability and responsible business practices.
          </li>
          <li>
            <strong>Long-term Growth:</strong> Foster innovation and drive long-term growth by aligning business practices with societal and environmental needs.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to Integrate ESG into Your Business?</h2>
        <p className="mb-4">Contact us today to discuss your ESG needs and explore how we can help you achieve sustainable growth.</p>
        <Link to="/contact" className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default ESGIntegrationReporting;