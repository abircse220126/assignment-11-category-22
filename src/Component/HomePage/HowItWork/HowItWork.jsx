import React from "react";
import { FaRegFileAlt, FaRegMoneyBillAlt, FaRegSmile } from "react-icons/fa";

const HowItWork = () => {
  const steps = [
    {
      icon: <FaRegFileAlt size={24} className="text-white" />,
      title: "Apply Online",
      description: "Fill out a simple application form quickly and easily.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FaRegMoneyBillAlt size={24} className="text-white" />,
      title: "Get Approval",
      description: "Instant approval in just a few minutes.",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: <FaRegSmile size={24} className="text-white" />,
      title: "Receive Funds",
      description: "Funds are transferred directly to your account.",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3 text-gray-800">How It Works</h2>
        <p className="text-gray-600 mb-12">
          Get your microloan in just a few simple steps
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative md:flex md:flex-col md:items-center"
              >
                {/* Step number */}
                <div className="absolute md:top-0 md:left-1/2 md:-translate-x-1/2 -translate-y-6 z-10">
                  <div
                    className="w-10 h-10 rounded-full bg-gradient-to-r text-white flex items-center justify-center font-bold text-base shadow-md"
                    style={{
                      background: `linear-gradient(to right, ${step.color})`,
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="mt-10 md:mt-6 bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 max-w-xs mx-auto">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto bg-gradient-to-r ${step.color} shadow-md`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
