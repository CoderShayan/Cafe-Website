import { useEffect, useState } from "react";
import logo from "@/assets/chand-logo.png";
import pizza from "@/assets/dishes/pizza-0.png";
import burger from "@/assets/dishes/burger.png";
import lassi from "@/assets/dishes/lassi.png";
import cake from "@/assets/dishes/cake.png";

const DISHES = [
  { src: pizza, name: "Chand Pizza", tag: "Signature" },
  { src: burger, name: "Crispy Chicken Burger", tag: "House Favourite" },
  { src: lassi, name: "Chand Famous Lassi", tag: "The Classic" },
  { src: cake, name: "Patisserie", tag: "From the Bakery" },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % DISHES.length), 3800);
    return () => clearInterval(t);
  }, []);

  const current = DISHES[active];

  return (
    <section
      id="top"
      className="relative w-full max-w-[100vw] bg-white overflow-hidden pt-24 md:pt-28"
    >
      {/* Soft decorative blobs — clipped, no overflow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -left-10 h-[110px] w-[110px] sm:h-[180px] sm:w-[180px] md:h-[280px] md:w-[280px] rounded-full bg-[color:var(--crimson)] opacity-90 blob-float will-change-transform"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-16 left-10 hidden md:block h-2 w-2 rounded-full bg-[color:var(--crimson)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-[42%] hidden lg:block h-3 w-3 rounded-full bg-[color:var(--gold)] animate-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-16 left-10 hidden md:block h-2 w-2 rounded-full bg-[color:var(--crimson)]"
      />

      {/* Logo watermark */}
      <img
        src={logo}
        alt="Chand Sweet"
        aria-hidden
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[520px] opacity-[0.045] mix-blend-multiply z-0 hidden md:block"
      />

      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 overflow-hidden px-5 py-10 sm:px-8 md:px-10 lg:min-h-[calc(100dvh-7rem)] lg:grid-cols-2 lg:gap-6 lg:py-16">
        {/* LEFT — content */}
        <div className="relative z-10 text-center lg:text-left max-w-xl mx-auto lg:mx-0 w-full">
          <div className="inline-flex items-center gap-3 mb-5">
            <span aria-hidden className="h-px w-8 bg-[color:var(--crimson)]" />
            <p className="eyebrow text-[color:var(--crimson)]">A House of Sweetness — Kanpur</p>
          </div>

          <h1
            className="font-display leading-[0.95] tracking-tight text-[clamp(2.5rem,9vw,6rem)] text-[color:var(--ink)] animate-fade-up"
          >
            <span className="block">Eat Sweet,</span>
            <span className="block">
              <span className="text-[color:var(--crimson)]">Eat</span> Royal.
            </span>
          </h1>

          <p
            className="mt-5 sm:mt-6 max-w-md mx-auto lg:mx-0 text-sm sm:text-base text-neutral-700 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            From hand-shaped rasgullas to the famous Chand lassi, wood-fired pizzas to
            royal biryani — a Kanpur legacy plated for every craving.
          </p>

          {/* Dish meta — animates with carousel */}
          <div
            key={`meta-${active}`}
            className="mt-7 flex items-center gap-4 justify-center lg:justify-start animate-fade-up"
          >
            <div className="text-left">
              <p className="eyebrow text-[color:var(--crimson)]">{current.tag}</p>
              <p className="font-display text-2xl sm:text-3xl mt-1 leading-tight">{current.name}</p>
            </div>
          </div>

          <div
            className="mt-7 flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <a href="#collection" className="btn-pill">
              Explore Menu
              <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="btn-pill-ghost">Order Now</a>
          </div>

          {/* Pagination dots */}
          <div className="mt-8 flex items-center gap-2 justify-center lg:justify-start">
            {DISHES.map((d, i) => (
              <button
                key={d.name}
                aria-label={`Show ${d.name}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active ? "w-8 bg-[color:var(--crimson)]" : "w-2 bg-black/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — dish carousel */}
        <div className="relative flex w-full min-w-0 items-center justify-center overflow-hidden">



          <div className="relative aspect-square w-[min(78vw,310px)] max-w-[520px] sm:w-[72vw] md:w-[60vw] lg:w-full">
            {DISHES.map((d, i) => (
              <img
                key={d.name}
                src={d.src}
                alt={d.name}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                width={1024}
                height={1024}
                className={`absolute inset-0 h-full w-full object-contain dish-3d ${
                  i === active ? "dish-in" : "dish-out"
                }`}
              />
            ))}
            {/* shine */}
            <span aria-hidden className="dish-shine">
              <span className="dish-shine-inner" />
            </span>
            <span aria-hidden className="dish-shadow" />
          </div>
        </div>
      </div>

      {/* footer rail */}
      <div className="relative mt-2 border-t border-black/10 pt-5 pb-5 mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 flex items-center justify-between gap-4 text-[10px] tracking-[0.3em] uppercase text-neutral-500">
        <span>Est. Kanpur · UP</span>
        <span className="hidden md:block serif-italic normal-case tracking-normal text-base text-[color:var(--ink)]">
          — Crafted by hand. Loved by generations.
        </span>
        <span>Scroll ↓</span>
      </div>
    </section>
  );
}
