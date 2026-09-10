import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solo — Jeffrey's Personal Content Studio",
  description: "Create, adapt, preview, and schedule content for Instagram, LinkedIn, TikTok, Facebook, and X.",
};

export default function StudioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
