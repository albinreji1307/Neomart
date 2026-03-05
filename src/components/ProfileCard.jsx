import React, { useContext } from "react";
import PromoCards from "./Elements/PromoCards";
import Breadcrumb from "./Elements/brudcrumbs";
import { AppContext } from "../context/AppContext";

const Profile = () => {
  const { addresses = [] } = useContext(AppContext);
  return (
    <>
      <Breadcrumb title="Profile" />
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">PROFILE</h1>
            <p className="text-gray-400 text-sm">Welcome back to your home!</p>
          </div>

          <div className="flex items-center gap-4">
            <span>🔔</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-green-200 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-green-900">Vegetables</h3>
                <p className="text-green-900 text-sm">
                  Our shop offers fresh and organic vegetables sourced from
                  trusted farms. We ensure high quality, great taste, and
                  affordable prices so customers can enjoy healthy food every
                  day.
                </p>
              </div>

              <div className="bg-orange-200 p-4 rounded-lg shadow">
                <h3 className="text-orange-800 font-semibold">Fruits</h3>
                <p className="text-orange-800 text-sm">
                  We provide fresh and high-quality fruits picked from trusted
                  farms, ensuring great taste, nutrition, and freshness for a
                  healthy lifestyle.
                </p>
              </div>

              <div className="bg-yellow-200 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-yellow-900">Grocery</h3>
                <p className="text-yellow-900 text-sm">
                  Our grocery collection includes everyday kitchen essentials
                  like rice, grains, pasta, and snacks, ensuring quality,
                  freshness, and convenience for your daily cooking needs
                </p>
              </div>

              <div className="bg-red-200 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-red-800">Meat</h3>
                <p className="text-red-800 text-sm">
                  We provide fresh and high-quality meat such as chicken and
                  seafood, sourced from trusted suppliers to ensure great taste,
                  hygiene, and nutrition.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="font-semibold mb-6 text-lg">Your Addresses</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {addresses.map((addr) => (
                  <div key={addr.id} className="border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-700 mb-2">
                      {addr.type}
                    </h3>

                    <p className="text-sm text-gray-500">{addr.name}</p>
                    <p className="text-sm text-gray-500">{addr.street}</p>
                    <p className="text-sm text-gray-500">{addr.city}</p>
                    <p className="text-sm text-gray-500 mb-3">{addr.country}</p>

                    <button className="bg-blue-100 px-4 py-2 rounded-full">
                      Edit Address
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="font-semibold mb-4">Your Review</h2>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            {addresses[0] && (
              <div>
                <h2 className="font-semibold text-lg">{addresses[0].name}</h2>

                <p className="text-gray-400 text-sm mb-6">
                  {addresses[0].email}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div className="bg-gray-100 p-3 rounded">
                <p className="font-semibold">2380</p>
                <span>Browsed Item</span>
              </div>

              <div className="bg-gray-100 p-3 rounded">
                <p className="font-semibold">32</p>
                <span>Order Count</span>
              </div>

              <div className="bg-gray-100 p-3 rounded">
                <p className="font-semibold">127</p>
                <span>Loved Item</span>
              </div>

              <div className="bg-gray-100 p-3 rounded">
                <p className="font-semibold">29</p>
                <span>Reviews</span>
              </div>
            </div>

            <div className="mb-4 text-left">
              <p className="text-sm mb-1">Your Rank</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-[37%]"></div>
              </div>
            </div>

            <div className="text-left">
              <p className="text-sm mb-1">Your Wanted Level</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-[75%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
