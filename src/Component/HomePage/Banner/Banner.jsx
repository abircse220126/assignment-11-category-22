import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[420px] rounded-xl overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=1200&q=80")`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 text-white max-w-xl">
        <h1 className="text-5xl font-bold leading-tight">Easy Loans</h1>

        <p className="mt-4 text-lg opacity-90">
          Get the financial support you need today.
        </p>

        {/* NEW PARALLEL BUTTONS */}
        <div className="mt-8 flex gap-4">
          {/* Primary Button */}
          <Link
            to="/all-loan"
            className="px-7 py-3 rounded-xl text-lg font-semibold 
            bg-indigo-600/90 backdrop-blur-md shadow-lg
            hover:bg-indigo-700 hover:shadow-xl transition-all duration-300
            scale-100 hover:scale-[1.05]"
          >
            Apply Now
          </Link>

          {/* Secondary Button */}
          <Link
            to="/all-loan"
            className="px-7 py-3 rounded-xl text-lg font-semibold
            bg-white/20 backdrop-blur-lg border border-white/40 shadow-md 
            text-white hover:bg-white/30 hover:shadow-xl transition-all duration-300
            scale-100 hover:scale-[1.05]"
          >
            Explore Loans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
