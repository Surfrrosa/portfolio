"use client";
import React from "react";

export default function PomodoroMedia() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    // @ts-ignore older browsers
    m.addEventListener ? m.addEventListener("change", handler) : m.addListener(handler);
    return () => {
      // @ts-ignore older browsers
      m.removeEventListener ? m.removeEventListener("change", handler) : m.removeListener(handler);
    };
  }, []);

  return (
    <section
      className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3"
      aria-label="Pomodoro Flow demo"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/60">
        {reduced ? (
          <img
            src="/media/pomodoro/poster.jpg"
            alt="Pomodoro Flow timer preview"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/media/pomodoro/poster.jpg"
          >
            <source src="/media/pomodoro/loop.webm" type="video/webm" />
            <source src="/media/pomodoro/loop.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-xs text-zinc-400">
          Radical simplicity — 25/5
        </p>
        <a
          aria-disabled
          role="button"
          className="inline-flex items-center gap-1 rounded-lg bg-teal-500/90 px-3 py-1.5 text-sm font-medium text-white hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
          title="Live demo coming soon"
        >
          Try It Live →
        </a>
      </div>
    </section>
  );
}
