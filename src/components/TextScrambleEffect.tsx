"use client";
import React, { useEffect, useRef } from "react";

const GLYPHS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

function scramble(el: HTMLElement, finalText: string, duration = 1200) {
  const len = finalText.length;
  const start = performance.now();
  let raf = 0;

  function frame(t: number) {
    const elapsed = t - start;
    const p = Math.min(1, elapsed / duration);

    // Smooth easing curve for more dramatic effect
    const easedP = 1 - Math.pow(1 - p, 4);

    let out = "";
    for (let i = 0; i < len; i++) {
      // More dramatic wave effect - characters settle in smooth waves
      const charProgress = Math.max(0, Math.min(1, (easedP * 1.5) - (i / len) * 0.8));
      const charEased = 1 - Math.pow(1 - charProgress, 3);

      if (charEased > 0.9) {
        out += finalText[i] ?? " ";
      } else if (charEased > 0.1) {
        // Slow down scrambling as we get closer to the final character
        const scrambleSpeed = Math.max(0.1, 1 - charEased);
        out += Math.random() < scrambleSpeed ?
          GLYPHS[Math.floor(Math.random() * GLYPHS.length)] :
          finalText[i] ?? " ";
      } else {
        out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
    }

    el.textContent = out;
    if (p < 1) raf = requestAnimationFrame(frame);
  }

  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(raf);
}

export function TextScrambleEffect({
  lines,
  className = "",
  threshold = 0.6,
  duration = 1200,
  lineStagger = 200,
  id = "hero",
  once = true,
}: {
  lines: string[];
  className?: string;
  threshold?: number;
  duration?: number;
  lineStagger?: number;
  id?: string;
  once?: boolean;
}) {
  const refs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const disabled = process.env.NEXT_PUBLIC_DISABLE_SCRAMBLE === "true";
    if (reduce || disabled) return;

    const key = `scramble:${id}:v1`;
    if (once && sessionStorage.getItem(key)) return;

    const root = refs.current[0]?.closest("[data-scramble-root]");
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        sessionStorage.setItem(key, "1");
        refs.current.forEach((node, idx) => {
          if (!node) return;
          const finalText = node.dataset.text ?? node.textContent ?? "";
          setTimeout(() => scramble(node, finalText, duration), idx * lineStagger);
        });
        io.disconnect();
      },
      { threshold }
    );
    io.observe(root);
    return () => io.disconnect();
  }, [duration, threshold, lineStagger, id, once]);

  return (
    <h1 className={className} data-scramble-root aria-label={lines.join(" ")}>
      {lines.map((text, i) => (
        <React.Fragment key={i}>
          <span
            ref={(el) => { refs.current[i] = el; }}
            data-text={text}
            aria-label={text}
          >
            {text}
          </span>
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </h1>
  );
}
