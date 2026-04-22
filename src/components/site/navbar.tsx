"use client";

import { useMemo, useState } from "react";

import { isExternalHref, mediaUrl, toLocalHref } from "@/lib/ema";

type NavbarProps = {
  footerData: any;
};

const LOGO_URL = "https://www.ema.ai/_next/static/media/ema-logo.267c015f.svg";

export function Navbar({ footerData }: NavbarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menus = useMemo(() => {
    const items = footerData?.headerContent ?? [];
    const groups = footerData?.subNavContent ?? [];

    return items.map((item: any) => ({
      ...item,
      href: toLocalHref(item.redirect),
      groups:
        groups.filter(
          (group: any) =>
            group.subType?.toLowerCase() === item.title?.toLowerCase() ||
            item.title === "Products",
        ) ?? [],
    }));
  }, [footerData]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#e7e1d6] bg-[#f8f5ee]/92 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-[min(100%,1180px)] items-center justify-between px-5 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Ema" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {menus.map((menu: any) => {
            const href = menu.href || "#";
            const external = isExternalHref(href);

            return (
              <div
                key={menu.id ?? menu.title}
                className="relative"
                onMouseEnter={() => setOpenMenu(menu.title)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="flex items-center gap-1 text-sm font-semibold text-[#1f2430] transition hover:text-[#1f8844]"
                >
                  <span>{menu.title}</span>
                  <span className="text-xs">▾</span>
                </a>

                {openMenu === menu.title ? (
                  <div className="absolute left-1/2 top-full mt-4 w-[820px] -translate-x-1/2 rounded-[28px] border border-[#ddd7ca] bg-white p-6 shadow-[0_24px_80px_rgba(17,24,39,0.14)]">
                    <div className="grid grid-cols-3 gap-5">
                      {menu.groups.slice(0, 6).map((group: any) => (
                        <div key={group.id ?? group.title} className="space-y-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1f8844]">
                            {group.title ?? group.subType}
                          </p>
                          <div className="space-y-2">
                            {(group.subPoints ?? []).slice(0, 4).map((point: any) => {
                              const pointHref = toLocalHref(point.redirectLink);
                              const pointExternal = isExternalHref(pointHref);

                              return (
                                <a
                                  key={point.id ?? point.name}
                                  href={pointHref}
                                  target={pointExternal ? "_blank" : undefined}
                                  rel={pointExternal ? "noreferrer" : undefined}
                                  className="flex items-center gap-3 rounded-2xl border border-transparent px-3 py-2 transition hover:border-[#e7e1d6] hover:bg-[#f8f5ee]"
                                >
                                  {point.logo?.url ? (
                                    <img
                                      src={mediaUrl(point.logo)}
                                      alt={point.name}
                                      className="h-9 w-9 rounded-xl object-contain"
                                    />
                                  ) : null}
                                  <span className="text-sm font-medium text-[#1f2430]">
                                    {point.name}
                                  </span>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href={toLocalHref("https://www.ema.ai/hire-ema")}
            className="rounded-full bg-[#1f8844] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#186b36]"
          >
            Hire Ema
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-[#d8d0c2] bg-white text-[#1f2430] lg:hidden"
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[#e7e1d6] bg-[#fbf8f1] px-5 py-5 lg:hidden">
          <div className="space-y-3">
            {menus.map((menu: any) => (
              <details key={menu.id ?? menu.title} className="rounded-2xl border border-[#ddd7ca] bg-white px-4 py-3">
                <summary className="cursor-pointer list-none text-base font-semibold text-[#1f2430]">
                  {menu.title}
                </summary>
                <div className="mt-4 space-y-3">
                  {menu.groups.slice(0, 5).map((group: any) => (
                    <div key={group.id ?? group.title}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1f8844]">
                        {group.title ?? group.subType}
                      </p>
                      <div className="space-y-2">
                        {(group.subPoints ?? []).slice(0, 4).map((point: any) => (
                          <a
                            key={point.id ?? point.name}
                            href={toLocalHref(point.redirectLink)}
                            className="block text-sm text-[#5d625e]"
                          >
                            {point.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))}
            <a
              href="/"
              className="mt-2 inline-flex rounded-full bg-[#1f8844] px-5 py-3 text-sm font-semibold text-white"
            >
              Hire Ema
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
