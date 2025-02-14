"use client";

import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        {theme === "system" ? (
          <SunMoon className="w-5 h-5" />
        ) : theme === "dark" ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
              Appearance
            </div>
            <div className="border-t border-gray-100 dark:border-gray-700"></div>
            {["system", "dark", "light"].map((option) => (
              <button
                key={option}
                onClick={() => {
                  setTheme(option);
                  setIsOpen(false);
                }}
                className={`${
                  theme === option ? "bg-gray-100 dark:bg-gray-700" : ""
                } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700`}
                role="menuitem"
              >
                <span className="flex items-center">
                  <span className="mr-2">{theme === option ? "✓" : ""}</span>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModeToggle;
