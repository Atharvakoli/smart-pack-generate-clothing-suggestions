"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { CartItem } from "@/components/shared/cart/CartItem";
import { CartContentProps } from "@/db/sample";


export function CartContent({ initialItems }: CartContentProps) {
  const [items, setItems] = useState(initialItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = items.length > 0 ? 5.0 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">
          Looks like you have not added any items to your cart yet.
        </p>
        <Link
          href="/"
          className="inline-block bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/store"
          className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Continue Shopping
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <h1 className="text-2xl font-semibold mb-6">
                Shopping Cart ({items.length})
              </h1>
              <div className="divide-y">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-900 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
