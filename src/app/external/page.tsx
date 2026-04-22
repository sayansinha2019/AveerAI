import { PlaceholderPage } from "@/components/site/placeholder-page";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ url?: string }>;
}) {
  const { url } = await searchParams;
  return <PlaceholderPage route="/external" externalUrl={url ?? null} />;
}
