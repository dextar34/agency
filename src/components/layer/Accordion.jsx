import React, { useState } from "react";

const Accordion = ({ title, answer,id,src }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="p-2  md:w-1/2 mx-auto my-2 bg-slate-700 rounded-xl" id={id}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="text-white font-bold txt-xl md:text-2xl py-2">{title}</span>
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-white">{answer}</div>
        <div className={`overflow-hidden ${
              !accordionOpen && "hidden"
            }`}><img className="w-3/4 mx-auto py-4 " src={src} alt="" /></div>
      </div>
    </div>
  );
};

export default Accordion;