"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  as?: "section" | "div";
}>;

export function Reveal({
  children,
  className,
  delay = 0,
  as = "section",
}: RevealProps) {
  const Component = as;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}
