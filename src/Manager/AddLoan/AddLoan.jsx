import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddLoan = () => {
  const [showHome, setShowhome] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleShowHome = () => {
    setShowhome(!showHome);
  };

  console.log(showHome)

  const handleformSubmit = (data) => {
    const loanTitle = data.title;
    const loanDescription = data.description;
    const loanCategory = data.category;
    const interest = data.interest;
    const maxLoanLimit = data.loanLimit;
    const document = data.document;
    const emi = data.emi;
    const loanImage = data.image[0];
    const date = data.date;
    const formData = new FormData();
    formData.append("image", loanImage);

    axios
      .post(
        `https://api.imgbb.com/1/upload?key=3e5c0aba1d1d78e329f5b6f1189bce28`,
        formData
      )
      .then((res) => {
        console.log(res.data.data.url);
        const loanImage = res.data.data.url;
        const loanInfo = {
          loanTitle,
          loanDescription,
          loanCategory,
          interest,
          maxLoanLimit,
          document,
          emi,
          loanImage,
          date,
          showHome,
        };

        axios.post(`http://localhost:3000/loans`, loanInfo).then((res) => {
          console.log(res.data);
          //    here add the confarmation pop up

          Swal.fire({
            title: "New Loan is Added ",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top  no-repeat`,
          });
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Loan Details Form
        </h2>
        <p className="text-gray-500 mb-6 text-center">
          Fill in the loan details carefully
        </p>

        <form onSubmit={handleSubmit(handleformSubmit)} className="space-y-6">
          {/* Loan Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Loan Title
            </label>
            <input
              type="text"
              {...register("title")}
              placeholder="e.g. Personal Business Loan"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows="4"
              {...register("description")}
              placeholder="Write loan description..."
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Category & Interest Rate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                {...register("category")}
                className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>Select Category</option>
                <option>Personal Loan</option>
                <option>Business Loan</option>
                <option>Education Loan</option>
                <option>Home Loan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Interest Rate (%)
              </label>
              <input
                type="number"
                {...register("interest")}
                placeholder="e.g. 12"
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Max Loan Limit */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Maximum Loan Limit
            </label>
            <input
              type="number"
              {...register("loanLimit")}
              placeholder="e.g. 500000"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Required Documents */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Required Documents
            </label>
            <input
              type="text"
              {...register("document")}
              placeholder="e.g. National ID, Income Proof"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* EMI Plans */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Available EMI Plans
            </label>
            <div className="flex gap-5">
              <label className="flex items-center gap-2 border rounded-xl px-3 py-2 cursor-pointer">
                <input
                  type="radio"
                  name="emi"
                  {...register("emi")}
                  value="6 Month"
                  className="accent-blue-600"
                />
                6 Month
              </label>

              <label className="flex items-center gap-2 border rounded-xl px-3 py-2 cursor-pointer">
                <input
                  type="radio"
                  name="emi"
                  {...register("emi")}
                  value="12 Month"
                  className="accent-blue-600"
                />
                12 Month
              </label>

              <label className="flex items-center gap-2 border rounded-xl px-3 py-2 cursor-pointer">
                <input
                  type="radio"
                  name="emi"
                  {...register("emi")}
                  value="18 Month"
                  className="accent-blue-600"
                />
                18 Month
              </label>

              <label className="flex items-center gap-2 border rounded-xl px-3 py-2 cursor-pointer">
                <input
                  type="radio"
                  name="emi"
                  {...register("emi")}
                  value="24 Month"
                  className="accent-blue-600"
                />
                24 Month
              </label>
            </div>
          </div>

          {/* Images Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Images
            </label>

            <div className="border-2 border-dashed rounded-xl p-6 text-center hover:border-blue-500 transition">
              <input
                {...register("image")}
                type="file"
                multiple
                id="loanImages"
                className="hidden"
              />
              <label
                htmlFor="loanImages"
                className="cursor-pointer text-gray-500"
              >
                <p className="text-sm">Click to upload or drag & drop</p>
                <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
              </label>
            </div>
          </div>

          {/* Date (from system) */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="text"
              {...register("date")}
              value={new Date().toLocaleDateString()}
              disabled
              className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-gray-100"
            />
          </div>

          {/* Show on Home Toggle */}
          <div className="flex items-center space-x-2">
            <input
              onClick={handleShowHome}
              type="checkbox"
              className="w-5 h-5"
            />
            <label className="font-medium">Show on Home</label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLoan;
