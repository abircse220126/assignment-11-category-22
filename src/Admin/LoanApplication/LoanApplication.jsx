// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import React, { useState } from "react";
// import DetailsModal from "../detailsModal/detailsModal";

// const LoanApplication = () => {
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [showModal, setShowModal] = useState(false);
//   const [application, setApplication] = useState(null);

//   const { data, refetch } = useQuery({
//     queryKey: ["applications"],
//     queryFn: async () => {
//       const result = await axios.get(`http://localhost:3000/applicationform`);
//       return result.data;
//     },
//   });

//   const handleApprove = (id, status) => {
//     console.log(id, status);
//     const updateInfo = {
//       status: "Approved",
//     };
//     axios
//       .patch(`http://localhost:3000/application/status/${id}`, updateInfo)
//       .then((res) => {
//         console.log(res.data);
//         refetch();
//       });
//   };

//   const handleReject = (id) => {
//     console.log("reject button is clicked", id);
//     const updateInfo = {
//       status: "Rejected",
//     };

//     axios
//       .patch(`http://localhost:3000/application/status/${id}`, updateInfo)
//       .then((res) => {
//         console.log(res.data);
//         refetch();
//       });
//   };

//   const filterdData =
//     statusFilter === "All"
//       ? data
//       : data?.filter(
//           (d) => d.status.toLowerCase() === statusFilter.toLowerCase()
//         );
//   console.log(filterdData);

//   return (
//     <div className="p-4 bg-white rounded shadow-md">
//       <h2 className="text-xl font-semibold mb-4 text-center">
//         Loan Applications
//       </h2>

//       {/* Static Filter Dropdown */}
//       <div className="mb-4">
//         <label className="mr-2 font-medium">Filter by Status:</label>
//         <select
//           onChange={(e) => setStatusFilter(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option>All</option>
//           <option>Pending</option>
//           <option>Approved</option>
//           <option>Rejected</option>
//         </select>
//       </div>

//       <div>
//         {showModal && (
//           <DetailsModal
//             data={application}
//             onClose={() => setShowModal(false)}
//           ></DetailsModal>
//         )}
//       </div>

//       {/* Static Table */}
//       <table className="w-full border border-gray-300 text-sm">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="border px-3 py-2 text-center">#</th>
//             <th className="border px-3 py-2">Loan ID</th>
//             <th className="border px-3 py-2">User</th>
//             <th className="border px-3 py-2">Loan Category</th>
//             <th className="border px-3 py-2">Amount</th>
//             <th className="border px-3 py-2">Status</th>
//             <th className="border px-3 py-2">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {filterdData?.map((d, index) => (
//             <tr className="text-center hover:bg-gray-50">
//               <td className="border px-3 py-2">{index + 1}</td>
//               <td className="border px-3 py-2">{d._id}</td>
//               <td className="border px-3 py-2">
//                 <p className="font-medium">
//                   {d.first_name} {d.last_name}
//                 </p>
//                 <p className="text-gray-500">{d.email}</p>
//               </td>
//               <td className="border px-3 py-2">{d.loan_title}</td>
//               <td className="border px-3 py-2">৳{d.loan_amount}</td>

//               <td className="border px-3 py-2">
//                 <span
//                   className={`px-2 py-1 rounded font-semibold text-sm ${
//                     d.status.toLowerCase() === "approved"
//                       ? "bg-green-100 text-green-800"
//                       : d.status.toLowerCase() === "pending"
//                       ? "bg-yellow-100 text-yellow-800"
//                       : "bg-red-100 text-red-800"
//                   }`}
//                 >
//                   {d.status}
//                 </span>
//               </td>

//               <td className="border px-3 py-2 space-x-2">
//                 <button
//                   onClick={() => {
//                     setShowModal(true);
//                     setApplication(d);
//                   }}
//                   className="bg-blue-500 text-white px-2 py-1 rounded"
//                 >
//                   View
//                 </button>

//                 <button
//                   onClick={() => handleApprove(d._id)}
//                   className="bg-green-500 text-white px-2 py-1 rounded"
//                 >
//                   Approve
//                 </button>

//                 <button
//                   onClick={() => handleReject(d._id)}
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                 >
//                   Reject
//                 </button>
//               </td>
//             </tr>
//           ))}

//           {/* Row 1 - Pending */}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LoanApplication;


import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import DetailsModal from "../detailsModal/detailsModal";

const LoanApplication = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [application, setApplication] = useState(null);

  const { data, refetch } = useQuery({
    queryKey: ["LoanpplicationsForm"],
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

  const filterdData =
    statusFilter === "All"
      ? data
      : data?.filter(
          (d) => d.status.toLowerCase() === statusFilter.toLowerCase()
        );

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded shadow-md max-w-full mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
        Loan Applications
      </h2>

      {/* Filter Dropdown */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:space-x-2">
        <label className="mr-2 font-medium mb-2 sm:mb-0 text-sm sm:text-base">
          Filter by Status:
        </label>
        <select
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded w-full sm:w-auto text-sm sm:text-base"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Modal */}
      {showModal && (
        <DetailsModal
          data={application}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 sm:px-3 py-1 sm:py-2 text-center">#</th>
              <th className="border px-2 sm:px-3 py-1 sm:py-2">Loan ID</th>
              <th className="border px-2 sm:px-3 py-1 sm:py-2">User</th>
              <th className="border px-2 sm:px-3 py-1 sm:py-2">Loan Category</th>
              <th className="border px-2 sm:px-3 py-1 sm:py-2">Amount</th>
              <th className="border px-2 sm:px-3 py-1 sm:py-2">Status</th>
              <th className="border px-2 sm:px-3 py-1 sm:py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filterdData?.map((d, index) => (
              <tr key={d._id} className="text-center hover:bg-gray-50">
                <td className="border px-2 sm:px-3 py-1 sm:py-2">{index + 1}</td>
                <td className="border px-2 sm:px-3 py-1 sm:py-2">{d._id}</td>
                <td className="border px-2 sm:px-3 py-1 sm:py-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                    <p className="font-medium text-sm sm:text-base">{d.first_name} {d.last_name}</p>
                    <p className="text-gray-500 text-xs sm:text-sm">{d.email}</p>
                  </div>
                </td>
                <td className="border px-2 sm:px-3 py-1 sm:py-2">{d.loan_title}</td>
                <td className="border px-2 sm:px-3 py-1 sm:py-2">৳{d.loan_amount}</td>
                <td className="border px-2 sm:px-3 py-1 sm:py-2">
                  <span
                    className={`px-2 py-1 rounded font-semibold text-xs sm:text-sm ${
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
                <td className="border px-2 sm:px-3 py-1 sm:py-2 space-y-1 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row items-center justify-center">
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setApplication(d);
                    }}
                    className="bg-blue-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm"
                  >
                    View
                  </button>

                  <button
                    onClick={() => handleApprove(d._id)}
                    className="bg-green-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm"
                    disabled={d.status === "Approved"}
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleReject(d._id)}
                    className="bg-red-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm"
                    disabled={d.status === "Rejected"}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanApplication;
