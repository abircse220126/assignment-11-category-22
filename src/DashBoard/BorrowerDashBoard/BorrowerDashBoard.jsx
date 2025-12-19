import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import ApproveLoan from "../../Manager/ApproveLoan/ApproveLoan";
import { NavLink } from "react-router";
import CancelLoan from "../../Pages/CancelLoan/CancelLoan";
import DetailsModal from "../../Admin/detailsModal/detailsModal";

const BorrowerDashBoard = () => {
  const { user } = use(AuthContext);
  const { data } = useQuery({
    queryKey: ["MyLoan", user?.email],
    queryFn: async () => {
      const result = await axios.get(
        `http://localhost:3000/application/${user.email}`
      );
      return result;
    },
  });

  const userLoan = data?.data;
  // console.log(userLoan);
  const userLoanLength = userLoan?.length;
  const approveLoan = userLoan?.filter((loan) => loan.status === "Approved");
  const approveLoanLength = approveLoan?.length;
  const PendingLoan = userLoan?.filter((loan) => loan.status === "Pending");
  const pendingLoanLength = PendingLoan?.length;

  const totalLoanAmount = userLoan?.reduce((sum, loan) => {
    // Remove any non-digit characters like commas or currency symbols
    const cleanAmount = Number(loan.loan_amount.replace(/[^0-9.-]+/g, ""));
    return sum + (isNaN(cleanAmount) ? 0 : cleanAmount);
  }, 0);

  const handleModal = (id)=>{
    // console.log("modal Clicked" ,id)
    setShowModal(true)
    setApplication(id)
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6 lg:p-10 space-y-10">
      {/* Top Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow border border-slate-200">
          <p className="text-sm text-slate-500">Total Loans</p>
          <h2 className="text-2xl font-semibold text-slate-800 mt-2">
            {userLoanLength}
          </h2>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow border border-slate-200">
          <p className="text-sm text-slate-500">Approved Loans</p>
          <h2 className="text-2xl font-semibold text-green-600 mt-2">
            {approveLoanLength}
          </h2>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow border border-slate-200">
          <p className="text-sm text-slate-500">Pending Loans</p>
          <h2 className="text-2xl font-semibold text-amber-600 mt-2">
            {pendingLoanLength}
          </h2>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow border border-slate-200">
          <p className="text-sm text-slate-500">Total EMI</p>
          <h2 className="text-2xl font-semibold text-slate-800 mt-2">
            ৳{totalLoanAmount}
          </h2>
        </div>
      </div>

      {/* My Loans Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800">My Loans</h2>
        <div className="space-y-4">
          {/* Loan Row */}
{/* 
          {
            showModal && 
            <CancelLoan 
            data={application}
            refetch={refetch}
            onClose={() => setShowModal(false)}
            ></CancelLoan>
          } */}


        
        
          {approveLoan?.map((a) => (
            <div className="bg-white p-5 rounded-2xl shadow flex flex-col md:flex-row justify-between items-start md:items-center border border-slate-200">
              <div>
                <h3 className="text-lg font-medium text-slate-800">
                  {a.loan_title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">Loan ID: {a._id}</p>
                <p className="text-sm text-slate-600 mt-2">
                  Amount: <span className="font-medium">৳{a.loan_amount}</span>{" "}
                  ·Interest Rate:{" "}
                  <span className="font-medium">{a.interest_rate}</span>
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  Approved
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Loans Section */}
      <div className="space-y-4 mt-10">
        <h2 className="text-2xl font-semibold text-slate-800">
          Available Loans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow p-5 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition">
            <h3 className="text-lg font-medium text-slate-800">Car Loan</h3>
            <p className="text-sm text-slate-500 mt-2">Interest: 12%</p>
            <p className="text-sm text-slate-500 mt-1">
              Max Amount: ৳10,00,000
            </p>
            <NavLink to="/all-loan">
              {" "}
              <button className="mt-4 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition">
                Apply Now
              </button>
            </NavLink>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition">
            <h3 className="text-lg font-medium text-slate-800">
              Business Loan
            </h3>
            <p className="text-sm text-slate-500 mt-2">Interest: 14%</p>
            <p className="text-sm text-slate-500 mt-1">
              Max Amount: ৳20,00,000
            </p>
            <NavLink to="/all-loan">
              {" "}
              <button className="mt-4 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition">
                Apply Now
              </button>
            </NavLink>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition">
            <h3 className="text-lg font-medium text-slate-800">
              Education Loan
            </h3>
            <p className="text-sm text-slate-500 mt-2">Interest: 10%</p>
            <p className="text-sm text-slate-500 mt-1">Max Amount: ৳5,00,000</p>
            <NavLink to="/all-loan">
              {" "}
              <button className="mt-4 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition">
                Apply Now
              </button>
            </NavLink>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition">
            <h3 className="text-lg font-medium text-slate-800">
              Personal Loan
            </h3>
            <p className="text-sm text-slate-500 mt-2">Interest: 11%</p>
            <p className="text-sm text-slate-500 mt-1">Max Amount: ৳3,00,000</p>
            <NavLink to="/all-loan">
              {" "}
              <button className="mt-4 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition">
                Apply Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowerDashBoard;
