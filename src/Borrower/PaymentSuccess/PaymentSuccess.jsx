import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import useAxios from "../../Hooks/useAxios";

const PaymentSuccess = () => {
  const [searchParms] = useSearchParams();
  const sessionId = searchParms.get("session_id");
  const instanceAxios = useAxios();
  console.log(sessionId);

  useEffect(() => {
    instanceAxios
      .patch(`/payment-success?session_id=${sessionId}`)
      .then((res) => {
        console.log(res.data);
      });
  }, [sessionId, instanceAxios]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4">
      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl p-8 text-center">
        {/* Success Icon (Pure CSS) */}
        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100">
          <span className="text-4xl font-bold text-emerald-600">✓</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">Payment Successful</h2>

        {/* Description */}
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          Your payment has been completed successfully. Thank you for choosing
          our loan service.
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-gray-200" />

        {/* Payment Details */}
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className="font-semibold text-emerald-600">Completed</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Method</span>
            <span className="font-medium">Stripe Payment</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Reference</span>
            <span className="font-medium">#PAY-102938</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-between">
          <Link to="/dashboard">
            <button className="flex-1 rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
              Back to Dashboard
            </button>
          </Link>

          <Link to="/dashboard/my-loan">
            {" "}
            <button className="flex-1 rounded-lg bg-emerald-600 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition">
              View My Loans
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
