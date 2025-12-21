

import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import useAxios from "../../Hooks/useAxios";

const UpdateUserStatus = () => {
  const instanceAxios=useAxios()
    const[approve , setApprove]=useState(false)
    const [suspend , setSuspend]=useState(false)
  const response = useLoaderData();
  const initialUser = response.data;

  // const { data, refetch, isLoading } = useQuery({
  //   queryKey: ["user", initialUser._id],
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       `http://localhost:3000/users/${initialUser._id}`
  //     );
  //     return res.data;
  //   },
  //   initialData: initialUser, 
  // });


  const { data, refetch, isLoading } = useQuery({
    queryKey: ["user", initialUser._id],
    queryFn: async () => {
      const res = await instanceAxios.get(
        `/users/${initialUser._id}`
      );
      return res.data;
    },
    initialData: initialUser, 
  });


  const user = data;

  const handleApprove = async () => {

    setApprove(true)
    setSuspend(false)

    // await axios.patch(`http://localhost:3000/user/update/${user._id}`, {
    //   status: "Approved",
    // });
    // refetch(); 

    await instanceAxios.patch(`/user/update/${user._id}`, {
      status: "Approved",
    });
    refetch(); 

  };

  const handleSuspend = async () => {

    setSuspend(true)
    setApprove(false)

    // await axios.patch(`http://localhost:3000/user/update/${user._id}`, {
    //   status: "Suspended",
    // });
    // refetch(); 

    await instanceAxios.patch(`/user/update/${user._id}`, {
      status: "Suspended",
    });
    refetch(); 

  };

  
  if (isLoading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gray-50 p-6 text-center">
          <img
            src={user.photoURL}
            alt="User"
            className="w-28 h-28 rounded-full mx-auto border-4 border-white shadow"
          />

          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {user.name}
          </h2>

          <p className="text-sm text-gray-500">{user.email}</p>

          <span className="mt-3 inline-block px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-600">
            {user.role}
          </span>
        </div>

        <div className="p-6">
          <div className="mb-5 bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Account Status</p>
            <p
              className={`font-medium ${
                user.status === "Suspended" ? "text-red-600" : "text-green-600"
              }`}
            >
              {user.status}
            </p>
          </div>

          <p className="text-xs text-red-500 mb-6">
           { suspend && <h2 className="text-xl"> Suspended users will not be able to apply for loans.</h2> }
           { approve && <h2 className="text-green-500 text-xl">  Approve users will be able to apply for loans.</h2> }

          </p>

          <div className="flex gap-4">
            <button
              onClick={handleApprove}
              disabled={user.status === "Approved"}
              className="w-full py-2 rounded-lg bg-green-600 text-white disabled:opacity-50"
            >
              Approve
            </button>

            <button
              onClick={handleSuspend}
              disabled={user.status === "Suspended"}
              className="w-full py-2 rounded-lg bg-red-600 text-white disabled:opacity-50"
            >
              Suspend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserStatus;
