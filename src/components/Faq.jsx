import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
    {
      question: "How do I book a room?",
      answer: "To book a room, browse our listings, select your preferred room, choose your dates, and click the 'Book Now' button.",
      related: [
        "Can I book multiple rooms at once?",
        "Do I need an account to book a room?",
        "What payment methods are accepted?"
      ]
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Yes, you can cancel or change your booking from the 'My Bookings' section. Cancellation policies may vary by hotel.",
      related: [
        "Is there a cancellation fee?",
        "How do I reschedule my booking?",
        "What is the refund timeline?"
      ]
    },
    {
      question: "Are there any additional charges or taxes?",
      answer: "Some hotels may include taxes or service charges. These will be clearly displayed before payment.",
      related: [
        "Are cleaning fees included?",
        "Is breakfast included in the price?",
        "Will I be charged at check-in or online?"
      ]
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, we use encrypted SSL connections to ensure all your transactions are secure and private.",
      related: [
        "Can I pay at the hotel instead?",
        "Is UPI or PayPal accepted?",
        "What happens if payment fails?"
      ]
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our support team via the 'Help & Support' section, live chat, or email.",
      related: [
        "What are your support hours?",
        "Can I talk to the hotel directly?",
        "Where can I give feedback?"
      ]
    },
  ];
  

const FAQItem = ({ faq, index, isOpen, onToggle }) => (
  <div 
    className="border-b border-slate-200 py-4 cursor-pointer hover:bg-slate-50 transition-colors duration-200 px-2 -mx-2 rounded-lg" 
    onClick={() => onToggle(index)}
  >
    <div className="flex items-center justify-between">
      <h3 className="text-base font-medium text-slate-800 pr-4">
        {faq.question}
      </h3>
      <ChevronDown 
        className={`w-5 h-5 text-slate-600 transition-transform duration-300 ease-in-out flex-shrink-0 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </div>
    <div 
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-sm text-slate-600 pt-3 max-w-md leading-relaxed">
        {faq.answer}
      </p>
    </div>
  </div>
);

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-12 px-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 max-w-md ml-5">
            <img
              className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              src="https://media.istockphoto.com/id/1028621094/photo/service-bell-on-hotel-reception-desk.webp?a=1&b=1&s=612x612&w=0&k=20&c=nMLoNEMjN9WJuzYRFQae5rauiQ5290SqxB-p4ppGRwc="
              alt="FAQ illustration"
            />
          </div>

          {/* FAQ Section */}
          <div className="w-full lg:w-1/2 max-w-2xl">
          <div className="w-full lg:w-1/2 max-w-2xl">
            <div className="mb-10">
                <span className="inline-block bg-black/75 text-white  text-sm font-medium px-3 py-1 rounded-full">
                Most Frequently Asked Questions
                </span>
                <h1 className="text-4xl font-bold text-slate-900/75 mt-4">
                Looking for answers?
                </h1>
                <p className="text-slate-600 mt-2 text-base">
                Here are some common questions about booking, cancellations, and your stay. Still have doubts? Contact our support team.
                </p>
            </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-2">
              {FAQ_DATA.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;