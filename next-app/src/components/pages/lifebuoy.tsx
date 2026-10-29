/* Converted from project-lifebuoy.html. */
import { Navbar } from "@/components/site/navbar";

export function LifebuoyPage() {
  return (
    <>
      <Navbar />
      <main className="project-page project-page--wide">
        <div className="project-page-media project-page-media--gray-panel project-page-media--no-border project-page-media--no-bg">
          <div className="project-image-slot project-image-slot--feature project-image-slot--filled" role="img" aria-label="Lifebuoy project cover">
            <picture>
              <source srcSet="/assets/lifebuoy.webp" type="image/webp" />
              <img className="project-image-slot__img" src="/assets/lifebuoy.png" alt="Lifebuoy project cover" loading="eager" fetchPriority="high" decoding="async" draggable="false" />
            </picture>
          </div>
        </div>
        <section className="project-page-lead" aria-labelledby="lifebuoy-lead-heading">
          <h2 id="lifebuoy-lead-heading" className="project-page-lead__title">Lifebuoy</h2>
          <p className="project-page-desc">
            Reimagining how a drowning person enters the lifebuoy, enabling them to receive rescue support with less
            effort and in a more instinctive posture, while maintaining stability and safety even in chaotic conditions.
          </p>
        </section>
        <section className="project-case-study-soon" lang="en" aria-label="Case study status">
          <p className="project-case-study-soon__text">Case Study Coming Soon</p>
        </section>
      </main>
    </>
  );
}
