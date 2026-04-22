"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ema-replica-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem(STORAGE_KEY);
    setVisible(!accepted);
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 mx-auto w-[min(92vw,1120px)] rounded-[24px] border border-[#ddd5c6] bg-[#fbf8f1]/98 px-6 py-5 shadow-[0_24px_80px_rgba(17,24,39,0.16)] backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-[#1f2430]">Cookie Notice</p>
          <p className="mt-2 text-sm leading-6 text-[#5d625e]">
            We use cookies to make the site work properly, remember your
            preferences, and understand how people interact with the experience.
            This replica mirrors the original site behavior locally and keeps the
            same consent-style control.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <button className="rounded-full border border-[#d3cbbb] px-5 py-2 text-sm font-semibold text-[#1f2430] transition hover:bg-[#ede7d8]">
            Customize
          </button>
          <button className="rounded-full border border-[#d3cbbb] px-5 py-2 text-sm font-semibold text-[#1f2430] transition hover:bg-[#ede7d8]">
            Reject All
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-[#1f8844] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#176836]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
