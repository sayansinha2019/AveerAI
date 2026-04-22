import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROUTES = {
  home: "/",
  customerExperience: "/customer-experience",
  docGen: "/doc-gen",
  gwe: "/gwe-generative-workflow-engine",
};

async function fetchSnapshot(route) {
  const html = await fetch(`https://www.ema.ai${route}`, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    },
  }).then((response) => response.text());

  const match = html.match(
    /<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/,
  );

  if (!match) {
    throw new Error(`Missing __NEXT_DATA__ for ${route}`);
  }

  const nextData = JSON.parse(match[1]);
  return {
    page: nextData.page,
    pageProps: nextData.props.pageProps,
  };
}

async function main() {
  const outputDir = path.join(process.cwd(), "src", "data", "snapshots");
  await mkdir(outputDir, { recursive: true });

  for (const [name, route] of Object.entries(ROUTES)) {
    const snapshot = await fetchSnapshot(route);
    const target = path.join(outputDir, `${name}.json`);
    await writeFile(target, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
    console.log(`Wrote ${path.relative(process.cwd(), target)}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
