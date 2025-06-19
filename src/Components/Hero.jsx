import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ChevronRight, Cpu, Wifi, Cloud, BarChart3 } from 'lucide-react';

const Hero = () => {
  const techIcons = [
    { icon: <Cpu className="w-6 h-6 text-green-500" />, pos: 'top-1/3 left-[10%]' },
    { icon: <Wifi className="w-6 h-6 text-sky-500" />, pos: 'top-1/4 right-[15%]' },
    { icon: <BarChart3 className="w-6 h-6 text-emerald-500" />, pos: 'bottom-1/4 left-[20%]' },
    { icon: <Cloud className="w-6 h-6 text-blue-400" />, pos: 'bottom-1/3 right-[10%]' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-sky-50 to-emerald-50 flex items-center overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {techIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.pos} w-12 h-12 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow animate-float`}
            style={{
              animationDelay: `${index * 2}s`,
              animationDuration: '12s',
            }}
          >
            {item.icon}
          </div>
        ))}
        {/* Cloud Layer */}
        <div className="absolute top-0 w-full h-40 bg-[url('/clouds.svg')] bg-repeat-x opacity-20 animate-clouds" />
        {/* Green ground hill */}
        <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-green-600 via-green-400/30 to-transparent rounded-t-[80%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 items-center gap-16">
          {/* Left Text */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-md rounded-full mb-6 shadow-sm">
              <Leaf className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-green-800">Sustainable Tech by Ecosustain</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              For a <span className="text-green-600">Cleaner Sky</span> and <span className="text-blue-600">Greener Future</span>
            </h1>

            <p className="text-lg text-gray-700 mb-8 max-w-xl leading-relaxed">
              Ecosustain Solutions helps you build a sustainable world using cutting-edge <strong className="text-green-700">AI</strong>, <strong className="text-sky-700">IoT</strong>, and <strong className="text-emerald-700">ESG-driven consulting</strong> services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="px-6 py-4 bg-green-600 text-white font-semibold rounded-lg shadow hover:shadow-md hover:bg-green-700 transition"
              >
                Discover Our Solutions <ChevronRight className="inline-block ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-4 bg-white text-gray-800 border border-gray-200 font-semibold rounded-lg hover:bg-gray-50 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Visual - Now visible on all screens */}
          <div className="mt-8 md:mt-0 md:relative">
            <div className="relative w-full h-auto min-h-[450px] md:min-h-[480px] bg-gradient-to-br from-white via-sky-50 to-green-50 border border-white/30 shadow-lg md:shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden p-4 md:p-6 space-y-3 md:space-y-4 pb-6">

              {/* Floating globe or network graphic - Only on larger screens */}
              <div className="hidden md:flex absolute inset-0 items-center justify-center z-0 pointer-events-none">
                <div className="w-48 h-48 bg-gradient-to-tr from-green-200 via-blue-200 to-white rounded-full blur-2xl opacity-30 animate-spin-slow" />
              </div>

              {/* ESG Performance Block */}
              <div className="relative z-10 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow">
                <div className="flex items-start gap-2 md:gap-3">
                  <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-800">ESG Performance</h4>
                    <div className="mt-2 space-y-1.5">
                      {[
                        { label: 'Environment', value: '80%', width: '4/5', bg: 'bg-emerald-100', fill: 'bg-emerald-500' },
                        { label: 'Social', value: '70%', width: '3/4', bg: 'bg-blue-100', fill: 'bg-blue-500' },
                        { label: 'Governance', value: '92%', width: '[92%]', bg: 'bg-green-100', fill: 'bg-green-500' }
                      ].map((item, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>{item.label}</span><span>{item.value}</span>
                          </div>
                          <div className={`h-1.5 ${item.bg} rounded-full`}>
                            <div className={`h-1.5 ${item.fill} rounded-full w-${item.width}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* IoT Monitoring Block */}
              <div className="relative z-10 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow">
                <div className="flex items-start gap-2 md:gap-3">
                  <Wifi className="w-5 h-5 md:w-6 md:h-6 text-sky-600 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-800">IoT Monitoring</h4>
                    <p className="text-xs text-gray-600 mt-1">Real-time data from 245+ environmental sensors</p>
                    <div className="mt-2 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" /> Live Feed Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Analytics Block */}
              <div className="relative z-10 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow">
                <div className="flex items-start gap-2 md:gap-3">
                  <Cpu className="w-5 h-5 md:w-6 md:h-6 text-green-700 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-800">AI Analytics</h4>
                    <p className="text-xs text-gray-600 mt-1">Analyzing patterns, emissions, and risk indicators</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-700 text-[10px] md:text-[11px] px-2 py-0.5 rounded-full whitespace-nowrap">Carbon Forecast</span>
                      <span className="bg-blue-100 text-blue-700 text-[10px] md:text-[11px] px-2 py-0.5 rounded-full whitespace-nowrap">Emission Spike</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consulting Status Block */}
              <div className="relative z-10 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow">
                <div className="flex items-start gap-2 md:gap-3">
                  <Leaf className="w-5 h-5 md:w-6 md:h-6 text-lime-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 w-full">
                    <h4 className="text-sm font-semibold text-gray-800">Consulting Pipeline</h4>
                    <p className="text-xs text-gray-600 mt-1">12 active sustainability projects</p>
                    
                    {/* Simple Progress Bar */}
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-lime-500 h-2.5 rounded-full w-[65%]" />
                    </div>
                    
                    {/* Progress Percentage */}
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">0%</span>
                      <span className="text-xs font-medium text-lime-600">65% Complete</span>
                      <span className="text-xs text-gray-500">100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animations */}
      <style jsx="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        @keyframes clouds {
          from { background-position: 0 0; }
          to { background-position: 1000px 0; }
        }
        .animate-clouds {
          animation: clouds 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
