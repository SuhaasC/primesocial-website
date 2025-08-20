import React from 'react';
import { FaExclamationTriangle, FaCheck } from 'react-icons/fa';

const FinalCTASection: React.FC = () => {
  // Calculate spots remaining based on current date
  const getSpotsRemaining = () => {
    const today = new Date();
    const dayOfMonth = today.getDate();
    
    if (dayOfMonth >= 1 && dayOfMonth <= 12) {
      return 2;
    } else if (dayOfMonth >= 13 && dayOfMonth <= 31) {
      return 1;
    } else {
      return 2; // Default fallback
    }
  };

  const spotsRemaining = getSpotsRemaining();

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-600 to-secondary-700 text-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            We only onboard <span className="font-bold">2 new clients per month</span> to ensure 
            we can deliver exceptional results for every partner.
          </p>

          {/* Urgency Message */}
          <div className="bg-white bg-opacity-10 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <FaExclamationTriangle className="w-6 h-6 text-accent-500" />
              <span className="font-semibold text-lg">Limited Availability</span>
            </div>
            <p className="text-lg">
              <span className="font-bold">Current Month:</span> {spotsRemaining} spot{spotsRemaining !== 1 ? 's' : ''} remaining
            </p>
          </div>

          {/* Single CTA Button */}
          <div className="mb-8">
            <a 
              href="https://calendly.com/suhaas-primesocial/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-secondary-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Your Free Digital Audit
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-white border-opacity-20 pt-8">
            <p className="text-white text-opacity-80 mb-4">
              What you get in your free 30-minute consultation:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaCheck className="w-5 h-5 text-accent-500" />
                <span>Complete digital audit</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="w-5 h-5 text-accent-500" />
                <span>Custom growth strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="w-5 h-5 text-accent-500" />
                <span>No sales pressure</span>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="mt-8 text-center">
            <p className="text-white text-opacity-70 text-sm">
              Join 50+ clients already growing with Prime Social
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
