import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full relative bg-[#131316] border-b border-[#27272A]">
      {/* Section Header Band */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8 border-b border-[#27272A]">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-widest whitespace-nowrap">
            [ 03 ]
          </span>
          <span className="h-px w-6 sm:w-8 bg-[#27272A]"></span>
          <span className="font-mono text-[11px] sm:text-xs text-[#A1A1AA] uppercase tracking-widest">
            ENGINEERING PERSPECTIVE &amp; BACKGROUND
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAFAFA] uppercase">
          [ 03 ] — ABOUT
        </h2>
      </div>

      {/* Main Narrative, Academic Context & Portrait Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Mobile: Order 1 (Portrait first) | Desktop: Order 2 (Right 5 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center lg:items-end justify-start">
            <div className="w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[380px] border border-[#27272A] bg-[#16161A] p-2">
              <div className="aspect-[4/5] overflow-hidden bg-[#1F1F22] border border-[#27272A]/60">
                <img
                  src="/kiruthickraj-profile.jpg"
                  alt="Portrait of Kiruthickraj T"
                  loading="lazy"
                  width={460}
                  height={555}
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02]"
                />
              </div>
              <div className="pt-2.5 pb-1 px-1 flex items-center justify-between border-t border-[#27272A] mt-2 font-mono text-[10px]">
                <span className="tracking-wider uppercase text-[#FAFAFA] font-medium">
                  KIRUTHICKRAJ T
                </span>
                <span className="text-[#71717A] tracking-wider uppercase">
                  AI &amp; DATA SCIENCE
                </span>
              </div>
            </div>
          </div>

          {/* Mobile: Order 2 (Narrative & Foundation) | Desktop: Order 1 (Left 7 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-start space-y-10">
            <div>
              {/* Opening Editorial Statement */}
              <p className="font-display text-xl sm:text-2xl text-[#FAFAFA] leading-snug tracking-tight mb-6 lg:mb-8 font-medium">
                “Engineering intelligence beyond the model—connecting data, machine learning, and software systems into practical, reliable solutions.”
              </p>

              {/* Narrative Body */}
              <div className="space-y-5 font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-2xl">
                <p>
                  I began studying Artificial Intelligence and Data Science with a focus on machine learning, data analysis, and statistical concepts. But as I built practical projects, I realized that a model is only one part of a complete system—it also depends on reliable data, thoughtful feature engineering, clean APIs, and usable interfaces.
                </p>
                <p>
                  That shift expanded my focus. Today, I am learning to connect data, intelligent computation, and software engineering into practical, testable systems rather than stopping at model training alone.
                </p>
              </div>
            </div>

            {/* Academic Foundation Snapshot */}
            <div className="pt-8 border-t border-[#27272A]">
              <div className="pb-3 mb-5 border-b border-[#27272A] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#A1A1AA] uppercase tracking-wider">
                  ACADEMIC FOUNDATION
                </span>
                <span className="font-mono text-[11px] text-[#3B82F6]">
                  ACTIVE ENROLLMENT
                </span>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-sans text-xs sm:text-sm">
                <div className="sm:col-span-2">
                  <dt className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider mb-1">
                    Degree &amp; Institution
                  </dt>
                  <dd className="text-[#FAFAFA] font-medium text-sm sm:text-base">
                    B.Tech in Artificial Intelligence &amp; Data Science
                  </dd>
                  <dd className="text-[#A1A1AA] text-xs mt-0.5">
                    V.S.B College of Engineering Technical Campus
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider mb-1">
                    Timeline
                  </dt>
                  <dd className="font-mono text-xs text-[#FAFAFA]">
                    2024 — 2028
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider mb-1">
                    CGPA
                  </dt>
                  <dd className="font-mono text-xs text-[#FAFAFA] font-semibold">
                    8.47 / 10
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider mb-1">
                    Career Focus
                  </dt>
                  <dd className="text-[#FAFAFA]">
                    AI &amp; Data Science · Software Engineering
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider mb-1">
                    Technical Direction
                  </dt>
                  <dd className="text-[#A1A1AA] text-xs leading-normal">
                    Machine Learning · Data Systems · Full-Stack · Cloud Technologies
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Principles Band (Full 12-column layout) */}
      <div className="border-t border-[#27272A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
          {/* Section Kicker */}
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[11px] text-[#71717A] uppercase tracking-widest">
              CORE PRINCIPLES
            </span>
            <span className="h-px flex-1 bg-[#27272A]"></span>
            <span className="font-mono text-[11px] text-[#71717A]">
              03 STANDARDS
            </span>
          </div>

          {/* 3 Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-[#27272A]">
            {/* Principle 01 */}
            <div className="pt-6 first:pt-0 md:pt-0 md:pr-8">
              <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-wider block mb-3">
                [ PRINCIPLE // 01 ]
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#FAFAFA] tracking-tight uppercase mb-3">
                BUILD TO UNDERSTAND
              </h3>
              <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed">
                Deeper technical understanding comes from implementing practical systems and testing how concepts behave beyond theory.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="pt-6 md:pt-0 md:px-8">
              <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-wider block mb-3">
                [ PRINCIPLE // 02 ]
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#FAFAFA] tracking-tight uppercase mb-3">
                ENGINEER THE WHOLE SYSTEM
              </h3>
              <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed">
                Useful AI depends not only on the model, but also on the data, APIs, interfaces, and software that connect everything together.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="pt-6 md:pt-0 md:pl-8">
              <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-wider block mb-3">
                [ PRINCIPLE // 03 ]
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#FAFAFA] tracking-tight uppercase mb-3">
                GROUND WORK IN EVIDENCE
              </h3>
              <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed">
                Testing, measurable results, honest project maturity, and clear contribution boundaries make technical work more credible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
