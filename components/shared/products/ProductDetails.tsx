"use client";

import { useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  colors: string[];
  sizes: string[];
  images: string[];
}

export function ProductDetails({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="aspect-w-3 aspect-h-4 rounded-lg bg-gray-100 overflow-hidden">
          <Image
            src={mainImage || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {product.images.map((image, index) => (
            <button
              key={index}
              className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden"
              onClick={() => setMainImage(image)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.name} ${index + 1}`}
                width={150}
                height={150}
                className="w-full h-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
        <p className="text-gray-600">{product.description}</p>

        <div>
          <h2 className="text-sm font-medium text-gray-900">Color</h2>
          <div className="mt-2 flex items-center space-x-3">
            {product.colors.map((color) => (
              <button
                key={color}
                className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${
                  selectedColor === color ? "ring-2 ring-indigo-500" : ""
                }`}
                onClick={() => setSelectedColor(color)}
              >
                <span className="sr-only">{color}</span>
                <span
                  aria-hidden="true"
                  className={`h-8 w-8 rounded-full border border-black border-opacity-10`}
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-900">Size</h2>
          <div className="mt-2 flex items-center space-x-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`flex items-center justify-center rounded-md border py-3 px-8 text-sm font-medium uppercase focus:outline-none ${
                  selectedSize === size
                    ? "border-transparent bg-indigo-600 text-white"
                    : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
