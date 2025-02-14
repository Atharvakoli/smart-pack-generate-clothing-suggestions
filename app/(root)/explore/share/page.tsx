import { sampleData } from "@/db/sample";

export default function SharePage() {
  const weatherInPlace = sampleData.weatherInPlace && sampleData.weatherInPlace;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Share Your Wardrobe
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weatherInPlace.map(
          (collection) => (
            <div
              key={collection}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="h-64 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  👔
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {collection}
                </h3>
                <p className="text-gray-600 mt-1">
                  A perfect wardrobe for your trip
                </p>
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Share
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
