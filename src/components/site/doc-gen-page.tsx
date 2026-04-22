import docGenSnapshot from "@/data/snapshots/docGen.json";
import { FaqList } from "@/components/site/faq-list";
import { Reveal } from "@/components/site/reveal";
import { mediaUrl } from "@/lib/ema";
import type { Snapshot } from "@/lib/ema";

const DOC_HERO_IMAGE =
  "https://www.ema.ai/_next/static/media/hero.db1f934d.png";

export function DocGenPage() {
  const { pageData } = (docGenSnapshot as Snapshot).pageProps;
  const featureCards = pageData.featureCards?.card ?? [];
  const useCases = pageData.useCases?.case ?? [];

  return (
    <div className="bg-[#f8f5ee]">
      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-16 lg:px-8 lg:py-20">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c7362]">
            {pageData.hero.preTitle}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-tight text-[#1f2430] lg:text-[4.4rem] lg:leading-[1.03]">
            {pageData.hero.title}
          </h1>
          <div className="mt-10 overflow-hidden rounded-[34px] border border-[#ddd7ca] bg-white shadow-[0_18px_60px_rgba(31,36,48,0.08)]">
            <img
              src={DOC_HERO_IMAGE}
              alt={pageData.hero.title}
              className="w-full object-cover"
            />
          </div>
          <p className="ml-auto mt-8 max-w-3xl text-lg leading-8 text-[#5d625e]">
            {pageData.hero.description}
          </p>
          <div className="mt-12 grid gap-4 rounded-[28px] border border-[#ddd7ca] bg-white p-4 lg:grid-cols-3">
            {pageData.heroStats.stat.map((stat: any) => (
              <div key={stat.id} className="rounded-[22px] bg-[#fbf8f1] p-6">
                <p className="text-4xl font-medium text-[#1f2430]">{stat.value}</p>
                <p className="mt-3 text-sm leading-7 text-[#5d625e]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-12 lg:px-8">
        <section>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8844]">
              Features
            </p>
            <h2 className="mt-4 text-4xl font-medium text-[#1f2430] lg:text-6xl">
              {pageData.featuresTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featureCards.map((card: any) => (
              <div
                key={card.id}
                className="rounded-[30px] border border-[#ddd7ca] bg-white p-6 shadow-[0_10px_30px_rgba(31,36,48,0.05)]"
              >
                {card.image?.url ? (
                  <img
                    src={mediaUrl(card.image)}
                    alt={card.title}
                    className="mb-6 h-40 w-full rounded-[24px] object-cover"
                  />
                ) : null}
                <h3 className="text-2xl font-medium leading-tight text-[#1f2430]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5d625e]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-10 lg:px-8">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8844]">
            Use Cases
          </p>
          <h2 className="mt-4 text-4xl font-medium text-[#1f2430] lg:text-6xl">
            {pageData.useCasesTitle}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((useCase: any) => (
              <div
                key={useCase.id}
                className="rounded-[28px] border border-[#ddd7ca] bg-white p-5 shadow-[0_8px_25px_rgba(31,36,48,0.05)]"
              >
                <img
                  src={mediaUrl(useCase.image)}
                  alt={useCase.title}
                  className="h-52 w-full rounded-[22px] object-cover"
                />
                <h3 className="mt-5 text-2xl font-medium text-[#1f2430]">
                  {useCase.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5d625e]">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-14 lg:px-8">
        <section className="grid gap-8 rounded-[34px] bg-[#111822] p-8 text-white lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ee49f]">
              {pageData.successStories.title}
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight">
              {pageData.successStories.subtitle}
            </h2>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/6 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              {pageData.successStories.challenge?.[0]?.badge}
            </p>
            <p className="mt-4 text-sm leading-8 text-white/78">
              {pageData.successStories.challenge?.[0]?.description}
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-12 lg:px-8">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8844]">
            Why Hire Ema
          </p>
          <h2 className="mt-4 text-4xl font-medium text-[#1f2430] lg:text-6xl">
            {pageData.whyHireEmaTitle}
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pageData.whyHireEmaFeature.map((item: any) => (
              <div
                key={item.id}
                className="rounded-[30px] border border-[#ddd7ca] bg-white p-7 shadow-[0_8px_25px_rgba(31,36,48,0.05)]"
              >
                {item.icon?.url ? (
                  <img
                    src={mediaUrl(item.icon)}
                    alt={item.title}
                    className="h-16 w-16 object-contain"
                  />
                ) : null}
                <h3 className="mt-6 text-2xl font-medium text-[#1f2430]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5d625e]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-12 lg:px-8">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8844]">
            FAQs
          </p>
          <h2 className="mt-4 text-4xl font-medium text-[#1f2430] lg:text-6xl">
            {pageData.faqSectionTitle}
          </h2>
          <div className="mt-10">
            <FaqList items={pageData.faqs} />
          </div>
        </section>
      </Reveal>
    </div>
  );
}
