import React from "react";
import { SiMyspace } from "react-icons/si";
import { NavLink } from "react-router";

const BorrowerPage = () => {
  return (
    <div>
      <ul className="font-medium font-bold text-black space-y-2">
        <li className="flex items-center mx-2 gap-2">
          {" "}
          <SiMyspace />
          <NavLink>My Loans</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BorrowerPage;
