"use client";

import React, { useEffect, useRef, useState } from "react";

export default function BottomCTAs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const base =
    "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium " +
    "border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-sm " +
    "transition-[opacity,transform,filter] duration-700 " +
    "focus:outline-none focus:ring-2 focus:ring-teal-400/60";

  const hidden = "opacity-0 translate-y-3 blur-sm";
  const shown = "opacity-100 translate-y-0 blur-0";

  return (
    <div
      ref={ref}
      className="mt-10 mb-2 flex justify-center gap-4"
      aria-label="Quick actions"
    >
      <a
        href="/work"
        className={`${base} ${visible ? shown : hidden} motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:blur-0 text-white hover:text-white`}
      >
        View My Work →
      </a>
      <a
        href="/contact"
        className={`${base} ${visible ? shown : hidden} motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:blur-0 text-white hover:text-white`}
        style={{ transitionDelay: visible ? "120ms" : "0ms" }}
      >
        Get in Touch →
      </a>
    </div>
  );
}
