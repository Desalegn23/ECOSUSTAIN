import React from "react";

function GreenTechnologySolutions() {
  return (
    <div>
        
      {/* Hero Section */}
      <section className="relative h-72 bg-green-100 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/images/green-tech-banner.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-green-800">Green Technology Solutions</h1>
          <p className="mt-2 text-lg text-green-900 max-w-2xl mx-auto">
            Empowering the future through sustainable innovations in energy and technology.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Why Green Technology?</h2>
        <p className="text-gray-700 mb-6">
          As environmental challenges grow, technology must evolve to meet sustainability goals.
          Our Green Technology Solutions integrate innovation and responsibility — helping businesses, communities, and governments reduce environmental impact, improve efficiency, and future-proof operations through smart, renewable, and intelligent technologies.
        </p>
      </section>

      {/* Core Offerings */}
      <section className="bg-green-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-10">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">IoT for Smart Energy</h3>
            <p className="text-gray-600">
              Implement smart IoT devices for monitoring and optimizing energy usage in real-time, enabling predictive maintenance and automation for maximum efficiency.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Solar Power Integration</h3>
            <p className="text-gray-600">
              We help businesses and facilities switch to clean solar energy by designing and deploying cost-effective solar systems with modern monitoring tools.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Wind Energy Solutions</h3>
            <p className="text-gray-600">
              Harness wind power with scalable turbine solutions, suitable for both industrial and remote setups — reducing grid dependence and emissions.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">AI for Sustainability</h3>
            <p className="text-gray-600">
              Leverage AI to forecast energy demands, automate building systems, and optimize resource allocation for sustainability and cost-effectiveness.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Machine Learning Optimization</h3>
            <p className="text-gray-600">
              Use ML algorithms to detect inefficiencies in systems, predict equipment failures, and enable smart resource management across operations.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Sustainable Data Centers</h3>
            <p className="text-gray-600">
              We help design and transition to low-energy, renewable-powered data infrastructures — reducing digital carbon footprints while increasing resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-green-800 text-center mb-8">Our Implementation Process</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4">
          <li><strong>Technology Audit:</strong> We analyze your current tech stack and energy systems.</li>
          <li><strong>Solution Design:</strong> Custom proposals blending renewable energy, IoT, and intelligent systems.</li>
          <li><strong>Deployment:</strong> Installation, system integration, and hands-on training.</li>
          <li><strong>Monitoring & Analytics:</strong> Real-time dashboards, alerts, and insights using AI/ML.</li>
          <li><strong>Ongoing Support:</strong> Regular updates, reports, and optimization cycles to evolve with your goals.</li>
        </ol>
      </section>

      {/* Showcase or Optional Image Row */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <img src="/images/iot-energy.jpg" alt="IoT Smart Grid" className="rounded-xl shadow-md" />
          <img src="/images/solar-power.jpg" alt="Solar Panels" className="rounded-xl shadow-md" />
          <img src="/images/ai-sustainability.jpg" alt="AI for Sustainability" className="rounded-xl shadow-md" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Start Building a Smarter, Greener Future</h2>
        <p className="mb-4">Let’s explore how tech can reduce your footprint and boost your efficiency.</p>
        <a
          href="/contact"
          className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
        >
          Request a Free Tech Assessment
        </a>
      </section>
      </div>
  );
}

export default GreenTechnologySolutions;
