import { SiteDocument } from "@/components/site/site-document";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SiteDocument bodyClassName="page-eyezen-main page-colendar" behavior="colendar">
      {children}
    </SiteDocument>
  );
}
