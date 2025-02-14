import { sampleData } from "@/db/sample";
import Link from "next/link";



const ExplorePage = () => {
  const cities = sampleData.cities && sampleData.cities;
  return (
    <div className="min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Explore Destinations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city) => (
          <Link href={`/explore/${city.slug}`} key={city.slug}>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  {/* Placeholder for city image */}🌆
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {city.name}
                </h3>
                <p className="text-gray-600 mt-1">
                  Discover perfect outfits for your {city.name} trip
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
