import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { ProductDetails } from "@/components/shared/products/ProductDetails";
import { sampleData } from "@/db/sample";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const products = sampleData.products && sampleData.products;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/store"
            className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to products
          </Link>
        </div>

        <ProductDetails product={product} />

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="group"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={relatedProduct.images[0] || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  {relatedProduct.name}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${relatedProduct.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
