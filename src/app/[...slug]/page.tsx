import { PlaceholderPage } from "@/components/site/placeholder-page";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return <PlaceholderPage route={`/${slug.join("/")}`} />;
}
