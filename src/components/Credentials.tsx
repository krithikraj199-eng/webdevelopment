import React from 'react';

export const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="w-full relative bg-[#131316] border-b border-[#27272A]">
      {/* Section Header Band */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8 border-b border-[#27272A]">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-widest whitespace-nowrap">
            [ 07 ]
          </span>
          <span className="h-px w-6 sm:w-8 bg-[#27272A]"></span>
          <span className="font-mono text-[11px] sm:text-xs text-[#A1A1AA] uppercase tracking-widest">
            CERTIFICATIONS, COMMUNITY &amp; PARTICIPATION
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAFAFA] uppercase">
          [ 07 ] — CREDENTIALS &amp; INVOLVEMENT
        </h2>
      </div>

      {/* Confirmed Records List */}
      <div className="divide-y divide-[#27272A]">
        {/* Record 01: Credential */}
        <div className="w-full transition-colors duration-150 hover:bg-[#16161A]/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-14 items-start">
              {/* Left Column (4 cols) */}
              <div className="lg:col-span-4 flex flex-col justify-start">
                <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-wider block mb-2">
                  [ CREDENTIAL ]
                </span>
                <div className="flex items-center gap-2 font-mono text-xs text-[#71717A]">
                  <span>2025</span>
                  <span>·</span>
                  <span>Udemy</span>
                </div>
              </div>

              {/* Right Column (8 cols) */}
              <div className="lg:col-span-8 space-y-3 lg:border-l lg:border-[#27272A] lg:pl-10">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#FAFAFA] tracking-tight">
                    Java Object-Oriented Programming
                  </h3>
                  <span className="font-mono text-xs text-[#A1A1AA]">
                    Udemy · 2025
                  </span>
                </div>
                <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed max-w-2xl">
                  Course credential covering object-oriented programming concepts and core Java application fundamentals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Record 02: Community */}
        <div className="w-full transition-colors duration-150 hover:bg-[#16161A]/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-14 items-start">
              {/* Left Column (4 cols) */}
              <div className="lg:col-span-4 flex flex-col justify-start">
                <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-wider block mb-2">
                  [ COMMUNITY ]
                </span>
                <div className="flex items-center gap-2 font-mono text-xs text-[#71717A]">
                  <span>Member</span>
                  <span>·</span>
                  <span>Professional Body</span>
                </div>
              </div>

              {/* Right Column (8 cols) */}
              <div className="lg:col-span-8 space-y-3 lg:border-l lg:border-[#27272A] lg:pl-10">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#FAFAFA] tracking-tight">
                    Computer Society of India (CSI)
                  </h3>
                  <span className="font-mono text-xs text-[#A1A1AA]">
                    Member
                  </span>
                </div>
                <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed max-w-2xl">
                  Professional computing community membership supporting exposure to technical activities and peer learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Record 03: Technical Participation */}
        <div className="w-full transition-colors duration-150 hover:bg-[#16161A]/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-14 items-start">
              {/* Left Column (4 cols) */}
              <div className="lg:col-span-4 flex flex-col justify-start">
                <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-wider block mb-2">
                  [ PROJECT EXPO ]
                </span>
                <div className="flex items-center gap-2 font-mono text-xs text-[#71717A]">
                  <span>Consumer Frontend / UI</span>
                </div>
              </div>

              {/* Right Column (8 cols) */}
              <div className="lg:col-span-8 space-y-3 lg:border-l lg:border-[#27272A] lg:pl-10">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#FAFAFA] tracking-tight">
                    PackGuard AI
                  </h3>
                  <span className="font-mono text-xs text-[#A1A1AA]">
                    College Project Expo · Team Project
                  </span>
                </div>
                <div className="font-mono text-xs text-[#3B82F6]">
                  Role: Consumer Frontend / UI
                </div>
                <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed max-w-2xl">
                  Presented the consumer-facing workflow of PackGuard AI as part of a team project expo, demonstrating the upload / scan experience, compliance-result interface, and complaint flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
