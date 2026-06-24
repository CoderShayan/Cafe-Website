import lassi from "@/assets/lassi.jpg";
import pizza from "@/assets/pizza.jpg";
import cake from "@/assets/cake01.jpg";
import burger from "@/assets/burger.jpg";

const items = [
  { tag: "Nº 01", title: "Chilled Lassi", note: "Malai · pistachio · strawberry swirl", img: lassi },
  { tag: "Nº 02", title: "Pizza", note: "Artison Dough · Vibrant Veggies · Sizzling Spices", img: pizza },
  { tag: "Nº 03", title: "Signature Cake", note: "Hand-iced · bakery fresh", img: cake },
  { tag: "Nº 04", title: "Chicken Burger", note: "Brioche · crisp · house sauce", img: burger },
];

export function Collection() {
  return (
    <section id="collection" className="overflow-x-hidden bg-white py-28 md:py-40">
      <div className="mx-auto w-full max-w-[1600px] overflow-hidden px-5 sm:px-8 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="min-w-0">
            <p className="eyebrow text-[color:var(--crimson)]">Chapter III — The Collection</p>
            <h2 className="mt-6 max-w-3xl break-words font-display leading-[0.95] tracking-tight text-[clamp(2.25rem,9vw,6rem)] md:text-8xl">
              A curated <span className="font-script text-[color:var(--crimson)]">menu</span>, <br />
              <span className="serif-italic">composed like</span> a memory.
            </h2>
          </div>
          <p className="max-w-sm text-neutral-600 leading-relaxed md:text-right">
            Four chapters of taste, each one shaped over years, each one made to be
            shared with the people you love most.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-x-8 gap-y-16 md:gap-y-20">
          {items.map((p, idx) => (
            <article
              key={p.title}
              className={`col-span-12 min-w-0 md:col-span-6 ${idx % 2 === 1 ? "md:mt-32" : ""}`}
            >
              <div className="group relative overflow-hidden aspect-[4/5] bg-[color:var(--cream)]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain object-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 sm:object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <span className="absolute top-6 left-6 eyebrow text-white mix-blend-difference">{p.tag}</span>
                <span className="absolute bottom-6 right-6 h-10 w-10 rounded-full bg-white text-black grid place-items-center text-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">→</span>
              </div>
              <div className="mt-6 flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="min-w-0 break-words font-display text-3xl sm:text-4xl md:text-5xl">{p.title}</h3>
                <span className="font-script text-2xl text-[color:var(--crimson)]">savour</span>
              </div>
              <p className="mt-2 text-sm text-neutral-600">{p.note}</p>
              <div className="mt-4 h-px w-full bg-black/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
