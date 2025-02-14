import { sampleData } from "@/db/sample";
import React from "react";

const CreatePage: React.FC = () => {
  const items = sampleData.items && sampleData.items;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Create Your Wardrobe
      </h1>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Add Items</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <div className="text-gray-600">
                <div className="text-4xl mb-2">📸</div>
                <p>Drag and drop your clothing items here</p>
                <p className="text-sm text-gray-500 mt-1">or click to upload</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Your Items</h2>
            <div className="grid grid-cols-2 gap-4">
              {items.map((item: number) => (
                <div
                  key={item}
                  className="bg-gray-100 rounded-lg p-4 text-center"
                >
                  <div className="text-2xl mb-2">👕</div>
                  <p className="text-sm text-gray-600">Item {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
