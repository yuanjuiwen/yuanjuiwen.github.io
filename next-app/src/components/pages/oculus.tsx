/* Converted from project-oculus-main.html. */
import { MarketCarousel, PhotoCarousel } from "@/components/site/carousels";
import { Navbar } from "@/components/site/navbar";
import { t } from "@/lib/locale";

export function OculusPage() {
  return (
    <>
      <Navbar />
      <div>
        <aside className="oculus-toc toc--dock-bottom" aria-label="Section navigation">
          <nav className="oculus-toc__nav">
            <a className="oculus-toc__link" href="#oculus-context-heading">context</a>
            <a className="oculus-toc__link" href="#oculus-research-heading">market research</a>
            <a className="oculus-toc__link" href="#oculus-design-challenge-heading">customer analysis</a>
            <a className="oculus-toc__link" href="#oculus-solution-heading">contextual inquiry</a>
            <a className="oculus-toc__link" href="#oculus-jtbd-heading">JTBD survey</a>
            <a className="oculus-toc__link" href="#oculus-ipa-heading">IPA analysis</a>
            <a className="oculus-toc__link" href="#oculus-pds-heading">product development strategy</a>
            <a className="oculus-toc__link" href="#oculus-goal-heading">our goal</a>
            <a className="oculus-toc__link" href="#oculus-design-experiment-heading">design &amp; experiment</a>
            <a className="oculus-toc__link" href="#oculus-gallery-design-heading">Gallery</a>
          </nav>
        </aside>
        <main className="project-page project-page--wide">
          <div id="oculus-hero" className="project-page-media project-page-media--gray-panel project-page-media--no-border project-page-media--no-bg">
            <div className="project-image-slot project-image-slot--feature project-image-slot--filled" role="img" aria-label="OCULUS portfolio preview">
              <picture>
                <source srcSet="/assets/oculus_portfolio_main.webp" type="image/webp" />
                <img className="project-image-slot__img" src="/assets/oculus_portfolio_main.jpg" alt="OCULUS portfolio preview" loading="eager" fetchPriority="high" decoding="async" />
              </picture>
            </div>
          </div>
          <section className="project-page-lead" aria-labelledby="oculus-lead-heading">
            <h2 id="oculus-lead-heading" className="project-page-lead__title">
              Oculus | Personal Blender
            </h2>
            <p className="project-page-desc">
              <span className="oculus-lead-intro">This is an industry-sponsored project with EUPA, focused on improving the efficiency of personal blenders in quickly processing ingredients into a smooth texture for the best drinking experience.</span>
              <br /><br />
              <em className="oculus-quote">&quot;We adopted the Lean Product Development process to deliver high-quality outcomes with minimal cost.&quot;</em>
            </p>
          </section>
          <section className="project-page-facts" lang="en" aria-label="Project details">
            <div className="project-page-facts__inline">
              <div className="project-page-facts__block project-page-facts__block--date">
                <p className="project-page-facts__date">
                  <span className="project-page-facts__date-part">2024</span><span className="project-page-facts__date-sep">/</span><span className="project-page-facts__date-part">9</span><span className="project-page-facts__date-sep"> - </span><span className="project-page-facts__date-part">2025</span><span className="project-page-facts__date-sep">/</span><span className="project-page-facts__date-part">2</span>
                </p>
              </div>
              <div className="project-page-facts__block project-page-facts__block--role">
                <span className="project-page-facts__label">Role</span>
                <span className="project-page-facts__chunks">
                  <span className="project-page-facts__chunk">User Research</span><span className="project-page-facts__comma">, </span><span className="project-page-facts__chunk">Experiment</span><span className="project-page-facts__comma">, </span><span className="project-page-facts__chunk">Form Design</span>
                </span>
              </div>
              <div className="project-page-facts__block project-page-facts__block--team">
                <span className="project-page-facts__label">Team</span>
                <span className="project-page-facts__chunks">
                  <span className="project-page-facts__chunk">3 designers</span>
                </span>
              </div>
              <div className="project-page-facts__block project-page-facts__block--supervision">
                <span className="project-page-facts__label">Supervision</span>
                <span className="project-page-facts__chunks">
                  <span className="project-page-facts__chunk">Prof. YU - HSIU, HUNG</span>
                </span>
              </div>
            </div>
          </section>
          <section className="project-context" lang="en" aria-labelledby="oculus-context-heading">
            <p className="project-context__label">context</p>
            <h2 id="oculus-context-heading" className="project-page-lead__title project-context__title">
              Smoothies — Nutrition for a Fast-Paced Generation
            </h2>
            <p className="project-context__body">
              For efficiency-driven Millennials and Gen Z, smoothies have become a go-to choice for daily nutrition. However, most personal blenders still fail to deliver a smooth, refined texture, revealing a clear gap between product performance and user expectations.
            </p>
          </section>
          <section className="project-research" lang="en" aria-labelledby="oculus-research-heading">
            <p className="project-research__label">market research</p>
            <div className="project-research__block">
              <h2 id="oculus-research-heading" className="project-page-lead__title project-research__title">
                Market Positioning: We position the product in the premium segment, the most commercially promising price tier in terms of monthly revenue. Its capability to process high-hardness ingredients supports a broader range of recipes and enhanced nutritional diversity.
              </h2>
              <section className="project-market-charts" lang="en" aria-label="Market analysis charts">
                <div className="project-market-charts__source">
                  <span className="project-market-charts__source-label">source:</span>
                  <img className="project-market-charts__source-logo" src="/assets/amazon.png" alt="Amazon" loading="lazy" decoding="async" />
                </div>
                <MarketCarousel>
                  <div className="contents">
                    <div className="project-market-chart project-market-chart--sm">
                      <p className="project-market-chart__title">Monthly sales share</p>
                      <p className="project-market-chart__subtitle">Share by price tier (units)</p>
                      <div className="project-market-chart__canvas-wrap">
                        <canvas id="oculus-chart-sales-share" className="project-market-chart__canvas" />
                      </div>
                    </div>
                    
                  </div>
                  <div className="contents">
                    <div className="project-market-chart project-market-chart--sm">
                      <p className="project-market-chart__title">Monthly sales revenue share</p>
                      <p className="project-market-chart__subtitle">Share by price tier (revenue)</p>
                      <div className="project-market-chart__canvas-wrap">
                        <canvas id="oculus-chart-revenue-share" className="project-market-chart__canvas" />
                      </div>
                    </div>
                    
                  </div>
                  <div className="contents">
                    <div className="project-market-chart project-market-chart--lg">
                      <p className="project-market-chart__title">High-priced sales share</p>
                      <p className="project-market-chart__subtitle">Top models within USD 60–120</p>
                      <div className="project-market-chart__canvas-wrap">
                        <canvas id="oculus-chart-high-price" className="project-market-chart__canvas" />
                      </div>
                    </div>
                    
                  </div>
                </MarketCarousel>
                <p className="project-market-charts__note">
                  We used browser plugins to analyze sales performance and review trends across different price ranges on
                  Amazon as a basis for market analysis.
                </p>
              </section>
              <hr className="project-research__divider" aria-hidden="true" />
              <div className="project-key-insights" aria-label="Key insights">
                <article className="project-key-insights__item">
                  <p className="project-key-insights__label">Key Insight</p>
                  <ul className="project-key-insights__list">
                    <li className="project-key-insights__item-text">
                      High-priced products with higher added value and low-priced products with differentiated design show
                      greater market potential compared to mid-priced options.
                    </li>
                    <li className="project-key-insights__item-text">
                      Although high-priced and low-priced products have similar monthly sales volume, high-priced products
                      generate significantly higher monthly revenue.
                    </li>
                    <li className="project-key-insights__item-text">
                      High-priced products can effectively process a wider variety of ingredients, such as frozen fruits
                      and ice cubes, providing greater nutritional value to consumers.
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </section>
          <section className="project-design-challenge" lang="en" aria-labelledby="oculus-design-challenge-heading">
            <p className="project-design-challenge__label">customer analysis</p>
            <h2 id="oculus-design-challenge-heading" className="project-page-lead__title project-design-challenge__title">
              Through negative review analysis, we identified three major pain points customers care most about...
            </h2>
            <section className="project-review-chart" aria-label="High-priced negative review analysis chart">
              <p className="project-review-chart__title">High-priced negative review analysis</p>
              <div className="project-review-chart__canvas-wrap">
                <canvas id="reviewChart" />
              </div>
              <div className="project-review-chart__legend" aria-label="Chart legend">
                <span className="project-review-chart__legend-item"><span className="project-review-chart__swatch project-review-chart__swatch--1" />Nutribullet Pro 1200</span>
                <span className="project-review-chart__legend-item"><span className="project-review-chart__swatch project-review-chart__swatch--2" />Ninja Pro</span>
                <span className="project-review-chart__legend-item"><span className="project-review-chart__swatch project-review-chart__swatch--3" />Nutribullet NB9</span>
                <span className="project-review-chart__legend-item"><span className="project-review-chart__swatch project-review-chart__swatch--4" />Beast Blender</span>
                <span className="project-review-chart__legend-item"><span className="project-review-chart__swatch project-review-chart__swatch--5" />Nutribullet NB50500</span>
                <span className="project-review-chart__legend-item"><span className="project-review-chart__swatch project-review-chart__swatch--6" />Nutribullet Flip</span>
              </div>
            </section>
          </section>
          <section className="project-solution" lang="en" aria-labelledby="oculus-solution-heading">
            <p className="project-solution__label">contextual inquiry</p>
            <h2 id="oculus-solution-heading" className="project-page-lead__title project-solution__title">
              Through on-site observation of user operations, we identified five critical events..
            </h2>
            <div className="project-solution-card project-solution-card--icons">
              <div className="project-solution-icons" aria-label="Five critical operation events">
                <img src="/assets/01_blade_idle_spinning_blue.svg" alt="Blade idle spinning" loading="lazy" />
                <img src="/assets/02_frequent_restarts_blue.svg" alt="Frequent restarts" loading="lazy" />
                <img src="/assets/03_unstable_body_blue.svg" alt="Unstable body" loading="lazy" />
                <img src="/assets/04_difficult_pouring_blue.svg" alt="Difficult pouring" loading="lazy" />
                <img src="/assets/05_inconvenient_cleaning_blue.svg" alt="Inconvenient cleaning" loading="lazy" />
              </div>
            </div>
            <section className="project-review-flow" aria-label="Blending journey flow">
              <div className="project-review-flow__first">
                <img className="project-review-flow__img" src="/assets/oculus-stage-1.png" alt="Top view showing frozen fruit remaining after blending" loading="lazy" />
                <div className="project-review-flow__note">
                  <p className="project-review-flow__note-title">Stage 1</p>
                  <ul className="project-review-flow__note-list">
                    <li>The blender cannot process the frozen fruits at the bottom.</li>
                    <li>The blades spin without engaging ingredients, creating uneven mixing.</li>
                  </ul>
                </div>
              </div>
              <span className="project-review-flow__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation" focusable="false">
                  <path d="M3 12H20M14 6L20 12L14 18" />
                </svg>
              </span>
              <div className="project-review-flow__middle">
                <div className="project-review-flow__group">
                  <img className="project-review-flow__img" src="/assets/oculus-stage-2a.png" alt="User uses a spoon to assist blending" loading="lazy" />
                  <img className="project-review-flow__img" src="/assets/oculus-stage-2b.png" alt="User repeatedly presses start and checks blending condition" loading="lazy" />
                </div>
                <div className="project-review-flow__note project-review-flow__note--middle">
                  <p className="project-review-flow__note-title project-review-flow__note-title--purple">Stage 2</p>
                  <ul className="project-review-flow__note-list">
                    <li>Spoon is needed to assist with blending.</li>
                    <li>It requires multiple presses of the start button to complete the blending.</li>
                    <li>It is difficult to determine whether the blending is even.</li>
                  </ul>
                </div>
              </div>
              <span className="project-review-flow__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation" focusable="false">
                  <path d="M3 12H20M14 6L20 12L14 18" />
                </svg>
              </span>
              <div className="project-review-flow__third">
                <img className="project-review-flow__img" src="/assets/oculus-stage-3.png" alt="User cleaning the blender cup in sink" loading="lazy" />
                <div className="project-review-flow__note">
                  <p className="project-review-flow__note-title">Stage 3</p>
                  <ul className="project-review-flow__note-list">
                    <li>The cup’s small opening and deep bottom make it hard to clean.</li>
                  </ul>
                </div>
              </div>
            </section>
            <p className="project-solution__body project-review-flow__summary">
              Observed the usage process of three users from our target audience and recorded key events to better
              understand their true needs.
            </p>
          </section>
          <section className="project-jtbd-survey" lang="en" aria-labelledby="oculus-jtbd-heading">
            <p className="project-jtbd-survey__label">JTBD survey</p>
            <h2 id="oculus-jtbd-heading" className="project-page-lead__title project-jtbd-survey__title">
              Transformed online analysis and on-site investigation into an online JTBD survey,receiving  67 responses.
            </h2>
          </section>
          <section className="project-ipa-analysis" lang="en" aria-labelledby="oculus-ipa-heading">
            <p className="project-ipa-analysis__label">IPA analysis</p>
            <h2 id="oculus-ipa-heading" className="project-page-lead__title project-ipa-analysis__title">
              Use the quantified scores from the JTBD survey to uncover the true market needs and formulate a product development strategy that caters to those needs.
            </h2>
            <div className="project-ipa-analysis__card">
              <div className="project-ipa-analysis__layout">
                <div className="project-ipa-analysis__table-wrap">
                  <table className="project-ipa-opp-table" lang="en">
                    <caption className="visually-hidden">
                      IPA OPP scores and survey items
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col"><span className="visually-hidden">Code</span></th>
                        <th scope="col">OPP</th>
                        <th scope="col">Item</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">a</th>
                        <td>12.50</td>
                        <td>The blades maintain continuous contact with the fruits and ice during blending.</td>
                      </tr>
                      <tr>
                        <th scope="row">b</th>
                        <td>10.36</td>
                        <td>Low noise during blending.</td>
                      </tr>
                      <tr>
                        <th scope="row">c</th>
                        <td>10.36</td>
                        <td>Blender being stable (not vibrating or moving) during blending.</td>
                      </tr>
                      <tr>
                        <th scope="row">d</th>
                        <td>10.00</td>
                        <td>Don’t need external force (shaking or stirring) to assist in mixing during blending.</td>
                      </tr>
                      <tr>
                        <th scope="row">e</th>
                        <td>10.00</td>
                        <td>Able to see the condition inside the cup during blending (to see whether it is completely mixed).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <figure className="project-ipa-analysis__chart">
                  <div className="project-ipa-analysis__chart-frame">
                    <img src="/assets/oculus-ipa-chart.png" width={1024} height={837} alt="IPA chart: Importance versus Satisfaction scatter plot with points labeled a through e, trend line, and shaded regions." loading="lazy" decoding="async" />
                  </div>
                </figure>
              </div>
            </div>
          </section>
          <section className="project-product-strategy" lang="en" aria-labelledby="oculus-pds-heading">
            <p className="project-product-strategy__label">product development strategy</p>
            <h2 id="oculus-pds-heading" className="project-page-lead__title project-product-strategy__title">
              We develop product development strategies based on “Customer Negative Review Analysis” and
              “IPA Analysis”.
            </h2>
            <div className="project-product-strategy__table-wrap">
              <table className="project-product-strategy-table" lang="en">
                <caption className="visually-hidden">
                  Product development strategies aligned with customer negative review analysis and IPA analysis
                </caption>
                <colgroup>
                  <col className="project-product-strategy-table__col" />
                  <col className="project-product-strategy-table__col" />
                  <col className="project-product-strategy-table__col" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" className="project-product-strategy-table__analysis-heading">Customer negative review analysis</th>
                    <th scope="col" className="project-product-strategy-table__analysis-heading">IPA analysis</th>
                    <th scope="col" className="project-product-strategy-table__strategy-heading">product development strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="project-product-strategy-table__mark" aria-label="yes">✓</span></td>
                    <td><span className="project-product-strategy-table__empty">&nbsp;</span></td>
                    <td>Quickly blend the ingredients into a smooth texture.</td>
                  </tr>
                  <tr>
                    <td><span className="project-product-strategy-table__mark" aria-label="yes">✓</span></td>
                    <td><span className="project-product-strategy-table__mark" aria-label="yes">✓</span></td>
                    <td>Reduce the chance of cavitation</td>
                  </tr>
                  <tr>
                    <td><span className="project-product-strategy-table__mark" aria-label="yes">✓</span></td>
                    <td><span className="project-product-strategy-table__mark" aria-label="yes">✓</span></td>
                    <td>Reduce noise during blending.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="project-our-goal" lang="en" aria-labelledby="oculus-goal-heading">
            <p className="project-our-goal__label">our goal</p>
            <h2 id="oculus-goal-heading" className="project-page-lead__title project-our-goal__title">
              Quickly blend the ingredients into a smooth texture | Reduce the chance of cavitation
            </h2>
          </section>
          <section className="project-design-experiment" lang="en" aria-labelledby="oculus-design-experiment-heading">
            <p className="project-design-experiment__label">design &amp; experiment</p>
            <h2 id="oculus-design-experiment-heading" className="project-page-lead__title project-design-experiment__title">
              We tests and made improvements to the baffle, cup shape, and blade base.
            </h2>
            <p className="project-design-experiment__body">
              For each experiment, we blended almonds and water for 40 seconds, choosing almonds for their hardness
              and the ease of distinguishing both particle size and count. We then performed particle size analysis using
              specialized software. We used this data to make improvements to the baffle, cup shape, and blade base.
            </p>
            <figure className="project-design-experiment__figure">
              <img className="project-design-experiment__figure-img" src="/assets/oculus-design-experiment.jpg" width={1024} height={570} alt="Experiment setup photo showing blender components and test samples laid out on a white table." loading="lazy" decoding="async" />
            </figure>
          </section>
          <section className="project-causal-relationship-map" lang="en" aria-labelledby="oculus-crm-heading">
            <p className="project-causal-relationship-map__label">causal relationship map</p>
            <h2 id="oculus-crm-heading" className="project-page-lead__title project-causal-relationship-map__title">
              Map how key factors influence blending outcomes to guide the next design decisions.
            </h2>
            <p className="project-causal-relationship-map__body">
              Replace this section with your causal relationship map: the main variables, directional relationships, and
              which levers you chose to prioritize.
            </p>
            <figure className="project-causal-relationship-map__figure" aria-label="Causal relationship map diagram">
              <svg className="project-causal-relationship-map__svg" viewBox="0 0 920 850" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Causal relationship map centered on blending time with factors around it">
                <defs>
                  <radialGradient id="cg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3730A3" stopOpacity={1} />
                    <stop offset="20%" stopColor="#4338CA" stopOpacity="0.85" />
                    <stop offset="40%" stopColor="#6366F1" stopOpacity="0.45" />
                    <stop offset="60%" stopColor="#818CF8" stopOpacity="0.15" />
                    <stop offset="80%" stopColor="#A5B4FC" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#C7D2FE" stopOpacity={0} />
                  </radialGradient>
                </defs>
                <circle cx={480} cy={410} r={150} fill="none" stroke="#D1D5DB" strokeWidth="0.5" />
                <circle cx={480} cy={410} r={255} fill="none" stroke="#D1D5DB" strokeWidth="0.5" />
                <circle cx={480} cy={410} r={360} fill="none" stroke="#D1D5DB" strokeWidth="0.5" />
                <circle cx={480} cy={410} r={100} fill="url(#cg)" />
                <text x={480} y={402} textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={16} fontWeight={500}>
                  Blending
                </text>
                <text x={480} y={424} textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={16} fontWeight={500}>
                  Time
                </text>
                <line x1={480} y1={410} x2={480} y2={268} stroke="#1F2937" strokeWidth="0.7" opacity="0.22" />
                <line x1={480} y1={410} x2={335} y2={410} stroke="#1F2937" strokeWidth="0.7" opacity="0.22" />
                <line x1={480} y1={410} x2={640} y2={340} stroke="#1F2937" strokeWidth="0.7" opacity="0.22" />
                <line x1={480} y1={410} x2={710} y2={410} stroke="#1F2937" strokeWidth="0.7" opacity="0.22" />
                <line x1={480} y1={410} x2={660} y2={520} stroke="#1F2937" strokeWidth="0.7" opacity="0.22" />
                <line x1={480} y1={410} x2={500} y2={570} stroke="#1F2937" strokeWidth="0.7" opacity="0.22" />
                <line x1={480} y1={410} x2={640} y2={225} stroke="#1F2937" strokeWidth="0.7" opacity="0.22" />
                <line x1={480} y1={410} x2={690} y2={630} stroke="#1F2937" strokeWidth="0.7" opacity="0.22" />
                <line x1={480} y1={410} x2={325} y2={195} stroke="#1F2937" strokeWidth="0.7" opacity="0.22" />
                <line x1={480} y1={410} x2={355} y2={510} stroke="#1F2937" strokeWidth="0.7" opacity="0.22" />
                <line x1={480} y1={410} x2={340} y2={330} stroke="#1F2937" strokeWidth="0.7" opacity="0.22" />
                <line x1={140} y1={285} x2={325} y2={195} stroke="#1F2937" strokeWidth="0.8" opacity="0.35" />
                <line x1={140} y1={285} x2={150} y2={440} stroke="#1F2937" strokeWidth="0.8" opacity="0.35" />
                <line x1={150} y1={440} x2={335} y2={410} stroke="#1F2937" strokeWidth="0.8" opacity="0.35" />
                <line x1={730} y1={125} x2={640} y2={225} stroke="#1F2937" strokeWidth="0.8" opacity="0.35" />
                <line x1={690} y1={630} x2={720} y2={730} stroke="#1F2937" strokeWidth="0.8" opacity="0.35" />
                <line x1={355} y1={510} x2={150} y2={440} stroke="#1F2937" strokeWidth="0.8" opacity="0.35" />
                <line x1={340} y1={330} x2={150} y2={440} stroke="#1F2937" strokeWidth="0.8" opacity="0.35" />
                <path d="M500 570 L160 570 L150 440" fill="none" stroke="#1F2937" strokeWidth="0.8" opacity="0.35" />
                <g>
                  <rect x={422} y={253} width={116} height={30} rx={15} fill="#C7D2FE" />
                  <text x={480} y={268} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#3730A3">
                    Blade base
                  </text>
                </g>
                <g>
                  <rect x={274} y={315} width={120} height={30} rx={15} fill="#C7D2FE" />
                  <text x={334} y={330} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#3730A3">
                    Baffle shape
                  </text>
                </g>
                <g>
                  <rect x={278} y={395} width={108} height={30} rx={15} fill="#C7D2FE" />
                  <text x={332} y={410} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#3730A3">
                    Baffle size
                  </text>
                </g>
                <g>
                  <rect x={574} y={325} width={130} height={30} rx={15} fill="#C7D2FE" />
                  <text x={639} y={340} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#3730A3">
                    Blending mode
                  </text>
                </g>
                <g>
                  <rect x={296} y={495} width={114} height={30} rx={15} fill="#C7D2FE" />
                  <text x={353} y={510} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#3730A3">
                    Cup shape
                  </text>
                </g>
                <g>
                  <rect x={440} y={555} width={118} height={30} rx={15} fill="#C7D2FE" />
                  <text x={499} y={570} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#3730A3">
                    Blade shape
                  </text>
                </g>
                <g>
                  <rect x={262} y={180} width={120} height={30} rx={15} fill="#6B7280" />
                  <text x={322} y={195} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#fff">
                    Blade torque
                  </text>
                </g>
                <g>
                  <rect x={576} y={210} width={128} height={30} rx={15} fill="#6B7280" />
                  <text x={640} y={225} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#fff">
                    Blade position
                  </text>
                </g>
                <g>
                  <rect x={636} y={395} width={148} height={30} rx={15} fill="#6B7280" />
                  <text x={710} y={410} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#fff">
                    Number of blades
                  </text>
                </g>
                <g>
                  <rect x={598} y={505} width={118} height={30} rx={15} fill="#6B7280" />
                  <text x={657} y={520} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#fff">
                    Blade layers
                  </text>
                </g>
                <g>
                  <rect x={72} y={270} width={124} height={30} rx={15} fill="#D1D5DB" />
                  <text x={134} y={285} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#374151">
                    Motor speed
                  </text>
                </g>
                <g>
                  <rect x={86} y={425} width={118} height={30} rx={15} fill="#D1D5DB" />
                  <text x={145} y={440} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#374151">
                    Blade speed
                  </text>
                </g>
                <g>
                  <rect x={672} y={110} width={114} height={30} rx={15} fill="#D1D5DB" />
                  <text x={729} y={125} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#374151">
                    Blade angle
                  </text>
                </g>
                <g>
                  <rect x={624} y={615} width={132} height={30} rx={15} fill="#D1D5DB" />
                  <text x={690} y={630} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#374151">
                    Blade hardness
                  </text>
                </g>
                <g>
                  <rect x={656} y={715} width={126} height={30} rx={15} fill="#D1D5DB" />
                  <text x={719} y={730} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={400} fill="#374151">
                    Blade surface
                  </text>
                </g>
              </svg>
            </figure>
          </section>
          <section className="project-baffle-exp1" lang="en" aria-labelledby="oculus-baffle-exp1-heading">
            <p className="project-baffle-exp1__label">Baffle | Experiment 1</p>
            <h2 id="oculus-baffle-exp1-heading" className="project-page-lead__title project-baffle-exp1__title">
              When the blender is operating, a pressure difference occurs near the baffle, generating turbulence that 
              enhances mixing. However, as turbulence forms, energy is consumed, causing the blade’s rotational
              speed to decrease. 
            </h2>
            <figure className="project-baffle-exp1__figure" aria-label="Baffle comparison top view diagram">
              <svg className="project-baffle-exp1__diagram" viewBox="0 0 960 420" xmlns="http://www.w3.org/2000/svg" role="img">
                <defs>
                  <marker id="ah-baffle" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={5} markerHeight={5} orient="auto-start-reverse">
                    <path d="M1 1L8 5L1 9Z" fill="#1F2937" />
                  </marker>
                </defs>
                <rect x={30} y={16} width={120} height={32} rx={16} fill="none" stroke="#1F2937" strokeWidth={1} />
                <text x={90} y={32} textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={400} fill="#1F2937">
                  With Baffle
                </text>
                <rect x={810} y={16} width={130} height={32} rx={16} fill="none" stroke="#1F2937" strokeWidth={1} />
                <text x={875} y={32} textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={400} fill="#1F2937">
                  Without Baffle
                </text>
                <rect x={425} y={185} width={110} height={32} rx={16} fill="none" stroke="#1F2937" strokeWidth={1} />
                <text x={480} y={201} textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={400} fill="#1F2937">
                  Top View
                </text>
                <circle cx={220} cy={220} r={160} fill="none" stroke="#1F2937" strokeWidth="1.5" />
                <rect x={210} y={60} width={20} height={24} fill="#4338CA" />
                <rect x={356} y={210} width={24} height={20} fill="#4338CA" />
                <rect x={210} y={356} width={20} height={24} fill="#4338CA" />
                <rect x={60} y={210} width={24} height={20} fill="#4338CA" />
                <g className="blade-left">
                  <line x1={220} y1={165} x2={220} y2={275} stroke="#1F2937" strokeWidth={2} />
                  <line x1={165} y1={220} x2={275} y2={220} stroke="#1F2937" strokeWidth={2} />
                  <circle cx={220} cy={220} r={4} fill="#1F2937" />
                </g>
                <g className="swirls-orbit">
                  <path d="M192,70 A14,14 0 1,0 192,94" fill="none" stroke="#1F2937" strokeWidth="1.3" markerStart="url(#ah-baffle)" />
                  <path d="M248,94 A14,14 0 1,0 248,70" fill="none" stroke="#1F2937" strokeWidth="1.3" markerEnd="url(#ah-baffle)" />
                  <path d="M358,192 A14,14 0 1,0 334,192" fill="none" stroke="#1F2937" strokeWidth="1.3" markerStart="url(#ah-baffle)" />
                  <path d="M334,248 A14,14 0 1,0 358,248" fill="none" stroke="#1F2937" strokeWidth="1.3" markerEnd="url(#ah-baffle)" />
                  <path d="M248,370 A14,14 0 1,0 248,346" fill="none" stroke="#1F2937" strokeWidth="1.3" markerStart="url(#ah-baffle)" />
                  <path d="M192,346 A14,14 0 1,0 192,370" fill="none" stroke="#1F2937" strokeWidth="1.3" markerEnd="url(#ah-baffle)" />
                  <path d="M82,248 A14,14 0 1,0 106,248" fill="none" stroke="#1F2937" strokeWidth="1.3" markerStart="url(#ah-baffle)" />
                  <path d="M106,192 A14,14 0 1,0 82,192" fill="none" stroke="#1F2937" strokeWidth="1.3" markerEnd="url(#ah-baffle)" />
                </g>
                <path d="M245,135 A95,95 0 0,1 305,195" fill="none" stroke="#1F2937" strokeWidth="1.5" markerEnd="url(#ah-baffle)" />
                <path d="M195,305 A95,95 0 0,1 135,245" fill="none" stroke="#1F2937" strokeWidth="1.5" markerEnd="url(#ah-baffle)" />
                <line x1={272} y1={82} x2={430} y2={82} stroke="#1F2937" strokeWidth="0.8" />
                <circle cx={272} cy={82} r={2} fill="#1F2937" />
                <text x={438} y={86} fontSize={13} fontWeight={400} fill="#1F2937">Turbulence</text>
                <circle cx={740} cy={220} r={160} fill="none" stroke="#1F2937" strokeWidth="1.5" />
                <g className="blade-right">
                  <line x1={740} y1={165} x2={740} y2={275} stroke="#1F2937" strokeWidth={2} />
                  <line x1={685} y1={220} x2={795} y2={220} stroke="#1F2937" strokeWidth={2} />
                  <circle cx={740} cy={220} r={4} fill="#1F2937" />
                </g>
                <path d="M765,135 A95,95 0 0,1 825,195" fill="none" stroke="#1F2937" strokeWidth="1.5" markerEnd="url(#ah-baffle)" />
                <path d="M715,305 A95,95 0 0,1 655,245" fill="none" stroke="#1F2937" strokeWidth="1.5" markerEnd="url(#ah-baffle)" />
              </svg>
            </figure>
            <hr className="project-baffle-exp1__divider" />
            <figure className="project-baffle-exp1__photo-compare">
              <img className="project-baffle-exp1__photo-compare-img" src="/assets/oculus-baffle-before-after.png" width={1024} height={280} alt="Before and our design comparison of blender cup baffle geometry." loading="lazy" decoding="async" />
            </figure>
          </section>
          <section className="project-process" lang="en" aria-labelledby="oculus-process-heading">
            <p className="project-process__label">process</p>
            <h2 id="oculus-process-heading" className="project-page-lead__title project-process__title">
              We redesigned the baffle shape based on its turbulence generation capability and energy consumption.
            </h2>
            <figure className="project-process__figure" aria-label="Baffle shapes comparison diagram">
              <svg className="project-process__diagram" viewBox="0 0 1000 210" xmlns="http://www.w3.org/2000/svg" role="img">
                <text x={48} y={105} textAnchor="middle" dominantBaseline="central" fontSize={32} fontWeight={300} fill="#9CA3AF">01</text>
                <circle cx={175} cy={105} r={85} fill="none" stroke="#D1D5DB" strokeWidth={1} />
                <text x={175} y={62} textAnchor="middle" dominantBaseline="central" fontSize={14} fontWeight={400} fill="#1F2937">Slope</text>
                <polygon fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinejoin="miter" points="145,110 215,110 215,155 145,155">
                  <animate attributeName="points" dur="2s" begin="0s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" keyTimes="0; 0.2; 0.8; 1" values="145,110 215,110 215,155 145,155;
                        145,110 165,110 215,155 145,155;
                        145,110 165,110 215,155 145,155;
                        145,110 215,110 215,155 145,155" />
                </polygon>
                <text x={288} y={105} textAnchor="middle" dominantBaseline="central" fontSize={32} fontWeight={300} fill="#9CA3AF">02</text>
                <circle cx={415} cy={105} r={85} fill="none" stroke="#D1D5DB" strokeWidth={1} />
                <text x={415} y={62} textAnchor="middle" dominantBaseline="central" fontSize={14} fontWeight={400} fill="#1F2937">Trapezoid</text>
                <polygon fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinejoin="miter" points="380,110 450,110 450,155 380,155">
                  <animate attributeName="points" dur="3s" begin="0s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" keyTimes="0; 0.2; 0.8; 1" values="380,110 450,110 450,155 380,155;
                        394,110 436,110 450,155 380,155;
                        394,110 436,110 450,155 380,155;
                        380,110 450,110 450,155 380,155" />
                </polygon>
                <text x={538} y={105} textAnchor="middle" dominantBaseline="central" fontSize={32} fontWeight={300} fill="#9CA3AF">03</text>
                <circle cx={665} cy={105} r={85} fill="none" stroke="#D1D5DB" strokeWidth={1} />
                <text x={665} y={62} textAnchor="middle" dominantBaseline="central" fontSize={14} fontWeight={400} fill="#1F2937">Pentagon</text>
                <polygon fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinejoin="miter" points="630,110 665,110 700,110 700,155 630,155">
                  <animate attributeName="points" dur="3s" begin="0s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" keyTimes="0; 0.2; 0.8; 1" values="630,110 665,110 700,110 700,155 630,155;
                        640,118 665,100 690,118 700,155 630,155;
                        640,118 665,100 690,118 700,155 630,155;
                        630,110 665,110 700,110 700,155 630,155" />
                </polygon>
                <text x={788} y={105} textAnchor="middle" dominantBaseline="central" fontSize={32} fontWeight={300} fill="#9CA3AF">04</text>
                <circle cx={910} cy={105} r={85} fill="none" stroke="#D1D5DB" strokeWidth={1} />
                <text x={910} y={62} textAnchor="middle" dominantBaseline="central" fontSize={14} fontWeight={400} fill="#1F2937">Stepped</text>
                <polygon fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinejoin="miter" points="875,155 875,110 905,110 940,110 940,155 905,155">
                  <animate attributeName="points" dur="3s" begin="0s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" keyTimes="0; 0.2; 0.8; 1" values="875,155 875,110 905,110 940,110 940,155 905,155;
                        875,155 875,132 905,132 905,110 940,110 940,155;
                        875,155 875,132 905,132 905,110 940,110 940,155;
                        875,155 875,110 905,110 940,110 940,155 905,155" />
                </polygon>
              </svg>
            </figure>
          </section>
          <section id="gallery" className="photo-carousel-section" aria-label="Photo carousel">
            <PhotoCarousel
              labels={{
                prev: t("common.prevImage"),
                next: t("common.nextImage"),
                dots: t("common.chooseSlide"),
                slide: t("common.slideN", { n: "{n}" }),
              }}
            >
              <div className="contents">
                <img src="/assets/baffle_1.jpg" alt="Gallery photo 1" loading="lazy" draggable="false" />
                <p className="photo-carousel-caption">That is me!!!</p>
                
              </div>
              <div className="contents">
                <img src="/assets/A3_1.jpg" alt="Gallery photo 2" loading="lazy" draggable="false" />
                <p className="photo-carousel-caption">在這裡填寫第三張照片說明。</p>
                
              </div>
              <div className="contents">
                <img src="/assets/Ex_1.png" alt="Gallery photo 3" loading="lazy" draggable="false" />
                <p className="photo-carousel-caption">在這裡填寫第四張照片說明。</p>
                
              </div>
            </PhotoCarousel>
          </section>
          <section className="project-result" lang="en" aria-labelledby="oculus-result-heading">
            <p className="project-result__label">result</p>
            <h2 id="oculus-result-heading" className="project-page-lead__title project-result__title">
              The sloped baffle demonstrated the best performance.
            </h2>
            <p className="project-result__body">
              We inferred that the greater the pressure difference at the initial contact point of the fluid and the smaller the pressure difference on the backside, the more efficiently the baffle can enhance mixing.
            </p>
            <section className="project-result-chart" aria-label="Particle size and count analysis">
              <div className="project-result-chart__canvas-wrap">
                <canvas id="oculus-particle-analysis-chart" />
              </div>
            </section>
          </section>
          <section className="project-blade-base-exp2" lang="en" aria-labelledby="oculus-blade-base-exp2-heading">
            <p className="project-blade-base-exp2__label">Blade Base | Experiment 2</p>
            <h2 id="oculus-blade-base-exp2-heading" className="project-page-lead__title project-blade-base-exp2__title">
              When there is no base baffle, the liquid mainly rotates stably in a horizontal direction. Once a base baffle
              is added, vertical circulation increases significantly, allowing larger particles to be carried toward the
              blade area more easily and greatly improving blending efficiency.
            </h2>
            <figure className="project-blade-base-exp2__figure">
              <iframe className="project-blade-base-exp2__embed" src="/assets/blade_base_comparison.html" title="Blade base comparison" loading="lazy" scrolling="no" />
            </figure>
            <figure className="project-blade-base-exp2__photo">
              <img className="project-blade-base-exp2__photo-img" src="/assets/ex_2.png" alt="Blade Base Experiment 2 comparison" loading="lazy" />
            </figure>
          </section>
          <section className="project-process-2" lang="en" aria-labelledby="oculus-process-2-heading">
            <p className="project-process-2__label">process</p>
            <h2 id="oculus-process-2-heading" className="project-page-lead__title project-process-2__title">
              We redesigned the blade base using the baffle concept. In order to enhance turbulence and backflow as the
              ingredients pass through.
            </h2>
          </section>
          <section id="gallery-blade-base" className="photo-carousel-section" aria-label="Blade base photo gallery">
            <PhotoCarousel
              labels={{
                prev: t("common.prevImage"),
                next: t("common.nextImage"),
                dots: t("common.chooseSlide"),
                slide: t("common.slideN", { n: "{n}" }),
              }}
            >
              <div className="contents">
                <img src="/assets/gallery_2.png" alt="Blade base gallery photo 1" loading="lazy" draggable="false" />
                <p className="photo-carousel-caption">Before and our design.</p>
                
              </div>
              <div className="contents">
                <img src="/assets/gallery_2_1.jpg" alt="Blade base gallery photo 2" loading="lazy" draggable="false" />
                <p className="photo-carousel-caption">在這裡填寫第二張照片說明。</p>
                
              </div>
            </PhotoCarousel>
          </section>
          <section className="project-result-2" lang="en" aria-labelledby="oculus-result-blade-base-heading">
            <p className="project-result-2__label">result</p>
            <h2 id="oculus-result-blade-base-heading" className="project-page-lead__title project-result-2__title">
              The Six-Ridge Round1 demonstrated the best performance.
            </h2>
            <p className="project-result-2__body">
              Analyze using particle size analysis software.
            </p>
            <section className="project-result-2-chart" aria-label="Particle size and count analysis (blade base)">
              <div className="project-result-2-chart__canvas-wrap">
                <canvas id="oculus-particle-analysis-chart-blade-base" />
              </div>
            </section>
          </section>
          <section className="project-cup-shape-exp3-1" lang="en" aria-labelledby="oculus-cup-shape-exp3-1-heading">
            <p className="project-cup-shape-exp3-1__label">Cup Shape | Experiment 3 - 1</p>
            <h2 id="oculus-cup-shape-exp3-1-heading" className="project-page-lead__title project-cup-shape-exp3-1__title">
              Using the baffle concept, we redesigned the cup shape by changing the bottom to a square structure.
              This makes it easier for the internal fluid to hit the cup walls, creating backflow and turbulence.
            </h2>
            <figure className="project-cup-shape-exp3-1__figure">
              <svg className="project-cup-shape-exp3-1__svg" viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cup bottom comparison: round versus square before and after design">
                <defs>
                  <marker id="ah-cup-eddy" viewBox="0 0 10 10" refX={8} refY={5} markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                    <path d="M1 1L8 5L1 9Z" fill="#1F2937" />
                  </marker>
                </defs>
                <rect x={60} y={30} width={90} height={32} rx={16} fill="none" stroke="#1F2937" strokeWidth={1} />
                <text x={105} y={46} textAnchor="middle" dominantBaseline="central" fontFamily="system-ui, -apple-system, sans-serif" fontSize={13} fontWeight={400} fill="#1F2937">
                  Before
                </text>
                <rect x={1000} y={30} width={120} height={32} rx={16} fill="none" stroke="#1F2937" strokeWidth={1} />
                <text x={1060} y={46} textAnchor="middle" dominantBaseline="central" fontFamily="system-ui, -apple-system, sans-serif" fontSize={13} fontWeight={400} fill="#1F2937">
                  Our Design
                </text>
                <text x={560} y={215} textAnchor="middle" dominantBaseline="central" fontFamily="system-ui, -apple-system, sans-serif" fontSize={16} fontWeight={400} fill="#1F2937">
                  Top View
                </text>
                <g transform="translate(105, 215) scale(1.25)">
                  <circle cx={0} cy={0} r={80} fill="none" stroke="#9CA3AF" strokeWidth="1.2" />
                  <circle cx={0} cy={0} r={35} fill="none" stroke="#E8856C" strokeWidth={1} />
                  <line x1={0} y1={-80} x2={0} y2={-35} stroke="#9CA3AF" strokeWidth="0.7" />
                  <line x1={0} y1={35} x2={0} y2={80} stroke="#9CA3AF" strokeWidth="0.7" />
                  <line x1={-80} y1={0} x2={-35} y2={0} stroke="#9CA3AF" strokeWidth="0.7" />
                  <line x1={35} y1={0} x2={80} y2={0} stroke="#9CA3AF" strokeWidth="0.7" />
                </g>
                <text x={105} y={370} textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize={14} fontWeight={400} fill="#1F2937">
                  Round Cup Bottom
                </text>
                <g transform="translate(340, 215) scale(0.7692307692307692)">
                  <circle cx={0} cy={0} r={130} fill="none" stroke="#E8856C" strokeWidth="1.2" />
                  <g className="cup-blade-crosshair-spin">
                    <line x1={0} y1={-50} x2={0} y2={50} stroke="#1F2937" strokeWidth={2} />
                    <line x1={-50} y1={0} x2={50} y2={0} stroke="#1F2937" strokeWidth={2} />
                    <circle cx={0} cy={0} r="3.5" fill="#1F2937" />
                  </g>
                </g>
                <g transform="translate(780, 215) scale(0.7692307692307692)">
                  <rect x={-130} y={-130} width={260} height={260} rx={28} fill="none" stroke="#E8856C" strokeWidth="1.2" />
                  <g className="cup-blade-crosshair-spin">
                    <line x1={0} y1={-50} x2={0} y2={50} stroke="#1F2937" strokeWidth={2} />
                    <line x1={-50} y1={0} x2={50} y2={0} stroke="#1F2937" strokeWidth={2} />
                    <circle cx={0} cy={0} r="3.5" fill="#1F2937" />
                  </g>
                  {/* Eddy-style C-arrows: one per corner (same arc + marker as baffle diagram) */}
                  <g className="cup-eddy-arrows" fill="none" stroke="#1F2937" strokeWidth="1.15">
                    <path d="M -102,-108 A11,11 0 1,0 -102,-88" markerEnd="url(#ah-cup-eddy)" />
                    <path d="M 102,-108 A11,11 0 1,0 102,-88" markerEnd="url(#ah-cup-eddy)" />
                    <path d="M -102,108 A11,11 0 1,0 -102,88" markerEnd="url(#ah-cup-eddy)" />
                    <path d="M 102,108 A11,11 0 1,0 102,88" markerEnd="url(#ah-cup-eddy)" />
                  </g>
                </g>
                <g transform="translate(1060, 215) scale(1.25)">
                  <circle cx={0} cy={0} r={80} fill="none" stroke="#9CA3AF" strokeWidth={1} />
                  <rect x={-35} y={-35} width={70} height={70} rx={8} fill="none" stroke="#E8856C" strokeWidth={1} />
                  <line x1={0} y1={-80} x2={0} y2={-35} stroke="#9CA3AF" strokeWidth="0.6" />
                  <line x1={0} y1={35} x2={0} y2={80} stroke="#9CA3AF" strokeWidth="0.6" />
                  <line x1={-80} y1={0} x2={-35} y2={0} stroke="#9CA3AF" strokeWidth="0.6" />
                  <line x1={35} y1={0} x2={80} y2={0} stroke="#9CA3AF" strokeWidth="0.6" />
                </g>
                <text x={1060} y={370} textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize={14} fontWeight={400} fill="#1F2937">
                  Square Cup Bottom
                </text>
              </svg>
            </figure>
          </section>
          <section className="project-cup-shape-exp3-2" lang="en" aria-labelledby="oculus-cup-shape-exp3-2-heading">
            <p className="project-cup-shape-exp3-2__label">Cup Shape | Experiment 3 - 2</p>
            <h2 id="oculus-cup-shape-exp3-2-heading" className="project-page-lead__title project-cup-shape-exp3-2__title">
              Although changing the cup body to a square base increases turbulence, it also results in higher energy
              consumption. To balance turbulence and energy efficiency, we applied the concept of vortex flow to the
              cup design. By adjusting the angles of the cup body, we created a vortex that pulls the fluid downward,
              enhancing fluid circulation and improving blending efficiency.
            </h2>
            <figure className="project-cup-shape-exp3-2__figure">
              <img className="project-cup-shape-exp3-2__img" src="/assets/Frame_1.svg" alt="Cup Shape Experiment 3 - 2 chart" loading="lazy" draggable="false" />
            </figure>
          </section>
          <section className="project-process-3" lang="en" aria-labelledby="oculus-process-3-heading">
            <p className="project-process-3__label">process</p>
            <h2 id="oculus-process-3-heading" className="project-page-lead__title project-process-3__title">
              We first redesigned the cup bottom shape and then improved the cup body shape. 
            </h2>
          </section>
          <section id="gallery-cup-exp3-2" className="photo-carousel-section" aria-label="Cup Shape Experiment 3 - 2 photo gallery">
            <PhotoCarousel
              labels={{
                prev: t("common.prevImage"),
                next: t("common.nextImage"),
                dots: t("common.chooseSlide"),
                slide: t("common.slideN", { n: "{n}" }),
              }}
            >
              <div className="contents">
                <img src="/assets/Ex3_24.jpg" alt="Cup exp3-2 gallery photo 1" loading="lazy" draggable="false" />
                <p className="photo-carousel-caption">Before and our design.</p>
                
              </div>
              <div className="contents">
                <img src="/assets/ex3_1.jpg" alt="Cup exp3-2 gallery photo 2" loading="lazy" draggable="false" />
                <p className="photo-carousel-caption">Design refinement comparison.</p>
                
              </div>
              <div className="contents">
                <img src="/assets/ex3_2.jpg" alt="Cup exp3-2 gallery photo 3" loading="lazy" draggable="false" />
                <p className="photo-carousel-caption">Setup procedure and validation.</p>
                
              </div>
            </PhotoCarousel>
          </section>
          <section className="project-result-3" lang="en" aria-labelledby="oculus-result-exp3-2-heading">
            <p className="project-result-3__label">result</p>
            <h2 id="oculus-result-exp3-2-heading" className="project-page-lead__title project-result-3__title">
              The 90 Degree+ demonstrated the best performance.
            </h2>
            <div className="project-result-3__charts project-result-3__charts--scroll" aria-label="Particle size and count analysis charts">
              <div className="project-result-3__chart-col">
                <canvas id="oculus-cup-exp3-2-chart1" />
              </div>
              <div className="project-result-3__chart-col">
                <canvas id="oculus-cup-exp3-2-chart2" />
              </div>
            </div>
          </section>
          <section className="project-design-conclusion" lang="en" aria-labelledby="oculus-design-conclusion-heading">
            <p className="project-design-conclusion__label">design conclusion</p>
            <h2 id="oculus-design-conclusion-heading" className="project-page-lead__title project-design-conclusion__title">
              By optimizing the design of the baffle shape, cup structure, and blade base, we significantly improved the
              overall blending performance.
              The enhanced personal blender can reduce large particle residue by approximately 80% in just 40 seconds,
              outperforming comparable products on the market.
            </h2>
            <figure className="project-design-conclusion__figure">
              <img className="project-design-conclusion__img" src="/assets/final_r.png" alt="Final particle residue visualization" loading="lazy" draggable="false" />
            </figure>
          </section>
          <section id="oculus-design-heading" className="project-design" lang="en" aria-label="design">
            <p className="project-design__label">design</p>
            <figure className="project-design__figure">
              <img className="project-design__img" src="/assets/design.png" alt="Final design overview" loading="lazy" draggable="false" />
            </figure>
            <figure className="project-design__figure">
              <img className="project-design__img" src="/assets/design_2.jpg" alt="Design showcase render" loading="lazy" draggable="false" />
            </figure>
            <figure className="project-design__figure">
              <img className="project-design__img" src="/assets/design_3.jpg" alt="Design detail close-up" loading="lazy" draggable="false" />
            </figure>
          </section>
          <section id="oculus-gallery-design-heading" className="photo-carousel-section" aria-label="Gallery">
            <PhotoCarousel
              labels={{
                prev: t("common.prevImage"),
                next: t("common.nextImage"),
                dots: t("common.chooseSlide"),
                slide: t("common.slideN", { n: "{n}" }),
              }}
            >
              <div className="contents">
                <img src="/assets/last_1.jpg" alt="Gallery image 4" loading="lazy" draggable="false" />
                
              </div>
              <div className="contents">
                <img src="/assets/last_2.jpg" alt="Gallery image 5" loading="lazy" draggable="false" />
                
              </div>
              <div className="contents">
                <img src="/assets/last_3.png" alt="Gallery image 6" loading="lazy" draggable="false" />
                
              </div>
              <div className="contents">
                <img src="/assets/last_4.jpg" alt="Gallery image 7" loading="lazy" draggable="false" />
                
              </div>
            </PhotoCarousel>
          </section>
        </main>
      </div>
    </>
  );
}
