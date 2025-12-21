import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import React, {} from "react";
import { NavLink } from "react-router";
import useAxios from "../../Hooks/useAxios";

const ManageUser = () => {
  const instanceAxios = useAxios()

  // const { data } = useQuery({
  //   queryKey: ["borrower", "pending"],
  //   queryFn: () => {
  //     const result = axios.get("http://localhost:3000/users");
  //     return result;
  //   },
  // });

  const { data } = useQuery({
    queryKey: ["borrower", "pending"],
    queryFn: () => {
      const result = instanceAxios.get("/users");
      return result;
    },
  });

  const users = data?.data;

  const handleUpdate = (id) => {
    console.log("update button is Clicked", id);
  };

  return (
    <div className="px-10">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        {/* Header */}
        <div className="px-5 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">Users</h3>
          <p className="text-sm text-gray-500">User list overview</p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full border-collapse">
            <thead className="bg-gray-50">
              <tr className="text-center">
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Name
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Email
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide ">
                  Role
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide pr-18">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {users?.map((user) => (
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-600 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-600 ">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right space-x-2 whitespace-nowrap">
                    <NavLink to={`/dashboard/user-status/${user._id}`}>
                      {" "}
                      <button
                        onClick={() => handleUpdate(user._id)}
                        className="px-3 py-1.5 text-xs font-medium rounded-md bg-red-500 text-white hover:bg-red-600 mr-10"
                      >
                        Update
                      </button>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
