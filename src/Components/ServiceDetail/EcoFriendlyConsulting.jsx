import React from "react";

function EcoFriendlyConsulting() {
  return (
    <div>
    {/* Hero Section */}
       <section className="relative h-72 bg-green-100 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/images/eco-banner.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-green-800">Eco-Friendly Consulting</h1>
          <p className="mt-2 text-lg text-green-900 max-w-xl mx-auto">
            Empowering businesses to thrive sustainably through custom green strategies.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Why Eco-Friendly Consulting?</h2>
        <p className="text-gray-700 mb-6">
          As climate change and sustainability become urgent global priorities, eco-friendly consulting helps businesses
          transform their operations to reduce environmental impact, comply with regulations, and improve public perception.
          Whether you're a startup or an established enterprise, going green is not just ethical — it's smart business.
        </p>
      </section>

      {/* Core Services Section */}
      <section className="bg-green-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Our Eco Services Include</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Carbon Footprint Audits</h3>
            <p className="text-gray-600">
              We assess your business operations to measure emissions and offer reduction plans.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Sustainable Supply Chain</h3>
            <p className="text-gray-600">
              Transition to environmentally responsible suppliers and logistics strategies.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Green Policy Development</h3>
            <p className="text-gray-600">
              We help you create internal policies and standards to promote sustainability culture.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Eco-Certification Preparation</h3>
            <p className="text-gray-600">
              Get ready for certifications like ISO 14001, Energy Star, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-green-800 text-center mb-8">Our Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li><strong>Consultation:</strong> We understand your business, industry, and sustainability goals.</li>
          <li><strong>Assessment:</strong> We analyze operations, energy usage, waste, emissions, and more.</li>
          <li><strong>Strategy Design:</strong> We tailor an eco-strategy that fits your operations and budget.</li>
          <li><strong>Implementation Support:</strong> We assist with training, change management, and monitoring.</li>
          <li><strong>Follow-up:</strong> We track progress, refine strategies, and help you maintain compliance.</li>
        </ol>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to Go Green?</h2>
        <p className="mb-4">Start your sustainable transformation with our expert consultants.</p>
        <a
          href="/contact"
          className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
        >
          Book a Free Consultation
        </a>
      </section>
     </div>
  );
}

export default EcoFriendlyConsulting;
