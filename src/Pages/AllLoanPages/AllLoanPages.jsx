import React, { useEffect, useState } from "react";
import LoanCard from "./LoanCard";
import axios from "axios";
import { data } from "react-router";

const AllLoanPages = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/loans").then((res) => {
      // console.log(res.data)
      setLoans(res.data);
      
    });
  }, []);

  // console.log(loans)

  return (
    <div
      className="w-full py-16"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1400&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-7/12 mx-auto gap-6">
        {loans.map((loan) => (
          <LoanCard loan={loan}></LoanCard>
        ))}
      </div>
    </div>
  );
};

export default AllLoanPages;
