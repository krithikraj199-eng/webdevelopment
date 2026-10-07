import React from 'react';

interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: string;
  positioning: string;
  roleBadge: string;
  maturityBadge?: string;
  description: string;
  highlightText: string;
  techStack: string[];
  reverseLayout: boolean;
  visualComponent: React.ReactNode;
}

export const SelectedWork: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      id: 'entity-resolution',
      index: '01',
      title: 'Business Entity Resolution System',
      category: 'Machine Learning Engineering & Entity Matching',
      positioning: 'Algorithmic Record Linkage & Multi-Signal Feature Pipeline',
      roleBadge: 'Feature Engineering & Matching Core — Team Project',
      description:
        'Engineered the algorithmic feature extraction and machine learning matching component for a large-scale business entity matching pipeline. Extracts multi-signal similarity features across names, addresses, and structured fields to score and reconcile ambiguous records with LightGBM.',
      highlightText:
        '100 automated tests passing across matching, feature-engineering, and integration contracts.',
      techStack: ['Python', 'LightGBM', 'Scikit-learn', 'TF-IDF', 'PyTest'],
      reverseLayout: false,
      visualComponent: (
        <div className="bg-[#151518] border border-[#27272A] p-5 lg:p-6 font-mono text-xs select-none">
          {/* Visual Header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#27272A] text-[11px]">
            <span className="text-[#A1A1AA] uppercase tracking-wider">FEATURE &amp; MATCHING FLOW</span>
            <span className="text-[#3B82F6] font-medium">100 TESTS PASSING</span>
          </div>

          {/* Pipeline Step 1 */}
          <div className="mb-3">
            <div className="px-3 py-2 bg-[#1F1F22] border border-[#27272A] text-[#FAFAFA] flex items-center justify-between text-[11px]">
              <span>Candidate Record Pair [A, B]</span>
              <span className="text-[#71717A] text-[10px]">INPUT</span>
            </div>
          </div>

          {/* Pipeline Step 2 (Parallel feature extractors) */}
          <div className="pl-3 border-l border-[#27272A] space-y-2 mb-3 my-2">
            <div className="p-2 bg-[#19191D] border border-[#27272A] text-[11px]">
              <span className="text-[#3B82F6] block mb-0.5 font-medium">Name Similarity Signals</span>
              <span className="text-[#A1A1AA] text-[10px] block">Levenshtein Edit Distance · Jaccard Token Overlap</span>
            </div>
            <div className="p-2 bg-[#19191D] border border-[#27272A] text-[11px]">
              <span className="text-[#3B82F6] block mb-0.5 font-medium">Address &amp; Spatial Overlap</span>
              <span className="text-[#A1A1AA] text-[10px] block">Postal-Code-Aware Constraints · TF-IDF Vectors</span>
            </div>
            <div className="p-2 bg-[#19191D] border border-[#27272A] text-[11px]">
              <span className="text-[#3B82F6] block mb-0.5 font-medium">Structured Heuristics</span>
              <span className="text-[#A1A1AA] text-[10px] block">Exact Identifiers · Numeric Overlap Deltas</span>
            </div>
          </div>

          {/* Pipeline Step 3 (Classifier) */}
          <div className="mb-3">
            <div className="px-3 py-2 bg-[#1F1F22] border border-[#27272A] text-[#FAFAFA] flex items-center justify-between text-[11px]">
              <span>LightGBM Gradient Boosted Trees</span>
              <span className="text-[#71717A] text-[10px]">SCORING MODEL</span>
            </div>
          </div>

          {/* Pipeline Step 4 (Output) */}
          <div className="pt-2 border-t border-[#27272A] flex items-center justify-between text-[11px]">
            <span className="text-[#A1A1AA]">Scored Match Decision</span>
            <span className="text-[#FAFAFA] font-medium">[ PROBABILITY &gt; THRESHOLD ]</span>
          </div>
        </div>
      ),
    },
    {
      id: 'crop-disease-ai',
      index: '02',
      title: 'AI Crop Disease & Soil Intelligence System',
      category: 'Computer Vision & Agricultural IoT',
      positioning: 'Computer Vision Diagnostics & Agricultural IoT',
      roleBadge: 'End-to-End System Development',
      maturityBadge: 'Multimodal AI + IoT Prototype',
      description:
        'An integrated agricultural diagnostic platform combining a deep learning vision pipeline for leaf pathology identification and 0–100% severity estimation with an ESP32 / Arduino-based setup measuring soil and ambient conditions.',
      highlightText:
        'Photo · Video · Live Camera analysis combined with physical soil and environment sensing.',
      techStack: ['Python', 'TensorFlow/Keras', 'OpenCV', 'ESP32/Arduino', 'IoT'],
      reverseLayout: true,
      visualComponent: (
        <div className="bg-[#151518] border border-[#27272A] p-5 lg:p-6 font-mono text-xs select-none">
          {/* Visual Header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#27272A] text-[11px]">
            <span className="text-[#A1A1AA] uppercase tracking-wider">DUAL STREAM: VISION + SENSORS</span>
            <span className="text-[#3B82F6] font-medium">INTEGRATED PROTO</span>
          </div>

          {/* Stream 1: Vision Pipeline */}
          <div className="mb-4">
            <span className="text-[10px] text-[#71717A] uppercase tracking-wider block mb-1">
              Stream 01 // Computer Vision
            </span>
            <div className="p-2.5 bg-[#19191D] border border-[#27272A] space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between text-[#A1A1AA]">
                <span>Input: Photo / Video / Live Camera</span>
                <span className="text-[10px]">INGEST</span>
              </div>
              <div className="text-[#FAFAFA] font-medium flex items-center gap-1.5">
                <span className="text-[#3B82F6]">↓</span>
                <span>CNN Plant Pathology Classifier</span>
              </div>
              <div className="text-[#3B82F6] text-[10px] pt-1 border-t border-[#27272A]">
                Output: Disease Diagnosis + Severity Estimation (0–100%)
              </div>
            </div>
          </div>

          {/* Stream 2: Hardware Sensor Pipeline */}
          <div>
            <span className="text-[10px] text-[#71717A] uppercase tracking-wider block mb-1">
              Stream 02 // Edge Microcontroller
            </span>
            <div className="p-2.5 bg-[#19191D] border border-[#27272A] space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between text-[#A1A1AA]">
                <span>Soil Moisture · Ambient Temp &amp; Humidity</span>
                <span className="text-[10px]">SENSORS</span>
              </div>
              <div className="text-[#FAFAFA] font-medium flex items-center gap-1.5">
                <span className="text-[#3B82F6]">↓</span>
                <span>ESP32 / Arduino Microcontroller Acquisition</span>
              </div>
              <div className="text-[#3B82F6] text-[10px] pt-1 border-t border-[#27272A]">
                Telemetry Feed &amp; Diagnostic Guidance
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'astravision',
      index: '03',
      title: 'AstraVision',
      category: 'Geospatial Intelligence & Spatial Systems',
      positioning: 'Earth Observation & Agentic Geospatial Intelligence',
      roleBadge: 'Spatial Ingestion & Agent Architecture',
      maturityBadge: 'Prototype / In Development',
      description:
        'An exploratory geospatial AI system combining spatial data, Earth Observation workflows, and agent orchestration. Investigates fusing satellite imagery raster processing with spatial database indexing and LangGraph agent tool execution.',
      highlightText:
        'Conceptual exploration of agentic reasoning over spatial raster and vector pipelines.',
      techStack: ['PyTorch', 'LangGraph', 'FastAPI', 'PostGIS', 'GDAL', 'Rasterio'],
      reverseLayout: false,
      visualComponent: (
        <div className="bg-[#151518] border border-[#27272A] p-5 lg:p-6 font-mono text-xs select-none">
          {/* Visual Header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#27272A] text-[11px]">
            <span className="text-[#A1A1AA] uppercase tracking-wider">CONCEPTUAL ARCHITECTURE</span>
            <span className="text-[#E59838] font-medium text-[10px]">IN DEVELOPMENT</span>
          </div>

          {/* Sequential Step Boxes */}
          <div className="space-y-2 mb-4">
            <div className="p-2 bg-[#19191D] border border-[#27272A] text-[11px] flex items-center justify-between">
              <span className="text-[#FAFAFA]">Earth Observation Satellite Imagery</span>
              <span className="text-[#71717A] text-[10px]">RASTER</span>
            </div>

            <div className="p-2 bg-[#19191D] border border-[#27272A] text-[11px] flex items-center justify-between">
              <span className="text-[#3B82F6]">Spatial Ingestion (GDAL / Rasterio / CRS)</span>
              <span className="text-[#71717A] text-[10px]">TRANSFORM</span>
            </div>

            <div className="p-2 bg-[#19191D] border border-[#27272A] text-[11px] flex items-center justify-between">
              <span className="text-[#FAFAFA]">PostgreSQL + PostGIS Spatial Store</span>
              <span className="text-[#71717A] text-[10px]">DATABASE</span>
            </div>

            <div className="p-2 bg-[#19191D] border border-[#27272A] text-[11px] flex items-center justify-between">
              <span className="text-[#3B82F6]">LangGraph Agent Workflow (Conceptual)</span>
              <span className="text-[#71717A] text-[10px]">AGENT</span>
            </div>
          </div>

          {/* Output Bar */}
          <div className="pt-2 border-t border-[#27272A] flex items-center justify-between text-[11px]">
            <span className="text-[#A1A1AA]">FastAPI Query Endpoint</span>
            <span className="text-[#FAFAFA] font-medium">[ GEOSPATIAL INSIGHTS ]</span>
          </div>
        </div>
      ),
    },
    {
      id: 'ageis',
      index: '04',
      title: 'AGEIS Ω',
      category: 'Systems Modeling & Incident Analysis',
      positioning: 'Incident Dependency Modeling & Remediation Platform',
      roleBadge: 'Frontend Architecture & System Modeling',
      maturityBadge: 'Decoupled Architecture',
      description:
        'Explores digital-twin-style operational relationships to map complex service dependencies, isolate root causes, and evaluate remediation paths across decoupled frontend and backend architectures.',
      highlightText:
        'Decoupled frontend/backend architecture modeling the flow: Incident → Root Cause → Remediation.',
      techStack: ['React', 'TypeScript', 'System Modeling', 'Decoupled Architecture'],
      reverseLayout: true,
      visualComponent: (
        <div className="bg-[#151518] border border-[#27272A] p-5 lg:p-6 font-mono text-xs select-none">
          {/* Visual Header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#27272A] text-[11px]">
            <span className="text-[#A1A1AA] uppercase tracking-wider">INCIDENT REASONING FLOW</span>
            <span className="text-[#3B82F6] font-medium">DECOUPLED ARCH</span>
          </div>

          {/* 3-Stage Core Flow */}
          <div className="space-y-2.5 mb-4">
            <div className="p-2.5 bg-[#19191D] border border-[#27272A] text-[11px]">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[#FAFAFA] font-medium">Stage 01 // Incident Event</span>
                <span className="text-[#71717A] text-[10px]">ANOMALY</span>
              </div>
              <span className="text-[#A1A1AA] text-[10px] block">
                Detection of service disruption or telemetry degradation
              </span>
            </div>

            <div className="p-2.5 bg-[#19191D] border border-[#27272A] text-[11px]">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[#3B82F6] font-medium">Stage 02 // Dependency Analysis</span>
                <span className="text-[#71717A] text-[10px]">DEPENDENCY</span>
              </div>
              <span className="text-[#A1A1AA] text-[10px] block">
                Tracing potential cascading impacts across decoupled service topologies
              </span>
            </div>

            <div className="p-2.5 bg-[#19191D] border border-[#27272A] text-[11px]">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[#FAFAFA] font-medium">Stage 03 // Root Cause &amp; Remediation</span>
                <span className="text-[#71717A] text-[10px]">ACTION</span>
              </div>
              <span className="text-[#A1A1AA] text-[10px] block">
                Isolating origin component and generating prioritized remediation steps
              </span>
            </div>
          </div>

          {/* Output Bar */}
          <div className="pt-2 border-t border-[#27272A] flex items-center justify-between text-[11px]">
            <span className="text-[#A1A1AA]">Client / Backend Contract</span>
            <span className="text-[#FAFAFA] font-medium">[ DECOUPLED INTERFACE ]</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="work" className="w-full relative bg-[#131316]">
      {/* Section Header Band */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8 border-b border-[#27272A]">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-widest whitespace-nowrap">
            [ 02 ]
          </span>
          <span className="h-px w-6 sm:w-8 bg-[#27272A]"></span>
          <span className="font-mono text-[11px] sm:text-xs text-[#A1A1AA] uppercase tracking-widest">
            SELECTED WORK // APPLIED AI &amp; ENGINEERING SYSTEMS
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAFAFA] uppercase">
          [ 02 ] — SELECTED WORK // APPLIED AI &amp; ENGINEERING SYSTEMS
        </h2>
      </div>

      {/* Structural Project Bands */}
      <div className="divide-y divide-[#27272A]">
        {projects.map((project) => (
          <article
            key={project.id}
            className="w-full transition-colors hover:bg-[#16161A]/60"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Desktop Asymmetric Alternation */}
                {project.reverseLayout ? (
                  <>
                    {/* Visual Area (5 cols on Desktop, second on Mobile) */}
                    <div className="order-2 lg:order-1 lg:col-span-5 w-full">
                      {project.visualComponent}
                    </div>

                    {/* Narrative Area (7 cols on Desktop, first on Mobile) */}
                    <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col justify-between">
                      {/* Meta Line */}
                      <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                        <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-wider">
                          [ KR_PRJ // {project.index} ]
                        </span>
                        <span className="font-mono text-[11px] text-[#FAFAFA] px-2 py-0.5 bg-[#1F1F22] border border-[#27272A]">
                          {project.category}
                        </span>
                        <span className="font-mono text-[11px] text-[#A1A1AA] px-2 py-0.5 bg-[#161619] border border-[#27272A]">
                          {project.roleBadge}
                        </span>
                        {project.maturityBadge && (
                          <span className="font-mono text-[11px] text-[#71717A] px-2 py-0.5 border border-[#27272A]">
                            {project.maturityBadge}
                          </span>
                        )}
                      </div>

                      {/* Title & Positioning */}
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FAFAFA] tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-[#3B82F6] uppercase tracking-wider mb-4">
                        {project.positioning}
                      </p>

                      {/* Description */}
                      <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Highlight */}
                      <div className="mb-6 p-3 bg-[#1A1A1E] border-l-2 border-[#3B82F6] text-xs font-mono text-[#FAFAFA]">
                        <span className="text-[#71717A] mr-2">EVIDENCE:</span>
                        <span>{project.highlightText}</span>
                      </div>

                      {/* Tech Stack List */}
                      <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-[#27272A]">
                        <span className="font-mono text-[10px] text-[#71717A] uppercase tracking-wider mr-1">
                          STACK:
                        </span>
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] text-[#A1A1AA] px-2 py-0.5 bg-[#1F1F22] border border-[#27272A]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Narrative Area (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      {/* Meta Line */}
                      <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                        <span className="font-mono text-xs text-[#3B82F6] font-semibold tracking-wider">
                          [ KR_PRJ // {project.index} ]
                        </span>
                        <span className="font-mono text-[11px] text-[#FAFAFA] px-2 py-0.5 bg-[#1F1F22] border border-[#27272A]">
                          {project.category}
                        </span>
                        <span className="font-mono text-[11px] text-[#A1A1AA] px-2 py-0.5 bg-[#161619] border border-[#27272A]">
                          {project.roleBadge}
                        </span>
                        {project.maturityBadge && (
                          <span className="font-mono text-[11px] text-[#71717A] px-2 py-0.5 border border-[#27272A]">
                            {project.maturityBadge}
                          </span>
                        )}
                      </div>

                      {/* Title & Positioning */}
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FAFAFA] tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-[#3B82F6] uppercase tracking-wider mb-4">
                        {project.positioning}
                      </p>

                      {/* Description */}
                      <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Highlight */}
                      <div className="mb-6 p-3 bg-[#1A1A1E] border-l-2 border-[#3B82F6] text-xs font-mono text-[#FAFAFA]">
                        <span className="text-[#71717A] mr-2">EVIDENCE:</span>
                        <span>{project.highlightText}</span>
                      </div>

                      {/* Tech Stack List */}
                      <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-[#27272A]">
                        <span className="font-mono text-[10px] text-[#71717A] uppercase tracking-wider mr-1">
                          STACK:
                        </span>
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] text-[#A1A1AA] px-2 py-0.5 bg-[#1F1F22] border border-[#27272A]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Visual Area (5 cols) */}
                    <div className="lg:col-span-5 w-full">
                      {project.visualComponent}
                    </div>
                  </>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
