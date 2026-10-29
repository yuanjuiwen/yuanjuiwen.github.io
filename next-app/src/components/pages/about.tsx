/* Converted from about.html. */
import { PhotoCarousel } from "@/components/site/carousels";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { t } from "@/lib/locale";

export function AboutPage() {
  return (
    <>
      <Navbar current="about" />
      <main>
        <section id="about" className="about-intro" aria-labelledby="about-heading">
          <h2 id="about-heading" className="section-heading">Hi, I&apos;m Kevin Wen</h2>
          <p className="about-intro-text" lang="en">
            As a designer, I love simplifying complex problems and finding intuitive, delightful solutions that work for diverse groups of people. Whether I’m designing an interface or creating a prototype, I use research to guide my decisions and craft immersive experiences through thoughtful interaction and motion design.
          </p>
          <p className="about-intro-text" lang="en">
          </p>
        </section>
        <section id="experience" className="experience-section">
          <h2>Experience</h2>
          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-header">
                <div className="experience-header__main">
                  <h3>Jorjin Technologies Inc.</h3>
                  <p className="experience-period">2026.01 - 2026.02</p>
                </div>
                <div className="experience-header__aside">
                  <p className="experience-role">Product Design Intern</p>
                </div>
              </div>
            </article>
            <article className="experience-item">
              <div className="experience-header">
                <div className="experience-header__main">
                  <h3>EUPA <span className="sponsored-tag">(SPONSORED PROJECT)</span></h3>
                  <p className="experience-period">2024.09 - 2025.02</p>
                </div>
                <div className="experience-header__aside">
                  <p className="experience-role">Industrial Designer</p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id="education" className="experience-section">
          <h2>Education</h2>
          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-header">
                <h3>National Cheng Kung University</h3>
                <p className="experience-description">B.S Industrial Design</p>
              </div>
              <p className="experience-period">2022 - Present</p>
            </article>
          </div>
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
              <picture>
                <source srcSet="/assets/About_P1.webp" type="image/webp" />
                <img src="/assets/About_P1.JPG" alt="Kevin Wen" loading="eager" fetchPriority="high" decoding="async" draggable="false" />
              </picture>
              <p className="photo-carousel-caption">That is me!!!</p>
              
            </div>
            <div className="contents">
              <picture>
                <source srcSet="/assets/About_P2.webp" type="image/webp" />
                <img src="/assets/About_P2.JPG" alt="Kevin Wen" loading="lazy" decoding="async" draggable="false" />
              </picture>
              
            </div>
            <div className="contents">
              <picture>
                <source srcSet="/assets/Gallery_02.webp" type="image/webp" />
                <img src="/assets/Gallery_02.JPEG" alt="Profile" loading="lazy" decoding="async" draggable="false" />
              </picture>
              
            </div>
            <div className="contents">
              <picture>
                <source srcSet="/assets/Gallery_03.webp" type="image/webp" />
                <img src="/assets/Gallery_03.JPG" alt="Colendar project (2)" loading="lazy" decoding="async" draggable="false" />
              </picture>
              
            </div>
            <div className="contents">
              <picture>
                <source srcSet="/assets/Gallery_10.webp" type="image/webp" />
                <img src="/assets/Gallery_10.JPG" alt="TJOY project (2)" loading="lazy" decoding="async" draggable="false" />
              </picture>
              
            </div>
          </PhotoCarousel>
        </section>
      </main>
      <Footer />
    </>
  );
}
