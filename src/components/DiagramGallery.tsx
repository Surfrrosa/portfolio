import React from "react";

type Item = {
  src: string;
  alt: string;
  label: string;
};

const items: Item[] = [
  {
    src: "/diagrams/nortal/01_prepaid_activation.svg",
    alt: "Prepaid activation sequence diagram",
    label: "Prepaid Activation",
  },
  {
    src: "/diagrams/nortal/02_number_port_in.svg",
    alt: "Number port-in sequence diagram",
    label: "Number Port-In",
  },
  {
    src: "/diagrams/nortal/03_add_a_line.svg",
    alt: "Add-a-Line sequence diagram",
    label: "Add-a-Line",
  },
  {
    src: "/diagrams/nortal/04_cart_payment_otp.svg",
    alt: "Cart, payment & OTP sequence diagram",
    label: "Cart, Payment & OTP",
  },
];

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
            <div className="mt-1 text-xs text-zinc-600">{it.label}</div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.label} full-size diagram`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl bg-zinc-900/90 p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 rounded-md bg-white/10 px-2 py-1 text-sm text-zinc-100 hover:bg-white/20"
              aria-label="Close"
            >
              Close
            </button>
            <div className="max-h-[80vh] overflow-auto rounded-lg bg-white p-2">
              <img
                src={active.src}
                alt={active.alt}
                className="mx-auto h-auto w-full object-contain"
              />
            </div>
            <div className="mt-2 text-center text-sm text-zinc-300">{active.label}</div>
          </div>
        </div>
      )}
    </div>
  );
}
