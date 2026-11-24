import { useState } from "react";
import { ChevronRight } from "lucide-react";

function FAQ() {
  const questions = [
    {
      question: "What services does NX Freelancer offer?",
      answer:
        "NX Freelancer offers UI/UX design, frontend development, backend development and digital marketing services.",
    },
    {
      question: "How do I request a quote for my project?",
      answer:
        "You can contact our team using the Contact Now button and share your project requirements to receive a quote.",
    },
    {
      question: "What is the typical turnaround time for projects?",
      answer:
        "Project timelines depend on complexity. Our standard package typically delivers within 14 days, premium within 7 days and ultimate within 3 days.",
    },
    {
      question: "Can I request revisions on my project?",
      answer:
        "Yes. Revision options are available with our plans. The number of revisions depends on the selected package.",
    },
    {
      question: "Is NX Freelancer's pricing competitive?",
      answer:
        "We provide different pricing plans designed to suit different project requirements and budgets.",
    },
    {
      question: "How experienced are the freelancers at NX Freelancer?",
      answer:
        "Our freelancers work across design, development and marketing, bringing different skills and experience to projects.",
    },
    {
      question: "How do I get started with NX Freelancer?",
      answer:
        "Simply contact us, tell us about your project, and our team will help you choose the right service.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-[#111111] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xl font-semibold mb-5">
            Ask Us Anything
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Frequently Asked{" "}
            <span className="bg-[#ff9900] text-black px-4 py-3 inline-block">
              Questions
            </span>
          </h2>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* Questions */}
          <div className="lg:col-span-2">

            {questions.map((item, index) => (
              <div
                key={index}
                className="border-b border-white/70"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setActiveIndex(
                      activeIndex === index ? null : index
                    )
                  }
                  className="w-full flex items-center justify-between gap-4 py-6 text-left text-lg md:text-2xl font-semibold"
                >
                  <span>{item.question}</span>

                  <ChevronRight
                    size={24}
                    className={`shrink-0 text-gray-400 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                {activeIndex === index && (
                  <div className="pb-6 text-gray-300 text-base md:text-lg leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}

          </div>

          {/* Image */}
          <div className="h-100 md:h-150 lg:h-full min-h-100 border-2 border-black overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200"
              alt="Developer working at a computer"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ;