import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { SiMyspace } from "react-icons/si";
import { NavLink } from "react-router";

const BorrowerPage = () => {
  return (
    <div>
      <ul className="font-medium font-bold text-black space-y-2">

        <li className="flex items-center mx-2 gap-2">
          {" "}
          <MdDashboardCustomize />
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>

        <li className="flex items-center mx-2 gap-2">
          {" "}
          <SiMyspace />
          <NavLink to="/dashboard/my-loan">My Loans</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BorrowerPage;
