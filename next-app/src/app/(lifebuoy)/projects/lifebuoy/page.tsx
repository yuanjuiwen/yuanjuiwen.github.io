import type { Metadata } from "next";
import { LifebuoyPage } from "@/components/pages/lifebuoy";

export const metadata: Metadata = { title: "Lifebuoy | Kevin Wen" };

export default function Page() {
  return <LifebuoyPage />;
}
