import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/PSLogo.png" 
              alt="Prime Social" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-secondary-600 hover:text-accent-500 transition-colors duration-200">
              Services
            </a>
            <a href="#results" className="text-secondary-600 hover:text-accent-500 transition-colors duration-200">
              Results
            </a>
            <a href="#about" className="text-secondary-600 hover:text-accent-500 transition-colors duration-200">
              About
            </a>
            
            {/* Legal Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-secondary-600 hover:text-accent-500 transition-colors duration-200">
                Legal
                <FaChevronDown className="ml-1 w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="/privacy" className="block px-4 py-2 text-secondary-600 hover:text-accent-500 hover:bg-secondary-50 transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="/terms" className="block px-4 py-2 text-secondary-600 hover:text-accent-500 hover:bg-secondary-50 transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
            
            <a 
              href="https://calendly.com/suhaas-primesocial/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Free Audit
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-secondary-600 hover:text-accent-500 hover:bg-secondary-50 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-secondary-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-secondary-600 hover:text-accent-500 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#results" 
                className="text-secondary-500 hover:text-accent-500 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Results
              </a>
              <a 
                href="#about" 
                className="text-secondary-600 hover:text-accent-500 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              
              {/* Legal Links */}
              <div className="border-t border-secondary-200 pt-4">
                <a 
                  href="/privacy" 
                  className="block text-secondary-600 hover:text-accent-500 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="block text-secondary-600 hover:text-accent-500 transition-colors duration-200 mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms of Service
                </a>
              </div>
              
              <a 
                href="https://calendly.com/suhaas-primesocial/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Free Audit
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
