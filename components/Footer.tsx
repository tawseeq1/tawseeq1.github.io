import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-academic-100 py-12 mt-12 text-center text-sm text-academic-500">
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} {PROFILE.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;