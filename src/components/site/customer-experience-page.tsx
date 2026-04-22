"use client";

import { useState } from "react";

import customerSnapshot from "@/data/snapshots/customerExperience.json";
import { FaqList } from "@/components/site/faq-list";
import { Reveal } from "@/components/site/reveal";
import { RoleTabs } from "@/components/site/role-tabs";
import { VideoModal } from "@/components/site/video-modal";
import { mediaUrl, richTextToPlainText, toLocalHref } from "@/lib/ema";
import type { Snapshot } from "@/lib/ema";

export function CustomerExperiencePage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const { pageData } = (customerSnapshot as Snapshot).pageProps;
  const successStory = pageData.cxSuccessStories?.[0];
  const challenge = successStory?.challenge?.[0];

  return (
    <div className="bg-[#f8f5ee]">
      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-16 lg:px-8 lg:py-20">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8844]">
            Customer Experience
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-medium leading-tight text-[#1f2430] lg:text-[4.45rem] lg:leading-[1.02]">
            {pageData.cxHeroSection.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d625e]">
            {pageData.cxHeroSection.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={toLocalHref(pageData.cxHeroSection.heroCTALink)}
              className="rounded-full bg-[#1f8844] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#186b36]"
            >
              {pageData.cxHeroSection.heroCTAText}
            </a>
            <button
              onClick={() => setVideoOpen(true)}
              className="rounded-full border border-[#1f2430] bg-white px-6 py-3 text-sm font-semibold text-[#1f2430] transition hover:bg-[#ede7d8]"
            >
              Play Product Tour
            </button>
          </div>

          <div className="mt-12 overflow-hidden rounded-[34px] border border-[#dcd5c7] bg-[#dfeee2] shadow-[0_16px_50px_rgba(31,36,48,0.08)]">
            <button onClick={() => setVideoOpen(true)} className="group relative block w-full">
              <img
                src={mediaUrl(pageData.cxHeroSection.heroImage)}
                alt={pageData.cxHeroSection.heroTitle}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,16,0.06),rgba(10,12,16,0.34))]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-white/92 text-2xl text-[#1f8844] shadow-xl transition group-hover:scale-105">
                  ▶
                </div>
              </div>
            </button>
          </div>
        </section>
      </Reveal>

      <section className="mx-auto w-[min(100%,1180px)] px-5 py-8 lg:px-8">
        <RoleTabs title={pageData.CxRoles.title} roles={pageData.CxRoles.CxEmployess} />
      </section>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-16 lg:px-8">
        <section className="grid gap-8 rounded-[36px] bg-[#1f8844] p-8 text-white lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Pre-Built Integrations
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight lg:text-5xl">
              {pageData.CxPreBuiltSection.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/82">
              {pageData.CxPreBuiltSection.description}
            </p>
          </div>
          <div className="overflow-hidden rounded-[30px] bg-white/8 p-4">
            <img
              src={mediaUrl(pageData.CxPreBuiltSection.backgroudAsset)}
              alt={pageData.CxPreBuiltSection.title}
              className="w-full rounded-[24px] object-cover"
            />
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-10 lg:px-8">
        <section className="grid gap-8 rounded-[34px] bg-white p-6 shadow-[0_16px_60px_rgba(31,36,48,0.08)] lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
          <div className="rounded-[28px] bg-[#111822] p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7ee49f]">
              {challenge?.badge ?? "Success Story"}
            </p>
            <h3 className="mt-4 text-3xl font-medium leading-tight">
              {successStory?.subtitle}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/72">
              {challenge?.description}
            </p>
          </div>
          <div className="rounded-[28px] border border-[#e7e1d6] bg-[#fbf8f1] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8844]">
              Agentic AI
            </p>
            <h3 className="mt-3 text-3xl font-medium leading-tight text-[#1f2430] lg:text-4xl">
              {pageData.agenticAISectoinCxExperiencePage.title}
            </h3>
            <p className="mt-4 text-[15px] leading-8 text-[#5d625e]">
              {pageData.agenticAISectoinCxExperiencePage.imageText}
            </p>
            <ul className="mt-6 space-y-3">
              {(pageData.agenticAISectoinCxExperiencePage.points ?? []).map((point: any) => (
                <li key={point.id ?? point.title} className="flex items-start gap-3 text-[15px] leading-7 text-[#1f2430]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#1f8844]" />
                  <span>{point.title ?? richTextToPlainText(point.description)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-12 lg:px-8">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8844]">
            FAQs on Ema&apos;s Customer Experience
          </p>
          <h2 className="mt-4 text-4xl font-medium text-[#1f2430] lg:text-6xl">
            Trust, deployment, and customer support answers
          </h2>
          <div className="mt-10">
            <FaqList items={pageData.cxFaq} />
          </div>
        </section>
      </Reveal>

      {videoOpen ? (
        <VideoModal
          title={pageData.cxHeroSection.heroTitle}
          src={mediaUrl(pageData.cxHeroSection.heroVideo)}
          onClose={() => setVideoOpen(false)}
        />
      ) : null}
    </div>
  );
}
