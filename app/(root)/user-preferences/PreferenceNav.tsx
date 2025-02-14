import Image from "next/image";
import Link from "next/link";

const PreferenceNav = () => {
  return (
    <header className="border-b border-gray-200 mt-4">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/placeholder.svg?height=24&width=24`}
            alt="Logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="font-semibold">Travel</span>
        </div>
        <nav className="flex items-center space-x-6">
          <Link
            href="/user-preferences/travel"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Travel
          </Link>
          <Link
            href="/user-preferences/tips"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Tips
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default PreferenceNav;
