import { CityData, sampleData } from "@/db/sample";
import notFound from "../../../not-found";
import Link from "next/link";

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const cityData = sampleData.cityData && sampleData.cityData
  const citySlug = (await params).city.toLowerCase();
  const cityInfo: CityData = cityData[citySlug as keyof typeof cityData];

  if (!cityInfo) {
    notFound();
  }

  return (
    <div className="min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/explore"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        &larr; Back to Explore
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{cityInfo.name}</h1>
      <p className="text-xl text-gray-600 mb-6">{cityInfo.description}</p>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Perfect Outfits for {cityInfo.name}
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          {cityInfo.outfits.map((outfit, index) => (
            <li key={index} className="text-gray-700">
              {outfit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
