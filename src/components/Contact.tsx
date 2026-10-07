import React from 'react';
import { PROFILE } from '../config/profile';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full relative bg-[#131316] border-b border-[#27272A]">
      {/* Section Header Band */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8 border-b border-[#27272A]">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-widest whitespace-nowrap">
            [ 08 ]
          </span>
          <span className="h-px w-6 sm:w-8 bg-[#27272A]"></span>
          <span className="font-mono text-[11px] sm:text-xs text-[#A1A1AA] uppercase tracking-widest">
            OPPORTUNITIES &amp; COLLABORATION
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAFAFA] uppercase">
          [ 08 ] — CONTACT
        </h2>
      </div>

      {/* Main Architectural Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (approx 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
            <div>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FAFAFA] leading-snug sm:leading-tight mb-6 max-w-2xl">
                Open to conversations around AI, data, and software engineering opportunities.
              </p>
              <p className="font-sans text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl">
                If you’re hiring, collaborating, or reviewing my work, feel free to reach out.
              </p>
            </div>

            {/* Quiet Contextual Metadata: Location & Availability */}
            <div className="pt-8 border-t border-[#27272A] grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#71717A] block mb-2">
                  Location
                </span>
                <span className="font-sans text-sm text-[#FAFAFA] block">
                  {PROFILE.location}
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#71717A] block mb-2">
                  Availability
                </span>
                <div className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
                  <span className="font-sans text-sm text-[#FAFAFA]">
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (approx 5 cols) - Action Rows */}
          <div className="lg:col-span-5 flex flex-col justify-start border-t lg:border-t-0 lg:border-l border-[#27272A] pt-10 lg:pt-0 lg:pl-12">
            <div className="divide-y divide-[#27272A] border-y border-[#27272A] w-full">
              {/* Row 01: Email */}
              <a
                href={`mailto:${PROFILE.email}`}
                className="group flex items-center justify-between py-6 px-3 -mx-3 hover:bg-[#16161A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6]"
                aria-label={`Send Email to ${PROFILE.email}`}
              >
                <div className="flex items-start gap-4 min-w-0 pr-4">
                  <span className="font-mono text-xs text-[#71717A] pt-1 group-hover:text-[#3B82F6] transition-colors shrink-0">
                    01
                  </span>
                  <div className="min-w-0">
                    <span className="font-display font-medium text-base sm:text-lg text-[#FAFAFA] group-hover:text-white transition-colors block">
                      Email
                    </span>
                    <span className="font-mono text-xs text-[#A1A1AA] [overflow-wrap:anywhere] block mt-0.5">
                      {PROFILE.email}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#FAFAFA] group-hover:text-[#3B82F6] transition-colors shrink-0 whitespace-nowrap pl-2">
                  <span>Send Email</span>
                  <span className="inline-block transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
              </a>

              {/* Row 02: LinkedIn */}
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 px-3 -mx-3 hover:bg-[#16161A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6]"
                aria-label="Connect on LinkedIn (opens in a new tab)"
              >
                <div className="flex items-start gap-4 min-w-0 pr-4">
                  <span className="font-mono text-xs text-[#71717A] pt-1 group-hover:text-[#3B82F6] transition-colors shrink-0">
                    02
                  </span>
                  <div className="min-w-0">
                    <span className="font-display font-medium text-base sm:text-lg text-[#FAFAFA] group-hover:text-white transition-colors block">
                      LinkedIn
                    </span>
                    <span className="font-mono text-xs text-[#A1A1AA] block mt-0.5">
                      Professional Profile
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#FAFAFA] group-hover:text-[#3B82F6] transition-colors shrink-0 whitespace-nowrap pl-2">
                  <span>Connect</span>
                  <span className="inline-block transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
              </a>

              {/* Row 03: GitHub */}
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 px-3 -mx-3 hover:bg-[#16161A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6]"
                aria-label="View Code on GitHub (opens in a new tab)"
              >
                <div className="flex items-start gap-4 min-w-0 pr-4">
                  <span className="font-mono text-xs text-[#71717A] pt-1 group-hover:text-[#3B82F6] transition-colors shrink-0">
                    03
                  </span>
                  <div className="min-w-0">
                    <span className="font-display font-medium text-base sm:text-lg text-[#FAFAFA] group-hover:text-white transition-colors block">
                      GitHub
                    </span>
                    <span className="font-mono text-xs text-[#A1A1AA] block mt-0.5">
                      Projects &amp; Code
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#FAFAFA] group-hover:text-[#3B82F6] transition-colors shrink-0 whitespace-nowrap pl-2">
                  <span>View Code</span>
                  <span className="inline-block transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
              </a>

              {/* Row 04: Resume */}
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 px-3 -mx-3 hover:bg-[#16161A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6]"
                aria-label="View Resume on Google Docs (opens in a new tab)"
              >
                <div className="flex items-start gap-4 min-w-0 pr-4">
                  <span className="font-mono text-xs text-[#71717A] pt-1 group-hover:text-[#3B82F6] transition-colors shrink-0">
                    04
                  </span>
                  <div className="min-w-0">
                    <span className="font-display font-medium text-base sm:text-lg text-[#FAFAFA] group-hover:text-white transition-colors block">
                      Resume
                    </span>
                    <span className="font-mono text-xs text-[#A1A1AA] block mt-0.5">
                      Profile &amp; Experience
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#FAFAFA] group-hover:text-[#3B82F6] transition-colors shrink-0 whitespace-nowrap pl-2">
                  <span>View Resume</span>
                  <span className="inline-block transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
