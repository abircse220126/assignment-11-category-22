import axios from "axios";
import React, { use } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { useQuery } from "@tanstack/react-query";

const LoanFormPage = () => {
  const loanData = useLoaderData().data;

  const { user, SignoutUser } = use(AuthContext);

  const { data } = useQuery({
    queryKey: ["allLoans", user?.email],
    queryFn: () => {
      const result = axios.get(`http://localhost:3000/loans`);
      return result.data;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(data);

  const navigate = useNavigate();

  const handleApplicationSubmit = (data) => {
    const {
      address,
      loan_title,
      application_fee,
      email,
      extra_note,
      first_name,
      income_source,
      interest_rate,
      last_name,
      loan_amount,
      loan_description,
      monthly_income,
      national_id,
      status,
    } = data;

    const applicationInfo = {
      address,
      loan_title,
      application_fee,
      email,
      extra_note,
      first_name,
      income_source,
      interest_rate,
      last_name,
      loan_amount,
      loan_description,
      monthly_income,
      national_id,
      status,
    };
    axios
      .post("http://localhost:3000/applicationform", applicationInfo)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Your Form is Submitted",
          icon: "success",
          draggable: true,
        });
        navigate("/my-loan");
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Loan Application Form
        </h2>

        <form
          onSubmit={handleSubmit(handleApplicationSubmit)}
          className="space-y-6"
        >
          {/* Auto-filled Read Only Fields */}
          <div>
            <label className="text-gray-700 font-semibold">User Email</label>
            <input
              type="email"
              {...register("email")}
              value={user?.email}
              defaultValue={user?.email}
              className="w-full mt-2 px-4 py-3 border rounded-xl bg-gray-100 cursor-not-allowed shadow-inner text-black"
            />
          </div>
          {errors.email?.type === "required" && <p>email is required</p>}

          <div>
            <label className="text-gray-700 font-semibold">
              Loan Title
            </label>
            <input
              type="text"
              {...register("loan_title")}
              value={loanData?.loanTitle}
              readOnly
              className="w-full mt-2 px-4 py-3 border rounded-xl bg-gray-100 cursor-not-allowed shadow-inner text-black"
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Interest Rate</label>
            <input
              type="text"
              {...register("interest_rate")}
              value={loanData?.interest}
              readOnly
              className="w-full mt-2 px-4 py-3 border rounded-xl bg-gray-100 cursor-not-allowed shadow-inner text-black"
            />
          </div>

          {/* Status - Read Only */}
          <div>
            <label className="text-gray-700 font-semibold">Status</label>
            <input
              type="text"
              {...register("status")}
              value="Pending"
              readOnly
              className="w-full mt-2 px-4 py-3 border rounded-xl bg-gray-100 cursor-not-allowed shadow-inner text-black"
            />
          </div>

          {/* Application Fee Status - Read Only */}
          <div>
            <label className="text-gray-700 font-semibold">
              Application Fee Status
            </label>
            <input
              type="text"
              {...register("application_fee")}
              value="Unpaid"
              readOnly
              className="w-full mt-2 px-4 py-3 border rounded-xl bg-gray-100 cursor-not-allowed shadow-inner text-black"
            />
          </div>

          {/* User Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Fast Name */}
            <div>
              <label className="text-gray-700 font-semibold">First Name</label>
              <input
                type="text"
                {...register("first_name", { required: true })}
                placeholder="Enter First Name"
                className="w-full mt-2 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent text-black"
              />
              {errors.first_name?.type === "required" && (
                <p className="text-red-500">First name is Required</p>
              )}
            </div>

            {/* Last Name */}

            <div>
              <label className="text-gray-700 font-semibold">Last Name</label>
              <input
                type="text"
                {...register("last_name", { required: true })}
                placeholder="Enter Last Name"
                className="w-full mt-2 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent text-black"
              />
              {errors.last_name?.type === "required" && (
                <p className="text-red-500">Last Name is Required</p>
              )}
            </div>
          </div>

          {/* Contact Number */}

          <div>
            <label className="text-gray-700 font-semibold">
              Contact Number
            </label>
            <input
              type="text"
              {...register("number", { required: true })}
              placeholder="01XXXXXXXXX"
              className="w-full mt-2 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent text-black"
            />
            {errors.number?.type === "required" && (
              <p className="text-red-500">Contact Number is required</p>
            )}
          </div>

          {/* National Id or Passport Number  */}

          <div>
            <label className="text-gray-700 font-semibold">
              National ID / Passport Number
            </label>
            <input
              type="text"
              {...register("national_id", { required: true })}
              placeholder="Enter NID / Passport Number"
              className="w-full mt-2 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent text-black"
            />
            {errors.national_id?.types === "required" && (
              <p className="text-red-500">NID/Passport is Required</p>
            )}
          </div>

          {/* Income Source */}

          <div>
            <label className="text-gray-700 font-semibold">Income Source</label>
            <input
              type="text"
              {...register("income_source", { required: true })}
              placeholder="Job / Business / Others"
              className="w-full mt-2 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent text-black"
            />
            {errors.income_source?.type === "required" && (
              <p className="text-red-500">Income Source is Required</p>
            )}
          </div>

          {/* Monthly Income */}

          <div>
            <label className="text-gray-700 font-semibold">
              Monthly Income
            </label>
            <input
              type="number"
              {...register("monthly_income", { required: true })}
              placeholder="Enter Monthly Income"
              className="w-full mt-2 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent text-black"
            />
            {errors.monthly_income?.type === "required" && (
              <p className="text-red-500">Monthly Income is Required</p>
            )}
          </div>

          {/* Loan Amount */}

          <div>
            <label className="text-gray-700 font-semibold">Loan Amount</label>
            <input
              type="number"
              {...register("loan_amount", { required: true })}
              placeholder="Enter Loan Amount"
              className="w-full mt-2 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent text-black"
            />
            {errors.number?.type === "requird" && (
              <p className="text-red-500">Enter Loan Amount</p>
            )}
          </div>

          {/* Loan Description */}
          <div>
            <label className="text-gray-700 font-semibold">
              Reason for Loan
            </label>
            <textarea
              placeholder="Describe why you need this loan..."
              {...register("loan_description", { required: true })}
              className="w-full mt-2 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent h-24 text-black"
            ></textarea>
            {errors.loan_description?.type === "required" && (
              <p className="text-red-500">Write short loan Description</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="text-gray-700 font-semibold">Address</label>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="Enter your full address"
              className="w-full mt-2 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent text-black"
            />
            {errors.address?.type === "required" && (
              <p className="text-red-500">Address is Required</p>
            )}
          </div>

          {/* Extra info */}
          <div>
            <label className="text-gray-700 font-semibold">Extra Notes</label>
            <textarea
              placeholder="Additional information (optional)"
              {...register("extra_note")}
              className="w-full mt-2 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent h-24 text-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-3 rounded-2xl font-bold hover:scale-105 transform transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanFormPage;
