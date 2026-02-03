import React from 'react';
import { PROFILE } from '../constants';

const Navigation: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-academic-100 mb-8 sm:mb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div 
          className="font-semibold text-lg text-academic-900 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => scrollToSection('home')}
        >
          {PROFILE.name}
        </div>
        
        <div className="flex space-x-4 sm:space-x-8 text-sm font-medium text-academic-600">
          {['About', 'News', 'Publications', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-blue-600 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;