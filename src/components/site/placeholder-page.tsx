import Link from "next/link";

import { getRouteInfo, normalizeRoute } from "@/lib/routes";

type PlaceholderPageProps = {
  route: string;
  externalUrl?: string | null;
};

const NEXT_TARGETS = [
  "/employee-experience",
  "/voice-ai-employee",
  "/finops",
  "/trust-and-security",
];

export function PlaceholderPage({
  route,
  externalUrl,
}: PlaceholderPageProps) {
  const normalized = normalizeRoute(route);
  const info = getRouteInfo(normalized);

  return (
    <div className="bg-[#f8f5ee]">
      <section className="mx-auto w-[min(100%,980px)] px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f8844]">
          Local Placeholder
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-tight text-[#1f2430] lg:text-6xl">
          {info.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d625e]">
          {info.description}
        </p>

        <div className="mt-10 rounded-[30px] border border-[#ddd7ca] bg-white p-6 shadow-[0_16px_60px_rgba(31,36,48,0.08)] lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8844]">
                Current Route
              </p>
              <p className="mt-3 rounded-2xl bg-[#fbf8f1] px-4 py-3 font-mono text-sm text-[#1f2430]">
                {normalized}
              </p>

              {externalUrl ? (
                <>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8844]">
                    Original External Target
                  </p>
                  <p className="mt-3 break-all rounded-2xl bg-[#fbf8f1] px-4 py-3 text-sm text-[#5d625e]">
                    {externalUrl}
                  </p>
                </>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="rounded-full bg-[#1f8844] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#186b36]"
                >
                  Back to Homepage
                </Link>
                <Link
                  href="/customer-experience"
                  className="rounded-full border border-[#1f2430] bg-white px-5 py-3 text-sm font-semibold text-[#1f2430] transition hover:bg-[#ede7d8]"
                >
                  Open Built Page
                </Link>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#111822] p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7ee49f]">
                Suggested Next Builds
              </p>
              <div className="mt-5 space-y-3">
                {NEXT_TARGETS.map((target) => {
                  const targetInfo = getRouteInfo(target);

                  return (
                    <Link
                      key={target}
                      href={target}
                      className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                    >
                      <p className="text-sm font-semibold">{targetInfo.title}</p>
                      <p className="mt-1 text-sm text-white/68">{target}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
