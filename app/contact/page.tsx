import { business } from "../../data/business";

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent(
    "היי, אני רוצה בבקשה להזמין מקום ל"
  );

  return (
    <main className="min-h-screen bg-green-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-green-900">
          Contact Us
        </h1>

        <div className="rounded-2xl bg-white p-8 shadow-md">
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              <span className="font-semibold text-green-900">Phone:</span>{" "}
              <a href={`tel:${business.phone}`} className="hover:underline">
                {business.phone}
              </a>
            </p>

            <p>
              <span className="font-semibold text-green-900">WhatsApp:</span>{" "}
              <a
                href={`https://wa.me/972${business.whatsapp.substring(
                  1
                )}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {business.whatsapp}
              </a>
            </p>

            <p>
              <span className="font-semibold text-green-900">Email:</span>{" "}
              <a href={`mailto:${business.email}`} className="hover:underline">
                {business.email}
              </a>
            </p>

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