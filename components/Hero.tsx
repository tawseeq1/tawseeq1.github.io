import React from 'react';
import { PROFILE, SOCIAL_LINKS, INTERESTS } from '../constants';
import { Icons } from './Icons';
import { SocialLink } from '../types';

const Hero: React.FC = () => {
  const getIcon = (platform: SocialLink['platform']) => {
    switch (platform) {
      case 'github': return <Icons.Github size={20} />;
      case 'twitter': return <Icons.Twitter size={20} />;
      case 'linkedin': return <Icons.Linkedin size={20} />;
      case 'scholar': return <Icons.Scholar size={20} />;
      case 'email': return <Icons.Mail size={20} />;
      default: return <Icons.ExternalLink size={20} />;
    }
  };

  return (
    <section id="about" className="mb-16 scroll-mt-24">
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-start">
        
        {/* Left: Text Content */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-academic-900 mb-2">
            {PROFILE.name}
          </h1>
          <h2 className="text-lg sm:text-xl text-academic-600 mb-4 font-medium">
            {PROFILE.title} at {PROFILE.affiliation}
          </h2>
          
          <div className="flex items-center text-academic-500 mb-6 text-sm">
             <Icons.MapPin size={16} className="mr-1.5" />
             {PROFILE.location}
          </div>

          <p className="text-academic-700 leading-relaxed mb-6 text-base sm:text-lg">
            {PROFILE.bio}
          </p>

          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-wider font-bold text-academic-400 mb-3">Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest, idx) => (
                <span key={idx} className="px-3 py-1 bg-academic-50 text-academic-700 rounded-full text-sm border border-academic-200">
                  {interest.topic}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-500 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm font-medium"
                aria-label={link.platform}
              >
                {getIcon(link.platform)}
                <span className="capitalize">{link.username || link.platform}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div className="w-32 h-32 md:w-48 md:h-48 shrink-0">
          <img 
            src={PROFILE.avatarUrl} 
            alt={PROFILE.name} 
            className="w-full h-full object-cover rounded-full shadow-md border-2 border-white ring-1 ring-academic-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;