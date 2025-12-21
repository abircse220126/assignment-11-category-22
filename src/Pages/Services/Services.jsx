import React from 'react';

const Services = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* Hero Section */}
      <section className="bg-blue-50 dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
            MicroLoan offers fast, reliable, and flexible financial solutions designed to support individuals and small businesses.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition">
            Apply for a Loan
          </button>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Simple, transparent, and customer-focused micro-loan services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Instant Loan Approval
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Get loan approval within minutes with minimal documentation and a smooth digital process.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Low Interest Loans
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Transparent pricing with affordable interest rates to keep repayments stress-free.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Flexible Repayment
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Choose weekly or monthly repayment plans that fit your income and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Loan Types We Provide</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Designed to support different financial needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-6">
          {[
            "Personal Micro Loans",
            "Small Business Loans",
            "Emergency Loans",
            "Education Loans",
          ].map((loan, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 p-6 rounded shadow text-center hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{loan}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose MicroLoan?</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>✔ Fast & secure loan processing</li>
              <li>✔ No hidden charges</li>
              <li>✔ Trusted by thousands of users</li>
              <li>✔ 24/7 customer support</li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
              alt="Micro loan service"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Financial Support?
        </h2>
        <p className="mb-6">
          Apply today and get quick access to funds with MicroLoan.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default Services;
