import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

const branches = [
  {
    id: "becon",
    name: "Becon Ganj Branch",
    phone: "+91 99566 75808",
    phoneHref: "tel:+919956675808",
    address: "Becon Ganj, Kanpur, Uttar Pradesh",
    hours: "10:00 AM — 11:00 PM",
  },
  {
    id: "talak",
    name: "Talak Mahal Branch",
    phone: "+91 90445 13020",
    phoneHref: "tel:+919044513020",
    address: "Talak Mahal, Kanpur, Uttar Pradesh",
    hours: "10:00 AM — 11:00 PM",
  },
];

export function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="contact"
      className="bg-[color:var(--crimson)] text-white py-24 md:py-40 relative overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-8 items-start gap-6 overflow-hidden px-8 sm:px-8 md:px-10">
        <div className="col-span-12 min-w-0 lg:col-span-6">
          <p className="eyebrow text-white/80">A Standing Invitation</p>
          <h2 className="mt-6 font-display leading-[0.92] tracking-tight text-[clamp(2.25rem,10vw,7rem)] lg:text-9xl">
            Come, taste <br /> the <span className="font-script">legacy</span>.
          </h2>
          <p className="mt-8 max-w-lg text-white/80 leading-relaxed">
            Walk into either of our Kanpur counters, or call ahead to plan a celebration —
            we'll have your favourites ready.
          </p>

          <div className="mt-10 flex min-w-0 flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-[0.75rem] uppercase tracking-[0.18em] text-[color:var(--crimson)] transition-colors hover:bg-black hover:text-white sm:w-auto sm:px-8 sm:text-[0.8rem] sm:tracking-[0.22em]">
                  Place an Order
                  <span aria-hidden>→</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-lg bg-white text-[color:var(--ink)] border-none p-0 overflow-hidden">
                <div className="bg-[color:var(--cream)] px-6 sm:px-8 py-6 border-b border-black/10">
                  <DialogHeader>
                    <p className="eyebrow text-[color:var(--crimson)]">Choose Your Branch</p>
                    <DialogTitle className="mt-2 font-display text-2xl sm:text-4xl leading-tight">
                      Which counter would you like to order from?
                    </DialogTitle>
                    <DialogDescription className="text-neutral-600 mt-2">
                      Call your nearest Chand Sweets branch directly, we'll have your order  
                      ready for pickup.
                    </DialogDescription>
                  </DialogHeader>
                </div>

                <div className="p-4 sm:p-6 grid gap-3">
                  {branches.map((b) => (
                    <a
                      key={b.id}
                      href={b.phoneHref}
                      className="group block rounded-xl border border-black/10 hover:border-[color:var(--crimson)] hover:bg-[color:var(--cream)] transition-all p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="eyebrow text-[color:var(--crimson)]">{b.name}</p>
                          <p className="mt-2 font-display text-2xl sm:text-3xl leading-tight group-hover:text-[color:var(--crimson)] transition-colors">
                            {b.phone}
                          </p>
                          <p className="mt-2 text-sm text-neutral-600">{b.address}</p>
                          <p className="mt-1 text-xs text-neutral-500 uppercase tracking-wider">
                            Open · {b.hours}
                          </p>
                        </div>
                        <span
                          aria-hidden
                          className="shrink-0 h-10 w-10 rounded-full bg-[color:var(--ink)] text-white grid place-items-center text-lg group-hover:bg-[color:var(--crimson)] transition-colors"
                        >
                          ↗
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="px-6 pb-6 pt-2 text-center text-xs text-neutral-500">
                  Tap a branch to call. Both counters take phone orders.
                </div>
              </DialogContent>
            </Dialog>

            <a
              href="#locations"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white px-6 py-4 text-[0.75rem] uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-[color:var(--crimson)] sm:w-auto sm:px-8 sm:text-[0.8rem] sm:tracking-[0.22em]"
            >
              Visit a Store
            </a>
          </div>
        </div>

        {/* Branch cards — explicitly labelled so each number is clearly tied to its branch */}
        <div className="col-span-12 grid min-w-0 gap-5 sm:grid-cols-2 lg:col-span-6 lg:pl-10">
          {branches.map((b) => (
            <div
              key={b.id}
              className="flex min-w-0 flex-col rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm sm:p-6 md:p-7"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-6 bg-white/60" />
                <p className="eyebrow text-white/80">{b.name}</p>
              </div>
              <p className="mt-2 text-[11px] tracking-[0.22em] uppercase text-white/60">
                Call this counter
              </p>
              <a
                href={b.phoneHref}
                className="mt-3 font-display text-3xl md:text-[2.25rem] leading-tight tracking-tight hover:text-[color:var(--gold-soft)] transition-colors break-words"
              >
                {b.phone}
              </a>
              <p className="mt-4 text-sm text-white/80 leading-relaxed">{b.address}</p>
              <p className="mt-auto pt-5 text-[10px] tracking-[0.28em] uppercase text-white/60">
                Open · {b.hours}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
