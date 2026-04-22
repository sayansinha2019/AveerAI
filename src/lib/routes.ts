export type RouteState = "built" | "placeholder" | "external-placeholder";

export type RouteInfo = {
  state: RouteState;
  title: string;
  description: string;
};

export const ROUTE_REGISTRY: Record<string, RouteInfo> = {
  "/": {
    state: "built",
    title: "Homepage",
    description: "Primary landing page replica.",
  },
  "/customer-experience": {
    state: "built",
    title: "Customer Experience",
    description: "Customer support and CX suite replica.",
  },
  "/doc-gen": {
    state: "built",
    title: "Document Generation",
    description: "Document generation suite replica.",
  },
  "/gwe-generative-workflow-engine": {
    state: "built",
    title: "GWE",
    description: "Generative Workflow Engine replica.",
  },
  "/employee-experience": {
    state: "placeholder",
    title: "Employee Experience",
    description: "Not replicated yet. Planned as the next workforce suite page.",
  },
  "/finops": {
    state: "placeholder",
    title: "Finance Operations",
    description: "Not replicated yet. Planned as a productized workflow page.",
  },
  "/voice-ai-employee": {
    state: "placeholder",
    title: "Voice AI Employee",
    description: "Not replicated yet. Candidate for the next detailed landing page.",
  },
  "/emafusion": {
    state: "placeholder",
    title: "EmaFusion",
    description: "Not replicated yet. Needs a dedicated product detail page.",
  },
  "/trust-and-security": {
    state: "placeholder",
    title: "Trust and Security",
    description: "Not replicated yet. Security and compliance content should live locally.",
  },
  "/agent-library": {
    state: "placeholder",
    title: "Agent Library",
    description: "Not replicated yet. This should become a searchable local catalog page.",
  },
  "/document-analytics": {
    state: "placeholder",
    title: "Document Analytics",
    description: "Not replicated yet. Related product page remains to be built.",
  },
  "/knowledge-insights": {
    state: "placeholder",
    title: "Knowledge Insights",
    description: "Not replicated yet. Needs a focused landing page.",
  },
  "/app-navigator": {
    state: "placeholder",
    title: "App Navigator",
    description: "Not replicated yet. Reserved as a future product page.",
  },
  "/ai-employee-builder": {
    state: "placeholder",
    title: "AI Employee Builder",
    description: "Not replicated yet. Builder experience should be localized later.",
  },
  "/ai-employees": {
    state: "placeholder",
    title: "AI Employees",
    description: "Not replicated yet. High-level product overview remains to be built.",
  },
  "/sales-marketing": {
    state: "placeholder",
    title: "Sales and Marketing",
    description: "Not replicated yet. Planned as another suite page.",
  },
  "/customer-support": {
    state: "placeholder",
    title: "Customer Support",
    description: "Not replicated yet. Current customer-experience page covers part of this surface.",
  },
  "/about-us": {
    state: "placeholder",
    title: "About",
    description: "Company page not replicated yet.",
  },
  "/careers": {
    state: "placeholder",
    title: "Careers",
    description: "Careers page not replicated yet.",
  },
  "/news": {
    state: "placeholder",
    title: "News",
    description: "News page not replicated yet.",
  },
  "/advisors": {
    state: "placeholder",
    title: "Advisors",
    description: "Advisors page not replicated yet.",
  },
  "/blog": {
    state: "placeholder",
    title: "Blog",
    description: "Blog index not replicated yet.",
  },
  "/resources": {
    state: "placeholder",
    title: "Resources",
    description: "Resources hub not replicated yet.",
  },
  "/partners": {
    state: "placeholder",
    title: "Partners",
    description: "Partners page not replicated yet.",
  },
  "/integrations": {
    state: "placeholder",
    title: "Integrations",
    description: "Integrations page not replicated yet.",
  },
  "/academy": {
    state: "placeholder",
    title: "Academy",
    description: "Academy page not replicated yet.",
  },
  "/personas": {
    state: "placeholder",
    title: "Personas",
    description: "Personas page not replicated yet.",
  },
  "/solutions": {
    state: "placeholder",
    title: "Solutions",
    description: "Solutions page not replicated yet.",
  },
  "/health-care": {
    state: "placeholder",
    title: "Healthcare",
    description: "Healthcare industry page not replicated yet.",
  },
  "/insurance": {
    state: "placeholder",
    title: "Insurance",
    description: "Insurance industry page not replicated yet.",
  },
  "/professional-services": {
    state: "placeholder",
    title: "Professional Services",
    description: "Professional services page not replicated yet.",
  },
  "/privacy-policy": {
    state: "placeholder",
    title: "Privacy Policy",
    description: "Privacy policy content has not been localized yet.",
  },
  "/intelligent-actions": {
    state: "placeholder",
    title: "Intelligent Actions",
    description: "Not replicated yet. Should become a local product capability page.",
  },
  "/hire-ema": {
    state: "placeholder",
    title: "Hire Ema",
    description: "Lead capture flow has not been localized yet.",
  },
  "/hire-gwe": {
    state: "placeholder",
    title: "Hire GWE",
    description: "Lead capture flow has not been localized yet.",
  },
  "/hire-customer-support-assistant": {
    state: "placeholder",
    title: "Hire Customer Support Assistant",
    description: "Lead capture flow has not been localized yet.",
  },
  "/customer-support-assistant": {
    state: "placeholder",
    title: "Customer Support Assistant",
    description: "Product detail page has not been localized yet.",
  },
  "/builder": {
    state: "external-placeholder",
    title: "Ema Builder",
    description: "The original builder lives on a separate product surface. A local build is still needed.",
  },
  "/support": {
    state: "external-placeholder",
    title: "Support",
    description: "The original support center lives on a separate product surface. A local help center is still needed.",
  },
  "/newsletter": {
    state: "external-placeholder",
    title: "Newsletter",
    description: "The original newsletter points to LinkedIn. A local archive page is still needed.",
  },
};

export function normalizeRoute(input?: string | null) {
  if (!input) {
    return "/";
  }

  const trimmed = input.trim();
  if (!trimmed) {
    return "/";
  }

  if (trimmed === "/") {
    return "/";
  }

  const normalized = trimmed.replace(/\/+$/, "");
  return normalized.startsWith("/") ? normalized : `/${normalized}`;
}

export function getRouteInfo(path: string) {
  const normalized = normalizeRoute(path);
  return (
    ROUTE_REGISTRY[normalized] ?? {
      state: "placeholder",
      title: normalized
        .split("/")
        .filter(Boolean)
        .map((part) => part.replace(/-/g, " "))
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ") || "Page",
      description:
        "This route belongs to the local replica plan, but the page has not been built yet.",
    }
  );
}
