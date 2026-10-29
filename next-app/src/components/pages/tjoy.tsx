/* Converted from project-tjoy.html. */
import { Navbar } from "@/components/site/navbar";

export function TjoyPage() {
  return (
    <>
      <Navbar />
      <main className="project-page project-page--wide">
        <div className="project-page-media project-page-media--gray-panel project-page-media--no-border project-page-media--no-bg">
          <div className="project-image-slot project-image-slot--feature project-image-slot--filled" role="img" aria-label="TJOY project cover">
            <picture>
              <source srcSet="/assets/Tcard__1.webp" type="image/webp" />
              <img className="project-image-slot__img" src="/assets/Tcard__1.png" alt="TJOY project cover" loading="eager" fetchPriority="high" decoding="async" />
            </picture>
          </div>
        </div>
        <section className="project-page-lead" aria-labelledby="tjoy-lead-heading">
          <h2 id="tjoy-lead-heading" className="project-page-lead__title">TJOY</h2>
          <p className="project-page-desc">2025 Meichu Hackathon - TSMC Challenge</p>
        </section>
        <section className="project-context project-context--tjoy-summary" lang="en" aria-labelledby="tjoy-summary-heading">
          <h2 id="tjoy-summary-heading" className="project-page-lead__title project-context__title">
            SUMMARY
          </h2>
          <p className="project-context__body">
            TJOY is a cross-cultural networking platform that fosters mutual understanding among employees and empowers
            business decisions through data analytics. It helps international new hires integrate quickly into teams and
            workplace culture, while enabling companies to understand employee needs, optimize management processes, and
            reduce operational costs.
          </p>
        </section>
        <section className="project-page-facts" lang="en" aria-label="Project details">
          <div className="project-page-facts__inline">
            <div className="project-page-facts__block project-page-facts__block--timeline">
              <span className="project-page-facts__label">Timeline</span>
              <span className="project-page-facts__chunks">
                <span className="project-page-facts__chunk">2025/09/20 - 2025/09/21</span>
              </span>
            </div>
            <div className="project-page-facts__block">
              <span className="project-page-facts__label">Role</span>
              <span className="project-page-facts__chunks">
                <span className="project-page-facts__chunk">Product design</span><span className="project-page-facts__comma">, </span><span className="project-page-facts__chunk">UX research</span>
              </span>
            </div>
            <div className="project-page-facts__block">
              <span className="project-page-facts__label">Team</span>
              <span className="project-page-facts__chunks">
                <span className="project-page-facts__chunk">1 Designer, 4 Engineers</span>
              </span>
            </div>
          </div>
        </section>
        <section className="project-context" lang="en" aria-labelledby="tjoy-context-heading">
          <p className="project-context__label">context</p>
          <h2 id="tjoy-context-heading" className="project-page-lead__title project-context__title">
            As TSMC expands globally and attracts more international talent, new hires face challenges in adaptation and cultural integration, while companies face new talent management bottlenecks.
          </h2>
          <p className="project-context__body">
            At the 2025 Meichu Hackathon, TSMC invited teams to design a platform that enhances the onboarding experience for new employees. We chose to focus on the adaptation journey of international hires, exploring the real challenges they face in a cross-cultural workplace.
          </p>
        </section>
        <section className="project-research" lang="en" aria-labelledby="tjoy-initial-research-heading">
          <p className="project-research__label">initial research</p>
          <div className="project-research__block">
            <p className="project-research__body">
              We gathered secondary research data, interviewed a team member with internship experience at TSMC, and held a discussion with a mentor from TSMC to understand the adaptation challenges faced by international new hires.
            </p>
            <hr className="project-research__divider" aria-hidden="true" />
            <figure className="project-karman-line__figure">
              <img className="project-karman-line__img" src="/assets/Tcard_3.png" alt="TJOY initial research visual" loading="lazy" decoding="async" draggable="false" />
            </figure>
          </div>
        </section>
        <p className="project-context__label tjoy-problem-grid__label">problem statement</p>
        <div className="tjoy-problem-grid" role="group" aria-label="Key problem statements">
          <section className="project-context" lang="en" aria-labelledby="tjoy-problem-statement-heading">
            <h2 id="tjoy-problem-statement-heading" className="project-page-lead__title project-context__title">
              <span className="tjoy-problem-title-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M5 6.5h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H11l-4 3v-3H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z" />
                </svg>
              </span>{" "}
              Communication Barriers
            </h2>
            <p className="project-context__body">
              Differences in language nuances and communication styles between Chinese and English often lead to misunderstandings and misinterpreted instructions.
            </p>
          </section>
          <section className="project-context" lang="en" aria-labelledby="tjoy-section-2-heading">
            <h2 id="tjoy-section-2-heading" className="project-page-lead__title project-context__title">
              <span className="tjoy-problem-title-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <circle cx={12} cy={12} r={9} />
                  <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
                </svg>
              </span>{" "}
              Cultural Integration Challenges
            </h2>
            <p className="project-context__body">
              Differences in workplace culture and social norms make it harder for new hires to build connections and
              <br />
              feel a sense of belonging.
            </p>
          </section>
          <section className="project-context" lang="en" aria-labelledby="tjoy-section-3-heading">
            <h2 id="tjoy-section-3-heading" className="project-page-lead__title project-context__title">
              <span className="tjoy-problem-title-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M4 10.5 12 4l8 6.5" />
                  <path d="M6.5 9.8V20h11V9.8" />
                  <path d="M10 20v-5h4v5" />
                </svg>
              </span>{" "}
              Daily Life Difficulties
            </h2>
            <p className="project-context__body">
              Relocated employees often struggle with housing, transportation, and daily arrangements due to fragmented
              information during onboarding.
            </p>
          </section>
          <section className="project-context" lang="en" aria-labelledby="tjoy-section-4-heading">
            <h2 id="tjoy-section-4-heading" className="project-page-lead__title project-context__title">
              <span className="tjoy-problem-title-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <rect x={5} y="3.5" width={14} height={17} rx="1.5" />
                  <path d="M9 8h.01M12 8h.01M15 8h.01M9 11.5h.01M12 11.5h.01M15 11.5h.01M9 15h.01M12 15h.01M15 15h.01" />
                </svg>
              </span>{" "}
              Organizational Impact
            </h2>
            <p className="project-context__body">
              As TSMC&apos;s culture and operations remain unfamiliar to many Americans, the company still relies on Taiwanese
              expatriates to support its U.S. sites.
            </p>
          </section>
        </div>
        <hr className="tjoy-problem-divider" aria-hidden="true" />
        <p className="project-context__body tjoy-problem-summary">
          The disconnect between fragmented living information and deep-seated cultural barriers restricts international
          talents from forming a profound identity with TSMC, ultimately obstructing the mutual alignment and cohesion
          between talent and organization.
        </p>
        <section className="project-context" lang="en" aria-labelledby="tjoy-hmw-heading">
          <p className="project-context__label">hmw</p>
          <h2 id="tjoy-hmw-heading" className="project-page-lead__title project-context__title">
            How Might We...
          </h2>
          <p className="project-context__body">
            Add your HMW statement here.
          </p>
        </section>
        <p className="project-context__body">
          Full TJOY case study:{" "}
          <a href="https://wenyuanjui.framer.website/tjoy" target="_blank" rel="noopener noreferrer">https://wenyuanjui.framer.website/tjoy</a>
        </p>
      </main>
    </>
  );
}
