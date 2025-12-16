import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import DetailsModal from "../../Admin/detailsModal/detailsModal";

const PendingLoan = () => {
  const [showModal, setShowModal] = useState(false);
  const [application, setApplication] = useState(null);
  const { data, refetch } = useQuery({
    queryKey: ["PendingApplications"],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:3000/applicationform`);
      return result.data;
    },
  });

  const handleApprove = (id) => {
    const updateInfo = { status: "Approved" };
    axios
      .patch(`http://localhost:3000/application/status/${id}`, updateInfo)
      .then(() => refetch());
  };

  const handleReject = (id) => {
    const updateInfo = { status: "Rejected" };
    axios
      .patch(`http://localhost:3000/application/status/${id}`, updateInfo)
      .then(() => refetch());
  };

  const pendingLoan = data?.filter((d) => d.status === "Pending".toLowerCase());

  return (
    <table className="w-full border border-gray-200 text-sm">
      <caption className="text-3xl mb-5">All Pending loan</caption>
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-4 py-2">Loan ID</th>
          <th className="border px-4 py-2">User Info</th>
          <th className="border px-4 py-2">Amount</th>

          <th className="border px-4 py-2">Status</th>
          <th className="border px-4 py-2 text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        {showModal && (
          <DetailsModal
            data={application}
            onClose={() => setShowModal(false)}
          />
        )}
        {pendingLoan?.map((p) => (
          <tr className="hover:bg-gray-50 text-center">
            <td className="border px-4 py-2">{p._id}</td>

            <td className="border px-4 py-2">
              <div>
                <p className="font-medium">
                  {p.first_name} {p.last_name}
                </p>
                <p className="text-gray-500 text-xs">{p.email}</p>
              </div>
            </td>

            <td className="border px-4 py-2">{p.loan_amount} BDT</td>

            <td className="border px-4 py-2">{p.status}</td>

            <td className="border px-4 py-2 text-center space-x-2">
              <button
                onClick={() => handleApprove(p._id)}
                className="bg-green-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm"
                disabled={p.status === "Approved"}
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(p._id)}
                className="bg-red-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm"
                disabled={p.status === "Rejected"}
              >
                Reject
              </button>

              <button
                onClick={() => {
                  setShowModal(true);
                  setApplication(p);
                }}
                className="bg-blue-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm"
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PendingLoan;
