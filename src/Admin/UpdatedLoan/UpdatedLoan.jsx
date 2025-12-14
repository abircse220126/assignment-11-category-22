import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const UpdatedLoan = () => {
  const loan = useLoaderData();
  //   console.log(loan.data);

//   console.log(loan.data._id)

  const loanId=loan.data._id

  const {
    register,
    handleSubmit,
  } = useForm();

  //   const handleUpdateLoan = (event) => {
  //     event.preventDefault();

  //     // const form = event.target;
  //     const title = event.target.title.value;
  //     const description = event.target.description.value;
  //     const interest = event.target.interest.value;
  //     const loanLimit = event.target.loanlimit.value;
  //     const emi = event.target.emi.value;
  //     const loanImage = event.target.image.value;
  //     const category = event.target.category.value;

  //     console.log("title", title);
  //     console.log("description", description);
  //     console.log("interest", interest);
  //     console.log("loanLimit", loanLimit);
  //     console.log("emi", emi);
  //     console.log("loan image", loanImage);
  //     console.log("category", category);
  //   };

  const handleUpdateLoan = (data) => {
    const title = data.title;
    const description = data.description;
    const interest = data.interest;
    const category = data.category;
    const emi = data.emi;
    const Loanimage = data.image[0];
    const loanlimit = data.loanlimit;

    const formData = new FormData();
    formData.append("image", Loanimage);

    axios
      .post(
        `https://api.imgbb.com/1/upload?key=dabfe38b5d7e8414da7cdc161eeec0a5`,
        formData
      )
      .then((res) => {
        console.log(res.data.data.url);
        const loanImage = res.data.data.url;

       const updateLoan={title,description, interest, category, emi ,loanImage,loanlimit}
        console.log(updateLoan)

        //  now request for update loan

        axios.patch(`http://localhost:3000/updates/${loanId}`,updateLoan)
        .then(res =>{
            console.log(res.data)
        })

      });

  
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Create Loan Package
        </h2>
        <p className="text-gray-500 mb-6">
          Fill in the loan details carefully before submitting
        </p>

        <form onSubmit={handleSubmit(handleUpdateLoan)} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Loan Title
            </label>
            <input
              type="text"
              name="title"
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
              name="description"
              {...register("description")}
              placeholder="Write loan description..."
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Interest & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Interest Rate (%)
              </label>
              <input
                type="number"
                name="interest"
                {...register("interest")}
                placeholder="e.g. 12"
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
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
          </div>

          {/* Max Loan Limit */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Maximum Loan Limit
            </label>
            <input
              type="number"
              name="loanlimit"
              {...register("loanlimit")}
              placeholder="e.g. 500000"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* EMI Plans */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Available EMI Plans
            </label>
          </div>
          <div>
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
                name="image"
                {...register("image")}
                type="file"
                multiple
                // className="hidden"
                id="loanImages"
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

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Update Loan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatedLoan;
