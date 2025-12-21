import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import React from "react";
import useAxios from "../../Hooks/useAxios";

const ManagerDashBoard = () => {
  const instanceAxios = useAxios()

    // const {data:totalLoan}=useQuery({
    //     queryKey:["lmanageLoan"],
    //     queryFn:async()=>{
    //         const result= await axios.get(`http://localhost:3000/loans`)
    //         return result.data
    //     }

    // })
    
    const {data:totalLoan}=useQuery({
        queryKey:["lmanageLoan"],
        queryFn:async()=>{
            const result= await instanceAxios.get(`/loans`)
            return result.data
        }

    })
   
    const totalLoanLength=totalLoan?.length

    const{data:application}=useQuery({
        queryKey:["approveApplication"],
        queryFn:async()=>{
            const result = await instanceAxios.get(`/applicationform`)
            return result.data
        }
    })

    // const totalApplication=application?.length

    const approveApplication=application?.filter(a =>a.status==="Approved").length
    const pendingApplication=application?.filter(a =>a.status==="pending").length
    const rejectApplication=application?.filter(a =>a.status==="Rejected").length
    

    

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Manager Dashboard</h1>
        <p className="text-sm text-gray-500">
          Manage loans and applications efficiently
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <DashboardCard
          title="Add Loan"
          desc="Create new loan product"
          color="bg-indigo-600"
        />
        <DashboardCard
          title="Manage Loan"
          desc={totalLoanLength}
          color="bg-blue-600"
        />
        <DashboardCard
          title="Pending Loan"
          desc={pendingApplication}
          color="bg-orange-500"
        />
        <DashboardCard
          title="Approve Application"
          desc={approveApplication}
          color="bg-green-600"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-6 mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Loan Activities
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Loan Title</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">Home Renovation Loan</td>
                <td className="px-4 py-3">Home Loan</td>
                <td className="px-4 py-3 text-orange-600 font-medium">
                  Pending
                </td>
                <td className="px-4 py-3">12 Sep 2025</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Business Startup Loan</td>
                <td className="px-4 py-3">Business</td>
                <td className="px-4 py-3 text-green-600 font-medium">
                  Approved
                </td>
                <td className="px-4 py-3">10 Sep 2025</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Personal Loan</td>
                <td className="px-4 py-3">Personal</td>
                <td className="px-4 py-3 text-orange-600 font-medium">
                  Pending
                </td>
                <td className="px-4 py-3">08 Sep 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Extra Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Loan Summary */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Loan Summary
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span>Total Loans</span>
              <span className="font-medium">{totalLoanLength}</span>
            </li>
            <li className="flex justify-between">
              <span>Active Loans</span>
              <span className="font-medium text-green-600">{approveApplication}</span>
            </li>
            <li className="flex justify-between">
              <span>Pending Approval</span>
              <span className="font-medium text-orange-600">{pendingApplication}</span>
            </li>
            <li className="flex justify-between">
              <span>Rejected Loans</span>
              <span className="font-medium text-red-600">{rejectApplication}</span>
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Add New Loan
            </button>
            <button className="w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              View Pending Loans
            </button>
            <button className="w-full py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
              Approve Applications
            </button>
          </div>
        </div>

        {/* Manager Notes */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Manager Notes
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            ✔ Review pending loan applications daily <br />
            ✔ Verify applicant documents before approval <br />
            ✔ Monitor loan limits and interest rates <br />✔ Suspended users
            cannot apply for loans
          </p>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, desc, color }) => {
  return (
    <div
      className={`${color} text-white rounded-xl p-6 shadow hover:scale-[1.02] transition`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm opacity-90 mt-1">{desc}</p>
    </div>
  );
};

export default ManagerDashBoard;
