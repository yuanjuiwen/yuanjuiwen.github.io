"use client";

/* Converted from project-colendar.html. Text comes from src/locales so the EN / 中 switch works. */
import { HiFiCarousel } from "@/components/site/carousels";
import { Navbar } from "@/components/site/navbar";
import { useI18n } from "@/lib/i18n";

export function ColendarPage() {
  const { t } = useI18n();
  return (
    <>
      <Navbar langSwitch />
      <div>
        <aside className="colendar-toc toc--dock-bottom" aria-label={t("projects.colendar.tocNavAria")}>
          <nav className="colendar-toc__nav">
            <a className="colendar-toc__link" href="#colendar-lead-heading" data-toc-sections="colendar-lead-heading,colendar-summary-heading,colendar-key-achievements-heading">{t("projects.colendar.tocOverview")}</a>
            <a className="colendar-toc__link" href="#colendar-context-heading">{t("projects.colendar.tocContext")}</a>
            <a className="colendar-toc__link" href="#colendar-initial-research-heading">{t("projects.colendar.tocUserResearch")}</a>
            <a className="colendar-toc__link" href="#colendar-key-insight-heading">{t("projects.colendar.tocKeyInsight")}</a>
            <a className="colendar-toc__link" href="#colendar-design-goals-heading">{t("projects.colendar.tocDesignGoals")}</a>
            <a className="colendar-toc__link" href="#colendar-solution-heading">{t("projects.colendar.tocSolution")}</a>
            <a className="colendar-toc__link" href="#colendar-wireframe-lowfi-heading" data-toc-sections="colendar-wireframe-lowfi-heading,colendar-wireframe-midfi-heading,colendar-visual-system-heading,colendar-hifi-prototype-heading">{t("projects.colendar.tocProcess")}</a>
            <a className="colendar-toc__link" href="#colendar-reflection-heading">{t("projects.colendar.tocReflection")}</a>
          </nav>
        </aside>
        <main className="project-page project-page--wide">
          <div className="project-page-media project-page-media--gray-panel project-page-media--no-border project-page-media--no-bg">
            <div className="project-image-slot project-image-slot--feature project-image-slot--filled" role="img" aria-label={t("projects.colendar.coverAria")}>
              <picture>
                <source srcSet="/assets/smartphone-mockup.webp" type="image/webp" />
                <img className="project-image-slot__img" src="/assets/smartphone-mockup.jpg" alt={t("projects.colendar.coverImgAlt")} loading="eager" fetchPriority="high" decoding="async" />
              </picture>
            </div>
          </div>
          <section className="project-page-lead" aria-labelledby="colendar-lead-heading">
            <h2 id="colendar-lead-heading" className="project-page-lead__title project-context__title">Colendar</h2>
            <p className="project-page-desc">{t("projects.colendar.subtitle")}</p>
          </section>
          <section className="project-context project-context--colendar-summary" aria-labelledby="colendar-summary-heading">
            <h2 id="colendar-summary-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.summaryHeading")}</h2>
            <p className="project-context__body">{t("projects.colendar.summaryBody")}</p>
          </section>
          <section className="project-context project-context--colendar-key-achievements" aria-labelledby="colendar-key-achievements-heading">
            <h2 id="colendar-key-achievements-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.keyAchievementsHeading")}</h2>
            <ul className="colendar-key-achievements__list">
              <li className="colendar-key-achievements__item">
                <span>{t("projects.colendar.keyAchievement1")}</span>
              </li>
              <li className="colendar-key-achievements__item">
                <span>{t("projects.colendar.keyAchievement2")}</span>
              </li>
            </ul>
          </section>
          <section className="project-page-facts" aria-label={t("projects.colendar.factsAria")}>
            <div className="project-page-facts__inline">
              <div className="project-page-facts__block project-page-facts__block--timeline">
                <span className="project-page-facts__label">{t("projects.colendar.factsTimelineLabel")}</span>
                <span className="project-page-facts__chunks">
                  <span className="project-page-facts__chunk">2026.02 - 2026.05</span>
                </span>
              </div>
              <div className="project-page-facts__block">
                <span className="project-page-facts__label">{t("projects.colendar.factsRoleLabel")}</span>
                <span className="project-page-facts__chunks">
                  <span className="project-page-facts__chunk">{t("projects.colendar.factsRoleValue")}</span>
                </span>
              </div>
              <div className="project-page-facts__block">
                <span className="project-page-facts__label">{t("projects.colendar.factsTeamLabel")}</span>
                <span className="project-page-facts__chunks">
                  <span className="project-page-facts__chunk">{t("projects.colendar.factsTeamValue")}</span>
                </span>
              </div>
            </div>
          </section>
          <section className="project-context" aria-labelledby="colendar-context-heading">
            <p className="project-context__label">{t("projects.colendar.contextLabel")}</p>
            <h2 id="colendar-context-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.contextTitle")}</h2>
            <p className="project-context__body">{t("projects.colendar.contextBody")}</p>
          </section>
          <section className="project-context" aria-labelledby="colendar-initial-research-heading">
            <p className="project-context__label">{t("projects.colendar.researchLabel")}</p>
            <h2 id="colendar-initial-research-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.researchTitle")}</h2>
            <p className="project-context__body" dangerouslySetInnerHTML={{ __html: t("projects.colendar.researchBodyHtml") }} />
            <div className="colendar-research-stats" aria-label={t("projects.colendar.researchStatsAria")}>
              <div className="colendar-research-stats__item">
                <span className="colendar-research-stats__value">52</span>
                <span className="colendar-research-stats__label">{t("projects.colendar.researchStat1Label")}</span>
              </div>
              <div className="colendar-research-stats__item">
                <span className="colendar-research-stats__value">10</span>
                <span className="colendar-research-stats__label">{t("projects.colendar.researchStat2Label")}</span>
              </div>
              <div className="colendar-research-stats__item">
                <span className="colendar-research-stats__value">15+</span>
                <span className="colendar-research-stats__label">{t("projects.colendar.researchStat3Label")}</span>
              </div>
            </div>
            <div className="colendar-initial-research__box">
              <img className="colendar-initial-research__img" src="/assets/Colendar___KJ.png" alt={t("projects.colendar.researchImgAlt1")} />
              <img className="colendar-initial-research__img" src="/assets/Colendar_guotes.jpg" alt={t("projects.colendar.researchImgAlt2")} />
            </div>
          </section>
          <section className="project-context" aria-labelledby="colendar-key-insight-heading">
            <p className="project-context__label">{t("projects.colendar.keyInsightLabel")}</p>
            <h2 id="colendar-key-insight-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.keyInsightTitle")}</h2>
            <div className="colendar-key-insight-cards">
              <div className="colendar-key-insight-cards__item">
                <img className="colendar-key-insight-cards__img" src="/assets/Colendar-01.png" alt="" />
                <div className="colendar-key-insight-cards__foot">
                  <p className="colendar-key-insight-cards__label">{t("projects.colendar.keyInsight1Label")}</p>
                  <p className="colendar-key-insight-cards__text" dangerouslySetInnerHTML={{ __html: t("projects.colendar.keyInsight1Html") }} />
                </div>
              </div>
              <div className="colendar-key-insight-cards__item">
                <img className="colendar-key-insight-cards__img" src="/assets/Colendar-02.png" alt="" />
                <div className="colendar-key-insight-cards__foot">
                  <p className="colendar-key-insight-cards__label">{t("projects.colendar.keyInsight2Label")}</p>
                  <p className="colendar-key-insight-cards__text">{t("projects.colendar.keyInsight2Text")}</p>
                </div>
              </div>
              <div className="colendar-key-insight-cards__item">
                <img className="colendar-key-insight-cards__img" src="/assets/Colendar-03.png" alt="" />
                <div className="colendar-key-insight-cards__foot">
                  <p className="colendar-key-insight-cards__label">{t("projects.colendar.keyInsight3Label")}</p>
                  <p className="colendar-key-insight-cards__text">{t("projects.colendar.keyInsight3Text")}</p>
                </div>
              </div>
            </div>
          </section>
          <section className="project-context" aria-labelledby="colendar-design-goals-heading">
            <p className="project-context__label">{t("projects.colendar.designGoalsLabel")}</p>
            <h2 id="colendar-design-goals-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.designGoalsTitle")}</h2>
            <p className="project-context__body">{t("projects.colendar.designGoalsBody")}</p>
            <div className="colendar-design-goals-cards">
              <div className="colendar-design-goals-cards__item">
                <p className="colendar-design-goals-cards__label">{t("projects.colendar.designGoalsPainPointsLabel")}</p>
                <div className="colendar-key-insight-cards__foot">
                  <p className="colendar-key-insight-cards__label">{t("projects.colendar.painPoint1Label")}</p>
                  <p className="colendar-key-insight-cards__text colendar-key-insight-cards__text--pain-point-lead">{t("projects.colendar.painPoint1a")}</p>
                  <p className="colendar-key-insight-cards__text">{t("projects.colendar.painPoint1b")}</p>
                </div>
              </div>
              <div className="colendar-design-goals-cards__item">
                <p className="colendar-design-goals-cards__label">{t("projects.colendar.designOppLabel")}</p>
                <div className="colendar-key-insight-cards__foot">
                  <p className="colendar-key-insight-cards__label">{t("projects.colendar.feature1Label")}</p>
                  <p className="colendar-key-insight-cards__text">{t("projects.colendar.feature1a")}</p>
                  <p className="colendar-key-insight-cards__text">{t("projects.colendar.feature1b")}</p>
                </div>
              </div>
              <div className="colendar-design-goals-cards__item">
                <div className="colendar-key-insight-cards__foot">
                  <p className="colendar-key-insight-cards__label">{t("projects.colendar.painPoint2Label")}</p>
                  <p className="colendar-key-insight-cards__text colendar-key-insight-cards__text--pain-point-lead">{t("projects.colendar.painPoint2a")}</p>
                  <p className="colendar-key-insight-cards__text">{t("projects.colendar.painPoint2b")}</p>
                  <p className="colendar-key-insight-cards__text">{t("projects.colendar.painPoint2c")}</p>
                </div>
              </div>
              <div className="colendar-design-goals-cards__item">
                <div className="colendar-key-insight-cards__foot">
                  <p className="colendar-key-insight-cards__label">{t("projects.colendar.feature2Label")}</p>
                  <p className="colendar-key-insight-cards__text">{t("projects.colendar.feature2a")}</p>
                  <p className="colendar-key-insight-cards__text">{t("projects.colendar.feature2b")}</p>
                </div>
              </div>
              <div className="colendar-design-goals-cards__item">
                <div className="colendar-key-insight-cards__foot">
                  <p className="colendar-key-insight-cards__label">{t("projects.colendar.painPoint3Label")}</p>
                  <p className="colendar-key-insight-cards__text colendar-key-insight-cards__text--pain-point-lead">{t("projects.colendar.painPoint3a")}</p>
                  <p className="colendar-key-insight-cards__text">{t("projects.colendar.painPoint3b")}</p>
                </div>
              </div>
              <div className="colendar-design-goals-cards__item">
                <div className="colendar-key-insight-cards__foot">
                  <p className="colendar-key-insight-cards__label">{t("projects.colendar.feature3Label")}</p>
                  <p className="colendar-key-insight-cards__text">{t("projects.colendar.feature3a")}</p>
                  <p className="colendar-key-insight-cards__text">{t("projects.colendar.feature3b")}</p>
                </div>
              </div>
            </div>
          </section>
          <section className="project-solution" aria-labelledby="colendar-solution-heading">
            <p className="project-solution__label">{t("projects.colendar.solutionLabel")}</p>
            <h2 id="colendar-solution-heading" className="project-page-lead__title project-solution__title">{t("projects.colendar.solutionTitle")}</h2>
            <p className="project-solution__body">{t("projects.colendar.solutionBody")}</p>
          </section>
          <section className="project-context" aria-labelledby="colendar-next-block-heading">
            <p className="project-context__label">{t("projects.colendar.next1BlockLabel")}</p>
            <h2 id="colendar-next-block-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.next1Title")}</h2>
            <p className="project-context__body">{t("projects.colendar.next1Body")}</p>
            <div className="colendar-next-block__gray-panel">
              <div className="colendar-next-block__box colendar-next-block__box--videos colendar-next-block__box--video-single">
                <video className="colendar-next-block__video" loop muted playsInline preload="none" data-src="/assets/study-group.mp4" aria-label={t("projects.colendar.next1VideoAlt")} />
              </div>
            </div>
          </section>
          <section className="project-context" aria-labelledby="colendar-next-block-1sup-heading">
            <p className="project-context__label">{t("projects.colendar.next1SupBlockLabel")}</p>
            <h2 id="colendar-next-block-1sup-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.next1SupTitle")}</h2>
            <p className="project-context__body">{t("projects.colendar.next1SupBody")}</p>
            <div className="colendar-next-block__gray-panel">
              <div className="colendar-next-block__box colendar-next-block__box--videos">
                <video className="colendar-next-block__video" loop muted playsInline preload="none" data-src="/assets/time-spot-animation.mp4" aria-label={t("projects.colendar.next1SupVideoAnimationAlt")} />
                <video className="colendar-next-block__video" loop muted playsInline preload="none" data-src="/assets/time-spot-scroll.mp4" aria-label={t("projects.colendar.next1SupVideoScrollAlt")} />
              </div>
            </div>
          </section>
          <section className="project-context" aria-labelledby="colendar-next-block-2-heading">
            <p className="project-context__label">{t("projects.colendar.next2BlockLabel")}</p>
            <h2 id="colendar-next-block-2-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.next2Title")}</h2>
            <p className="project-context__body">{t("projects.colendar.next2Body")}</p>
            <div className="colendar-next-block__gray-panel">
              <div className="colendar-next-block__box colendar-next-block__box--videos colendar-next-block__box--video-single">
                <video className="colendar-next-block__video colendar-next-block__video--template" loop muted playsInline preload="none" data-src="/assets/template.mp4" aria-label={t("projects.colendar.next2VideoAlt")} />
              </div>
            </div>
          </section>
          <section className="project-context" aria-labelledby="colendar-next-block-3-heading">
            <p className="project-context__label">{t("projects.colendar.next3BlockLabel")}</p>
            <h2 id="colendar-next-block-3-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.next3Title")}</h2>
            <p className="project-context__body">{t("projects.colendar.next3Body")}</p>
            <div className="colendar-next-block__gray-panel">
              <div className="colendar-next-block__box colendar-next-block__box--videos colendar-next-block__box--video-single">
                <video className="colendar-next-block__video colendar-next-block__video--chat" loop muted playsInline preload="none" data-src="/assets/ai-chat.mp4" aria-label={t("projects.colendar.next3VideoAlt")} />
              </div>
            </div>
          </section>
          <section className="project-context project-context--colendar-wireframe project-context--colendar-wireframe-lowfi" aria-labelledby="colendar-wireframe-lowfi-heading">
            <p className="project-context__label">{t("projects.colendar.lowFiWireframeLabel")}</p>
            <h2 id="colendar-wireframe-lowfi-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.lowFiWireframeTitle")}</h2>
            <p className="project-context__body">{t("projects.colendar.lowFiWireframeBody")}</p>
            <div className="colendar-wireframe__box colendar-wireframe__box--plain">
              <img className="colendar-wireframe__img" src="/Journey.jpg" decoding="async" alt={t("projects.colendar.lowFiWireframeImgAlt")} />
            </div>
            <p className="project-context__body">{t("projects.colendar.lowFiWireframeSketchesBody")}</p>
            <div className="colendar-wireframe__box">
              <img className="colendar-wireframe__img" src="/Lo-fi%20Wireframe.jpg" decoding="async" alt="Colendar low-fi wireframe details" />
            </div>
          </section>
          <section className="project-context project-context--colendar-wireframe project-context--colendar-wireframe-midfi" aria-labelledby="colendar-wireframe-midfi-heading">
            <p className="project-context__label">{t("projects.colendar.wireframeLabel")}</p>
            <h2 id="colendar-wireframe-midfi-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.wireframeTitle")}</h2>
            <p className="project-context__body">{t("projects.colendar.wireframeBody")}</p>
            <div className="colendar-wireframe__box">
              <img className="colendar-wireframe__img" src="/assets/Wrieframe.jpg" decoding="async" alt={t("projects.colendar.wireframeImgAlt")} />
            </div>
          </section>
          <section className="project-context project-context--colendar-visual-system" aria-labelledby="colendar-visual-system-heading">
            <p className="project-context__label">{t("projects.colendar.visualSystemLabel")}</p>
            <h2 id="colendar-visual-system-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.visualSystemTitle")}</h2>
            <p className="project-context__body">{t("projects.colendar.visualSystemBody")}</p>
            <div className="colendar-visual-system__box">
              <img className="colendar-visual-system__img" src="/assets/Visual%20System.png" decoding="async" alt={t("projects.colendar.visualSystemImgAlt")} />
            </div>
          </section>
          <section className="project-context project-context--colendar-hifi-prototype" aria-labelledby="colendar-hifi-prototype-heading">
            <p className="project-context__label">{t("projects.colendar.hiFiPrototypeLabel")}</p>
            <h2 id="colendar-hifi-prototype-heading" className="project-page-lead__title project-context__title">{t("projects.colendar.hiFiPrototypeTitle")}</h2>
            <p className="project-context__body">{t("projects.colendar.hiFiPrototypeBody")}</p>
            <div className="colendar-visual-system__box colendar-visual-system__box--plain">
              <HiFiCarousel dotsLabel="Hi-fi prototype slides">
                <img className="colendar-hifi-prototype__img" src="/assets/Home_HI.jpg" decoding="async" alt="Colendar hi-fi home view" />
                <img className="colendar-hifi-prototype__img" src="/assets/Project_HI.jpg" decoding="async" alt="Colendar hi-fi project view" />
                <img className="colendar-hifi-prototype__img" src="/assets/Template_HI.jpg" decoding="async" alt="Colendar hi-fi template view" />
                <img className="colendar-hifi-prototype__img" src="/assets/Add_HI.jpg" decoding="async" alt="Colendar hi-fi add flow" />
                <img className="colendar-hifi-prototype__img" src="/assets/Calendar_HI.jpg" decoding="async" alt="Colendar hi-fi calendar view" />
                <img className="colendar-hifi-prototype__img" src="/assets/Study_HI.jpg" decoding="async" alt="Colendar hi-fi study view" />
                <img className="colendar-hifi-prototype__img" src="/assets/Community_HI.jpg" decoding="async" alt="Colendar hi-fi community view" />
                <img className="colendar-hifi-prototype__img" src="/assets/Studygroup_HI.jpg" decoding="async" alt="Colendar hi-fi study group view" />
              </HiFiCarousel>
            </div>
          </section>
          <section className="project-context project-context--colendar-reflection" aria-labelledby="colendar-reflection-heading">
            <p id="colendar-reflection-heading" className="project-context__label">{t("projects.colendar.reflectionLabel")}</p>
            <div className="colendar-reflection__items">
              <div className="colendar-reflection__item">
                <h3 className="colendar-reflection__item-title">{t("projects.colendar.reflection1Title")}</h3>
                <p className="project-context__body">{t("projects.colendar.reflection1Body")}</p>
              </div>
              <div className="colendar-reflection__item">
                <h3 className="colendar-reflection__item-title">{t("projects.colendar.reflection2Title")}</h3>
                <p className="project-context__body">{t("projects.colendar.reflection2Body")}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
