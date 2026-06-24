import { useEffect, useState } from "react";
import logo from "@/assets/chand-logo.png";

export function Loader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 2300);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center animate-loader-out">
      <div className="flex flex-col items-center">
        <span className="eyebrow text-neutral-500 animate-fade-in">
          Est. Kanpur
        </span>

        <img
          src={logo}
          alt="Chand Sweets"
          className="mt-6 h-24 md:h-32 w-auto animate-fade-up"
        />

        <div className="mt-6 h-px w-40 bg-[color:var(--ink)] animate-draw-line" />
      </div>
    </div>
  );
}