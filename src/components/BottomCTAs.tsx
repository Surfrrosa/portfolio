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
    "text-teal-400 hover:text-teal-300 font-medium relative " +
    "transition-[opacity,transform,filter,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] " +
    "focus:outline-none focus:ring-2 focus:ring-teal-400/60 focus:ring-offset-2 focus:ring-offset-black " +
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 " +
    "after:bg-teal-400 after:transition-all after:duration-300 after:ease-out " +
    "hover:after:w-full hover:after:bg-teal-300";

  const hidden = "opacity-0 translate-y-5 blur-[4px] motion-reduce:opacity-0 motion-reduce:translate-y-0 motion-reduce:blur-0";
  const shown = "opacity-100 translate-y-0 blur-0 motion-reduce:opacity-100";

  return (
    <div
      ref={ref}
      className="flex justify-center gap-32"
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
    </div>
  );
}
