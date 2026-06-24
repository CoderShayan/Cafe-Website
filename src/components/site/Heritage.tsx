import craft from "@/assets/chand-storefront.png";

export function Heritage() {
  return (
    <section id="heritage" className="relative overflow-x-hidden bg-white py-28 md:py-40">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-stretch gap-8 overflow-hidden px-5 sm:px-8 md:grid md:grid-cols-12 md:px-10">
        <div className="col-span-12 min-w-0 lg:col-span-5 lg:sticky lg:top-32">
          <p className="eyebrow text-[color:var(--crimson)]">Chapter II — Heritage</p>
          <h2 className="mt-6 w-full max-w-full break-words font-display leading-[1.02] tracking-tight text-[clamp(2.15rem,8vw,5rem)] md:text-7xl">
            A legacy <span className="serif-italic font-normal">stirred</span> in copper, <br />
            <span className="inline-block max-w-full break-words font-script text-[color:var(--crimson)] text-[1.05em] sm:text-[1.15em]">remembered</span> in every bite.
          </h2>
          <div className="mt-10 w-full max-w-full space-y-5 text-neutral-700 leading-relaxed sm:max-w-md">
            <p>
              For decades, the lanes of Kanpur have woken to the same fragrance of
              ghee simmering, milk reducing, sugar turning to silk. From a single counter
              at Becon Ganj, Chand Sweets has carried that morning ritual across generations.
            </p>
            <p>
              Recipes are not written here. They are remembered by hands that have
              shaped a thousand rasgullas before the sun rose, by palates that taste in
              decades, not years.
            </p>
          </div>

          <dl className="mt-12 grid w-full max-w-full grid-cols-1 gap-5 border-t hairline pt-8 sm:max-w-md sm:grid-cols-3 sm:gap-6">
            <div className="min-w-0">
              <dt className="eyebrow text-neutral-500">Love</dt>
              <dd className="mt-2 font-display text-2xl sm:text-3xl">100%</dd>
            </div>
            <div className="min-w-0">
              <dt className="eyebrow text-neutral-500">Recipes</dt>
              <dd className="mt-2 font-display text-2xl sm:text-3xl">40+</dd>
            </div>
            <div className="min-w-0">
              <dt className="eyebrow text-neutral-500">Outlets</dt>
              <dd className="mt-2 font-display text-2xl sm:text-3xl">02</dd>
            </div>
          </dl>
        </div>

        <div className="col-span-12 min-w-0 lg:col-span-7 lg:col-start-6">
          <div className="relative mx-auto w-full max-w-[480px] overflow-hidden bg-[color:var(--cream)] sm:aspect-[4/5] lg:max-w-none">
            <img
              src={craft}
              alt="Artisan hands shaping fresh sweets in a traditional Kanpur kitchen"
              loading="lazy"
              width={1600}
              height={2000}
              className="relative h-auto w-full object-contain sm:absolute sm:inset-0 sm:h-full sm:w-full sm:object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <p className="font-script text-3xl sm:text-4xl">handcrafted, always.</p>
              <p className="eyebrow">Pl. 02</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-600">
            <p>
              <span className="eyebrow block text-neutral-500 mb-2">Origin</span>
              Becon Ganj · Kanpur, Uttar Pradesh
            </p>
            <p>
              <span className="eyebrow block text-neutral-500 mb-2">Method</span>
              Slow-simmered. Hand-shaped. Same as always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
