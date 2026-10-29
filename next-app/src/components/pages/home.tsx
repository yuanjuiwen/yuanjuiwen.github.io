/* Converted from index.html. */
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { t } from "@/lib/locale";

export function HomePage() {
  return (
    <>
      <div id="preloader" className="preloader" role="status" aria-live="polite" aria-label="Loading portfolio">
        <div className="preloader__content" data-preloader-sentence={"Hi, I'm Kevin Wen!\n\nI design with curiosity and empathy, shaping well-crafted experiences that feel human and intentional while bridging technology and everyday life."}>
          <p className="preloader__title" />
          <p className="preloader__intro" />
        </div>
      </div>
      <Navbar current="home" />
      <main>
        <section id="home">
          <div className="home-landing" id="home-landing">
            <div className="home-hero" id="home-hero">
              <p className="home-title home-hero-line" role="heading" aria-level={2}>Hi, I&apos;m Kevin Wen!</p>
              <p className="home-intro home-hero-line">{t("home.intro")}</p>
            </div>
            <p className="home-currently">{t("home.currently")}</p>
            <button type="button" className="home-scroll-hint" aria-label={t("home.scrollHint")}>
              <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </button>
          </div>
          <section id="work" className="projects-section" aria-label="Projects">
            <div className="projects-category">
              <h2 className="section-heading projects-category__heading">{t("home.uiuxHeading")}</h2>
              <div className="projects-grid">
                <article className="project-card">
                  <div className="project-image" aria-hidden="true">
                    <picture>
                      <source srcSet="/assets/Colendar_portfolio_main.webp" type="image/webp" />
                      <img className="project-media" src="/assets/Colendar_portfolio_main.jpg" alt="Project cover" loading="lazy" decoding="async" />
                    </picture>
                  </div>
                  <h3 className="project-title">Colendar</h3>
                  <p className="project-desc">A planning tool for college students that keeps goals visible, tracks progress, and maintains momentum over time.</p>
                  <a className="project-card-link" href="/projects/colendar/" aria-label="Open Colendar project">{t("common.open")}</a>
                </article>
                <article className="project-card">
                  <div className="project-image" aria-hidden="true">
                    <picture>
                      <source srcSet="/assets/Tcard_portfolio_home .webp" type="image/webp" />
                      <img className="project-media" src="/assets/Tcard_portfolio_home .png" alt="Project cover" loading="lazy" decoding="async" />
                    </picture>
                  </div>
                  <h3 className="project-title">TJOY</h3>
                  <p className="project-desc">A cross-cultural platform that helps employees connect and integrate faster, developed during the 2025 Meichu Hackathon.</p>
                  <a className="project-card-link" href="https://wenyuanjui.framer.website/tjoy" target="_blank" rel="noopener noreferrer" aria-label="Open TJOY project">{t("common.open")}</a>
                </article>
                <article className="project-card">
                  <div className="project-image" aria-hidden="true">
                    <video className="project-media" data-src="/assets/eyezen-app.mp4" autoPlay muted loop playsInline preload="none" />
                  </div>
                  <h3 className="project-title">EYEZEN</h3>
                  <p className="project-desc">
                    A vision-care software that uses distance sensing and dynamic blur to naturally encourage healthier viewing habits.
                  </p>
                  <a className="project-card-link" href="/projects/eyezen/" aria-label="Open EYEZEN project">{t("common.open")}</a>
                </article>
              </div>
            </div>
            <div className="projects-category">
              <h2 className="section-heading projects-category__heading">{t("home.industrialDesignHeading")}</h2>
              <div className="projects-grid">
                <article className="project-card">
                  <div className="project-image" aria-hidden="true">
                    <video className="project-media" data-src="/assets/oculus1.mp4" autoPlay muted loop playsInline preload="none" />
                    <img className="project-card-badge" src="/assets/EUPA Logo.png" alt="" loading="lazy" decoding="async" />
                  </div>
                  <h3 className="project-title">OCULUS</h3>
                  <p className="project-desc">Developed a personal blender for EUPA through lean design process, focusing on blending efficiency as the core value.</p>
                  <a className="project-card-link" href="/projects/oculus/" aria-label="Open OCULUS project">{t("common.open")}</a>
                </article>
                <article className="project-card">
                  <div className="project-image" aria-hidden="true">
                    <picture>
                      <source srcSet="/assets/lifebuoy.webp" type="image/webp" />
                      <img className="project-media" src="/assets/lifebuoy.png" alt="Lifebuoy project cover" loading="lazy" decoding="async" />
                    </picture>
                  </div>
                  <h3 className="project-title">Lifebuoy</h3>
                  <p className="project-desc">
                    Reimagining how a drowning person enters the lifebuoy, enabling rescue support with less effort and a more instinctive posture.
                  </p>
                  <a className="project-card-link" href="/projects/lifebuoy/" aria-label="Open Lifebuoy project">{t("common.open")}</a>
                </article>
              </div>
            </div>
          </section>
          <div className="section-divider" aria-hidden="true" />
          <section id="play" className="playground-section" aria-label="Play">
            <h2 className="section-heading">{t("home.playHeading")}</h2>
            <div className="projects-grid">
              <article className="project-card project-card--game-design">
                <div className="project-image" aria-hidden="true">
                  <video className="project-media" data-src="/assets/game-design.mp4" autoPlay muted loop playsInline preload="none" />
                </div>
                <h3 className="project-title">Game Design</h3>
                <p className="project-desc">A Unity based 2D game exploring interaction, feedback, and player experience.</p>
                <a className="project-card-link" href="/projects/game-design/" aria-label="Open Game Design project">{t("common.open")}</a>
              </article>
              <article className="project-card project-card--photo-e">
                <div className="project-image" aria-hidden="true">
                  <video className="project-media" data-src="/assets/photo-e-portfolio.mp4" autoPlay muted loop playsInline preload="none" />
                </div>
                <h3 className="project-title">1/O</h3>
                <p className="project-desc">A visual creation project created by cross-disciplinary photographer Cheng-Chang Kuo and 15 students from diverse academic fields.</p>
                <a className="project-card-link" href="https://www.behance.net/gallery/234107661/1O-Photography-Exhibition" target="_blank" rel="noopener noreferrer" aria-label="Photo E — 1/O Photography Exhibition on Behance (opens in new tab)">Open</a>
              </article>
              <article className="project-card">
                <div className="project-image" aria-hidden="true">
                  <picture>
                    <source srcSet="/assets/karman_1.webp" type="image/webp" />
                    <img className="project-media" src="/assets/karman_1.JPG" alt="Project cover" loading="lazy" decoding="async" />
                  </picture>
                </div>
                <h3 className="project-title">Karman Line</h3>
                <p className="project-desc">Exploring future forms of mobility and habitation in response to climate change and shifting landscapes.</p>
                <a className="project-card-link" href="/projects/karman-line/" aria-label="Open Karman Line project">{t("common.open")}</a>
              </article>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
