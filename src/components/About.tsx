import aboutImg from "../assets/about.jpg";
import Reveal from "./Reveal";
const About = () => {
  return (
    <section id="about" className="s-about">
      <div className="horizontal-line"></div>

      <div className="row">
        <div className="column large-12">
          <Reveal>
            <div className="section-title" data-num="01" data-aos="fade-up">
              <h3 className="h6">Who We Are</h3>
            </div>
          </Reveal>
        </div>

        <div className="column large-6 w-900-stack s-about__intro-text">
          <Reveal>
            <h1 className="display-1" data-aos="fade-up">
              JP Extra Brands is an independent full time service branding
              company.
            </h1>
          </Reveal>
          <Reveal>
            <p className="lead" data-aos="fade-up">
              Our confidence is that we are a brand that exceeds expectations,
              based on experience, sound branding strategies and intergration.
              Everything we do, roots on the belief that, "Excellent work is the
              best salesman for us."
            </p>
          </Reveal>
        </div>

        <div className="column large-6 w-900-stack s-about__photo-block">
          <div
            className="s-about__photo"
            data-aos="fade-up"
            style={{ backgroundImage: `url(${aboutImg})` }}
          ></div>
        </div>
      </div>

      <div className="row block-large-1-2 block-tab-full s-about__process item-list">
        <div className="column item item-process" data-aos="fade-up">
          <Reveal>
            <h3 className="item-title">Define</h3>
          </Reveal>
          <Reveal>
            <p>
              We start by getting to know your business inside and out. Through
              research and collaboration, we'll define your brand strategy,
              target audience, and unique value proposition.
            </p>
          </Reveal>
        </div>
        <div className="column item item-process" data-aos="fade-up">
          <Reveal>
            <h3 className="item-title">Design</h3>
          </Reveal>
          <Reveal>
            <p>
              With a clear vision in mind, we bring your brand to life visually.
              This includes crafting a memorable logo, establishing a consistent
              brand style guide, and developing a voice that resonates with your
              audience.
            </p>
          </Reveal>
        </div>
        <div className="column item item-process" data-aos="fade-up">
          <Reveal>
            <h3 className="item-title">Build</h3>
          </Reveal>
          <Reveal>
            <p>
              We translate your brand strategy into tangible assets. We'll
              design marketing materials, create a user-friendly website that
              embodies your brand, and develop a customer experience that
              reflects your brand promise.
            </p>
          </Reveal>
        </div>
        <div className="column item item-process" data-aos="fade-up">
          <Reveal>
            <h3 className="item-title">Launch</h3>
          </Reveal>
          <Reveal>
            <p>
              The moment your brand story takes center stage! We'll guide you
              through a strategic launch plan to ensure your brand makes a
              powerful first impression and connects with your target audience.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
