import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

const StoreNav = () => {
  return (
    <header className=" bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          <h1 className="text-2xl font-semibold mb-1">Clothing</h1>
          <p className="text-sm text-gray-500">Based on your recent activity</p>
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          <div className="relative">
            <Link href="/store/cart">
              <ShoppingCart className="w-5 h-5 text-gray-500" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StoreNav;
