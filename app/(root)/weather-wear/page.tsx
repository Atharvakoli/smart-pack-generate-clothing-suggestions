import { sampleData } from "@/db/sample";
import Image from "next/image";

export default function WeatherPage() {
  const days = sampleData.days && sampleData.days
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="py-8">
          <h1 className="text-3xl font-bold">San Francisco</h1>
          <div className="mt-2 text-4xl font-light">15°C | 60°F</div>
          <section className="mt-12">
            <h2 className="text-xl font-medium mb-6">What to wear today</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden bg-gray-50">
                <div className="aspect-square relative">
                  <Image
                    src="/images/main.png"
                    alt="Person wearing a white t-shirt"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium">T-shirt</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-gray-50">
                <div className="aspect-square relative">
                  <Image
                    src="/images/main.png"
                    alt="Beige shorts on hanger"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium">Shorts</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-gray-50">
                <div className="aspect-square relative">
                  <Image
                    src="/images/main.png"
                    alt="White high-top sneakers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium">Sneakers</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-medium mb-6">7-day forecast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {days.map((day) => (
                <div
                  key={day}
                  className="rounded-2xl overflow-hidden bg-gray-50"
                >
                  <div className="aspect-video relative">
                    <Image
                      src="/images/main.png"
                      alt={`Weather for ${day}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-medium">{day}</p>
                    <p className="text-sm text-gray-500 mt-1">15°C | 60°F</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
