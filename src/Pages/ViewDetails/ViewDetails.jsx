import React from "react";
import { Link, useLoaderData } from "react-router";
// import { useLoaderData } from "react-router";

const ViewDetails = () => {
  const loan = useLoaderData();

  // console.log(loan)

  const {
    emiPlans,
    interest,
    loanCategory,
    loanDescription,
    loanImage,
    loanTitle,
    maxLoanLimit,
    _id
  } = loan.data

  console.log(_id)
  

  return (
    <div className="max-w-4xl mx-auto px-4">

      {/* Loan Image */}
      <div className="w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-lg">
        <img
          src={loanImage}
          alt="Loan"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Loan Content */}
      <div className="mt-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">
          {loanTitle}
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed">
          {loanDescription}
          </p>

        {/* Loan Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">

          <div className="p-4 rounded-xl bg-gray-50 shadow-sm">
            <p className="font-semibold text-gray-900">Category</p>
            <p>{loanCategory}</p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 shadow-sm">
            <p className="font-semibold text-gray-900">Interest Rate</p>
            <p>{interest}</p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 shadow-sm">
            <p className="font-semibold text-gray-900">Max Loan Limit</p>
            <p>{maxLoanLimit}BDT</p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 shadow-sm">
            <p className="font-semibold text-gray-900">EMI Plans</p>
            <p>{emiPlans}</p>
          </div>

        </div>

        {/* Apply Button */}
        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition shadow-md">
          <Link to={`/loan-form/${_id}`}>Apply Now</Link>
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;

