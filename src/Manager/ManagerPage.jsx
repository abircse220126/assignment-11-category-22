import React from "react";
import { CiWallet } from "react-icons/ci";
import { FcApprove } from "react-icons/fc";
import { IoAddCircle } from "react-icons/io5";
import { MdDashboardCustomize, MdManageAccounts, MdPending } from "react-icons/md";
import { NavLink } from "react-router";

const ManagerPage = () => {
  return (
    <ul className="font-medium font-bold text-black space-y-2">


      <li className="flex items-center mx-2 gap-2">
        {" "}
        <MdDashboardCustomize />
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>


      <li className="flex items-center mx-2 gap-2">
        {" "}
        <IoAddCircle />
        <NavLink>Add Loan</NavLink>
      </li>
      <li className="flex items-center mx-2 gap-2">
        {" "}
        <MdManageAccounts />
        <NavLink>Manage Loans</NavLink>
      </li>
      <li className="flex items-center mx-2 gap-2">
        {" "}
        <MdPending />
        <NavLink>Pending Applications</NavLink>
      </li>
      <li className="flex items-center mx-2 gap-2">
        {" "}
        <FcApprove />
        <NavLink>Approved Applications</NavLink>
      </li>
    </ul>
  );
};

export default ManagerPage;
