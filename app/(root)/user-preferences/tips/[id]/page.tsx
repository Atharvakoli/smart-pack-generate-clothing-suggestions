import { sampleData } from "@/db/sample";
import Link from "next/link";

export default async function TipDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const tip = sampleData.tip && sampleData.tip;
  // In a real application, you would fetch the tip data based on the id
  // const tip = await getTip(params.id)
  const id = (await params).id;
  console.log(id);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{tip.title}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>By {tip.author}</span>
              <span className="mx-2">•</span>
              <span>Published on {tip.publishDate}</span>
            </div>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: tip.content }}
            />
            <div className="mt-8">
              <Link
                href="/user-preferences/tips"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Back to Tips
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
