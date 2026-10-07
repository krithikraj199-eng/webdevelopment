import React, { useState, useEffect } from 'react';
import { PROFILE } from '../config/profile';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '#work', index: '01' },
    { label: 'About', href: '#about', index: '02' },
    { label: 'Capabilities', href: '#capabilities', index: '03' },
    { label: 'Experience', href: '#experience', index: '04' },
    { label: 'Contact', href: '#contact', index: '05' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#131316]/95 backdrop-blur-md border-b border-[#27272A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Visual Identifier */}
        <div className="flex items-center gap-3">
          <a
            href="#top"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6]"
            aria-label={`${PROFILE.displayName} - Return to top of page`}
          >
            <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-[#1F1F22] border border-[#27272A] text-[#FAFAFA] tracking-wider group-hover:border-[#4F46E5] transition-colors">
              KR // 01
            </span>
            <span className="font-display font-medium text-sm tracking-tight text-[#FAFAFA] group-hover:text-white transition-colors">
              {PROFILE.displayName.toUpperCase()}
            </span>
          </a>
        </div>

        {/* Desktop Section Navigation */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors flex items-center gap-1.5 px-1 py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6] focus-visible:text-white"
            >
              <span className="text-[#71717A] text-[10px]">{link.index}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Status & Resume Action */}
        <div className="hidden md:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 bg-[#1F1F22] border border-[#27272A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
            <span className="font-mono text-[11px] text-[#A1A1AA] tracking-wide uppercase whitespace-nowrap">
              Open to Opportunities
            </span>
          </div>

          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-wider uppercase px-3 py-1.5 bg-[#1F1F22] border border-[#27272A] text-[#FAFAFA] hover:border-[#4F46E5] hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6]"
            aria-label="View Resume on Google Docs (opens in a new tab)"
          >
            <span>Resume</span>
            <span className="text-[#3B82F6]">↗</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-wider uppercase px-2.5 py-1 bg-[#1F1F22] border border-[#27272A] text-[#FAFAFA] hover:text-white transition-colors flex items-center gap-1"
            aria-label="Resume (opens in a new tab)"
          >
            <span>CV</span>
            <span className="text-[#3B82F6]">↗</span>
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="px-3 py-1 bg-[#1F1F22] border border-[#27272A] text-[#FAFAFA] hover:border-[#4F46E5] transition-colors font-mono text-xs flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6]"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span>{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
            <span className="text-[#3B82F6]">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Panel */}
      {isMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-b border-[#27272A] bg-[#131316] px-6 py-5"
        >
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-wider text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors flex items-center justify-between py-2 px-1 border-b border-[#1F1F22] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6] focus-visible:text-white"
              >
                <span>{link.label}</span>
                <span className="text-[#71717A] text-[11px]">{link.index}</span>
              </a>
            ))}

            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="font-mono text-xs uppercase tracking-wider text-[#FAFAFA] hover:text-white transition-colors flex items-center justify-between py-2 pt-3 px-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6] focus-visible:text-white"
              aria-label="View Resume on Google Docs (opens in a new tab)"
            >
              <span>Resume</span>
              <span className="text-[#3B82F6]">↗</span>
            </a>

            <div className="pt-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
              <span className="font-mono text-[11px] text-[#71717A] uppercase tracking-wide">
                Open to Opportunities
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
