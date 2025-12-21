import React from "react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-50 dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About MicroLoan
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            MicroLoan is a trusted platform designed to provide instant micro
            loans with minimal documentation, low interest rates, and flexible
            repayment options.
          </p>
          <Link to ="/all-loan">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition">
              Apply Now
            </button>
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            To empower individuals and small businesses by providing quick and
            reliable micro loans, enabling financial growth and stability.
          </p>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300">
            To become the leading micro-lending platform known for trust,
            transparency, and innovation in financial services.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581091870622-6a15a79f4d37?auto=format&fit=crop&w=800&q=80"
            alt="Team work"
            className="rounded shadow-lg"
          />
        </div>
      </section>

      {/* How We Help Users */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How We Help Our Users</h2>
          <p className="text-gray-700 dark:text-gray-300">
            MicroLoan simplifies the borrowing process for individuals and small
            businesses. We provide:
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Quick Approval
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Get loans approved in minutes with minimal documentation.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Flexible Repayment
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Choose repayment plans that suit your financial situation.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Low Interest
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Affordable interest rates for faster financial growth.
            </p>
          </div>
        </div>
      </section>

      {/* Optional Team Section */}
      <section className="py-20 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {["Alice", "Bob", "Charlie", "Diana"].map((member, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 p-6 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={`https://i.pravatar.cc/150?img=${idx + 1}`}
                alt={member}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">{member}</h3>
              <p className="text-gray-500 dark:text-gray-400">Team Member</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
