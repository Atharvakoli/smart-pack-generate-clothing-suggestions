"use client";

import { sampleData } from "@/db/sample";
import { useState, useEffect, useCallback } from "react";

export default function SmartPackCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const packSuggestions =
    sampleData.packSuggestions && sampleData.packSuggestions;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % packSuggestions.length);
  }, [packSuggestions.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + packSuggestions.length) % packSuggestions.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg mt-20">
      <div className="relative h-96 bg-gray-100">
        {packSuggestions.map((suggestion, index) => (
          <div
            key={suggestion.title}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="p-6 h-full flex flex-col">
              <h2 className="text-2xl font-bold mb-4">{suggestion.title}</h2>
              <div className="flex-grow grid grid-cols-2 gap-4 overflow-y-auto">
                {suggestion.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center bg-white p-3 rounded-lg shadow"
                  >
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none hover:bg-opacity-75 transition-all"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none hover:bg-opacity-75 transition-all"
      >
        ▶
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {packSuggestions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            } focus:outline-none`}
          />
        ))}
      </div>
    </div>
  );
}
