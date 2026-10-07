import React from 'react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="w-full relative bg-[#131316] border-b border-[#27272A]">
      {/* Section Header Band */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8 border-b border-[#27272A]">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-widest whitespace-nowrap">
            [ 06 ]
          </span>
          <span className="h-px w-6 sm:w-8 bg-[#27272A]"></span>
          <span className="font-mono text-[11px] sm:text-xs text-[#A1A1AA] uppercase tracking-widest">
            ACADEMIC FOUNDATION
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAFAFA] uppercase">
          [ 06 ] — EDUCATION
        </h2>
      </div>

      {/* Primary Education Entry: B.Tech (Level 1) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 border-b border-[#27272A]">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-14 items-start">
          {/* Left Column (4 cols on desktop) */}
          <div className="contents lg:flex lg:flex-col lg:col-span-4 justify-start">
            <div className="order-1 lg:order-none mb-1 lg:mb-2">
              <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-wider block">
                [ UNDERGRADUATE DEGREE ]
              </span>
            </div>

            <div className="order-4 lg:order-none mb-2 lg:mb-3">
              <span className="font-mono text-xs text-[#71717A]">
                Coimbatore, Tamil Nadu
              </span>
            </div>

            <div className="order-5 lg:order-none flex items-center gap-2.5 font-mono text-xs text-[#A1A1AA] flex-wrap mb-4 lg:mb-0">
              <span className="text-[#FAFAFA] font-medium">2024 — 2028</span>
              <span>·</span>
              <span className="px-2 py-0.5 bg-[#1F1F22] border border-[#27272A] text-[#3B82F6]">
                Currently Pursuing
              </span>
            </div>
          </div>

          {/* Right Column (8 cols on desktop) */}
          <div className="contents lg:flex lg:flex-col lg:col-span-8 lg:border-l lg:border-[#27272A] lg:pl-10 space-y-5 lg:space-y-6">
            <div className="order-2 lg:order-none">
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#FAFAFA] tracking-tight uppercase leading-snug">
                B.Tech in Artificial Intelligence &amp; Data Science
              </h3>
            </div>

            <div className="order-3 lg:order-none">
              <p className="font-sans text-base sm:text-lg text-[#A1A1AA] font-normal">
                V.S.B College of Engineering Technical Campus
              </p>
            </div>

            <div className="order-6 lg:order-none pt-1 lg:pt-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1A1A1E] border border-[#27272A] font-mono text-xs text-[#FAFAFA]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
                <span className="font-semibold tracking-wide">CGPA: 8.47 / 10</span>
              </div>
            </div>

            <div className="order-7 lg:order-none pt-4 border-t border-[#27272A] flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 font-mono text-xs">
              <span className="text-[#71717A] text-[11px] uppercase tracking-wider min-w-[125px]">
                TECHNICAL FOCUS:
              </span>
              <span className="text-[#FAFAFA] leading-relaxed font-medium">
                Artificial Intelligence · Data Science · Machine Learning · Software Engineering · Data Analytics
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Prior Academic Record Subsection (Level 2) */}
      <div className="w-full">
        {/* Subsection Header Band */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 border-b border-[#27272A] flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#71717A] uppercase tracking-widest">
              PRIOR ACADEMIC RECORD
            </span>
            <span className="h-px w-6 sm:w-8 bg-[#27272A]"></span>
            <span className="font-mono text-[11px] text-[#A1A1AA] uppercase tracking-wider">
              SECONDARY QUALIFICATIONS
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#71717A]">
            02 RECORDS
          </span>
        </div>

        {/* Compact Prior Qualification Rows */}
        <div className="divide-y divide-[#27272A]">
          {/* HSC Entry */}
          <div className="w-full transition-colors duration-150 hover:bg-[#16161A]/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 sm:py-7">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 lg:gap-14 items-baseline">
                {/* Left (4 cols on lg): Qualification + completion year */}
                <div className="lg:col-span-4">
                  <h4 className="font-sans text-sm sm:text-base font-semibold text-[#FAFAFA] tracking-tight">
                    Higher Secondary Certificate (HSC)
                  </h4>
                  <span className="hidden lg:block font-mono text-xs text-[#71717A] mt-1">
                    2024
                  </span>
                </div>

                {/* Right (8 cols on lg): Institution + score */}
                <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 sm:gap-4 lg:border-l lg:border-[#27272A] lg:pl-10">
                  <p className="font-sans text-xs sm:text-sm text-[#A1A1AA]">
                    Palani Gounder Higher Secondary School, Pollachi
                  </p>
                  <div className="font-mono text-xs text-[#FAFAFA] flex items-center gap-2">
                    <span className="lg:hidden text-[#71717A]">2024</span>
                    <span className="lg:hidden text-[#71717A]">·</span>
                    <span className="text-[#71717A] hidden lg:inline mr-1">Score:</span>
                    <span className="font-medium text-[#FAFAFA]">86.3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SSLC Entry */}
          <div className="w-full transition-colors duration-150 hover:bg-[#16161A]/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 sm:py-7">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 lg:gap-14 items-baseline">
                {/* Left (4 cols on lg): Qualification + completion year */}
                <div className="lg:col-span-4">
                  <h4 className="font-sans text-sm sm:text-base font-semibold text-[#FAFAFA] tracking-tight">
                    Secondary School Leaving Certificate (SSLC)
                  </h4>
                  <span className="hidden lg:block font-mono text-xs text-[#71717A] mt-1">
                    2022
                  </span>
                </div>

                {/* Right (8 cols on lg): Institution + score */}
                <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 sm:gap-4 lg:border-l lg:border-[#27272A] lg:pl-10">
                  <p className="font-sans text-xs sm:text-sm text-[#A1A1AA]">
                    Government Higher Secondary School, Ramanathapuram
                  </p>
                  <div className="font-mono text-xs text-[#FAFAFA] flex items-center gap-2">
                    <span className="lg:hidden text-[#71717A]">2022</span>
                    <span className="lg:hidden text-[#71717A]">·</span>
                    <span className="text-[#71717A] hidden lg:inline mr-1">Score:</span>
                    <span className="font-medium text-[#FAFAFA]">73.4%</span>
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
