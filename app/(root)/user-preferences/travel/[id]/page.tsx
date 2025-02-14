import Image from "next/image";
import Link from "next/link";

// This would typically come from an API or database
const destination = {
  id: 1,
  name: "Paris",
  country: "France",
  description:
    "Paris, the City of Light, is the capital city of France and a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.",
  image: "paris.jpg",
  attractions: [
    "Eiffel Tower",
    "Louvre Museum",
    "Notre-Dame Cathedral",
    "Champs-Élysées",
    "Arc de Triomphe",
  ],
  bestTimeToVisit: "Spring (April to mid-June) or Fall (September to November)",
  currency: "Euro (€)",
  language: "French",
};

export default async function TravelDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // In a real application, you would fetch the destination data based on the id
  // const destination = await getDestination(params.id)
  const id = (await params).id;
  console.log(id);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={`/placeholder.svg?height=400&width=800&text=${destination.name}`}
            alt={destination.name}
            width={800}
            height={400}
            className="w-full h-80 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{destination.name}</h1>
            <p className="text-gray-600 mb-4">{destination.country}</p>
            <p className="text-gray-800 mb-6">{destination.description}</p>

            <h2 className="text-2xl font-semibold mb-4">Top Attractions</h2>
            <ul className="list-disc list-inside mb-6">
              {destination.attractions.map((attraction, index) => (
                <li key={index} className="text-gray-800">
                  {attraction}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Best Time to Visit
                </h3>
                <p className="text-gray-800">{destination.bestTimeToVisit}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Currency</h3>
                <p className="text-gray-800">{destination.currency}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Language</h3>
                <p className="text-gray-800">{destination.language}</p>
              </div>
            </div>

            <Link
              href="/user-preferences/travel"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Back to Destinations
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
