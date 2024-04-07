import Reveal from "./Reveal";
const Services = () => {
  return (
    <section id="services" className="s-services">
      <div className="row">
        <div className="column large-12">
          <Reveal>
            <div className="section-title" data-num="02" data-aos="fade-up">
              <h3 className="h6">Our Expertise</h3>
            </div>
          </Reveal>
        </div>
        <div className="column large-6 w-900-stack">
          <Reveal>
            <h1 className="display-1" data-aos="fade-up">
              We transform businesses through the power of strategic branding.
            </h1>
          </Reveal>
        </div>
        <div className="column large-6 w-900-stack">
          <Reveal>
            <p className="lead" data-aos="fade-up">
              We go beyond just creating a logo; we craft a cohesive brand
              identity that resonates with your target audience and fuels your
              business growth.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="row block-large-1-2 block-tab-full s-services__services item-list">
        <div className="column item item-service" data-aos="fade-up">
          <span className="service-icon service-icon--product-design"></span>
          <Reveal>
            <h3 className="item-title">Uncover Your Brand DNA</h3>
          </Reveal>
          <Reveal>
            <p>
              Through market research and strategic analysis, we gain a deep
              understanding of your target audience, competitive landscape, and
              unique value proposition. This knowledge forms the foundation for
              crafting a powerful brand strategy and messaging that resonates.
            </p>
          </Reveal>
        </div>
        <div className="column item item-service" data-aos="fade-up">
          <span className="service-icon service-icon--branding"></span>
          <Reveal>
            <h3 className="item-title">Craft a Cohesive Brand Identity</h3>
          </Reveal>
          <Reveal>
            <p>
              We translate your brand strategy into a visually compelling
              identity. This includes designing a logo that is both memorable and
              meaningful, developing a brand style guide to ensure consistent
              presentation across all platforms, and crafting a unique voice and
              tone that reflects your brand personality and connects with your
              audience.
            </p>
          </Reveal>
        </div>
        <div className="column item item-service" data-aos="fade-up">
          <span className="service-icon service-icon--research"></span>
          <Reveal>
            <h3 className="item-title">Bring Your Brand to Life</h3>
          </Reveal>
          <Reveal>
            <p>
              We don't just create a brand; we help you implement it
              effectively. This includes designing marketing materials that
              embody your brand identity, developing a seamless customer
              experience that aligns with your brand promise at every
              touchpoint, and even providing guidance on ongoing brand
              management and cultivating brand advocates.
            </p>
          </Reveal>
        </div>
        <div className="column item item-service" data-aos="fade-up">
          <span className="service-icon service-icon--illustration"></span>
          <Reveal>
            <h3 className="item-title">Additional Services</h3>
          </Reveal>
          <Reveal>
            <p>
              We understand your brand might have specific needs. We offer
              specialized services like brand refresh, brand naming, and
              compelling brand storytelling to cater to your unique situation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Services;
