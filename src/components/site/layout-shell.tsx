import { PropsWithChildren } from "react";

import { CookieBanner } from "@/components/site/cookie-banner";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

type LayoutShellProps = PropsWithChildren<{
  footerData: any;
}>;

export function LayoutShell({ children, footerData }: LayoutShellProps) {
  return (
    <>
      <Navbar footerData={footerData} />
      <main>{children}</main>
      <Footer footerData={footerData} />
      <CookieBanner />
    </>
  );
}
