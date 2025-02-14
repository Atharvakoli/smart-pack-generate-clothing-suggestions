import { sampleData } from "@/db/sample";
import Image from "next/image";

export default function ProfilePage() {
  const cities = sampleData.cities && sampleData.cities;
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="py-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow rounded-2xl overflow-hidden">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center space-x-6">
                  <div className="h-24 w-24 rounded-full bg-gray-200 relative overflow-hidden">
                    <Image
                      src="/placeholder.svg"
                      alt="Profile picture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">John Doe</h1>
                    <p className="text-gray-500">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h3 className="text-lg font-medium">Preferences</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Temperature Unit</span>
                        <span className="font-medium">Celsius</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Default Location</span>
                        <span className="font-medium">San Francisco</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Notifications</span>
                        <span className="font-medium">Enabled</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Recent Searches</h3>
                    <div className="mt-4 space-y-2">
                      {cities.map((city) => (
                        <div
                          key={city.slug}
                          className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50"
                        >
                          <span>{city.name}</span>
                          <button className="text-sm text-gray-400 hover:text-gray-600">
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Account Settings</h3>
                    <div className="mt-4 space-y-4">
                      <button className="w-full px-4 py-2 text-left rounded-lg hover:bg-gray-50">
                        Edit Profile
                      </button>
                      <button className="w-full px-4 py-2 text-left rounded-lg hover:bg-gray-50">
                        Change Password
                      </button>
                      <button className="w-full px-4 py-2 text-left text-red-600 rounded-lg hover:bg-red-50">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
