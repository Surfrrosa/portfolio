"use client";
import React, { useEffect, useRef } from "react";

const GLYPHS = "!<>-_\\/[]{}=+*^?#";

function scramble(el: HTMLElement, finalText: string, duration = 680) {
  const len = finalText.length;
  const start = performance.now();
  let raf = 0;

  function frame(t: number) {
    const p = Math.min(1, (t - start) / duration);
    let out = "";
    for (let i = 0; i < len; i++) {
      const settle = i / len; // progressive settle L→R
      out += p < settle ? GLYPHS[(Math.random()*GLYPHS.length)|0] : (finalText[i] ?? " ");
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
  duration = 680,
  lineStagger = 90,
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
