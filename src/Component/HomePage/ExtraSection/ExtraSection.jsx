import React from "react";

const ExtraSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded shadow hover:shadow-lg transition">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Fast Loan Approval
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Get your micro loan approved in minutes with minimal documentation.
            Our platform ensures a smooth, hassle-free process.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition">
            Apply Now
          </button>
        </div>

        {/* Right Section */}
        <div className="bg-blue-50 dark:bg-gray-700 p-8 rounded shadow hover:shadow-lg transition">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Flexible Repayment Options
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Choose weekly or monthly repayment plans that fit your budget.
            MicroLoan provides flexible solutions tailored for you.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
