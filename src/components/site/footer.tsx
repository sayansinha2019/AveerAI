import { SiteLogo } from "@/components/site/site-logo";
import { isExternalHref, toLocalHref } from "@/lib/ema";

type FooterProps = {
  footerData: any;
};

function FooterColumn({ section }: { section: any }) {
  if (!section) {
    return null;
  }

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
        {section.title}
      </p>
      <div className="mt-5 space-y-3">
        {(section.listValue ?? []).map((item: any) => {
          const href = toLocalHref(item.link);
          const external = isExternalHref(href);

          return (
            <a
              key={item.id ?? item.value}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="block text-sm text-white transition hover:text-white/75"
            >
              {item.value}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export function Footer({ footerData }: FooterProps) {
  return (
    <footer className="mt-24 bg-[#1f8844] text-white">
      <div className="mx-auto grid w-[min(100%,1180px)] gap-12 px-5 py-16 lg:grid-cols-[1.1fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <SiteLogo placement="footer" />
          <p className="mt-8 max-w-sm text-sm font-medium leading-6 text-white/95">
            AI for general contractors: custom agents, jobsite data readiness, and generative
            pre-con — from predictive insight to autonomous execution.
          </p>
          <p className="mt-10 whitespace-pre-line text-sm leading-7 text-white/90">
            {footerData?.addressLine1}
            {footerData?.addressLine2}
          </p>
          <div className="mt-8 space-y-2 text-sm text-white/90">
            <a href="/privacy-policy" className="block">
              Privacy Policy
            </a>
            <button className="block">Cookie Settings</button>
          </div>
        </div>
        <FooterColumn section={footerData?.solutions} />
        <FooterColumn section={footerData?.resources} />
        <FooterColumn section={footerData?.company} />
      </div>
    </footer>
  );
}
