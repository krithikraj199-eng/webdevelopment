import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full relative bg-[#131316] border-b border-[#27272A]">
      {/* Section Header Band */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8 border-b border-[#27272A]">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-widest whitespace-nowrap">
            [ 05 ]
          </span>
          <span className="h-px w-6 sm:w-8 bg-[#27272A]"></span>
          <span className="font-mono text-[11px] sm:text-xs text-[#A1A1AA] uppercase tracking-widest">
            PROFESSIONAL &amp; TEAM PRACTICE
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAFAFA] uppercase">
          [ 05 ] — EXPERIENCE
        </h2>
      </div>

      {/* Part A: Professional Internship (Primary Entry) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 border-b border-[#27272A]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column (4 cols): Type, Organization, Role, Duration */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-wider block mb-2">
              [ FORMAL INTERNSHIP ]
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAFA] tracking-tight uppercase mb-2">
              Study Shinee Software Solution
            </h3>
            <div className="flex items-center gap-2.5 font-mono text-xs text-[#A1A1AA] flex-wrap">
              <span className="text-[#FAFAFA] font-medium">Java Intern</span>
              <span>·</span>
              <span className="px-2 py-0.5 bg-[#1F1F22] border border-[#27272A] text-[#3B82F6]">
                25 Days
              </span>
            </div>
          </div>

          {/* Right Column (8 cols): Description & Practice Stack */}
          <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-[#27272A] lg:pl-10">
            <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-2xl">
              Completed a 25-day Java internship focused on core Java programming and object-oriented programming fundamentals. Strengthened practical coding, debugging, and problem-solving skills through structured programming exercises.
            </p>

            <div className="pt-4 border-t border-[#27272A] flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 font-mono text-xs">
              <span className="text-[#71717A] text-[11px] uppercase tracking-wider min-w-[95px]">
                CORE PRACTICE:
              </span>
              <span className="text-[#FAFAFA] leading-relaxed font-medium">
                Java · Object-Oriented Programming · Debugging · Problem Solving
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Part B: Selected Collaborative Engineering Subsection */}
      <div className="w-full">
        {/* Subsection Header Band */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 border-b border-[#27272A] flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#71717A] uppercase tracking-widest">
              SELECTED COLLABORATIVE ENGINEERING
            </span>
            <span className="h-px w-6 sm:w-8 bg-[#27272A]"></span>
            <span className="font-mono text-[11px] text-[#A1A1AA] uppercase tracking-wider">
              DEFINED TEAM RESPONSIBILITIES
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#71717A]">
            02 PROJECT ROLES
          </span>
        </div>

        {/* 2 Collaborative Project Rows */}
        <div className="divide-y divide-[#27272A]">
          {/* Collaboration 01: Business Entity Resolution System */}
          <div className="w-full transition-colors duration-150 hover:bg-[#16161A]/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                {/* Left (4 cols): Project & Defined Role */}
                <div className="lg:col-span-4 flex flex-col justify-start">
                  <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-wider block mb-2">
                    [ TEAM PROJECT // 01 ]
                  </span>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-[#FAFAFA] tracking-tight uppercase mb-2">
                    Business Entity Resolution System
                  </h4>
                  <span className="font-mono text-[11px] text-[#A1A1AA] inline-block px-2 py-0.5 bg-[#1F1F22] border border-[#27272A] w-fit">
                    Feature Engineering &amp; Matching Core — Team Project
                  </span>
                </div>

                {/* Right (8 cols): Contribution, Evidence, Stack */}
                <div className="lg:col-span-8 space-y-4 lg:border-l lg:border-[#27272A] lg:pl-10">
                  <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed max-w-2xl">
                    Responsible for the feature-engineering and matching module within a multi-member business entity resolution system. Built name, address, and structured similarity features using Levenshtein, Jaccard, TF-IDF, numeric overlap, and postal-code-aware matching, with LightGBM training and integration contracts.
                  </p>

                  <div className="p-3 bg-[#1A1A1E] border-l-2 border-[#3B82F6] text-xs font-mono text-[#FAFAFA]">
                    <span className="text-[#71717A] mr-2">EVIDENCE:</span>
                    <span>100 automated tests passing across matching, feature-engineering, and integration contracts.</span>
                  </div>

                  <div className="pt-3 border-t border-[#27272A] flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 font-mono text-xs">
                    <span className="text-[#71717A] text-[11px] uppercase tracking-wider min-w-[95px]">
                      STACK:
                    </span>
                    <span className="text-[#FAFAFA] leading-relaxed">
                      Python · LightGBM · Scikit-learn · PyTest
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collaboration 02: PackGuard AI */}
          <div className="w-full transition-colors duration-150 hover:bg-[#16161A]/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                {/* Left (4 cols): Project & Defined Role */}
                <div className="lg:col-span-4 flex flex-col justify-start">
                  <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-wider block mb-2">
                    [ TEAM PROJECT // 02 ]
                  </span>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-[#FAFAFA] tracking-tight uppercase mb-2">
                    PackGuard AI
                  </h4>
                  <span className="font-mono text-[11px] text-[#A1A1AA] inline-block px-2 py-0.5 bg-[#1F1F22] border border-[#27272A] w-fit">
                    Consumer Frontend / UI — Team Project
                  </span>
                </div>

                {/* Right (8 cols): Contribution & Stack */}
                <div className="lg:col-span-8 space-y-4 lg:border-l lg:border-[#27272A] lg:pl-10">
                  <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed max-w-2xl">
                    Responsible for the consumer-facing frontend and interface flow within a multi-member packaged-commodity compliance platform. My scope covered the user experience for upload / scan workflows, compliance result presentation, complaint flow, history, and supporting interface states.
                  </p>

                  <div className="pt-3 border-t border-[#27272A] flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 font-mono text-xs">
                    <span className="text-[#71717A] text-[11px] uppercase tracking-wider min-w-[95px]">
                      STACK:
                    </span>
                    <span className="text-[#FAFAFA] leading-relaxed">
                      React · Vite · Frontend Architecture · UI Integration
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
