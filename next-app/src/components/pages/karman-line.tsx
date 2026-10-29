/* Converted from project_karman_line.html. */
import { Navbar } from "@/components/site/navbar";

export function KarmanLinePage() {
  return (
    <>
      <Navbar />
      <main className="project-page project-page--wide">
        <div className="project-page-media project-page-media--gray-panel project-page-media--no-border project-page-media--no-bg">
          <div className="project-image-slot project-image-slot--feature project-image-slot--filled" role="img" aria-label="EYEZEN Play preview">
            <picture>
              <source srcSet="/assets/karman_1.webp" type="image/webp" />
              <img className="project-image-slot__img" src="/assets/karman_1.JPG" alt="EYEZEN Play preview" loading="eager" fetchPriority="high" decoding="async" />
            </picture>
          </div>
        </div>
        <section className="project-page-lead" aria-labelledby="eyezen-lead-heading">
          <h2 id="eyezen-lead-heading" className="project-page-lead__title">Karman Line</h2>
        </section>
        <section className="project-page-facts" lang="en" aria-label="Project details">
          <div className="project-page-facts__inline">
            <div className="project-page-facts__block project-page-facts__block--date">
              <p className="project-page-facts__date">
                <span className="project-page-facts__date-part">2024</span><span className="project-page-facts__date-sep">/</span><span className="project-page-facts__date-part">02</span>
              </p>
            </div>
            <div className="project-page-facts__block project-page-facts__block--team">
              <span className="project-page-facts__label">Team</span>
              <span className="project-page-facts__chunks">
                <span className="project-page-facts__chunk">Personal Project</span>
              </span>
            </div>
          </div>
        </section>
        <figure className="project-karman-line__figure">
          <img className="project-karman-line__img" src="/assets/karmin_2.jpg" alt="Karman Line — spacecraft render" loading="lazy" decoding="async" draggable="false" />
        </figure>
        <p className="project-page-desc project-karman-line__story" lang="en">
          Inspired by <em>Interstellar</em> and <em>Why Travels Matter?</em>, I have reimagined the way humans might move
          and live in extreme environments in the future. In response to climate change and shifting landscapes, Karman
          Line is designed to securely attach to harsh terrains, offering a new way for people to survive and explore. It
          is more than just a vehicle—it is a mobile habitat adapted to the challenges of the future, allowing humans to
          find a sense of belonging and possibility in the vast unknown.
        </p>
        <figure className="project-karman-line__figure">
          <img className="project-karman-line__img" src="/assets/karman_3.jpg" alt="Karman Line concept — interior, exterior, and environment views" loading="lazy" decoding="async" draggable="false" />
        </figure>
        <figure className="project-karman-line__figure">
          <img className="project-karman-line__img" src="/assets/karman_4.png" alt="Karman Line — the concept of center" loading="lazy" decoding="async" draggable="false" />
        </figure>
        <figure className="project-karman-line__figure">
          <img className="project-karman-line__img" src="/assets/karman_5.png" alt="Karman Line — aircraft modes and mechanics" loading="lazy" decoding="async" draggable="false" />
        </figure>
        <figure className="project-karman-line__figure">
          <img className="project-karman-line__img" src="/assets/karman_6.png" alt="Karman Line — ideation sketching" loading="lazy" decoding="async" draggable="false" />
        </figure>
        <figure className="project-karman-line__figure">
          <img className="project-karman-line__img" src="/assets/karman_7.png" alt="Karman Line — form exploration and narrative" loading="lazy" decoding="async" draggable="false" />
        </figure>
      </main>
    </>
  );
}
