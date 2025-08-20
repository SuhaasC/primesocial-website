import React from 'react';
import { FaChartLine, FaGlobe, FaStar, FaExclamationTriangle, FaClock } from 'react-icons/fa';

const PainPointsSection: React.FC = () => {
  const painPoints = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Unpredictable Patient Flow",
      description: "Your schedule is either feast or famine. Some months you're overwhelmed, others you're struggling to fill appointments."
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Weak or Outdated Websites",
      description: "Your current site doesn't convert visitors into patients. It's slow, not mobile-friendly, and doesn't build trust."
    },
    {
      icon: <FaStar className="w-8 h-8" />,
      title: "Few Reviews & Poor Reputation",
      description: "You have great results but few online reviews. Your competitors are dominating local search with better ratings."
    },
    {
      icon: <FaExclamationTriangle className="w-8 h-8" />,
      title: "Burnt by Cheap Agencies",
      description: "You've tried other agencies before. They promised the world but delivered generic strategies that didn't work for clinics."
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "No Time for Marketing",
      description: "You're focused on patient care, not marketing. But without marketing, you can't grow your practice sustainably."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Why Do Clinics Struggle?
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            These are the most common challenges we hear from clinic owners. 
            Sound familiar?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-secondary-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-accent-500 mb-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                {point.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              The Solution?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              A proven system that addresses ALL these pain points, 
              not just one or two. We've helped dozens of clinics 
              overcome these exact challenges.
            </p>
            <a 
              href="https://calendly.com/suhaas-primesocial/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-secondary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              See How We Solve This
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PainPointsSection;
