import { Reveal } from "@/components/site/reveal";

const COMPANY_NAME = "AVeer AI";
const TAGLINE = "Moving Construction from Predictive Insights to Autonomous Execution";
const OCCUPATION =
  "AI for construction — we help general contractors move from dashboards and forecasts to agents that execute work on the jobsite and in the back office.";

const SERVICE_LEVELS: { level: string; description: string }[] = [
  {
    level: "Custom Agent Dev",
    description:
      "Building proprietary AI personas for specific GC (General Contractor) workflows.",
  },
  {
    level: "Data Infrastructure",
    description:
      'Preparing "messy" jobsite data (PDFs, handwritten logs) for AI readiness.',
  },
  {
    level: "Generative Pre-Con",
    description: 'Automating the "Takeoff to Bid" pipeline using vision-language models.',
  },
];

const WHY_AVEER = [
  {
    label: "Execution",
    title: "From insight to action on the job",
    body: "Construction teams already capture data; AVeer focuses on autonomous execution — agents that run workflows your GC owns end to end, with human checkpoints where you need them.",
    cta: "Explore services",
  },
  {
    label: "Trust",
    title: "Built for real jobsite reality",
    body: "Plans change, documents are messy, and handoffs matter. We design around GC processes, permissions, and audit trails so AI fits how your teams already work.",
    cta: "Data & governance",
  },
  {
    label: "Depth",
    title: "Pre-con to field, one stack",
    body: "From takeoff and bid prep through structured field data, we connect pre-construction intelligence with the systems your supers and PMs rely on.",
    cta: "Generative Pre-Con",
  },
];

export function Homepage() {
  return (
    <div className="bg-[#f8f5ee]">
      <section className="hero-grid">
        <div className="mx-auto grid w-[min(100%,1180px)] gap-14 px-5 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <Reveal as="div">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8844]">
                {COMPANY_NAME}
              </p>
              <h1 className="mt-4 max-w-xl text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.04em] text-[#1f2430]">
                {TAGLINE}
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#4f554f] lg:text-[1.2rem]">
                {OCCUPATION}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-full bg-[#1f8844] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#186b36]"
                >
                  View services
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-[#1f2430] bg-white px-6 py-3 text-sm font-semibold text-[#1f2430] transition hover:bg-[#ede7d8]"
                >
                  Talk to us
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal as="div" delay={0.08}>
            <div className="relative overflow-hidden rounded-[40px] border border-[#e3dccf] bg-[linear-gradient(180deg,#ffffff_0%,#f6f2e8_100%)] p-6 shadow-[0_24px_80px_rgba(17,24,39,0.08)] lg:p-10">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(31,136,68,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(31,136,68,0.08)_1px,transparent_1px)] bg-[size:84px_84px] opacity-70" />
              <div className="relative mx-auto flex min-h-[480px] flex-col justify-center gap-6">
                <div className="rounded-[28px] border border-[#d8d0c2] bg-white p-8 shadow-[0_30px_70px_rgba(31,36,48,0.1)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1f8844]">
                    What we deliver
                  </p>
                  <h2 className="mt-3 text-2xl font-medium text-[#1f2430]">
                    Service levels
                  </h2>
                  <ul className="mt-6 space-y-4">
                    {SERVICE_LEVELS.map((row) => (
                      <li
                        key={row.level}
                        className="rounded-[20px] border border-[#ece5da] bg-[#f8f5ee] px-4 py-3"
                      >
                        <p className="text-sm font-semibold text-[#1f2430]">{row.level}</p>
                        <p className="mt-1 text-sm leading-6 text-[#5d625e]">{row.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 lg:px-8" as="div">
        <section id="services" className="pb-16">
          <div className="mb-8 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f8844]">
              Capabilities
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-medium leading-tight text-[#1f2430] lg:text-4xl">
              How AVeer supports your GC
            </h2>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-[#ddd7ca] bg-white shadow-[0_10px_40px_rgba(31,36,48,0.06)]">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-[#e7e1d6] bg-[#fbf8f1]">
                <tr>
                  <th className="px-6 py-4 font-semibold text-[#1f2430] lg:px-8">Service level</th>
                  <th className="px-6 py-4 font-semibold text-[#1f2430] lg:px-8">Description</th>
                </tr>
              </thead>
              <tbody>
                {SERVICE_LEVELS.map((row, i) => (
                  <tr
                    key={row.level}
                    className={i < SERVICE_LEVELS.length - 1 ? "border-b border-[#ece8df]" : ""}
                  >
                    <td className="align-top px-6 py-5 font-medium text-[#1f2430] lg:px-8 lg:py-6">
                      {row.level}
                    </td>
                    <td className="align-top px-6 py-5 text-[#5d625e] lg:px-8 lg:py-6">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>

      <section className="mx-auto w-[min(100%,1180px)] px-5 py-10 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f8844]">
            Why AVeer AI
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-medium leading-tight text-[#1f2430] lg:text-5xl">
            Precision automation for construction
          </h2>
        </div>

        <div className="mt-16 space-y-14">
          {WHY_AVEER.map((feature, index) => (
            <Reveal key={feature.label} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <section className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f2ea] px-4 py-2 text-sm font-semibold text-[#1f8844]">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#1f8844] text-white">
                    {index + 1}
                  </span>
                  {feature.label}
                </div>
                <h3 className="mt-6 text-2xl font-medium text-[#1f2430]">{feature.title}</h3>
                <p className="mt-4 max-w-xl text-[15px] leading-8 text-[#5d625e]">{feature.body}</p>
                <a
                  href="#services"
                  className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#1f8844] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#186b36]"
                >
                  {feature.cta}
                </a>
              </section>

              <div
                className={`rounded-[36px] border border-[#e3dccf] p-8 ${
                  index === 1 ? "bg-white" : "bg-[linear-gradient(180deg,#fff_0%,#f5f2e9_100%)]"
                } ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {index === 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {SERVICE_LEVELS.map((row) => (
                      <div
                        key={row.level}
                        className="rounded-[22px] border border-[#e7e1d6] bg-white p-5 shadow-sm"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1f8844]">
                          {row.level}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[#5d625e]">{row.description}</p>
                      </div>
                    ))}
                  </div>
                ) : index === 1 ? (
                  <div className="grid min-h-[280px] place-items-center">
                    <div className="relative grid h-44 w-44 place-items-center rounded-full bg-[radial-gradient(circle_at_center,#d9ecdd_0%,#f8f5ee_70%)]">
                      <div className="grid h-24 w-24 place-items-center rounded-[28px] border border-[#d9e7db] bg-white shadow-[0_18px_50px_rgba(31,136,68,0.12)]">
                        <div className="grid h-14 w-14 place-items-center rounded-full bg-[#1f8844] text-2xl text-white">
                          ✓
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="min-h-[280px] rounded-[30px] bg-[#111822] p-6 text-white">
                    <p className="text-sm font-semibold text-[#7ee49f]">Autonomous execution</p>
                    <p className="mt-4 text-sm leading-7 text-white/75">
                      AVeer connects pre-con vision models, structured jobsite data, and custom agents
                      so workflows do not stop at a chart — they run where your teams already operate.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-white/85">
                      <li>• Takeoff → bid automation</li>
                      <li>• GC-specific agent personas</li>
                      <li>• AI-ready field and office data</li>
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-16 lg:px-8" as="div">
        <section id="contact">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f8844]">
              Next step
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-medium leading-tight text-[#1f2430] lg:text-5xl">
              Ready to move from prediction to execution?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5d625e]">
              Tell us about your GC workflows, data sources, and where you want agents to take action
              first — we will map a path across Custom Agent Dev, Data Infrastructure, and Generative
              Pre-Con.
            </p>
            <a
              href="mailto:hello@aveer.ai"
              className="mt-10 inline-flex rounded-full bg-[#1f8844] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#186b36]"
            >
              Contact AVeer AI
            </a>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
