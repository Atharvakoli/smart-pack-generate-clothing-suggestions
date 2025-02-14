import { CartContent } from "@/components/shared/cart/CartContent";
import { sampleData } from "@/db/sample";

export default function CartPage() {
  const cartItems = sampleData.cartItems && sampleData.cartItems;

  return (
    <div className="min-h-screen bg-gray-50">
      <CartContent initialItems={cartItems} />
    </div>
  );
}
