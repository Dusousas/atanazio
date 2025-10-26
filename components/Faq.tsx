"use client";

import React, { useState } from "react";

type FAQItem = { question: string; answer: string };

const faqs: FAQItem[] = [
  {
    question: "Augue feugiat fames tincidunt class erat pulvinar?",
    answer:
      "Eros cubilia dui maecenas et facilisis at. Curae lacinia accumsan vulputate natoque ut luctus inceptos.",
  },
  {
    question: "Condimentum sodales congue senectus tristique netus?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Tempus mollis lectus pellentesque placerat nam praesent?",
    answer:
      "Praesent commodo, augue a pulvinar cursus, justo sem dictum ipsum.",
  },
  {
    question: "Ultrices ullamcorper ante leo duis facilisi dis?",
    answer: "Integer cursus, nibh nec posuere consequat, mi urna varius nunc.",
  },
  {
    question: "Ante est tincidunt leo magnis rutrum adipiscing?",
    answer:
      "Fusce porta, urna nec rutrum hendrerit, libero nibh feugiat urna.",
  },

];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const Yellow = "#F8D244";
  const GrayCard =
    "bg-white/10 hover:bg-white/15 text-white ring-1 ring-white/10";

  const Chevron = ({ open }: { open: boolean }) => (
    <svg
      className={`h-5 w-5 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );

  const Item = ({
    i,
    data,
    open,
    onToggle,
  }: {
    i: number;
    data: FAQItem;
    open: boolean;
    onToggle: () => void;
  }) => {
    const contentId = `faq-panel-${i}`;
    const buttonId = `faq-button-${i}`;
    const highlightedClasses = `text-black ring-1 ring-black/10`;

    return (
      <li className="space-y-3">
        <button
          id={buttonId}
          aria-expanded={open}
          aria-controls={contentId}
          onClick={onToggle}
          className={`w-full text-left px-6 py-4 rounded-md flex items-center justify-between transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
            open ? highlightedClasses + " shadow-lg shadow-yellow-500/20" : GrayCard
          }`}
          style={open ? { backgroundColor: Yellow } : undefined}
        >
          <span
            className={`font-semibold transition-all duration-300 ${
              open ? "text-black translate-x-1" : "text-white"
            }`}
          >
            {data.question}
          </span>
          <span
            className={`transition-all duration-300 ${
              open ? "text-black scale-110" : "text-white/80"
            }`}
          >
            <Chevron open={open} />
          </span>
        </button>

        <div
          id={contentId}
          role="region"
          aria-labelledby={buttonId}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            {open ? (
              <div
                className="rounded-md px-6 pb-5 pt-2 text-black/80"
                style={{
                  backgroundColor: Yellow,
                  animation: open ? "fadeIn 0.4s ease-out" : "none",
                }}
              >
                {data.answer}
              </div>
            ) : (
              <p
                className="px-6 pb-4 pt-2 text-white/80"
                style={{ animation: open ? "fadeIn 0.4s ease-out" : "none" }}
              >
                {data.answer}
              </p>
            )}
          </div>
        </div>
      </li>
    );
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section id="faq" className="bg-CinzaP border-t border-white/20 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-white uppercase text-center tracking-wider">
            Alguma dúvida?
          </h3>
          <h2 className="text-center uppercase text-4xl text-white font-semibold mt-2 tracking-wider">
            Perguntas Frequentes
          </h2>

          <div className="mt-10 max-w-[800px] mx-auto">
            <ul className="space-y-2">
              {faqs.map((item, i) => (
                <Item
                  key={i}
                  i={i}
                  data={item}
                  open={openIndex === i}
                  onToggle={() =>
                    setOpenIndex((prev) => (prev === i ? null : i))
                  }
                />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
