import { business } from "../data/business";

export default function Footer() {
  return (
    <footer className="bg-green-900 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-2xl font-bold">{business.name}</h3>
            <p className="text-white/80">{business.tagline}</p>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold">Contact</h4>
            <p>{business.phone}</p>
            <p>{business.email}</p>
            <p>{business.address}</p>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold">Opening Hours</h4>
            <ul className="space-y-1 text-white/80">
              {business.hours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          © 2026 {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}