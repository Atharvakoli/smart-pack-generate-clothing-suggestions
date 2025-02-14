"use client";

import { sampleData } from "@/db/sample";
import { useState } from "react";

const PreferredActivities = () => {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const activities = sampleData.preferredActivities && sampleData.preferredActivities

  const toggleActivity = (id: string) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Preferred activities</label>
      <div className="flex flex-wrap gap-2">
        {activities.map((activity) => (
          <button
            key={activity.id}
            type="button"
            onClick={() => toggleActivity(activity.id)}
            className={`flex items-center space-x-1 rounded-full px-4 py-1.5 text-sm ${
              selectedActivities.includes(activity.id)
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <span>{activity.icon}</span>
            <span>{activity.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreferredActivities;
