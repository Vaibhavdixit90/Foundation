"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What exactly the NFT is?",
      answer:
        "They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.",
    },
    {
      question: "How can I collect NFT?",
      answer:
        "They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.",
    },
    {
      question: "When will Craft NFT release?",
      answer:
        "They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.",
    },
    {
      question: "Will I own the full access?",
      answer:
        "They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col justify-between lg:col-span-5">
          <div className="lg:max-w-sm">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base font-medium text-gray-500">
              In a creative workplace, employees responsibly try different
              solutions
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="flow-root">
            <div className="-my-4 divide-y divide-gray-900">
              {faqs.map((faq, index) => (
                <div key={index} className="py-6">
                  <h3>
                    <button
                      className="flex items-center justify-between w-full space-x-6 text-base font-bold text-left text-gray-900"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="flex-1 text-xl">{faq.question}</span>
                      <span
                        className={`w-8 h-8 flex items-center justify-center rounded-full ${
                          openIndex === index
                            ? "bg-orange-500 text-white"
                            : "bg-black text-white"
                        }`}
                      >
                        {openIndex === index ? (
                          <FiMinus className="w-5 h-5" />
                        ) : (
                          <FiPlus className="w-5 h-5" />
                        )}
                      </span>
                    </button>
                  </h3>
                  {openIndex === index && (
                    <div className="py-4 text-base font-medium text-gray-900">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
