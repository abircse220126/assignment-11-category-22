import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import DetailsModal from "../../Admin/detailsModal/detailsModal";
import CancelLoan from "../CancelLoan/CancelLoan";
import useAxios from "../../Hooks/useAxios";

const MyLoanPage = () => {
  const { user } = use(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const [application, setApplication] = useState(null);

  const [CancelModal, setcancelModal] = useState(false);
  const [applicationId, setApplicationId] = useState(null);
  const instanceAxios = useAxios();

  console.log(user);

  const { data, refetch } = useQuery({
    queryKey: ["MyLoan", user?.email],
    queryFn: async () => {
      const result = await instanceAxios.get(`/application/${user.email}`);
      return result;
    },
  });

  const loanData = data?.data;
  const filterData = loanData?.filter(
    (data) => data.status.toLowerCase() === "pending"
  );

  const handleCancle = (id) => {
    setcancelModal(true);
    setApplicationId(id);
  };

  // const handlePay =async ()=>{

  //   const paymentInfo={
  //     name:user.name,
  //     email:user.email,
  //     userId:user._id,

  //   }
  //   const res = await instanceAxios.post('/create-checkout-session', paymentInfo)
  //   console.log(res.data)

  //   window.location.href = res.data.url;
  // }

  const handlePay = async (id) => {
    console.log(id);

    // if (!user?.email) {
    //   alert("User not loaded yet");
    //   return;
    // }

    const paymentInfo = {
      name:user.displayName,
      email: user.email,
      loanId: id,
    };

    console.log(paymentInfo);

    const res = await instanceAxios.post(
      "/create-checkout-session",
      paymentInfo
    );

    window.location.assign(res.data.url);
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-center text-2xl font-bold mb-6">This is My Loan</h2>

      {/* ===== Desktop & Tablet Table ===== */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[900px] border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-5 py-3 text-left text-sm font-semibold">
                Loan ID
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold">
                Loan Info
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold">
                Amount
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold">
                Status
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {showModal && (
              <DetailsModal
                data={application}
                onClose={() => setShowModal(false)}
              />
            )}

            {CancelModal && (
              <CancelLoan
                data={applicationId}
                onClose={() => setcancelModal(false)}
                refetch={refetch}
              ></CancelLoan>
            )}

            {loanData?.map((loan) => (
              <tr
                key={loan._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-5 py-4 text-sm text-gray-800">{loan._id}</td>

                <td className="px-5 py-4">
                  <p className="font-semibold text-gray-800">
                    {loan.loan_title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {loan.interest_rate} • {loan.emiPlans}
                  </p>
                </td>

                <td className="px-5 py-4 font-semibold text-gray-700">
                  ৳ {loan.loan_amount}
                </td>

                <td className="px-5 py-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                    {loan.status}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setApplication(loan);
                      }}
                      className="bg-blue-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm"
                    >
                      View
                    </button>

                    {loan.status.toLowerCase() === "pending".toLowerCase() && (
                      <button
                        onClick={() => handleCancle(loan._id)}
                        className="px-3 py-2 text-sm rounded-md bg-red-100 text-red-700 hover:bg-red-200"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      onClick={() => handlePay(loan._id)}
                      className="px-3 py-1.5 text-sm rounded-md bg-green-100 text-green-700 hover:bg-green-200"
                    >
                      Pay
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== Mobile Card View ===== */}
      <div className="md:hidden space-y-4">
        {showModal && (
          <DetailsModal
            data={application}
            onClose={() => setShowModal(false)}
          />
        )}

        {filterData?.map((loan) => (
          <div
            key={loan._id}
            className="border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-gray-600">{loan._id}</p>
              <p className="text-sm text-gray-800">{loan._id}</p>
            </div>

            <div className="mb-2">
              <p className="font-semibold text-gray-800">{loan.loan_title}</p>
              <p className="text-sm text-gray-500">
                {loan.interest_rate} • {loan.emiPlans}
              </p>
            </div>

            <div className="flex justify-between items-center mb-3">
              <p className="text-sm text-gray-600">Amount</p>
              <p className="font-semibold text-gray-800">
                ৳ {loan.loan_amount}
              </p>
            </div>

            <div className="mb-4">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                {loan.status}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setShowModal(true);
                  setApplication(loan);
                }}
                className="bg-blue-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm"
              >
                View
              </button>

              {loan.status.toLowerCase() === "pending".toLowerCase() && (
                <button className="flex-1 px-3 py-2 text-sm rounded-md bg-red-100 text-red-700 hover:bg-red-200">
                  Cancel
                </button>
              )}

              <button
                onClick={handlePay}
                className="flex-1 px-3 py-2 text-sm rounded-md bg-green-100 text-green-700 hover:bg-green-200"
              >
                Pay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLoanPage;
