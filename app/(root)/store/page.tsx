import { sampleData } from "@/db/sample";
import Image from "next/image";
import Link from "next/link";

export default function ClothingPage() {
  const recentProducts = sampleData.recentProducts && sampleData.recentProducts;
  const activityProducts =
    sampleData.activityProducts && sampleData.activityProducts;
  const topPicks = sampleData.topPicks && sampleData.topPicks;
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {recentProducts.map((product) => (
              <Link
                key={product.id}
                href={`/store/products/${product.id}`}
                className="group"
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">
            Based on your recent activity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activityProducts.map((product) => (
              <Link
                key={product.id}
                href={`/store/products/${product.id}`}
                className="group"
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">New top picks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPicks.map((product) => (
              <Link
                key={product.id}
                href={`/store/products/${product.id}`}
                className="group"
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
