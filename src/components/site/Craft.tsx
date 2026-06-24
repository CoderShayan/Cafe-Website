const pillars = [
  { k: "01", t: "Daily Fresh", d: "Made fresh every morning. Nothing sits longer than the sunrise." },
  { k: "02", t: "Pure Ingredients", d: "Full-cream milk, pure ghee, hand-ground spices. No shortcuts." },
  { k: "03", t: "Slow Method", d: "Copper kadhai, low flame, patient hands. The way it has always been." },
  { k: "04", t: "Consistent Taste", d: "The rasgulla you remember from years ago tastes exactly the same today." },
];

export function Craft() {
  return (
    <section id="craft" className="bg-white py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <h2 className="col-span-12 lg:col-span-8 font-display leading-[0.95] tracking-tight text-[clamp(2.25rem,9vw,6rem)] md:text-8xl">
            The four <span className="font-script text-[color:var(--crimson)]">pillars</span> <br />
            of our kitchen.
          </h2>
          <p className="col-span-12 lg:col-span-4 text-neutral-600 leading-relaxed">
            Quality is not a promise we make. It is a discipline we practice — quietly,
            every single day, in every single batch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-black">
          {pillars.map((p) => (
            <div key={p.k} className="group p-8 lg:p-10 border-b border-black lg:border-b-0 lg:border-r last:border-r-0 hover:bg-[color:var(--ink)] hover:text-white transition-colors duration-500 min-h-[320px] flex flex-col">
              <span className="font-script text-3xl text-[color:var(--crimson)] group-hover:text-[color:var(--gold)] transition-colors">{p.k}</span>
              <h3 className="mt-8 font-display text-3xl">{p.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 group-hover:text-white/70 transition-colors">{p.d}</p>
              <span className="mt-auto pt-8 text-xl">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
