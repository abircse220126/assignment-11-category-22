import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import React from "react";
import useAxios from "../../Hooks/useAxios";

const AdminDashboard = () => {
  const instanceAxios = useAxios();

  // const { data } = useQuery({
  //   queryKey: ["borrower"],
  //   queryFn: async () => {
  //     const result = await axios.get(`http://localhost:3000/users`);
  //     return result;
  //   },
  // });

  const { data } = useQuery({
    queryKey: ["borrower"],
    queryFn: async () => {
      const result = await instanceAxios.get(`/users`);
      return result;
    },
  });

  // const { data: applications = [] } = useQuery({
  //   queryKey: ["applications"],
  //   queryFn: async () => {
  //     const result = await axios.get(`http://localhost:3000/applicationform`);
  //     return result;
  //   },
  // });

  const { data: applications = [] } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const result = await instanceAxios.get(`/applicationform`);
      return result;
    },
  });

  // const { data: loans = [] } = useQuery({
  //   queryKey: ["loans"],
  //   queryFn: async () => {
  //     const result = await axios.get(`http://localhost:3000/loans`);
  //     return result;
  //   },
  // });

  const { data: loans = [] } = useQuery({
    queryKey: ["loans"],
    queryFn: async () => {
      const result = await instanceAxios.get(`/loans`);
      return result;
    },
  });

  const users = data?.data;
  const borrower = users?.filter((user) => user.role === "borrower").length;
  const manager = users?.filter((user) => user.role === "manager").length;
  const borrowerPercent = users ? (borrower / users.length) * 100 : 0;
  const managerPercent = users ? (manager / users.length) * 100 : 0;

  const applicant = applications?.data?.length;
  const allLoans = loans?.data?.length;

  const approveLoan = applications.data?.filter(
    (loan) => loan.status === "Approved"
  ).length;
  const approveLoanPercent = applications?.data
    ? Number(((approveLoan / applicant) * 100).toFixed(2))
    : 0;

  const pendingLoan = applications.data?.filter(
    (loan) => loan.status === "pending"
  ).length;

  const pendingLoans = applications.data?.filter(
    (loan) => loan.status === "pending"
  );

  const pendingLoanPercent = applications?.data
    ? Number(((pendingLoan / applicant) * 100).toFixed(2))
    : 0;
  const RejectLoan = applications.data?.filter(
    (loan) => loan.status === "Rejected"
  ).length;
  const rejectLoanPercent = applications?.data
    ? Number(((RejectLoan / applicant) * 100).toFixed(2))
    : 0;

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800 space-y-6">
      {/* ===== Header ===== */}
      <div className="flex justify-between items-center">
        <div className="text-center flex items-center justify-center">
          <h1 className="text-2xl font-semibold "> Dashboard</h1>
        </div>
      </div>

      {/* ===== KPI CARDS ===== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          {
            title: "Total Borrowers",
            value: borrower,
            percent: borrowerPercent,
          },
          {
            title: "Total Manager",
            value: manager,
            percent: managerPercent,
          },

          {
            title: "Loan Applications",
            value: applicant,
            percent: " ",
          },

          {
            title: "Available Loan",
            value: allLoans,
            percent: "",
          },
        ].map((item, i) => {
          const radius = 16;
          const circumference = 2 * Math.PI * radius;
          const dash = (item.percent / 100) * circumference;

          return (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-sm
                   p-5 min-h-[120px]
                   flex items-center justify-between"
            >
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center">
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="text-2xl font-semibold mt-1">{item.value}</p>
                <p className="text-xs text-green-600 mt-1">
                  {Number(item.percent || 0).toFixed(1)}%
                </p>
              </div>

              {/* RIGHT PROGRESS RING */}
              <div className="w-10 h-10 flex-shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path
                    d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2 a 16 16 0 0 1 0 32"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray={`${dash}, ${circumference - dash}`}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== ANALYTICS WITH IMPROVED WAVEFORM ===== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Loan Application Flow - Waveform Chart */}
        <div className="xl:col-span-2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-700">
              Loan Application Flow
            </h3>
            <span className="text-xs text-gray-400">Last 7 months</span>
          </div>

          <div className="relative h-64">
            <svg
              viewBox="0 0 800 300"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <linearGradient id="wave" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Gradient Fill */}
              <path
                d="
                  M0 190
                  C 120 120, 200 260, 300 180
                  C 420 90, 520 250, 620 150
                  C 700 80, 800 140, 800 140
                  L 800 300
                  L 0 300
                  Z
                "
                fill="url(#wave)"
              />

              {/* Wave Line */}
              <path
                d="
                  M0 190
                  C 120 120, 200 260, 300 180
                  C 420 90, 520 250, 620 150
                  C 700 80, 800 140, 800 140
                "
                fill="none"
                stroke="#6366f1"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

        {/* ===== STATUS SUMMARY ===== */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700 mb-6">
            Application Status
          </h3>

          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Approved</span>
              <span>
                {approveLoanPercent} {`%`}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-gray-700 rounded-full w-[65%]" />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Pending</span>
              <span>
                {pendingLoanPercent} {`%`}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-gray-500 rounded-full w-[20%]" />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Rejected</span>
              <span>
                {rejectLoanPercent} {`%`}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-gray-500 rounded-full w-[20%]" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== LOWER INSIGHTS ===== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">
            Risk Indicators
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• High-risk borrowers: 18%</li>
            <li>• Late payments: 6.2%</li>
            <li>• Default rate: 2.4%</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">
            Top Loan Products
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Personal Loan – 42%</li>
            <li>• Business Loan – 35%</li>
            <li>• Education Loan – 23%</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">
            Today’s Activity
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 14 new applications</li>
            <li>• 8 approvals completed</li>
            <li>• 2 applications rejected</li>
          </ul>
        </div>
      </div>

      {/* ===== RECENT LOAN ACTIVITIES ===== */}
      {/* ===== RECENT LOAN ACTIVITIES TABLE ===== */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">
          Recent Loan Activities
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Loan ID
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Borrower Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {pendingLoans?.map((p) => (
                <tr className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-blue-600 font-medium">
                    {p._id}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {p.first_name} {p.last_name}
                  </td>
                  <td className="px-4 py-2 text-sm font-medium text-green-600">
                    {p.status}
                  </td>
                  <td className="px-4 py-2 text-sm font-semibold text-gray-800">
                    ৳{p.loan_amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
