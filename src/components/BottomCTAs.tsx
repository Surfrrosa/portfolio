"use client";

import React, { useEffect, useRef, useState } from "react";

export default function BottomCTAs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const buttonClass =
    "group relative px-10 py-6 text-xl font-bold rounded-xl " +
    "transition-all duration-300 ease-out " +
    "focus:outline-none focus:ring-4 focus:ring-teal-400/40 focus:ring-offset-2 focus:ring-offset-black " +
    "hover:scale-105 hover:shadow-2xl active:scale-95";

  const hidden = "opacity-0 translate-y-8 blur-[6px] motion-reduce:opacity-0 motion-reduce:translate-y-0 motion-reduce:blur-0";
  const shown = "opacity-100 translate-y-0 blur-0 motion-reduce:opacity-100";

  return (
    <div
      ref={ref}
      className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8"
      aria-label="Quick actions"
    >
      <a
        href="/work"
        className={`${buttonClass} ${visible ? shown : hidden} bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white shadow-lg shadow-teal-500/30`}
      >
        <span className="flex items-center gap-3">
          View My Work
          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </a>
      <a
        href="/contact"
        className={`${buttonClass} ${visible ? shown : hidden} bg-zinc-800 hover:bg-zinc-700 text-teal-400 border-2 border-teal-500/50 hover:border-teal-400 shadow-lg shadow-zinc-900/50`}
        style={{ transitionDelay: visible ? "150ms" : "0ms" }}
      >
        <span className="flex items-center gap-3">
          Get in Touch
          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </a>
    </div>
  );
}
