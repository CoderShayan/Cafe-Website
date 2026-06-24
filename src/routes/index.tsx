import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/site/Loader";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Heritage } from "@/components/site/Heritage";
import { Collection } from "@/components/site/Collection";
import { Signature } from "@/components/site/Signature";
import { Craft } from "@/components/site/Craft";
import { Testimonials } from "@/components/site/Testimonials";
import { Locations } from "@/components/site/Locations";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chand Sweets — A Legacy of Taste, Kanpur" },
      { name: "description", content: "Heritage Indian mithai, famous lassi, royal biryani and modern bakery — crafted in Kanpur with timeless tradition at Talak Mahal & Becon Ganj." },
      { property: "og:title", content: "Chand Sweets — A Legacy of Taste, Kanpur" },
      { property: "og:description", content: "Heritage mithai, famous lassi, biryani and more — crafted in Kanpur with timeless tradition." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Nav />
      <main className="bg-white text-[color:var(--ink)]">
        <Hero />
        <Marquee />
        <Heritage />
        <Collection />
        <Signature />
        <Craft />
        <Testimonials />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
