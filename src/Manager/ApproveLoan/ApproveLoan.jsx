import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import React, { useState } from "react";
import DetailsModal from "../../Admin/detailsModal/detailsModal";
import useAxios from "../../Hooks/useAxios";

const ApproveLoan = () => {
  const [showModal, setShowModal] = useState(false);
  const [application, setApplication] = useState(null);
  const instanceAxios=useAxios()

  // const { data, } = useQuery({
  //   queryKey: ["loan", "application"],
  //   queryFn: () => {
  //     const result = axios.get("http://localhost:3000/applicationform");
  //     return result;
  //   },
  // });

  const { data, } = useQuery({
    queryKey: ["loan", "application"],
    queryFn: () => {
      const result = instanceAxios.get("/applicationform");
      return result;
    },
  });

  const loans = data?.data;
  const approveLoans=loans?.filter(loan =>loan.status==="Approved")
  // console.log(approveLoans)

  return (
    <div>
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <caption className="text-center text-3xl mb-10">
          All Approved Loan{" "}
        </caption>
        <thead className="bg-gray-100 text-center">
          <tr>
            <th className="px-4 py-2 border">Loan ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Amount</th>
            <th className="px-4 py-2 border">Approved Date</th>
            <th className="px-4 py-2 border text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {showModal && (
            <DetailsModal
              data={application}
              onClose={() => setShowModal(false)}
            />
          )}
          {approveLoans?.map((loan) => (
            <tr className="hover:bg-gray-50 text-center">
              {/* Loan ID */}
              <td className="px-4 py-2 border font-medium">{loan._id}</td>

              {/* Name */}
              <td className="px-4 py-2 border font-semibold">
                {loan.first_name} {loan.last_name}
              </td>

              {/* Email */}
              <td className="px-4 py-2 border text-gray-600">{loan.email}</td>

              {/* Amount */}
              <td className="px-4 py-2 border font-semibold">
                ৳ {loan.loan_amount}
              </td>

              {/* Approved Date */}
              <td className="px-4 py-2 border">12 Dec 2025</td>

              {/* Actions */}
              <td className="px-4 py-2 border text-center space-x-2">

                <button
                  onClick={() => {
                    setShowModal(true);
                    setApplication(loan);
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
    </div>
  );
};

export default ApproveLoan;
