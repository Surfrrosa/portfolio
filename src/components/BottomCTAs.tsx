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

  const linkClass =
    "text-accent-teal hover:text-accent-teal/80 font-medium relative glitch-hover " +
    "transition-[opacity,transform,filter,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] " +
    "focus:outline-none focus:ring-2 focus:ring-accent-teal/60 focus:ring-offset-2 focus:ring-offset-black " +
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 " +
    "after:bg-accent-teal after:transition-all after:duration-300 after:ease-out " +
    "hover:after:w-full hover:after:bg-accent-teal/80";

  const hidden = "opacity-0 translate-y-5 blur-[4px] motion-reduce:opacity-0 motion-reduce:translate-y-0 motion-reduce:blur-0";
  const shown = "opacity-100 translate-y-0 blur-0 motion-reduce:opacity-100";

  return (
    <div
      ref={ref}
      className="flex justify-center gap-16 lg:gap-24"
      aria-label="Quick actions"
    >
      <a
        href="/work"
        className={`${linkClass} ${visible ? shown : hidden}`}
      >
        View My Work →
      </a>
      <a
        href="/contact"
        className={`${linkClass} ${visible ? shown : hidden}`}
        style={{ transitionDelay: visible ? "200ms" : "0ms" }}
      >
        Get in Touch →
      </a>
      <a
        href="/Shaina_Pauley_Resume.pdf"
        download
        className={`${linkClass} inline-flex items-center gap-2 ${visible ? shown : hidden}`}
        style={{ transitionDelay: visible ? "400ms" : "0ms" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Resume
      </a>
    </div>
  );
}
