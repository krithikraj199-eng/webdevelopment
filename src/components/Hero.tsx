import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full border-b border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-16 lg:pt-20 lg:pb-24">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-widest whitespace-nowrap">
            [ 01 ]
          </span>
          <span className="h-px w-6 sm:w-8 bg-[#27272A]"></span>
          <span className="font-mono text-[11px] sm:text-xs text-[#A1A1AA] uppercase tracking-widest">
            Personal Engineering Folio
          </span>
        </div>

        {/* Monumental Personal Name */}
        <div className="mb-5">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-[#FAFAFA] uppercase leading-[0.95] sm:leading-[0.92]">
            KIRUTHICKRAJ
          </h1>
        </div>

        {/* Clear Positioning */}
        <div className="flex items-center gap-4 flex-wrap mb-10">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#1F1F22] border border-[#27272A]">
            <span className="w-1.5 h-1.5 bg-[#4F46E5]"></span>
            <span className="font-display text-lg sm:text-xl lg:text-2xl font-medium text-[#FAFAFA] tracking-tight">
              AI & Data Science Engineer
            </span>
          </div>
          <span className="font-mono text-xs text-[#71717A] tracking-wider uppercase hidden sm:inline">
            // B.Tech Artificial Intelligence & Data Science
          </span>
        </div>

        {/* Asymmetric Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-8 border-t border-[#27272A]">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="font-sans text-lg sm:text-xl text-[#FAFAFA] leading-relaxed font-normal mb-4 max-w-2xl">
                B.Tech student in Artificial Intelligence &amp; Data Science focused on building practical AI, data, and software systems.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-8 max-w-xl">
                I work through hands-on projects that translate analytical concepts and machine learning models into reliable, functional code.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 flex-wrap pt-2">
              <a
                href="#work"
                className="font-mono text-xs tracking-wider uppercase px-5 py-3 bg-[#FAFAFA] text-[#131316] font-semibold hover:bg-[#3B82F6] hover:text-white transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6]"
              >
                <span>View Selected Work</span>
                <span>↓</span>
              </a>
              <a
                href="#contact"
                className="font-mono text-xs tracking-wider uppercase px-5 py-3 bg-[#1F1F22] border border-[#27272A] text-[#FAFAFA] hover:border-[#4F46E5] hover:text-white transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6]"
              >
                <span>Contact Me</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Technical Specification Rail (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#27272A] pt-8 lg:pt-0 lg:pl-10">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#27272A]">
                <span className="font-mono text-xs text-[#FAFAFA] uppercase tracking-wider font-semibold">
                  Core Disciplines
                </span>
                <span className="font-mono text-xs text-[#71717A]">4 Focus Areas</span>
              </div>

              <div className="space-y-5">
                {/* Pillar 01 */}
                <div className="group">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-display font-medium text-base text-[#FAFAFA] group-hover:text-[#3B82F6] transition-colors">
                      Artificial Intelligence
                    </h3>
                    <span className="font-mono text-[11px] text-[#71717A]">01</span>
                  </div>
                  <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">
                    Machine learning models, neural networks, computer vision, and applied NLP solutions.
                  </p>
                </div>

                {/* Pillar 02 */}
                <div className="group">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-display font-medium text-base text-[#FAFAFA] group-hover:text-[#3B82F6] transition-colors">
                      Data Science & Analytics
                    </h3>
                    <span className="font-mono text-[11px] text-[#71717A]">02</span>
                  </div>
                  <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">
                    Exploratory data analysis, statistical modeling, feature engineering, and data insights.
                  </p>
                </div>

                {/* Pillar 03 */}
                <div className="group">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-display font-medium text-base text-[#FAFAFA] group-hover:text-[#3B82F6] transition-colors">
                      Software Engineering
                    </h3>
                    <span className="font-mono text-[11px] text-[#71717A]">03</span>
                  </div>
                  <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">
                    Full-stack web applications, clean API design, algorithmic problem solving, and maintainable code.
                  </p>
                </div>

                {/* Pillar 04 */}
                <div className="group">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-display font-medium text-base text-[#FAFAFA] group-hover:text-[#3B82F6] transition-colors">
                      Cloud & Intelligent Systems
                    </h3>
                    <span className="font-mono text-[11px] text-[#71717A]">04</span>
                  </div>
                  <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">
                    Cloud deployment, containerization, reproducible pipelines, and system integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Signature Identifier */}
            <div className="mt-8 pt-4 border-t border-[#27272A] flex items-center justify-between text-[#71717A] font-mono text-xs">
              <span>DISCIPLINE // AI & DATA SYSTEMS</span>
              <span className="text-[#A1A1AA]">KR // 01</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recruiter-Focused Information Strip */}
      <div className="border-t border-[#27272A] bg-[#1F1F22]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#27272A]">
          <div className="py-4 pr-4">
            <span className="font-mono text-[10px] text-[#71717A] uppercase tracking-wider block mb-1">
              Education
            </span>
            <span className="font-sans text-xs sm:text-sm text-[#FAFAFA] font-medium block">
              B.Tech in AI & Data Science
            </span>
          </div>

          <div className="py-4 md:px-4">
            <span className="font-mono text-[10px] text-[#71717A] uppercase tracking-wider block mb-1">
              Specialization
            </span>
            <span className="font-sans text-xs sm:text-sm text-[#FAFAFA] font-medium block">
              AI, Data & Software
            </span>
          </div>

          <div className="py-4 md:px-4">
            <span className="font-mono text-[10px] text-[#71717A] uppercase tracking-wider block mb-1">
              Core Tech
            </span>
            <span className="font-sans text-xs sm:text-sm text-[#FAFAFA] font-medium block">
              Python, Java, React
            </span>
          </div>

          <div className="py-4 md:pl-4">
            <span className="font-mono text-[10px] text-[#71717A] uppercase tracking-wider block mb-1">
              Availability
            </span>
            <span className="font-sans text-xs sm:text-sm text-[#FAFAFA] font-medium block flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
              <span>Open to Opportunities</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
