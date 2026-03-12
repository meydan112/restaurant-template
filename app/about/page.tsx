import { business } from "../../data/business";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-center text-4xl font-bold text-green-900">
          About Us
        </h1>

        <div className="rounded-2xl bg-green-50 p-8 shadow-md">
          <p className="mb-8 text-lg leading-8 text-gray-700">
            {business.about}
          </p>

          <div className="space-y-4 text-gray-700">
            
            {/* Phone */}
            <p>
  <span className="font-semibold text-green-900">Phone:</span>{" "}
  <a href={`tel:${business.phone}`} className="hover:underline">
    {business.phone}
  </a>
</p>

            {/* Opening Hours */}
            <div>
              <span className="font-semibold text-green-900">
                Opening Hours:
              </span>

              <ul className="mt-3 list-disc pl-6">
                {business.hours.map((hour) => (
                  <li key={hour}>{hour}</li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <p>
              <span className="font-semibold text-green-900">Address:</span>{" "}
              {business.address}
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}