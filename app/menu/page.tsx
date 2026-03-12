import { business } from "../../data/business";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-center text-4xl font-bold text-green-900">
          Our Menu
        </h1>

        {business.menu.map((section, index) => (
          <section
            key={section.category}
            className="mb-12 rounded-2xl bg-white p-8 shadow-sm"
            style={{
              animationName: "fadeDown",
              animationDuration: "0.6s",
              animationTimingFunction: "ease",
              animationFillMode: "forwards",
              animationDelay: `${index * 150}ms`,
            }}
          >
            <h2 className="mb-6 text-3xl font-bold text-green-900">
              {section.category}
            </h2>

            <div className="space-y-6">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between gap-6 border-b border-gray-200 pb-4"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  <p className="whitespace-nowrap text-lg font-bold text-gray-900">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}