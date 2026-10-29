import { SiteDocument } from "@/components/site/site-document";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SiteDocument bodyClassName="page-oculus-main" behavior="oculus">
      {children}
    </SiteDocument>
  );
}
