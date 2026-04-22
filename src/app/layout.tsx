import type { Metadata } from "next";

import homeSnapshot from "@/data/snapshots/home.json";
import { LayoutShell } from "@/components/site/layout-shell";
import type { Snapshot } from "@/lib/ema";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ema.ai Replica",
  description: "High-fidelity local replica of the ema.ai frontend experience.",
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
