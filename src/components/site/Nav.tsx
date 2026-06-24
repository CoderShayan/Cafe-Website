import { useEffect, useState } from "react";
import logo from "@/assets/chand-logo.png";

const links = [
  { href: "#heritage", label: "Heritage" },
  { href: "#collection", label: "Collection" },
  { href: "#signature", label: "Signature" },
  { href: "#craft", label: "Craft" },
  { href: "#locations", label: "Locations" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-black/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Chand Sweets">
          <img
            src={logo}
            alt="Chand Sweets"
            className="h-10 md:h-12 w-auto"
            style={{
              filter:
                "drop-shadow(1px 0 0 #fff) drop-shadow(-1px 0 0 #fff) drop-shadow(0 1px 0 #fff) drop-shadow(0 -1px 0 #fff) drop-shadow(1px 1px 0 #fff) drop-shadow(-1px -1px 0 #fff) drop-shadow(1px -1px 0 #fff) drop-shadow(-1px 1px 0 #fff)",
            }}
          />
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow text-neutral-700 hover:text-[color:var(--crimson)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex eyebrow items-center gap-2 text-[color:var(--ink)] hover:text-[color:var(--crimson)] transition-colors">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--crimson)] animate-pulse" />
          Order Now
        </a>
        <button
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-px w-6 bg-black transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-black transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-black transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-black/10 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="eyebrow text-neutral-700" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="eyebrow text-[color:var(--crimson)]" onClick={() => setOpen(false)}>Order Now</a>
        </div>
      )}
    </header>
  );
}
