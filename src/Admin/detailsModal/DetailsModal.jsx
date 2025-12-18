import { Info } from "lucide-react";
import React from "react";

const DetailsModal = ({ data, onClose }) => {
  // console.log(data);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 relative shadow-2xl text-sm">
        {/* Close Icon */}
        <span className="absolute top-4 right-4 text-gray-400 hover:text-black cursor-pointer text-lg">
          <button onClick={onClose}>✕</button>
        </span>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Loan Application Details
          </h2>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-600 mt-5">
            {data.status}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between">
            <span className="text-gray-500">Applicant Name:</span>
            <span className="font-medium">
              {data.first_name} {data.last_name}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Email:</span>
            <span className="font-medium">{data.email}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Loan Type:</span>
            <span className="font-medium">{data.loan_title}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Loan Amount:</span>
            <span className="font-medium">৳{data.loan_amount}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Interest Rate:</span>
            <span className="font-medium">{data.interest_rate}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Monthly Income:</span>
            <span className="font-medium">৳{data.monthly_income}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Income Source:</span>
            <span className="font-medium">{data.income_source}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Application Fee:</span>
            <span className="font-medium text-red-600">{data.application_fee}</span>
          </div>

          <div>
            <span className="text-gray-500">Address:</span>
            <p className="font-medium ml-1">{data.address}</p>
          </div>

          <div>
            <span className="text-gray-500">Extra Note:</span>
            <p className="font-medium ml-1 bg-gray-50 p-3 rounded-lg">
              {data.extra_note}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t mt-6 pt-4 text-xs text-gray-500 flex justify-between items-center">
          <p>
            <b>ID:</b>{data.national_id}
          </p>
          <span className="text-gray-400">Read-only view</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
