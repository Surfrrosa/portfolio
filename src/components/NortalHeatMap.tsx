"use client";
import React, { useState, useEffect } from "react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface Band {
  id: string;
  label: string;
  nodes: Node[];
}

interface Edge {
  from: string;
  to: string;
  label: string;
}

interface HeatMapData {
  bands: Band[];
  edges: Edge[];
}

interface NortalHeatMapProps {
  className?: string;
}

export default function NortalHeatMap({ className = "" }: NortalHeatMapProps) {
  const [data, setData] = useState<HeatMapData | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [hoveredEdge, setHoveredEdge] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; content: string } | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    fetch("/data/nortal-heatmap.json")
      .then(res => res.json())
      .then(setData)
      .catch(console.error);

    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener ? mediaQuery.addEventListener("change", handler) : mediaQuery.addListener(handler);
    return () => {
      mediaQuery.removeEventListener ? mediaQuery.removeEventListener("change", handler) : mediaQuery.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setHoveredNode(null);
        setHoveredEdge(null);
        setTooltip(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!data) return <div className={`${className} animate-pulse bg-white/5 rounded-xl`} />;

  const handleNodeHover = (nodeId: string, event: React.MouseEvent) => {
    setHoveredNode(nodeId);
    const node = data.bands.flatMap(b => b.nodes).find(n => n.id === nodeId);
    if (node) {
      setTooltip({
        x: event.clientX,
        y: event.clientY,
        content: node.label
      });
    }
  };

  const handleNodeLeave = () => {
    setHoveredNode(null);
    setTooltip(null);
  };

  const getRelatedEdges = (nodeId: string) => {
    return data.edges.filter(edge => edge.from === nodeId || edge.to === nodeId);
  };

  const isEdgeActive = (edge: Edge) => {
    return hoveredNode ? (edge.from === hoveredNode || edge.to === hoveredNode) : false;
  };

  return (
    <>
      <div className={`${className} relative`}>
        <svg
          viewBox="0 0 800 240"
          className="w-full h-full"
          role="img"
          aria-label="API Interaction Heat-Map showing data flow between retail systems, T-Mobile APIs, and customer outcomes"
        >
          <rect width="800" height="240" fill="var(--surface)" rx="12" />
          
          {data.bands.map((band, bandIndex) => (
            <g key={band.id}>
              <rect
                x="20"
                y={bandIndex * 80 + 20}
                width="760"
                height="60"
                fill="rgba(255,255,255,0.02)"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
                rx="8"
              />
              <text
                x="30"
                y={bandIndex * 80 + 45}
                fill="#9CA3AF"
                fontSize="12"
                fontWeight="600"
                className="uppercase tracking-wider"
              >
                {band.label}
              </text>
            </g>
          ))}

          <defs>
            <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-teal)" />
              <stop offset="100%" stopColor="#C6FF4D" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {data.edges.map((edge, index) => {
            const fromNode = data.bands.flatMap(b => b.nodes).find(n => n.id === edge.from);
            const toNode = data.bands.flatMap(b => b.nodes).find(n => n.id === edge.to);
            if (!fromNode || !toNode) return null;

            const fromBandIndex = data.bands.findIndex(b => b.nodes.some(n => n.id === edge.from));
            const toBandIndex = data.bands.findIndex(b => b.nodes.some(n => n.id === edge.to));
            
            const x1 = fromNode.x * 760 + 20;
            const y1 = fromBandIndex * 80 + 50;
            const x2 = toNode.x * 760 + 20;
            const y2 = toBandIndex * 80 + 50;

            const isActive = isEdgeActive(edge);
            const opacity = hoveredNode ? (isActive ? 1 : 0.2) : 0.7;

            return (
              <g key={`${edge.from}-${edge.to}`}>
                <path
                  d={`M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2 - 20} ${x2} ${y2}`}
                  fill="none"
                  stroke={isActive ? "url(#edgeGradient)" : "#3A3F46"}
                  strokeWidth={isActive ? "3" : "2"}
                  opacity={opacity}
                  filter={isActive ? "url(#glow)" : "none"}
                  strokeDasharray={prefersReducedMotion ? "none" : "8 4"}
                  className={prefersReducedMotion ? "" : "animate-pulse"}
                  style={{
                    strokeDashoffset: prefersReducedMotion ? 0 : "-12px",
                    animation: prefersReducedMotion ? "none" : "dash 3s linear infinite"
                  }}
                />
              </g>
            );
          })}

          {data.bands.map((band, bandIndex) =>
            band.nodes.map((node) => {
              const isHovered = hoveredNode === node.id;
              const isConnected = hoveredNode ? getRelatedEdges(node.id).length > 0 : false;
              const opacity = hoveredNode ? (isHovered || isConnected ? 1 : 0.3) : 1;

              return (
                <g key={node.id}>
                  <circle
                    cx={node.x * 760 + 20}
                    cy={bandIndex * 80 + 50}
                    r={isHovered ? "8" : "6"}
                    fill={isHovered ? "var(--accent-teal)" : "rgba(255,255,255,0.8)"}
                    stroke={isHovered ? "#C6FF4D" : "var(--accent-teal)"}
                    strokeWidth="2"
                    opacity={opacity}
                    filter={isHovered ? "url(#glow)" : "none"}
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={(e) => handleNodeHover(node.id, e)}
                    onMouseLeave={handleNodeLeave}
                    tabIndex={0}
                    role="button"
                    aria-label={`${node.label} - Press Enter to focus`}
                  />
                  <text
                    x={node.x * 760 + 20}
                    y={bandIndex * 80 + 70}
                    fill="#E8EDF2"
                    fontSize="10"
                    textAnchor="middle"
                    opacity={opacity}
                    className="pointer-events-none"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })
          )}
        </svg>

        <style>{`
          @keyframes dash {
            to {
              stroke-dashoffset: -24px;
            }
          }
        `}</style>
      </div>

      {tooltip && (
        <div
          className="fixed z-50 bg-black/90 text-white px-2 py-1 rounded text-sm pointer-events-none"
          style={{
            left: tooltip.x + 10,
            top: tooltip.y - 30,
          }}
        >
          {tooltip.content}
        </div>
      )}
    </>
  );
}
