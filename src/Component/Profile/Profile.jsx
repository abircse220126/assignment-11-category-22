

import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Profile = () => {
  const { user } = use(AuthContext);

  const { data } = useQuery({
    queryKey: ["userInfo", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const result = await axios.get(
        `http://localhost:3000/user/${user.email}`
      );
      return result.data;
    },
  });

  const profile = data;
  console.log(profile);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 p-6 flex items-center gap-5 border-b border-gray-200">
          <img
            src={profile?.photoURL}
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover bg-white border border-gray-300"
          />

          <div className="text-gray-800">
            <h2 className="text-2xl font-semibold">
              {profile?.name || "User Name"}
            </h2>

            <p className="text-sm text-gray-600 capitalize mt-1">
              Role: {profile?.role}
            </p>

            <p className="text-xs text-gray-500 mt-1">
              System access & management privileges
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Basic Information
            </h3>

            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-medium text-gray-600">User ID:</span>{" "}
                {profile?._id}
              </p>
              <p>
                <span className="font-medium text-gray-600">Name:</span>{" "}
                {profile?.name}
              </p>
              <p>
                <span className="font-medium text-gray-600">Email:</span>{" "}
                {profile?.email}
              </p>
            </div>
          </div>

          {/* Account Role */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Account Role
            </h3>

            <div className="space-y-3 text-sm">
              <p>
                <span className="font-medium text-gray-600">Role:</span>{" "}
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 capitalize border">
                  {profile?.role}
                </span>
              </p>

              <p className="text-gray-500 text-xs leading-relaxed">
                Admin users have full access to system management, user control,
                and platform configuration.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t">
          <button className="px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100">
            Change Photo
          </button>
          <button className="px-4 py-2 text-sm rounded-md bg-gray-800 text-white hover:bg-gray-900">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
