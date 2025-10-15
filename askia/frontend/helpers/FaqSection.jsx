"use client";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16  dark:bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-nunito font-bold text-ask-primary dark:text-white">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <h3 className="mt-4 text-lg text-ask-secondary font-nunito dark:text-gray-300">
            Got Questions? We've Got Answers
          </h3>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-6 py-5 text-left"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <span
                  className={`w-7 h-7 text-xl font-bold flex items-center justify-center rounded-full text-white transition-all ${
                    openIndex === index
                      ? "bg-ask-primary rotate-45"
                      : "bg-ask-secondary"
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-600 dark:text-gray-400">
          Still have questions?{" "}
          <Link
            href="/contact-us"
            className="text-btnColor font-semibold hover:underline cursor-pointer"
          >
            Contact our support
          </Link>
        </p>
      </div>
    </section>
  );
}
