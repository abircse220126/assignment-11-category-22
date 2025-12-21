
import React from "react";
import { Outlet } from "react-router";
import SideBar from "../../DashBoard/SideBar/SideBar";
import DashBoardNavbar from "../../DashBoard/DashboardNavbar/DashBoardNavbar";
import Footer from "../../Pages/Footer/Footer";

const DashBoardLayout = () => {
  return (
   <div>
     <div className="grid grid-cols-12 min-h-screen">

      {/* Sidebar – hidden on mobile */}
      <div className="hidden md:block md:col-span-2 bg-white ">
        <SideBar />
      </div>

      {/* Content + Navbar */}
      <div className="col-span-12 md:col-span-10 bg-gray-50 ">
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <DashBoardNavbar />
        </div>

        <div className="p-4 text-black">
          <Outlet />
        </div>
      </div>
    </div>
    <Footer></Footer>
   </div>
  );
};

export default DashBoardLayout;
