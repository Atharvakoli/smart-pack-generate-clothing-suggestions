import { sampleData } from "@/db/sample";

export default function PackPage() {
  const tripPackingList =
    sampleData.tripPackingList && sampleData.tripPackingList;
  const items = sampleData.items && sampleData.items;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Pack Your Bags</h1>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Paris Trip Packing List
            </h2>
            <span className="text-sm text-gray-500">7 days</span>
          </div>

          {tripPackingList.map((category) => (
            <div key={category} className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">{category}</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                      <span className="text-gray-700">Item {item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Save Packing List
          </button>
        </div>
      </div>
    </div>
  );
}
