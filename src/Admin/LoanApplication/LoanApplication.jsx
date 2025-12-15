import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const LoanApplication = () => {
  const [statusFilter, setStatusFilter] = useState("All");

  const { data, refetch } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:3000/applicationform`);
      return result.data;
    },
  });

  const handleApprove = (id, status) => {
    console.log(id, status);
    const updateInfo = {
      status: "Approved",
    };
    axios
      .patch(`http://localhost:3000/application/status/${id}`, updateInfo)
      .then((res) => {
        console.log(res.data);
        refetch();
      });
  };

  const handleReject = (id) => {
    console.log("reject button is clicked", id);
    const updateInfo = {
      status: "Rejected",
    };

    axios
      .patch(`http://localhost:3000/application/status/${id}`, updateInfo)
      .then((res) => {
        console.log(res.data);
        refetch();
      });
  };

  const filterdData =
    statusFilter === "All"
      ? data
      : data?.filter(
          (d) => d.status.toLowerCase() === statusFilter.toLowerCase()
        );
  console.log(filterdData);


  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Loan Applications
      </h2>

      {/* Static Filter Dropdown */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Status:</label>
        <select
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Static Table */}
      <table className="w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2 text-center">#</th>
            <th className="border px-3 py-2">Loan ID</th>
            <th className="border px-3 py-2">User</th>
            <th className="border px-3 py-2">Loan Category</th>
            <th className="border px-3 py-2">Amount</th>
            <th className="border px-3 py-2">Status</th>
            <th className="border px-3 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filterdData?.map((d, index) => (
            <tr className="text-center hover:bg-gray-50">
              <td className="border px-3 py-2">{index + 1}</td>
              <td className="border px-3 py-2">{d._id}</td>
              <td className="border px-3 py-2">
                <p className="font-medium">
                  {d.first_name} {d.last_name}
                </p>
                <p className="text-gray-500">{d.email}</p>
              </td>
              <td className="border px-3 py-2">{d.loan_title}</td>
              <td className="border px-3 py-2">৳{d.loan_amount}</td>

              <td className="border px-3 py-2">
                <span
                  className={`px-2 py-1 rounded font-semibold text-sm ${
                    d.status.toLowerCase() === "approved"
                      ? "bg-green-100 text-green-800"
                      : d.status.toLowerCase() === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {d.status}
                </span>
              </td>

              <td className="border px-3 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  View
                </button>
                <button
                  onClick={() => handleApprove(d._id, d.status)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Approve
                </button>

                <button
                  onClick={() => handleReject(d._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}

          {/* Row 1 - Pending */}
        </tbody>
      </table>
    </div>
  );
};

export default LoanApplication;
