import { SiteDocument } from "@/components/site/site-document";

// Same inline scripts as the original index.html: start at the top, and skip the
// intro when returning from a project page.
const SCROLL_RESET = `if ("scrollRestoration" in history) { history.scrollRestoration = "manual"; } window.scrollTo(0, 0);`;
const SKIP_INTRO = `try { if (sessionStorage.getItem("home_left_for_subpage") === "1") { document.body.classList.remove("is-preloading"); document.documentElement.classList.add("skip-home-intro"); } } catch (e) {}`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SiteDocument bodyClassName="is-preloading" behavior="home" head={<script dangerouslySetInnerHTML={{ __html: SCROLL_RESET }} />} bodyStart={<script dangerouslySetInnerHTML={{ __html: SKIP_INTRO }} />}>
      {children}
    </SiteDocument>
  );
}
