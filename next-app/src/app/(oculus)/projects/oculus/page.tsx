import type { Metadata } from "next";
import { OculusPage } from "@/components/pages/oculus";

export const metadata: Metadata = { title: "OCULUS | Kevin Wen" };

export default function Page() {
  return <OculusPage />;
}
