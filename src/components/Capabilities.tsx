import React from 'react';

interface CapabilityItem {
  index: string;
  title: string;
  description: string;
  practices: string[];
  coreTech: string[];
  coreLabel?: string;
  supportingTech: string[];
  evidence: string;
}

export const Capabilities: React.FC = () => {
  const capabilities: CapabilityItem[] = [
    {
      index: '01',
      title: 'AI & Machine Learning',
      description:
        'Building machine learning, computer vision, feature-engineering, and intelligent workflow systems across practical project contexts.',
      practices: [
        'Supervised Learning',
        'Deep Learning & CNNs',
        'Feature Engineering',
        'Entity Matching',
        'Computer Vision',
        'Agentic Workflow Exploration',
      ],
      coreTech: ['Python', 'TensorFlow / Keras', 'Scikit-learn', 'LightGBM', 'OpenCV'],
      supportingTech: ['PyTorch', 'LangGraph'],
      evidence: 'Business Entity Resolution System · AI Crop Disease & Soil Intelligence System · AstraVision',
    },
    {
      index: '02',
      title: 'Data & Analytics',
      description:
        'Cleaning, exploring, transforming, and querying data to support analysis, feature engineering, and informed technical decisions.',
      practices: [
        'Exploratory Data Analysis',
        'Data Cleaning & Normalization',
        'Feature Preparation',
        'Relational Querying',
        'Statistical Analysis',
        'Analytical Reporting',
      ],
      coreTech: ['SQL', 'Pandas', 'NumPy', 'PostgreSQL', 'Matplotlib'],
      supportingTech: ['Excel'],
      evidence: 'Business Entity Resolution · Datum Analyser · AI/ML project workflows',
    },
    {
      index: '03',
      title: 'Software Engineering',
      description:
        'Developing modular applications, clean REST APIs, maintainable frontend systems, and tested software components.',
      practices: [
        'Full-Stack Application Development',
        'REST API Design',
        'Client–Server Architecture',
        'Object-Oriented Programming',
        'Automated Testing',
        'Version Control',
      ],
      coreTech: ['Java', 'Python', 'React', 'FastAPI', 'Git / GitHub'],
      supportingTech: ['Vite', 'PyTest', 'Node.js', 'C / C++'],
      evidence: 'AGEIS Ω · Business Entity Resolution · Portfolio architecture · Other full-stack project work',
    },
    {
      index: '04',
      title: 'Cloud, Spatial & Connected Systems',
      description:
        'Working with cloud services, geospatial processing, spatial databases, containers, and connected hardware in project-specific systems.',
      practices: [
        'Cloud Deployment & Service Integration',
        'Container Packaging',
        'Spatial Data Processing',
        'Raster / Vector Handling',
        'Spatial Database Queries',
        'Microcontroller Sensor Integration',
      ],
      coreTech: ['PostgreSQL / PostGIS', 'Docker', 'Google Cloud Platform'],
      coreLabel: 'CONTEXTUAL STACK:',
      supportingTech: ['ESP32 / Arduino', 'GDAL', 'Rasterio', 'GeoPandas'],
      evidence: 'AstraVision · AI Crop Disease & Soil Intelligence System · Cloud-related project work',
    },
  ];

  return (
    <section id="capabilities" className="w-full relative bg-[#131316] border-b border-[#27272A]">
      {/* Section Header Band */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8 border-b border-[#27272A]">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-widest whitespace-nowrap">
            [ 04 ]
          </span>
          <span className="h-px w-6 sm:w-8 bg-[#27272A]"></span>
          <span className="font-mono text-[11px] sm:text-xs text-[#A1A1AA] uppercase tracking-widest">
            ENGINEERING PRACTICE
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAFAFA] uppercase">
          [ 04 ] — CAPABILITIES
        </h2>
      </div>

      {/* 4 Full-Width Structural Index Rows */}
      <div className="divide-y divide-[#27272A]">
        {capabilities.map((item) => (
          <div
            key={item.index}
            className="w-full transition-colors duration-150 hover:bg-[#16161A]/50"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                {/* Left Column (4 cols on Desktop): Index, Title, Description, Applied-Project Evidence */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full">
                  <div>
                    <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-wider block mb-2">
                      [ {item.index} ]
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAFA] tracking-tight uppercase mb-3">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Applied Project Evidence (Human-Readable) */}
                  <div className="pt-4 border-t border-[#27272A]/70 font-sans text-xs">
                    <span className="font-mono text-[10px] text-[#71717A] uppercase tracking-wider block mb-1">
                      Applied in:
                    </span>
                    <span className="text-[#A1A1AA] leading-normal block">
                      {item.evidence}
                    </span>
                  </div>
                </div>

                {/* Right Column (8 cols on Desktop): Practices & Typography-First Technologies */}
                <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-[#27272A] lg:pl-10">
                  {/* Practices List */}
                  <div>
                    <span className="font-mono text-[11px] text-[#71717A] uppercase tracking-widest block mb-3">
                      CORE PRACTICES &amp; WORKFLOWS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.practices.map((practice) => (
                        <span
                          key={practice}
                          className="font-sans text-xs text-[#FAFAFA] bg-[#1A1A1E] border border-[#27272A] px-2.5 py-1"
                        >
                          {practice}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Hierarchy: Typography-First */}
                  <div className="pt-5 border-t border-[#27272A] space-y-3.5 font-mono text-xs">
                    {/* Core Technologies */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                      <span className="text-[#3B82F6] text-[11px] uppercase tracking-wider font-semibold min-w-[95px]">
                        {item.coreLabel || 'CORE TECH:'}
                      </span>
                      <div className="text-[#FAFAFA] leading-relaxed flex flex-wrap gap-x-2 gap-y-1 font-medium">
                        {item.coreTech.map((tech, i) => (
                          <span key={tech} className="inline-flex items-center">
                            <span>{tech}</span>
                            {i < item.coreTech.length - 1 && (
                              <span className="text-[#3F3F46] ml-2 select-none">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Supporting Technologies */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 pt-2 border-t border-[#27272A]/40">
                      <span className="text-[#71717A] text-[11px] uppercase tracking-wider min-w-[95px]">
                        SUPPORTING:
                      </span>
                      <div className="text-[#A1A1AA] leading-relaxed flex flex-wrap gap-x-2 gap-y-1">
                        {item.supportingTech.map((tech, i) => (
                          <span key={tech} className="inline-flex items-center">
                            <span>{tech}</span>
                            {i < item.supportingTech.length - 1 && (
                              <span className="text-[#3F3F46] ml-2 select-none">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
