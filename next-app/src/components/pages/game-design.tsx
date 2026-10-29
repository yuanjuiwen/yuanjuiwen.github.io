/* Converted from project-game-design.html. */
import { Navbar } from "@/components/site/navbar";

export function GameDesignPage() {
  return (
    <>
      <Navbar />
      <main className="project-page project-page--wide">
        <div className="project-page-media project-page-media--gray-panel project-page-media--no-border project-page-media--no-bg">
          <div className="project-image-slot project-image-slot--feature project-image-slot--filled" aria-label="Game design demo">
            <video className="project-image-slot__img" data-src="/assets/game-design.mp4" preload="none" autoPlay muted loop playsInline />
          </div>
        </div>
        <section className="project-case-study-soon" lang="en" aria-label="Case study status">
          <p className="project-case-study-soon__text">Case Study Coming Soon</p>
        </section>
      </main>
    </>
  );
}
