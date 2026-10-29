import type { Metadata } from "next";
import { KarmanLinePage } from "@/components/pages/karman-line";

export const metadata: Metadata = { title: "Karman Line | Kevin Wen" };

export default function Page() {
  return <KarmanLinePage />;
}
