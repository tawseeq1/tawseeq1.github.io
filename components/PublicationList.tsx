import React from 'react';
import { PUBLICATIONS, PROFILE } from '../constants';
import { Icons } from './Icons';
import { Link } from '../types';

const PublicationList: React.FC = () => {
  
  const getLinkIcon = (type: Link['type']) => {
    switch(type) {
      case 'pdf': return <Icons.FileText size={14} className="mr-1" />;
      case 'code': return <Icons.Code size={14} className="mr-1" />;
      case 'website': return <Icons.Globe size={14} className="mr-1" />;
      default: return <Icons.ExternalLink size={14} className="mr-1" />;
    }
  };

  const getLinkStyle = (type: Link['type']) => {
    switch(type) {
      case 'pdf': return "text-red-700 hover:bg-red-50 border-red-200";
      case 'code': return "text-slate-700 hover:bg-slate-50 border-slate-200";
      default: return "text-blue-700 hover:bg-blue-50 border-blue-200";
    }
  };

  // Split name to allow partial matching if needed, but simple includes is usually enough
  const isMe = (authorName: string) => {
    return authorName === PROFILE.name;
  };

  return (
    <section id="publications" className="mb-16 scroll-mt-24">
      <h2 className="text-2xl font-bold text-academic-900 mb-6 border-b border-academic-100 pb-2">Publications</h2>
      <div className="space-y-10">
        {PUBLICATIONS.map((pub) => (
          <div key={pub.id} className="group">
            {/* Title */}
            <h3 className="text-lg font-semibold text-academic-900 mb-2 leading-tight">
              {pub.title}
            </h3>
            
            {/* Authors */}
            <div className="text-academic-700 mb-2 text-base">
              {pub.authors.map((author, idx) => (
                <span key={idx}>
                  {isMe(author) ? (
                    <span className="font-bold underline decoration-academic-300 underline-offset-4 decoration-2">{author}</span>
                  ) : (
                    author
                  )}
                  {idx < pub.authors.length - 1 && ", "}
                </span>
              ))}
            </div>

            {/* Venue & Year */}
            <div className="text-academic-500 italic mb-2 text-sm">
              {pub.venue}, {pub.year}
            </div>

            {/* Description (Abstract snippet) */}
            {pub.description && (
              <p className="text-academic-600 text-sm mb-3 leading-relaxed max-w-3xl">
                {pub.description}
              </p>
            )}

            {/* Links/Buttons */}
            <div className="flex flex-wrap gap-2">
              {pub.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium border transition-colors ${getLinkStyle(link.type)}`}
                >
                  {getLinkIcon(link.type)}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PublicationList;