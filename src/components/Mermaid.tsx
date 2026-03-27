import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  themeVariables: {
    primaryColor: '#ffffff',
    primaryTextColor: '#0f172a',
    primaryBorderColor: '#cbd5e1',
    lineColor: '#3b82f6',
    secondaryColor: '#f8fafc',
    tertiaryColor: '#f1f5f9',
    fontFamily: 'Inter, sans-serif',
  },
});

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart).then((result) => {
        if (ref.current) {
          ref.current.innerHTML = result.svg;
        }
      });
    }
  }, [chart]);

  return (
    <div className="w-full flex justify-center mermaid-wrapper">
      <style>{`
        .mermaid-wrapper svg {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
        }
        .mermaid-wrapper .edgePath .path {
          stroke: #6366f1 !important;
          stroke-width: 3px !important;
          stroke-dasharray: 15, 10 !important;
          animation: lightning-flow 1.2s linear infinite !important;
          filter: drop-shadow(0px 0px 5px rgba(99, 102, 241, 0.8));
        }
        .mermaid-wrapper .edgePath:nth-child(1) .path { animation-delay: 0.0s !important; }
        .mermaid-wrapper .edgePath:nth-child(2) .path { animation-delay: 0.2s !important; }
        .mermaid-wrapper .edgePath:nth-child(3) .path { animation-delay: 0.4s !important; }
        .mermaid-wrapper .edgePath:nth-child(4) .path { animation-delay: 0.6s !important; }
        .mermaid-wrapper .edgePath:nth-child(5) .path { animation-delay: 0.8s !important; }
        .mermaid-wrapper .edgePath:nth-child(6) .path { animation-delay: 1.0s !important; }
        .mermaid-wrapper .edgePath:nth-child(7) .path { animation-delay: 1.2s !important; }
        .mermaid-wrapper .edgePath:nth-child(8) .path { animation-delay: 1.4s !important; }
        .mermaid-wrapper .edgePath:nth-child(9) .path { animation-delay: 1.6s !important; }
        .mermaid-wrapper .edgePath:nth-child(10) .path { animation-delay: 1.8s !important; }
        .mermaid-wrapper .edgePath:nth-child(11) .path { animation-delay: 2.0s !important; }
        
        .mermaid-wrapper .edgePath .arrowheadPath {
          fill: #6366f1 !important;
          stroke: none !important;
        }
        @keyframes lightning-flow {
          0% { stroke-dashoffset: 25; opacity: 0.5; filter: drop-shadow(0px 0px 2px rgba(99, 102, 241, 0.4)); }
          50% { opacity: 1; filter: drop-shadow(0px 0px 8px rgba(99, 102, 241, 1)); }
          100% { stroke-dashoffset: 0; opacity: 0.5; filter: drop-shadow(0px 0px 2px rgba(99, 102, 241, 0.4)); }
        }
        .mermaid-wrapper .node rect,
        .mermaid-wrapper .node circle,
        .mermaid-wrapper .node ellipse,
        .mermaid-wrapper .node polygon,
        .mermaid-wrapper .node path {
          stroke-width: 2px;
          rx: 8px;
          ry: 8px;
        }
        .mermaid-wrapper .cluster rect {
          fill: #f8fafc !important;
          stroke: #e2e8f0 !important;
          stroke-width: 2px !important;
          rx: 12px !important;
          ry: 12px !important;
        }
        .mermaid-wrapper .cluster-label text {
          fill: #475569 !important;
          font-weight: 600 !important;
          font-size: 14px !important;
        }
      `}</style>
      <div ref={ref} className="w-full flex justify-center" />
    </div>
  );
}
