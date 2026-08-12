import React, { useRef } from "react";

const Accordion = ({
  item,
  index,
  id,
  active,
  setActive,
}: {
  item: any;
  index: number;
  id: string;
  active: string | null;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const ref = useRef<any>(null);

  return (
    <div className=" border-gray-300 border rounded-md  ">
      <button
        className={`p-2.5 flex justify-between items-center hover:bg-zinc-200 transition-all w-full rounded-sm  cursor-pointer    focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent   ${active == id && "bg-zinc-200"}`}
        onClick={() => {
          if (id == active) {
            setActive(null);
          } else {
            setActive(id);
          }
        }}
      >
        <h2 className="font-semibold">{item[`faq${index + 1}title`]}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 -960 960 960"
          width="18px"
          fill="#1f1f1f"
          className={`${active == id ? "rotate-90" : ""} transition-all`}
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </button>
      <p
        ref={ref}
        className={`${active === id ? `block` : "h-0 overflow-hidden !m-0 !py-0 opacity-0"} opacity-100 transition-all p-2 mt-1`}
      >
        {item[`faq${index + 1}content`]}
      </p>
    </div>
  );
};

export default Accordion;
