import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, NavLink } from "react-router";

const AllLoan = () => {
  const { data } = useQuery({
    queryKey: ["loan", "application"],
    queryFn: () => {
      const result = axios.get("http://localhost:3000/loans");
      return result;
    },
  });
  const loans = data?.data;



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
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-secondary"
                />
              </td>
              <th className="flex gap-5">
             <NavLink to={`/dashboard/update-loan/${loan._id}`}> <button className="btn btn-accent">Update</button></NavLink>
             

                <button className="btn btn-accent"><NavLink >Delete</NavLink></button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllLoan;
