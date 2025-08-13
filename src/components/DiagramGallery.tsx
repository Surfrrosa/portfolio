import React from "react";

type Item = {
  src: string;
  alt: string;
  label: string;
};

const items = [
  {
    src: "/diagrams/nortal/prepaid_activation.png?v=1755049639",
    alt: "Prepaid activation sequence diagram",
    label: "Prepaid Activation",
  },
  {
    src: "/diagrams/nortal/number_port_in.png?v=1755049639",
    alt: "Number port-in sequence diagram",
    label: "Number Port-In",
  },
  {
    src: "/diagrams/nortal/add_a_line.png?v=1755049639",
    alt: "Add-a-Line sequence diagram",
    label: "Add-a-Line (AAL)",
  },
  {
    src: "/diagrams/nortal/cart_payment_otp.png?v=1755049639",
    alt: "Cart, payment & OTP sequence diagram",
    label: "Cart, Payment & OTP",
  },
] as const;

export default function DiagramGallery() {
  const [active, setActive] = React.useState<Item | null>(null);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="mt-6">
      <div className="text-sm text-zinc-400 mb-2">Diagrams (click to enlarge)</div>

      {/* Thumbnails grid; contained so it won't push outside the card */}
      <div className="grid grid-cols-2 gap-3">
        {items.map((it) => (
          <button
            key={it.src}
            onClick={() => setActive(it)}
            className="group rounded-xl bg-white p-2 shadow-sm ring-1 ring-black/5 hover:shadow-md transition"
            aria-label={`Open ${it.label} diagram`}
          >
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={it.src}
                alt={it.alt}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="mt-1 text-[11px] text-zinc-400 text-center">{it.label}</div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.label} diagram`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl bg-zinc-900/95 shadow-xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <h3 className="text-base font-medium text-zinc-50">{active.label}</h3>
              <div className="flex items-center gap-2">
                {/* Optional: open full size and download */}
                <a
                  href={active.src}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-white/10 px-2 py-1 text-xs text-zinc-100 hover:bg-white/20"
                >
                  Open Full Size
                </a>
                <a
                  href={active.src}
                  download
                  className="rounded-md bg-white/10 px-2 py-1 text-xs text-zinc-100 hover:bg-white/20"
                >
                  Download PNG
                </a>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-md bg-white/10 px-2 py-1 text-xs text-zinc-100 hover:bg-white/20"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Image area with light canvas so diagrams pop */}
            <div className="max-h-[70vh] overflow-auto bg-white p-3">
              <img
                src={active.src}
                alt={active.alt}
                className="mx-auto h-auto w-full object-contain"
              />
            </div>

            {/* Caption / disclaimer */}
            <div className="px-4 py-3 text-xs leading-relaxed text-zinc-300">
              Conceptual diagram illustrating the workflow I managed as Technical Product
              Owner. Labels are generic and do not depict proprietary systems or exact
              production architecture.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
