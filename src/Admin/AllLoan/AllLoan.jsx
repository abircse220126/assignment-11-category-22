import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Link, NavLink } from "react-router";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";

const AllLoan = () => {
  const [showModal, setshowModal] = useState(false);
  const [application, setApplication] = useState();

  const { data, refetch } = useQuery({
    queryKey: ["loan", "application"],
    queryFn: () => {
      const result = axios.get("http://localhost:3000/loans");
      return result;
    },
  });
  const loans = data?.data;

  const handleShowHome = (id, value) => {
    const updateinfo = {
      showHome: value,
    };

    axios
      .patch(`http://localhost:3000/loans/show-no-home/${id}`, updateinfo)
      .then(() => {
        refetch();
      });
  };


  const handleDelete = (id) => {
    setshowModal(true);
    setApplication(id);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-black">
            <th>Name</th>
            <th>Category</th>
            <th>Created by</th>
            <th>Show on home</th>
            <th className="pl-20">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {showModal && (
            <DeleteModal
              id={application}
              onClose={() => setshowModal(false)}
              refetch={refetch}
            ></DeleteModal>
          )}

          {loans?.map((loan) => (
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={loan.loanImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{loan.loanTitle}</div>
                    <div className="text-sm opacity-50">{loan.interest}</div>
                  </div>
                </div>
              </td>
              <td>{loan.loanCategory}</td>
              <td>{loan.createdBy}</td>
              <td className="pl-15">
                <input
                  checked={Boolean(loan.showHome)}
                  onChange={(e) => handleShowHome(loan._id, e.target.checked)}
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
              </td>
              <th className="flex gap-5">
                <NavLink to={`/dashboard/update-loan/${loan._id}`}>
                  {" "}
                  <button className="btn btn-accent">Update</button>
                </NavLink>

                <button
                  onClick={() => handleDelete(loan._id)}
                  className="btn btn-accent"
                >
                  <NavLink>Delete</NavLink>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllLoan;
