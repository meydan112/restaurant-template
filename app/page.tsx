import Link from "next/link";
import { business } from "../data/business";

export default function Home() {
  return (
    <main>
      <section className="relative flex h-[80vh] items-start justify-center overflow-hidden pt-32 text-center">
        <img
          src="/hero.jpg"
          alt="Restaurant background"
          className="absolute inset-0 h-full w-full scale-105 object-cover blur-sm"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-6">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            {business.name}
          </h1>

          <p className="mb-8 text-xl text-white/90">
            {business.tagline}
          </p>

          <Link
            href="/menu"
            className="mt-6 inline-block rounded-lg bg-green-900 px-8 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            View Menu
          </Link>
        </div>
      </section>
    </main>
  );
}