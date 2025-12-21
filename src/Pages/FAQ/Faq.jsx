import { useState } from "react";

const faqs = [
  {
    question: "What is MicroLoan?",
    answer: "MicroLoan is a trusted platform that provides instant micro loans with low interest rates and flexible repayment options.",
  },
  {
    question: "How can I apply for a loan?",
    answer: "You can apply for a loan online by filling out our simple application form. Approval is usually instant or within a few hours.",
  },
  {
    question: "What is the minimum and maximum loan amount?",
    answer: "The minimum loan amount is BDT 5,000 and the maximum depends on your eligibility and credit assessment.",
  },
  {
    question: "What are the interest rates?",
    answer: "Interest rates are competitive and transparent. You can view the exact rate during the loan application process.",
  },
  {
    question: "How do I repay my loan?",
    answer: "You can choose flexible repayment plans – weekly or monthly – and pay through bank transfer or mobile banking.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely! We use industry-standard encryption to ensure all your personal and financial data is safe.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900 dark:text-gray-100">{faq.question}</span>
                <span className="text-gray-500 dark:text-gray-400">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
