import React from 'react';
import { NEWS } from '../constants';

const NewsSection: React.FC = () => {
  // Helper to process markdown-like bold text (simple implementation)
  const renderContent = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-academic-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="news" className="mb-16 scroll-mt-24">
      <h2 className="text-2xl font-bold text-academic-900 mb-6 border-b border-academic-100 pb-2">News</h2>
      <div className="space-y-4">
        {NEWS.map((item, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:gap-6 text-sm sm:text-base">
            <div className="w-24 shrink-0 font-medium text-academic-500 pt-0.5">{item.date}</div>
            <div className="text-academic-700">
              {renderContent(item.content)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;