const branches = [
  {
    name: "Talak Mahal",
    line1: "Talak Mahal, Kanpur",
    line2: "Uttar Pradesh — 208001",
    hours: "Open daily · 8 AM — 11 PM",
    tag: "The Flagship",
  },
  {
    name: "Becon Ganj",
    line1: "Becon Ganj, Near Aisha Siddiqa School",
    line2: "Kanpur, Uttar Pradesh — 208001",
    hours: "Open daily · 8 AM — 11 PM",
    tag: "The Second Home",
  },
];

export function Locations() {
  return (
    <section id="locations" className="overflow-x-hidden bg-white py-28 md:py-40">
      <div className="mx-auto w-full max-w-[1600px] overflow-hidden px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-12 gap-8 items-end mb-20">
          <div className="col-span-12 min-w-0 lg:col-span-8">
            <p className="eyebrow text-[color:var(--crimson)]">Find Us</p>
            <h2 className="mt-6 break-words font-display text-[clamp(2.25rem,9vw,6rem)] md:text-8xl leading-[0.95] tracking-tight">
              Two doors. <br />
              <span className="font-script text-[color:var(--crimson)]">One</span> family.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {branches.map((b, i) => (
            <div
              key={b.name}
              className={`group relative min-w-0 border border-black p-6 sm:p-8 md:p-16 ${i === 0 ? "lg:border-r-0" : ""} hover:bg-[color:var(--ink)] hover:text-white transition-colors duration-500`}
            >
              <span className="eyebrow text-[color:var(--crimson)] group-hover:text-[color:var(--gold)] transition-colors">{b.tag}</span>
              <h3 className="mt-6 break-words font-display text-[clamp(2.5rem,13vw,4.5rem)] md:text-7xl leading-none">{b.name}</h3>
              <div className="mt-10 space-y-1 text-neutral-700 group-hover:text-white/80 transition-colors">
                <p>{b.line1}</p>
                <p>{b.line2}</p>
              </div>
              <p className="mt-6 eyebrow text-neutral-500 group-hover:text-white/60 transition-colors">{b.hours}</p>

              <div className="mt-12 flex items-center gap-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.name + " Kanpur")}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-3 eyebrow underline-offset-8 hover:underline"
                >
                  Get Directions <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
