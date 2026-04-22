import gweSnapshot from "@/data/snapshots/gwe.json";
import homeSnapshot from "@/data/snapshots/home.json";
import { Reveal } from "@/components/site/reveal";
import { mediaUrl, toLocalHref } from "@/lib/ema";
import type { Snapshot } from "@/lib/ema";

const WHY_HIRE = [
  {
    label: "Simple",
    title: "Multiply your workforce in minutes",
    body: "With its Generative Workflow Engine and pre-built AI agents, Ema conversationally activates new AI employees to execute any complex workflow in the enterprise.",
    cta: "Explore Pre-built AI Agents",
  },
  {
    label: "Trusted",
    title: "Governed for the enterprise",
    body: "Ema’s governance rails protect sensitive information before it reaches any model, with top-tier encryption, customizable permissions, and auditability.",
    cta: "Explore Trust and Security",
  },
  {
    label: "Accurate",
    title: "Model orchestration built in",
    body: "Ema maximizes accuracy with the EmaFusion model-routing layer, blending public and private models and continuously improving answer quality.",
    cta: "Explore EmaFusion",
  },
];

export function Homepage() {
  const { pageData } = (homeSnapshot as Snapshot).pageProps;
  const workflowCards = (gweSnapshot as Snapshot).pageProps.pageData.workflowEngine.workflows.slice(0, 4);

  return (
    <div className="bg-[#f8f5ee]">
      <section className="hero-grid">
        <div className="mx-auto grid w-[min(100%,1180px)] gap-14 px-5 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <Reveal as="div">
              <h1 className="max-w-xl text-[clamp(3rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.05em] text-[#1f2430]">
                One employee
                <br />
                Infinite roles
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#4f554f] lg:text-[1.35rem]">
                Meet Ema, your Universal AI Employee. Powered by the most
                sophisticated AI Agents, Ema goes beyond automation, learns from
                context, and evolves across every function in the enterprise.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={toLocalHref("https://www.ema.ai/hire-ema")}
                  className="rounded-full bg-[#1f8844] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#186b36]"
                >
                  Hire Ema
                </a>
                <a
                  href={toLocalHref("https://www.ema.ai/gwe-generative-workflow-engine")}
                  className="rounded-full border border-[#1f2430] bg-white px-6 py-3 text-sm font-semibold text-[#1f2430] transition hover:bg-[#ede7d8]"
                >
                  Learn More
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal as="div" delay={0.08}>
            <div className="relative overflow-hidden rounded-[40px] border border-[#e3dccf] bg-[linear-gradient(180deg,#ffffff_0%,#f6f2e8_100%)] p-6 shadow-[0_24px_80px_rgba(17,24,39,0.08)] lg:p-10">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(31,136,68,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(31,136,68,0.08)_1px,transparent_1px)] bg-[size:84px_84px] opacity-70" />
              <div className="relative mx-auto grid min-h-[520px] place-items-center">
                <div className="absolute left-6 top-10 rounded-[18px] border border-[#e5ded0] bg-white px-4 py-3 shadow-md">
                  <p className="text-xs font-semibold text-[#1f8844]">AI SDR</p>
                  <p className="mt-2 text-xs text-[#5d625e]">Route revenue work</p>
                </div>
                <div className="absolute right-6 top-16 rounded-[18px] border border-[#e5ded0] bg-white px-4 py-3 shadow-md">
                  <p className="text-xs font-semibold text-[#1f8844]">Customer Support</p>
                  <p className="mt-2 text-xs text-[#5d625e]">Resolve issues end-to-end</p>
                </div>
                <div className="absolute bottom-10 left-10 rounded-[18px] border border-[#e5ded0] bg-white px-4 py-3 shadow-md">
                  <p className="text-xs font-semibold text-[#1f8844]">Builder</p>
                  <p className="mt-2 text-xs text-[#5d625e]">Create any AI employee</p>
                </div>
                <div className="absolute bottom-14 right-8 rounded-[18px] border border-[#e5ded0] bg-white px-4 py-3 shadow-md">
                  <p className="text-xs font-semibold text-[#1f8844]">Doc Gen</p>
                  <p className="mt-2 text-xs text-[#5d625e]">Create polished business docs</p>
                </div>

                <div className="relative z-10 w-full max-w-[420px] rounded-[30px] border border-[#d8d0c2] bg-white p-5 shadow-[0_30px_70px_rgba(31,36,48,0.12)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1f8844]">
                        Exchange
                      </p>
                      <h2 className="mt-2 text-3xl font-medium text-[#1f2430]">
                        AI Employee
                      </h2>
                    </div>
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-[#1f8844] text-lg text-white">
                      ✓
                    </div>
                  </div>
                  <div className="mt-5 overflow-hidden rounded-[24px] border border-[#ece5da] bg-[#f8f5ee]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="aspect-[4/3] w-full object-cover"
                      src={mediaUrl(pageData.heroVideo)}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-[#5d625e]">
                    <span>Context, apps, approvals, and execution</span>
                    <span className="rounded-full bg-[#111822] px-3 py-1 font-semibold text-white">
                      Live
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 lg:px-8">
        <section className="grid gap-5 pb-14 lg:grid-cols-3">
          {pageData.aiEmaployees.itemCards.map((card: any) => (
            <a
              key={card.id}
              href={toLocalHref(card.link)}
              className="group rounded-[30px] border border-[#ddd7ca] bg-white p-7 shadow-[0_10px_30px_rgba(31,36,48,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(31,36,48,0.1)]"
            >
              <img
                src={mediaUrl(card.iconUrl)}
                alt={card.title}
                className="h-16 w-16 object-contain"
              />
              <h3 className="mt-8 max-w-[220px] text-3xl font-medium leading-tight text-[#1f2430]">
                {card.title}
              </h3>
              <p className="mt-5 max-w-[280px] text-sm leading-7 text-[#5d625e]">
                {card.subtitle}
              </p>
              <div className="mt-8 flex justify-end">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#d1cabd] text-lg transition group-hover:border-[#1f8844] group-hover:bg-[#1f8844] group-hover:text-white">
                  →
                </span>
              </div>
            </a>
          ))}
        </section>
      </Reveal>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 pb-18 lg:px-8">
        <section className="overflow-hidden rounded-full border border-[#e4ddd0] bg-white px-6 py-6 shadow-[0_8px_30px_rgba(31,36,48,0.05)]">
          <div className="logo-marquee">
            {[...pageData.customerLogos, ...pageData.customerLogos].map((item: any, index: number) => (
              <img
                key={`${item.id}-${index}`}
                src={mediaUrl(item.logo)}
                alt={item.logo?.name ?? "Customer logo"}
                className="h-9 w-auto shrink-0 object-contain opacity-85"
              />
            ))}
          </div>
        </section>
      </Reveal>

      <section className="mx-auto w-[min(100%,1180px)] px-5 py-10 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f8844]">
            Why Hire Ema
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-medium leading-tight text-[#1f2430] lg:text-6xl">
            Multiply your workforce in minutes
          </h2>
        </div>

        <div className="mt-16 space-y-14">
          {WHY_HIRE.map((feature, index) => (
            <Reveal key={feature.label} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <section className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f2ea] px-4 py-2 text-sm font-semibold text-[#1f8844]">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#1f8844] text-white">
                    {index + 1}
                  </span>
                  {feature.label}
                </div>
                <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#5d625e]">
                  {feature.body}
                </p>
                <a
                  href="/"
                  className="mt-8 inline-flex rounded-full bg-[#111822] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f8844]"
                >
                  {feature.cta}
                </a>
              </section>

              <div className={`rounded-[36px] border border-[#e3dccf] p-8 ${index === 1 ? "bg-white" : "bg-[linear-gradient(180deg,#fff_0%,#f5f2e9_100%)]"} ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {index === 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {workflowCards.slice(0, 4).map((card: any) => (
                      <div
                        key={card.id}
                        className="rounded-[22px] border border-[#e7e1d6] bg-white p-5 shadow-sm"
                      >
                        <img
                          src={mediaUrl(card.icon)}
                          alt={card.title}
                          className="h-12 w-12 object-contain"
                        />
                        <h3 className="mt-5 text-lg font-medium text-[#1f2430]">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[#5d625e]">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : index === 1 ? (
                  <div className="grid min-h-[320px] place-items-center">
                    <div className="relative grid h-48 w-48 place-items-center rounded-full bg-[radial-gradient(circle_at_center,#d9ecdd_0%,#f8f5ee_70%)]">
                      <div className="grid h-28 w-28 place-items-center rounded-[32px] border border-[#d9e7db] bg-white shadow-[0_18px_50px_rgba(31,136,68,0.12)]">
                        <div className="grid h-16 w-16 place-items-center rounded-full bg-[#1f8844] text-3xl text-white">
                          🛡
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="min-h-[320px] rounded-[30px] bg-[#111822] p-6 text-white">
                    <div className="grid h-full gap-4 sm:grid-cols-2">
                      {workflowCards.map((card: any) => (
                        <div
                          key={card.id}
                          className="rounded-[20px] border border-white/10 bg-white/6 p-4"
                        >
                          <p className="text-sm font-semibold text-[#7ee49f]">
                            {card.title}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-white/72">
                            {card.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-16 lg:px-8">
        <section>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f8844]">
              How Ema Works
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-medium leading-tight text-[#1f2430] lg:text-6xl">
              Automate any business process with Agentic AI
            </h2>
          </div>
          <div className="mt-12 overflow-hidden rounded-[34px] border border-[#2a3240] bg-[#1b2230] p-6 lg:p-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {workflowCards.map((card: any) => (
                <div key={card.id} className="rounded-[24px] border border-white/8 bg-white/5 p-5 text-white">
                  <img
                    src={mediaUrl(card.icon)}
                    alt={card.title}
                    className="h-12 w-12 object-contain"
                  />
                  <h3 className="mt-6 text-lg font-medium">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
