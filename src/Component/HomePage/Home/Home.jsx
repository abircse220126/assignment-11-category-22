import React, { useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";


import LoanCard from "../../../Pages/AllLoanPages/LoanCard";
import Banner from "../Banner/Banner";
import HowItWork from "../HowItWork/HowItWork";
import Reviews from "../Reviews/Reviews";
import useAxios from "../../../Hooks/useAxios";
// import Reviews from "../Reviews/Reviews";
const Home = () => {
  const [loans, setLoans] = useState([]);
  const axiosInstance=useAxios()

  useEffect(() => {
    axiosInstance.get("/loanscardhome").then((res) => {
      setLoans(res.data);
    });
  }, []);

  // useEffect(()=>{
  //   document.documentElement.setAttribute("data-theme","dark")
  // },[])

  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <div className="w-full py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
          {/* ⭐ Your Grid Code (UNCHANGED) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl gap-10 mx-auto px-4">
            {loans.map((loan) => (
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                {/* Image */}
                <div className="h-40 w-full">
                  <img
                    src={loan.loanImage}
                    alt="Loan"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h2 className="text-lg font-semibold text-gray-900 truncate">
                    {loan.loanTitle}
                  </h2>

                  <p className="text-xs text-gray-500">{loan.loanCategory}</p>

                  <div className="flex flex-col sm:flex-row justify-between text-xs text-gray-600 gap-1 sm:gap-0">
                    <p>
                      Interest:{" "}
                      <span className="font-semibold text-gray-800">
                        {loan.interest}%
                      </span>
                    </p>

                    <p>
                      Limit:{" "}
                      <span className="font-semibold text-gray-800">
                        {loan.maxLoanLimit} BDT
                      </span>
                    </p>
                  </div>

                  <button className="w-full mt-2 bg-indigo-600 text-white py-1.5 rounded-md text-sm font-medium hover:bg-indigo-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* ⭐ END GRID */}
        </div>
      </div>

      <div>
        <HowItWork></HowItWork>
      </div>

      <div>
        <Reviews></Reviews>
      </div>
    </>
  );
};

export default Home;
