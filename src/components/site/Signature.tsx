import lassi from "@/assets/lassi.jpg";
import biryani from "@/assets/biryani.jpg";
import burger from "@/assets/burger.jpg";

const signatures = [
  {
    num: "I",
    name: "The Famous Lassi",
    sub: "thick · creamy · crowned with malai",
    body: "Churned slow in clay, finished with chilled malai and a whisper of crushed pistachio. The first sip that built our name.",
    img: lassi,
  },
  {
    num: "II",
    name: "The Royal Biryani",
    sub: "saffron · long-grain · slow dum",
    body: "Layered in copper, sealed with dough and slow-cooked over coal. Aromatic, fragrant, unmistakably Chand.",
    img: biryani,
  },
  {
    num: "III",
    name: "The Chicken Burger",
    sub: "brioche · crisp · house sauce",
    body: "A modern indulgence brought into the family — golden, juicy, and made to be devoured the moment it arrives.",
    img: burger,
  },
];

export function Signature() {
  return (
    <section id="signature" className="bg-[color:var(--ink)] text-white py-28 md:py-40 relative overflow-hidden">
      <div aria-hidden className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[color:var(--crimson)] opacity-30 blur-3xl" />
      <div aria-hidden className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[color:var(--crimson)] opacity-20 blur-3xl" />
      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow text-[color:var(--crimson)]">Chapter IV — Signature Trio</p>
          <h2 className="mt-6 font-display leading-[0.95] tracking-tight text-[clamp(2.25rem,9vw,6rem)] md:text-8xl">
            Three <span className="text-[color:var(--crimson)]">icons</span>, <br />
            <span className="serif-italic">one</span> unforgettable house.
          </h2>
        </div>

        <div className="mt-20 space-y-24 md:mt-24 md:space-y-32">
          {signatures.map((s, i) => (
            <article
              key={s.name}
              className={`grid min-w-0 grid-cols-12 items-center gap-8 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="col-span-12 min-w-0 lg:col-span-7">
                <div className="group relative aspect-[5/4] overflow-hidden bg-black/20">
                  <img src={s.img} alt={s.name} loading="lazy" className="absolute inset-0 h-full w-full object-contain object-center transition-transform duration-[1400ms] group-hover:scale-110 sm:object-cover" />
                  <div className="absolute inset-0 ring-1 ring-[color:var(--crimson)]/40" />
                </div>
              </div>
              <div className="col-span-12 min-w-0 lg:col-span-5">
                <p className="font-display text-5xl sm:text-6xl md:text-7xl text-[color:var(--crimson)] leading-none">{s.num}</p>
                <h3 className="mt-4 break-words font-display text-3xl sm:text-4xl md:text-6xl leading-[1.02]">{s.name}</h3>
                <p className="mt-3 serif-italic text-lg sm:text-xl text-white/70">{s.sub}</p>
                <p className="mt-8 text-white/80 leading-relaxed max-w-md">{s.body}</p>
                <div className="mt-10 inline-flex items-center gap-4">
                  <span className="h-px w-12 bg-[color:var(--crimson)]" />
                  <span className="eyebrow text-[color:var(--crimson)]">A House Signature</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
