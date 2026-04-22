"use client";

import { useState } from "react";

import { mediaUrl, richTextToBulletList, toLocalHref } from "@/lib/ema";

type RoleTabsProps = {
  title: string;
  roles: any[];
};

export function RoleTabs({ title, roles }: RoleTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = roles[activeIndex];
  const bullets = richTextToBulletList(active?.points);

  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1f8844]">
          Choose Ema&apos;s role to see
        </p>
        <h2 className="mt-3 text-4xl font-medium leading-tight text-[#1f2430] lg:text-6xl">
          {title}
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {roles.map((role, index) => (
          <button
            key={role.id ?? role.slug ?? role.title}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              index === activeIndex
                ? "border-[#1f8844] bg-[#1f8844] text-white"
                : "border-[#d5d0c4] bg-white text-[#1f2430] hover:border-[#1f8844]"
            }`}
          >
            {role.topTitle ?? role.title}
          </button>
        ))}
      </div>

      <div className="grid gap-6 rounded-[34px] bg-white p-4 shadow-[0_16px_60px_rgba(31,36,48,0.08)] lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
        <div className="overflow-hidden rounded-[28px] bg-[#eef5ef]">
          <img
            src={mediaUrl(active?.asset)}
            alt={active?.title ?? "Role preview"}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8844]">
            {active?.topTitle}
          </p>
          <h3 className="mt-3 text-3xl font-medium text-[#1f2430] lg:text-4xl">
            {active?.title}
          </h3>
          <p className="mt-4 text-[15px] leading-7 text-[#5d625e]">
            {active?.description}
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-[15px] leading-7 text-[#1f2430]"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-[#1f8844]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <a
            href={toLocalHref(active?.buttonLink)}
            className="mt-8 inline-flex w-fit rounded-full bg-[#111822] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f8844]"
          >
            {active?.buttonText ?? "Learn more"}
          </a>
        </div>
      </div>
    </div>
  );
}
