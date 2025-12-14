// import React from "react";

// const LoanCard = ({ loan }) => {
//   console.log(loan);
//   return (
//     <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
//       {/* Loan Image */}
//       <div className="h-48 w-full">
//         <img
//           src={loan.loanImage}
//           alt="Loan"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-5 space-y-3">
//         {/* Loan Title */}
//         <h2 className="text-xl font-semibold text-black">{loan.loanTitle}</h2>

//         {/* Loan Category */}
//         <p className="text-sm text-gray-600">
//           Category: <span className="font-medium">{loan.loanCategory}</span>
//         </p>

//         {/* Interest */}
//         <p className="text-sm text-gray-600">
//           Interest Rate: <span className="font-medium">{loan.interest}%</span>
//         </p>

//         {/* Max Limit */}
//         <p className="text-sm text-gray-600">
//           Max Loan Limit:{" "}
//           <span className="font-medium">{loan.maxLoanLimit}BDT</span>
//         </p>

//         {/* View Details Button */}
//         <button className="w-full mt-3 bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoanCard;

import React from "react";
import { Link } from "react-router";

const LoanCard = ({ loan }) => {
  const {
    
    interest,
    loanCategory,
    loanImage,
    loanTitle,
    maxLoanLimit,
  } = loan;

  console.log(loan);

  return (
    <div className="w-70 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
      {/* Image */}
      <div className="h-40 w-full">
        <img
          src={loanImage}
          alt="Loan"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          {loanTitle}
        </h2>

        <p className="text-xs text-gray-500">{loanCategory}</p>

        <div className="flex justify-between text-xs text-gray-600">
          <p>
            Interest:{" "}
            <span className="font-semibold text-gray-800">{interest}</span>
          </p>
          <p>
            Limit:{" "}
            <span className="font-semibold text-gray-800">
              {maxLoanLimit} BDT
            </span>
          </p>
        </div>

        <button className="w-full mt-2 bg-indigo-600 text-white py-1.5 rounded-md text-sm font-medium hover:bg-indigo-700 transition">
          <Link to={`/view-details/${loan._id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default LoanCard;
