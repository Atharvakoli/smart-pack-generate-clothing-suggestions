"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { sampleData } from "@/db/sample";

const ExploreNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path: string) => pathname === path;
  const navItems = sampleData.navItems

  return (
    <nav className="relative">
      <button
        className="sm:hidden p-2 text-gray-600 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Navigation Links */}
      <div
        className={`absolute w-48 sm:static top-0 left-12 right-0 bg-white sm:bg-transparent shadow-md sm:shadow-none sm:flex sm:items-center sm:space-x-8 p-4 sm:p-0 transition-all duration-300 ${
          isOpen ? "block" : "hidden sm:flex"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block sm:inline-block px-4 py-2 text-gray-600 hover:text-gray-900 ${
              isActive(item.path) ? "text-blue-600 font-medium" : ""
            }`}
            onClick={() => setIsOpen(!open)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default ExploreNav;
