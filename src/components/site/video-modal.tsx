"use client";

import { useEffect } from "react";

type VideoModalProps = {
  title: string;
  src: string;
  onClose: () => void;
};

export function VideoModal({ title, src, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0f141b]/80 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-[28px] bg-[#0f141b] p-3 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white"
        >
          Close
        </button>
        <video
          controls
          autoPlay
          className="aspect-video w-full rounded-[22px] bg-black"
          src={src}
          aria-label={title}
        />
      </div>
    </div>
  );
}
