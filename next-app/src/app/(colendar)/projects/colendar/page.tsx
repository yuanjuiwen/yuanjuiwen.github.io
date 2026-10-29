import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import { ColendarPage } from "@/components/pages/colendar";

export const metadata: Metadata = { title: "Colendar | Kevin Wen" };

export default function Page() {
  return (
    <I18nProvider>
      <ColendarPage />
    </I18nProvider>
  );
}
