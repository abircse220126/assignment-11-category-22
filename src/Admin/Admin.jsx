import { FileUser } from "lucide-react";
import React from "react";
import { CiWallet } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdDashboardCustomize, MdManageHistory, MdOutlineSettingsApplications } from "react-icons/md";
import { NavLink } from "react-router";

const AdminPage = () => {
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
          <MdManageHistory />
          <NavLink to="/dashboard/manage-user"> Manage user</NavLink>
        </li>

        <li className="flex items-center mx-2 gap-2">
          {" "}
          <CiWallet />
          <NavLink to='/dashboard/all-loan'>All Loan</NavLink>
        </li>

        <li className="flex items-center mx-2 gap-2">
          {" "}
          <MdOutlineSettingsApplications />
          <NavLink to='loan-application'>loan Application</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminPage;
