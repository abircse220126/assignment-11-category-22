import axios from "axios";
import React from "react";

const CancelLoan = ({ data, onClose , refetch }) => {

    const handleCancel=(id)=>{
        // console.log("handle button is clicked" , id)

        axios.delete(`http://localhost:3000/application/${id}`)
        .then(res =>{
            console.log(res.data)
            onClose()
            refetch()
        })
    }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal Box */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-100">
            <svg
              className="w-7 h-7 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Cancel Application
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 mb-6">
          Are you sure you want to cancel this loan application?
          <br />
          Your entered information will be lost.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button 
          onClick={onClose}
          className="w-full py-3 rounded-2xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition">
            No, Go Back
          </button>

          <button 
          onClick={()=>handleCancel(data)}
          className="w-full py-3 rounded-2xl bg-red-500 text-white font-semibold hover:bg-red-600 transition">
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelLoan;
