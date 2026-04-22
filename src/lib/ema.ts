export type Snapshot = {
  page: string;
  pageProps: {
    pageData: any;
    footerData: any;
    theme?: string;
    logoColor?: string;
    mainBackgroundClass?: string;
  };
};

import { normalizeRoute } from "@/lib/routes";

export function mediaUrl(input?: string | { url?: string } | null) {
  const url = typeof input === "string" ? input : input?.url;

  if (!url) {
    return "";
  }

  if (url.startsWith("http")) {
    return url;
  }

  return `https://www.ema.ai${url}`;
}

export function toLocalHref(input?: string | null) {
  if (!input) {
    return "#";
  }

  try {
    const url = new URL(input, "https://www.ema.ai");
    const hostname = url.hostname.replace(/^www\./, "");
    const path = normalizeRoute(url.pathname);
    const query = url.search || "";
    const hash = url.hash || "";

    if (hostname === "ema.ai" || hostname === "ema.co") {
      return `${path}${query}${hash}`;
    }

    if (hostname === "builder.ema.co") {
      return "/builder";
    }

    if (hostname === "support.ema.co") {
      return "/support";
    }

    if (hostname === "linkedin.com") {
      return "/newsletter";
    }

    return `/external?url=${encodeURIComponent(url.toString())}`;
  } catch {
    return normalizeRoute(input);
  }
}

export function isExternalHref(href: string) {
  return href.startsWith("http");
}

function extractText(node: any): string[] {
  if (!node) {
    return [];
  }

  if (typeof node === "string") {
    return [node];
  }

  if (Array.isArray(node)) {
    return node.flatMap(extractText);
  }

  if (typeof node.text === "string") {
    return [node.text];
  }

  if (Array.isArray(node.children)) {
    return node.children.flatMap(extractText);
  }

  return [];
}

export function richTextToPlainText(value: any) {
  return extractText(value)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export function richTextToBulletList(value: any) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .flatMap((block) => block?.children ?? [])
    .map((child) => richTextToPlainText(child))
    .filter(Boolean);
}
