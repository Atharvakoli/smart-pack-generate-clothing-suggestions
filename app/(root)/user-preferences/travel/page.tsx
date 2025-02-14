import { sampleData } from "@/db/sample";
import Image from "next/image";
import Link from "next/link";

export default function TravelPage() {
  const destinations = sampleData.destinations && sampleData.destinations;
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Popular Destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={`/placeholder.svg?height=200&width=300&text=${destination.name}`}
                alt={destination.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  {destination.name}
                </h2>
                <p className="text-gray-600">{destination.description}</p>
                <Link
                  href={`/user-preferences/travel/${destination.id}`}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
