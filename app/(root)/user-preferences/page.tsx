"use client";

import PreferredActivities from "@/components/shared/preferred-activities/PreferredActivities";

export default function PreferencesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-semibold">Your preferences</h1>
        <p className="mb-8 text-sm text-gray-500">
          Help us customize your travel plans, experiences, and more
        </p>

        <form className="space-y-8">
          {/* Home City */}
          <div className="space-y-2">
            <label htmlFor="home-city" className="block text-sm font-medium">
              Home city
            </label>
            <select
              id="home-city"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            >
              <option>Select a city</option>
            </select>
          </div>
          {/* Preferred Activities */}
          <PreferredActivities />
          {/* Travel History */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Travel history</h2>
            <div className="space-y-4">
              {["Country", "State", "City"].map((label) => (
                <div key={label} className="space-y-2">
                  <label
                    htmlFor={label.toLowerCase()}
                    className="block text-sm font-medium"
                  >
                    {label}
                  </label>
                  <select
                    id={label.toLowerCase()}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  >
                    <option>{`Select a ${label.toLowerCase()}`}</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* Measurement Units */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Measurement units</h2>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="units"
                  value="imperial"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm">Imperial (feet and pounds)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="units"
                  value="metric"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm">Metric (meters and kilograms)</span>
              </label>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium">E-commerce payment methods</h2>
            <div className="space-y-2">
              {["Credit card", "Debit card", "PayPal", "GooglePay"].map(
                (method) => (
                  <label key={method} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{method}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save
          </button>
        </form>
      </main>
    </div>
  );
}
