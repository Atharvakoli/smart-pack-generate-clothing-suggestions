import { sampleData } from "@/db/sample";
import Link from "next/link";

export default function TipsPage() {
  const tips = sampleData.tips && sampleData.tips;
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Travel Tips</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip) => (
            <div key={tip.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">{tip.title}</h2>
              <p className="text-gray-600 mb-4">{tip.content}</p>
              <Link
                href={`/user-preferences/tips/${tip.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
