// import React, { useState } from "react";
// import { NavLink } from "react-router";
// // import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const [open, setOpen] = useState(false);

//   const menuItems = [
//     { name: "Dashboard", path: "/dashboard" },
//     { name: "All Loans", path: "/loans" },
//     { name: "My Applications", path: "/applications" },
//     { name: "Transactions", path: "/transactions" },
//     { name: "Profile", path: "/profile" },
//     { name: "Settings", path: "/settings" },
//   ];

//   return (
//     <>
//       {/* Mobile Top Bar */}
//       <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
//         <button
//           onClick={() => setOpen(true)}
//           className="text-xl font-bold"
//         >
//           ☰
//         </button>
//         <h1 className="text-lg font-semibold">LoanLink</h1>
//       </div>

//       {/* Overlay (Mobile) */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-20 md:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed md:static top-0 left-0 h-full bg-white shadow-lg z-30 transform
//           md:translate-x-0 transition-transform duration-300
//           ${open ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b">
//           <h2 className="text-xl font-bold">Menu</h2>

//           <button
//             className="md:hidden text-xl font-bold"
//             onClick={() => setOpen(false)}
//           >
//             ✕
//           </button>
//         </div>

//         {/* Menu Items */}
//         <ul className="p-4 space-y-2">
//           {menuItems.map((item) => (
//             <li key={item.path}>
//               <NavLink
//                 to={item.path}
//                 onClick={() => setOpen(false)}
//                 className={({ isActive }) =>
//                   `block px-4 py-2 rounded-lg text-sm font-medium transition
//                   ${
//                     isActive
//                       ? "bg-blue-500 text-white"
//                       : "hover:bg-gray-100 text-gray-700"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { NavLink } from "react-router";
import AdminPage from "../../Admin/Admin";
import { FaHome } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import ManagerPage from "../../Manager/ManagerPage";
import BorrowerPage from "../../Borrower/BorrowerPage";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // const menu = [
  //   { name: "Dashboard", path: "/dashboard" },
  //   { name: "All Loans", path: "/home" },
  //   { name: "My Applications", path: "/applications" },
  //   { name: "Transactions", path: "/transactions" },
  //   { name: "Profile", path: "/profile" },
  //   { name: "Settings", path: "/settings" },
  // ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
        <button onClick={() => setOpen(true)} className="text-3xl font-bold">
          ☰
        </button>
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          LoanLink
        </h1>
      </div>

      {/* Mobile Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-20"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 
        bg-white/70 backdrop-blur-xl border-r
        shadow-2xl z-30 transition-transform duration-300 ease-in-out
        md:static md:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Gradient Header */}

        <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <h2 className="text-2xl font-bold tracking-wider">MENU</h2>
          <p className="text-sm opacity-90 mt-1">Navigation Panel</p>

          <button
            className="md:hidden text-2xl absolute right-4 top-6"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Menu List */}
        <nav className="p-5 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Main Menu
          </p>

          {/* {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-[1.03]"
                    : "hover:bg-blue-50 hover:scale-[1.02] text-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))} */}

          <ul className="text-black font-medium space-y-2">
            <li className="flex items-center mx-2 gap-2">
              {" "}
              <FaHome />
              <NavLink to="/home">Home</NavLink>
            </li>

            <li className="flex items-center mx-2 gap-2">
              {" "}
              <MdDashboardCustomize />
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <AdminPage></AdminPage>
            <ManagerPage></ManagerPage>
            <BorrowerPage></BorrowerPage>
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 p-5 w-full border-t">
          <button className="w-full text-left px-4 py-3 rounded-xl font-semibold text-red-600 hover:bg-red-50 transition">
            My Profile
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl font-semibold text-red-600 hover:bg-red-50 transition">
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
