/* Converted from project-eyezen-main.html. */
import { Navbar } from "@/components/site/navbar";

export function EyezenPage() {
  return (
    <>
      <Navbar />
      <div>
        <aside className="eyezen-toc toc--dock-bottom" aria-label="Section navigation">
          <nav className="eyezen-toc__nav">
            <a className="eyezen-toc__link" href="#eyezen-context-heading">context</a>
            <a className="eyezen-toc__link" href="#eyezen-research-heading">research</a>
            <a className="eyezen-toc__link" href="#eyezen-design-challenge-heading">design challenge</a>
            <a className="eyezen-toc__link" href="#eyezen-solution-heading">solution</a>
          </nav>
        </aside>
        <main className="project-page project-page--wide">
          <div id="eyezen-hero" className="project-page-media-row">
            <div className="project-page-media project-page-media--gray-panel project-page-media--laptop-mockup">
              <span className="project-page-media__live-dot" aria-hidden="true" />
              <div className="laptop-mockup">
                <picture>
                  <source srcSet="/assets/Mockup_1.webp" type="image/webp" />
                  <img className="laptop-mockup__img" src="/assets/Mockup_1.png" alt="" width={1024} height={768} loading="eager" fetchPriority="high" decoding="async" />
                </picture>
                <div className="laptop-mockup__screen">
                  <video src="/assets/eyezen-app.mp4" autoPlay muted loop playsInline preload="metadata" />
                </div>
              </div>
            </div>
            <div className="project-page-media project-page-media--gray-panel project-page-media--demo-gif">
              <video src="/assets/eyezen-demo.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="EYEZEN demo" />
            </div>
          </div>
          <section className="project-page-lead" aria-labelledby="eyezen-title-heading">
            <h2 id="eyezen-title-heading" className="project-page-lead__title">EYEZEN</h2>
            <p className="project-page-desc">
              A vision-care software that uses distance sensing and dynamic blur to naturally encourage healthier viewing habits.
            </p>
          </section>
          <section className="project-page-lead" aria-labelledby="eyezen-lead-heading">
            <h2 id="eyezen-lead-heading" className="project-page-lead__title">
              &quot;What if we could intuitively feel that we&apos;re too close to the screen without any notification at all?&quot;
            </h2>
            <p className="project-page-desc">
              An eye-care software that uses the front camera to detect viewing distance and applies corresponding levels of screen blur — replacing intrusive alerts and naturally guiding users to correct their posture without disrupting workflow.
            </p>
          </section>
          <section className="project-page-facts" lang="en" aria-label="Project details">
            <div className="project-page-facts__inline">
              <div className="project-page-facts__block project-page-facts__block--date">
                <p className="project-page-facts__date">
                  <span className="project-page-facts__date-part">2024</span><span className="project-page-facts__date-sep">/</span><span className="project-page-facts__date-part">02</span><span className="project-page-facts__date-sep"> - </span><span className="project-page-facts__date-part">2024</span><span className="project-page-facts__date-sep">/</span><span className="project-page-facts__date-part">08</span>
                </p>
              </div>
              <div className="project-page-facts__block project-page-facts__block--role">
                <span className="project-page-facts__label">Role</span>
                <span className="project-page-facts__chunks">
                  <span className="project-page-facts__chunk">User research</span><span className="project-page-facts__comma">, </span><span className="project-page-facts__chunk">Interaction design</span><span className="project-page-facts__comma">, </span><span className="project-page-facts__chunk">Prototyping</span>
                </span>
              </div>
              <div className="project-page-facts__block project-page-facts__block--team">
                <span className="project-page-facts__label">Team</span>
                <span className="project-page-facts__chunks">
                  <span className="project-page-facts__chunk">2 Designers</span><span className="project-page-facts__comma">, </span><span className="project-page-facts__chunk">1 Engineer</span>
                </span>
              </div>
            </div>
          </section>
          <section className="project-context" lang="en" aria-labelledby="eyezen-context-heading">
            <p className="project-context__label">context</p>
            <h2 id="eyezen-context-heading" className="project-page-lead__title project-context__title">
              The deeper we focus, the closer we lean in.
            </h2>
            <p className="project-context__body">
              Deep focus at a computer causes us to unconsciously drift closer and closer to the screen — a direct contributor to worsening nearsightedness and neck pain, yet it is something people rarely notice in the moment.
            </p>
          </section>
          <section className="project-research" lang="en" aria-labelledby="eyezen-research-heading">
            <p className="project-research__label">research</p>
            <div className="project-research__block">
              <h2 id="eyezen-research-heading" className="project-page-lead__title project-research__title">
                It&apos;s not just your eyes
              </h2>
              <p className="project-research__body">
                Leaning toward the screen unconsciously affects more than just your eyesight. According to Hansraj (2014), tilting your head forward by just 15 degrees increases the load on your cervical spine from 5 kg to 12 kg. Sustained over hours, this posture can lead to forward head posture, chronic neck and shoulder pain, and lasting fatigue.
              </p>
            </div>
            <div className="project-research__block">
              <h3 className="project-page-lead__title project-research__title">Why do existing solutions fail?</h3>
              <table className="project-research-compare" lang="en">
                <caption className="visually-hidden">
                  Three limitations of common eye-care and posture tools
                </caption>
                <tbody>
                  <tr>
                    <td>
                      <div className="project-research-compare__cell">
                        <span className="project-research-compare__icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width={28} height={28} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <circle cx={12} cy={12} r={9} />
                            <path d="M12 7v5l3 2" />
                          </svg>
                        </span>
                        <p className="project-research-compare__heading">Focused on time, not distance</p>
                        <p className="project-research-compare__text">
                          Most eye-care tools simply remind users to take breaks at fixed intervals.
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="project-research-compare__cell">
                        <span className="project-research-compare__icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width={28} height={28} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
                            <path d="M13.73 21a2 2 0 01-3.46 0" />
                            <line x1={3} y1={3} x2={21} y2={21} />
                          </svg>
                        </span>
                        <p className="project-research-compare__heading">Notifications break focus</p>
                        <p className="project-research-compare__text">
                          Pop-up alerts interrupt flow state. Users instinctively disable the software altogether.
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="project-research-compare__cell">
                        <span className="project-research-compare__icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width={28} height={28} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12h4l3-9 4 18 3-9h4" />
                          </svg>
                        </span>
                        <p className="project-research-compare__heading">No real-time feedback</p>
                        <p className="project-research-compare__text">
                          Without continuous distance awareness, users can’t detect or correct their posture in the moment.
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="project-design-challenge" lang="en" aria-labelledby="eyezen-design-challenge-heading">
            <p className="project-design-challenge__label">design challenge</p>
            <h2 id="eyezen-design-challenge-heading" className="project-page-lead__title project-design-challenge__title">
              How might we guide users to notice and correct their screen distance and posture without disrupting their focus?
            </h2>
          </section>
          <section className="project-solution" lang="en" aria-labelledby="eyezen-solution-heading">
            <p className="project-solution__label">solution</p>
            <h2 id="eyezen-solution-heading" className="project-page-lead__title project-solution__title">
              An app inspired by the mechanism of mydriatic eye drops.
            </h2>
            <div className="project-solution-card">
              <img className="project-solution-card__img" src="/assets/pup.png" alt="Comparison of viewing distance: too close with blurry text versus proper distance with sharp text." loading="lazy" decoding="async" />
            </div>
            <hr className="project-solution__divider" aria-hidden="true" />
            <p id="eyezen-solution-figure-caption" className="project-solution__body project-solution__figure-caption">
              When user open the app, there would be a transparent layer on the computer screen that updates every 0.05 seconds, adjusting the blur level based on the distance between the user and the screen.
            </p>
            <div className="project-blur-panel">
              <div className="project-blur-panel__blur">
                <h2 id="eyezen-blur-panel-heading" className="project-page-lead__title project-blur-panel__title">
                  The closer you are to the screen, the blurry the screen becomes.
                </h2>
              </div>
              <video className="project-blur-panel__demo" src="/assets/app-demo-real.mp4" preload="metadata" autoPlay muted loop playsInline width={720} height={852} aria-hidden="true" />
            </div>
          </section>
          <section className="project-eyezen-photo" aria-label="Team photo">
            <p className="project-eyezen-photo__caption">
              Won the Gold Prize Award, standing out among 25 teams (100+ participants)
            </p>
            <div className="project-eyezen-photo__panel">
              <figure className="project-eyezen-photo__figure">
                <picture>
                  <source srcSet="/assets/eyezen-group-photo.webp" type="image/webp" />
                  <img className="project-eyezen-photo__img" src="/assets/eyezen-group-photo.png" alt="Group photo at the 2024 International Students Multidisciplinary Design Camp in Daejeon." loading="lazy" decoding="async" width={768} height={1024} />
                </picture>
              </figure>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
