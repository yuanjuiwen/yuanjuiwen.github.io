import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about";

export const metadata: Metadata = { title: "About | WEN" };

export default function Page() {
  return <AboutPage />;
}
