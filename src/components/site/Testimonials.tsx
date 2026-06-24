const reviews = [
  {
    quote: "Inki Lassi Or biryaani bohot badhiya lagi.",
    name: "Shoeb Ali",
    place: "Civil Lines, Kanpur",
  },
  {
    quote: "Mine yaha se cake liya tha or uska taste bht accha tha. Cake k liye mai inko 10 out of 10 dunga.",
    name: "Rohan Mishra",
    place: "Swaroop Nagar",
  },
  {
    quote: "Chand Sweets ki desi ghee ki chiken biryani best hai.",
    name: "Iqra Zainab",
    place: "Humayun Bagh",
  },
];

export function Testimonials() {
  return (
    <section className="overflow-x-hidden bg-[color:var(--cream)] py-28 md:py-40">
      <div className="mx-auto w-full max-w-[1400px] overflow-hidden px-5 sm:px-8 md:px-10">
        <p className="eyebrow text-[color:var(--crimson)] text-center">Loved Across Kanpur</p>
        <h2 className="mt-6 text-center font-display leading-[0.95] tracking-tight text-[clamp(2rem,8.5vw,5rem)] md:text-7xl">
          Words from <span className="font-script text-[color:var(--crimson)]">our</span> families.
        </h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <figure key={i} className="flex h-full min-w-0 flex-col bg-white p-6 sm:p-8 md:p-10">
              <span className="font-display text-7xl text-[color:var(--crimson)] leading-none">“</span>
              <blockquote className="mt-2 serif-italic text-xl leading-snug text-neutral-800">
                {r.quote}
              </blockquote>
              <figcaption className="mt-auto pt-10 border-t hairline">
                <p className="font-display text-xl">{r.name}</p>
                <p className="eyebrow text-neutral-500 mt-1">{r.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
