import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import PageLayout from '../PageLayout';

const ServiceDetailLayout = ({ 
  title, 
  description, 
  heroImage, 
  features = [],
  processSteps = [],
  faqs = [],
  ctaText = "Get Started"
}) => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <PageLayout
      title={title}
      description={description}
      bgColor="bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/services" 
          className="inline-flex items-center text-green-600 hover:text-green-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <img 
              src={heroImage} 
              alt={title} 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{title}</h2>
              <p className="text-gray-700 mb-6">{description}</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        {features.length > 0 && (
          <section className="mb-12">
            <h3 className="text-xl font-semibold text-green-800 mb-6">What We Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-green-600 text-2xl mb-3">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Process Section */}
        {processSteps.length > 0 && (
          <section className="mb-12">
            <h3 className="text-xl font-semibold text-green-800 mb-6">Our Process</h3>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="mb-12">
            <h3 className="text-xl font-semibold text-green-800 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={expandedFaq === index}
                    aria-controls={`faq-${index}`}
                  >
                    <h4 className="text-base font-medium text-gray-900 pr-4">
                      {faq.question}
                    </h4>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                    )}
                  </button>
                  <div
                    id={`faq-${index}`}
                    className={`px-6 pb-6 pt-0 transition-all duration-300 ease-in-out ${
                      expandedFaq === index ? 'block' : 'hidden'
                    }`}
                    aria-hidden={expandedFaq !== index}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-green-50 p-8 rounded-xl border border-green-100">
          <div className="text-center">
            <h3 className="text-xl font-bold text-green-800 mb-3">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact us today to learn more about our {title.toLowerCase()} services and how we can help your business become more sustainable.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default ServiceDetailLayout;
