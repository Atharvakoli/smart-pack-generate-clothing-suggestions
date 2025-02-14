"use client";

import { sampleData } from "@/db/sample";
import { useState } from "react";

export default function TripPlanner() {
  const [formData, setFormData] = useState({
    destination: "",
    departure: "",
    return: "",
    sex: "Female",
    age: "",
    groupSize: "2",
    activities: new Set(),
    homeCity: "",
  });

  const activities = sampleData.activities && sampleData.activities;

  const handleActivityToggle = (activity: string) => {
    const newActivities = new Set(formData.activities);
    if (newActivities.has(activity)) {
      newActivities.delete(activity);
    } else {
      newActivities.add(activity);
    }
    setFormData({ ...formData, activities: newActivities });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Let Plan Your Trip
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Help us understand your travel plans and preferences so we can
              provide you with personalized temperature adaptation and clothing
              suggestions.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="destination"
                className="block text-sm font-medium text-gray-700"
              >
                Where are you going?
              </label>
              <input
                type="text"
                id="destination"
                placeholder="City, Country"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="departure"
                  className="block text-sm font-medium text-gray-700"
                >
                  Departure
                </label>
                <input
                  type="date"
                  id="departure"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="return"
                  className="block text-sm font-medium text-gray-700"
                >
                  Return
                </label>
                <input
                  type="date"
                  id="return"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Traveler Details
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="sex"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sex
                  </label>
                  <select
                    id="sex"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    min="0"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="groupSize"
                className="block text-sm font-medium text-gray-700"
              >
                Group Size
              </label>
              <select
                id="groupSize"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Activity Preferences
              </label>
              <div className="flex flex-wrap gap-2">
                {activities.map((activity) => (
                  <button
                    key={activity}
                    onClick={() => handleActivityToggle(activity)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      formData.activities.has(activity)
                        ? "bg-blue-100 text-blue-800 border-blue-200"
                        : "bg-gray-100 text-gray-800 border-gray-200"
                    } border`}
                  >
                    {activity}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="homeCity"
                className="block text-sm font-medium text-gray-700"
              >
                Home City
              </label>
              <input
                type="text"
                id="homeCity"
                placeholder="City, Country"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
