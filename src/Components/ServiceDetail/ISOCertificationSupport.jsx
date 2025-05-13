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

function ISOCertificationSupport() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-72 bg-green-100 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/images/iso-certification-support.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-green-800">📜 ISO Certification Support</h1>
          <p className="mt-2 text-lg text-green-900 max-w-xl mx-auto">
            Guiding organizations through the certification process for environmental and occupational health and safety management systems.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Why ISO Certification?</h2>
        <p className="text-gray-700 mb-6">
          ISO certifications, such as ISO 14001 (Environmental Management) and ISO 45001 (Occupational Health and Safety), are globally recognized standards that help organizations demonstrate their commitment to sustainability, safety, and quality. Achieving these certifications can enhance your reputation, improve operational efficiency, and open up new business opportunities. At EcoSustain Solutions, we provide comprehensive support to help you navigate the certification process smoothly and effectively.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="bg-green-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Our ISO Certification Services Include</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Gap Analysis</h3>
            <p className="text-gray-600">
              We conduct a thorough gap analysis to identify the areas where your current systems and processes fall short of ISO standards.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Documentation Support</h3>
            <p className="text-gray-600">
              Our team assists in developing and organizing the necessary documentation for ISO certification.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Training Programs</h3>
            <p className="text-gray-600">
              We offer customized training programs to ensure your team understands and complies with ISO requirements.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Internal Audits</h3>
            <p className="text-gray-600">
              Conduct internal audits to assess compliance and identify areas for improvement before the official certification audit.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Certification Audit Preparation</h3>
            <p className="text-gray-600">
              We prepare your organization for the certification audit, ensuring all requirements are met.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Ongoing Compliance Support</h3>
            <p className="text-gray-600">
              We provide ongoing support to help you maintain compliance and continuously improve your management systems.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-green-800 text-center mb-8">Our Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li><strong>Initial Consultation:</strong> We discuss your organization's goals and requirements for ISO certification.</li>
          <li><strong>Gap Analysis:</strong> We conduct a detailed assessment to identify gaps between your current practices and ISO standards.</li>
          <li><strong>Action Plan Development:</strong> We create a customized action plan to guide you through the certification process.</li>
          <li><strong>Documentation &amp; Training:</strong> We assist with the development of required documentation and provide training for your team.</li>
          <li><strong>Internal Audits:</strong> We conduct internal audits to ensure compliance and readiness for the certification audit.</li>
          <li><strong>Certification Audit Support:</strong> We support you during the certification audit, addressing any issues that arise.</li>
          <li><strong>Ongoing Support:</strong> We provide ongoing support to help you maintain compliance and improve your management systems.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Benefits of ISO Certification</h2>
        <p className="text-gray-700 mb-6">
          Achieving ISO certification offers numerous advantages for organizations:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            <strong>Enhanced Reputation:</strong> Demonstrate your commitment to quality, safety, and environmental responsibility.
          </li>
          <li>
            <strong>Improved Efficiency:</strong> Streamline processes and reduce waste, leading to cost savings and increased productivity.
          </li>
          <li>
            <strong>Regulatory Compliance:</strong> Ensure your organization meets all relevant environmental and safety regulations.
          </li>
          <li>
            <strong>Risk Management:</strong> Identify and mitigate risks, protecting your organization from potential liabilities.
          </li>
          <li>
            <strong>Access to New Markets:</strong> Open up new business opportunities by meeting international standards and customer expectations.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to Achieve ISO Certification?</h2>
        <p className="mb-4">Contact us today to discuss your certification needs and explore how we can help you achieve your goals.</p>
        <Link to="/contact" className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default ISOCertificationSupport;