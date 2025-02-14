"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItemProps } from "@/db/sample";

export function CartItem({
  id,
  name,
  price,
  color,
  size,
  quantity,
  image,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <div className="py-6 flex gap-6">
      <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={96}
          height={96}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{name}</h3>
          <p className="ml-4">${price.toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{color}</p>
        <p className="mt-1 text-sm text-gray-500">Size: {size}</p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border rounded-lg">
            <button
              className="p-2 hover:bg-gray-50 disabled:opacity-50"
              onClick={() => onUpdateQuantity(id, quantity - 1)}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button
              className="p-2 hover:bg-gray-50"
              onClick={() => onUpdateQuantity(id, quantity + 1)}
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={() => onRemove(id)}
            className="text-sm font-medium text-red-600 hover:text-red-500 inline-flex items-center"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
