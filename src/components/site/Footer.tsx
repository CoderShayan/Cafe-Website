import logo from "@/assets/chand-logo.png";

export function Footer() {
  return (
    <footer className="overflow-x-hidden bg-white border-t border-black">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-8 overflow-hidden px-5 py-16 sm:px-8 md:px-10">
        <div className="col-span-12 min-w-0 md:col-span-5">
          <img src={logo} alt="Chand Sweets" className="h-16 w-auto" />
          <p className="mt-6 max-w-sm text-sm text-neutral-600 leading-relaxed">
            A heritage house of mithai, biryani and modern indulgences — crafted in Kanpur,
            shared with families across the city.
          </p>
        </div>

        <div className="col-span-12 min-w-0 sm:col-span-6 md:col-span-3">
          <p className="eyebrow text-neutral-500">Explore</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li><a href="#heritage" className="hover:text-[color:var(--crimson)]">Heritage</a></li>
            <li><a href="#collection" className="hover:text-[color:var(--crimson)]">Collection</a></li>
            <li><a href="#signature" className="hover:text-[color:var(--crimson)]">Signature</a></li>
            <li><a href="#locations" className="hover:text-[color:var(--crimson)]">Locations</a></li>
          </ul>
        </div>

        <div className="col-span-12 min-w-0 sm:col-span-6 md:col-span-4">
          <p className="eyebrow text-neutral-500">Reach Us</p>
          <ul className="mt-6 space-y-3 text-sm">

            <ul className="mt-4 space-y-1 text-sm">
              <li className="text-neutral-600">Talak Mahal · Kanpur 208001</li>
              <li><a href="tel:+919044513020" className="hover:text-[color:var(--crimson)]">+91 90445 13020</a></li>
            </ul>
            
            <ul className="mt-4 space-y-1 text-sm">
              <li className="text-neutral-600">Becon Ganj · Kanpur 208001</li>
              <li><a href="tel:+919956675808" className="hover:text-[color:var(--crimson)]">+91 99566 75808</a></li>
            </ul>
            
          </ul>
        </div>
      </div>
      <div className="border-t hairline">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-2 overflow-hidden px-5 py-6 text-center text-xs text-neutral-500 sm:px-8 md:flex-row md:px-10 md:text-left">
          <p>© {new Date().getFullYear()} Chand Sweets · Kanpur · All Rights Reserved.</p>
          <p className="font-script text-base text-[color:var(--crimson)]">handcrafted with love.</p>
        </div>
      </div>
    </footer>
  );
}
