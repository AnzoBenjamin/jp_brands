const Clients = () => {
  return (
    <div id="clients" className="section s-clients">
      <div className="row narrower s-clients__top h-text-center">
        <div className="column">
          <h1 className="display-1" data-aos="fade-up">
            We've had the priveledge with working with some of the largest and
            most iconic brands
          </h1>
        </div>
      </div>

      <div className="row clients-outer">
        <div className="column">
          <div className="clients" data-aos="fade-up">
            <a href="#0" title="" className="clients__slide">
              <img src="images/icons/clients/dropbox.svg" />
            </a>
            <a href="#0" title="" className="clients__slide">
              <img src="images/icons/clients/atom.svg" />
            </a>
            <a href="#0" title="" className="clients__slide">
              <img src="images/icons/clients/github.svg" />
            </a>
            <a href="#0" title="" className="clients__slide">
              <img src="images/icons/clients/redhat.svg" />
            </a>
            <a href="#0" title="" className="clients__slide">
              <img src="images/icons/clients/medium.svg" />
            </a>
            <a href="#0" title="" className="clients__slide">
              <img src="images/icons/clients/messenger.svg" />
            </a>
            <a href="#0" title="" className="clients__slide">
              <img src="images/icons/clients/steam.svg" />
            </a>
            <a href="#0" title="" className="clients__slide">
              <img src="images/icons/clients/spotify.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
