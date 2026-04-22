"use client";

import { useState } from "react";

type FaqItem = {
  id?: number;
  title: string;
  description: string;
};

export function FaqList({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div
            key={item.id ?? item.title}
            className="rounded-[22px] border border-[#ded8cd] bg-white"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-lg font-medium text-[#1f2430]">
                {item.title}
              </span>
              <span className="text-2xl text-[#1f8844]">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <div className="border-t border-[#efeadf] px-6 pb-6 pt-4 text-[15px] leading-7 text-[#5d625e]">
                {item.description}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
