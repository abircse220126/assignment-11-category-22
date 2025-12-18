import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router";
import DeleteModal from "../../Admin/DeleteModal/DeleteModal";

const ManageLoan = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setshowModal] = useState(false);
  const [application, setApplication] = useState();

  const { data, refetch } = useQuery({
    queryKey: ["allLoans"],
    queryFn: () => {
      const result = axios.get(`http://localhost:3000/loans`);
      return result;
    },
  });

  const loans = data?.data;

  const categories = [...new Set(loans?.map((loan) => loan.loanCategory))];

  // const newCategory=loans?.map(loan=>loan.loanCategory)
  // console.log(newCategory)

  // const handleDelete = (id) => {

  //   axios.delete(`http://localhost:3000/loan/delete/${id}`)
  //    .then(() => {
  //     refetch();
  //   });
  // };

  const handleDelete = (id) => {
    setshowModal(true);
    setApplication(id);
  };

  const filterdData =
    statusFilter === "All"
      ? loans
      : loans?.filter(
          (loan) =>
            loan.loanCategory.toLowerCase() === statusFilter.toLowerCase()
        );

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Loan List</h2>

      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:space-x-2">
        <label className="mr-2 font-medium mb-2 sm:mb-0 text-sm sm:text-base">
          Filter By Categories:
        </label>
        <select
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded w-full sm:w-auto text-sm sm:text-base"
        >
          <option>All</option>
          {categories?.map((c) => (
            <option>{c}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Image</th>
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2 text-left">Interest</th>
              <th className="border px-4 py-2 text-left">Category</th>
              <th className="border px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {showModal && (
              <DeleteModal
                id={application}
                onClose={() => setshowModal(false)}
                refetch={refetch}
              ></DeleteModal>
            )}
            {filterdData?.map((loan) => (
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">
                  <img
                    src={loan.loanImage}
                    alt="Home Renovation Loan"
                    className="w-16 h-12 object-cover rounded"
                  />
                </td>
                <td className="border px-4 py-2">{loan.loanTitle}</td>
                <td className="border px-4 py-2">{loan.interest}</td>
                <td className="border px-4 py-2">{loan.loanCategory}</td>
                <td className="border px-4 py-2 text-center space-x-2">
                  <NavLink to={`/dashboard/update-loan/${loan._id}`}>
                    {" "}
                    <button className="px-3 py-1 bg-blue-500 text-white rounded">
                      Update
                    </button>
                  </NavLink>

                  <button
                    onClick={() => handleDelete(loan._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    <NavLink>Delete</NavLink>
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

export default ManageLoan;
