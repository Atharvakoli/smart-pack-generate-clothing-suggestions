"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ModeToggle from "./mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "WeatherWear", path: "/weather-wear" },
    { name: "Preferences", path: "/user-preferences" },
    { name: "Store", path: "/store" },
    { name: "👤", path: "/profile" },
    // { name: "Sign Up", path: "/sign-up" },
    // { name: "Sign In", path: "/sign-in" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold">🧳 Wardrobe</span>
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${
                  item.name !== "👤"
                    ? `text-gray-600 hover:text-gray-900 ${
                        isActive(item.path) ? "text-blue-600 font-medium" : ""
                      }`
                    : "w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                }`}
              >
                {item.name === "👤" ? (
                  <span className="text-sm">👤</span>
                ) : (
                  `${item.name}`
                )}
              </Link>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${
                item.name !== "👤"
                  ? `block px-3 py-2 text-base font-medium ${
                      isActive(item.path)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`
                  : "w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name === "👤" ? (
                <span className="text-sm">👤</span>
              ) : (
                `${item.name}`
              )}
            </Link>
          ))}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
