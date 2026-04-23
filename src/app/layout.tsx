import type { Metadata } from "next";

import homeSnapshot from "@/data/snapshots/home.json";
import { LayoutShell } from "@/components/site/layout-shell";
import type { Snapshot } from "@/lib/ema";
import "./globals.css";

export const metadata: Metadata = {
  title: "AVeer AI — Construction automation",
  description:
    "AVeer AI: Moving Construction from Predictive Insights to Autonomous Execution. Custom agent development, jobsite data infrastructure, and generative pre-con for general contractors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutShell footerData={(homeSnapshot as Snapshot).pageProps.footerData}>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}
