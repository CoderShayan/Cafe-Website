const items = [
  "Rasgulla", "Rasmalai", "Famous Lassi", "Royal Biryani", "Mithai",
  "Chicken Burger", "Cakes", "Bakery", "Sweets Boxes",
];

export function Marquee() {
  const loop = [...items, ...items, ...items];
  return (
    <section aria-hidden className="bg-[color:var(--crimson)] text-white py-5 overflow-hidden border-y-2 border-black">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-3xl md:text-5xl">
            {t}
            <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 md:h-8 md:w-8 text-white/80 shrink-0" fill="currentColor">
              <path d="M17.5 3a9 9 0 1 0 3.5 17.3A11 11 0 0 1 17.5 3z" />
            </svg>
          </span>
        ))}
      </div>
    </section>
  );
}
