import React from 'react';
import { PROFILE } from '../config/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#131316] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 lg:gap-8">
          {/* Left: Display Name & Attribution */}
          <div className="space-y-1">
            <span className="font-display font-medium text-sm sm:text-base tracking-tight text-[#FAFAFA] block">
              {PROFILE.displayName.toUpperCase()}
            </span>
            <p className="font-mono text-xs text-[#A1A1AA]">
              Designed &amp; Built by {PROFILE.name}
            </p>
          </div>

          {/* Center: Copyright & Location */}
          <div className="space-y-1 md:text-center">
            <p className="font-mono text-xs text-[#71717A]">
              © 2026 {PROFILE.name}
            </p>
            <p className="font-sans text-xs text-[#A1A1AA]">
              {PROFILE.location}
            </p>
          </div>

          {/* Right: Back to Top */}
          <div className="md:text-right">
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors py-2 px-2 -mx-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6] focus-visible:text-white group"
              aria-label="Back to Top of Page"
            >
              <span>Back to Top</span>
              <span className="inline-block transition-transform duration-150 group-hover:-translate-y-0.5">
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
