"use client";

import { useState } from "react";

import gweSnapshot from "@/data/snapshots/gwe.json";
import { FaqList } from "@/components/site/faq-list";
import { Reveal } from "@/components/site/reveal";
import { VideoModal } from "@/components/site/video-modal";
import { mediaUrl, toLocalHref } from "@/lib/ema";
import type { Snapshot } from "@/lib/ema";

export function GwePage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const { pageData } = (gweSnapshot as Snapshot).pageProps;

  return (
    <div className="bg-[#f8f5ee]">
      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-16 lg:px-8 lg:py-20">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8844]">
            Product
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-medium leading-tight text-[#1f2430] lg:text-[4.35rem] lg:leading-[1.03]">
            {pageData.heroSectionGWE.title}
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={toLocalHref(pageData.heroSectionGWE.HeroCTA?.ctaLink)}
              className="rounded-full bg-[#1f8844] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#186b36]"
            >
              {pageData.heroSectionGWE.HeroCTA?.ctaText}
            </a>
            <button
              onClick={() => setVideoOpen(true)}
              className="rounded-full border border-[#1f2430] bg-white px-6 py-3 text-sm font-semibold text-[#1f2430] transition hover:bg-[#ede7d8]"
            >
              Watch Demo
            </button>
          </div>

          <div className="mt-12 overflow-hidden rounded-[34px] border border-[#dcd5c7] bg-[#101722] shadow-[0_18px_60px_rgba(31,36,48,0.12)]">
            <button onClick={() => setVideoOpen(true)} className="group relative block w-full">
              <img
                src={mediaUrl(pageData.heroSectionGWE.heroImg)}
                alt={pageData.heroSectionGWE.title}
                className="w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,18,0.1),rgba(8,12,18,0.48))]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-white/92 text-2xl text-[#1f8844] shadow-xl transition group-hover:scale-105">
                  ▶
                </div>
              </div>
            </button>
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-10 lg:px-8">
        <section className="rounded-[36px] bg-white p-6 shadow-[0_16px_60px_rgba(31,36,48,0.08)] lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8844]">
            Workflow Engine
          </p>
          <h2 className="mt-4 text-4xl font-medium text-[#1f2430] lg:text-6xl">
            {pageData.workflowEngine.titlle}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5d625e]">
            {pageData.workflowEngine.description}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pageData.workflowEngine.workflows.map((workflow: any) => (
              <a
                key={workflow.id}
                href={toLocalHref(workflow.ctaLink)}
                className="rounded-[28px] border border-[#e5ded0] bg-[#fbf8f1] p-5 transition hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(31,36,48,0.08)]"
              >
                <img
                  src={mediaUrl(workflow.icon)}
                  alt={workflow.title}
                  className="h-14 w-14 object-contain"
                />
                <h3 className="mt-5 text-2xl font-medium text-[#1f2430]">
                  {workflow.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5d625e]">
                  {workflow.description}
                </p>
                {workflow.ctaText ? (
                  <span className="mt-6 inline-flex text-sm font-semibold text-[#1f8844]">
                    {workflow.ctaText} →
                  </span>
                ) : null}
              </a>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-12 lg:px-8">
        <section className="grid gap-8 rounded-[36px] bg-[#111822] p-8 text-white lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ee49f]">
              Integrations
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight">
              {pageData.integrationGWE.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/78">
              {pageData.integrationGWE.description}
            </p>
            <a
              href={toLocalHref(pageData.integrationGWE.cta?.ctaLink)}
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111822] transition hover:bg-[#7ee49f]"
            >
              {pageData.integrationGWE.cta?.ctaText ?? "Explore Integrations"}
            </a>
          </div>
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/4 p-4">
            <img
              src={mediaUrl(pageData.integrationGWE.image)}
              alt={pageData.integrationGWE.title}
              className="w-full rounded-[24px] object-cover"
            />
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto w-[min(100%,1180px)] px-5 py-12 lg:px-8">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8844]">
            FAQs
          </p>
          <h2 className="mt-4 text-4xl font-medium text-[#1f2430] lg:text-6xl">
            Questions about GWE
          </h2>
          <div className="mt-10">
            <FaqList items={pageData.faq} />
          </div>
        </section>
      </Reveal>

      {videoOpen ? (
        <VideoModal
          title={pageData.heroSectionGWE.title}
          src={mediaUrl(pageData.heroSectionGWE.video)}
          onClose={() => setVideoOpen(false)}
        />
      ) : null}
    </div>
  );
}
