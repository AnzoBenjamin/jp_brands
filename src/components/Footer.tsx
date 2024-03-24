
const Footer = () => {
  return (
<footer className="s-footer">
        <div className="row row-y-top">

            <div className="column large-8 medium-12">
                <div className="row">
                    <div className="column large-7 tab-12 s-footer__block">
                        <h4 className="h6">Where to Find Us</h4>
        
                        <p>
                        Nasser Road <br/>
                        Mirembe Arcade <br/>
                        Kampala  Uganda <br/>
                        <a href="tel:+256705574060">+256 705 557 4060</a>
                        </p>
                    </div>
        
                    <div className="column large-5 tab-12 s-footer__block">
                        <h4 className="h6">Follow Us</h4>
        
                        <ul className="s-footer__list">
                            <li><a href="https://www.facebook.com/jp.extra.brands/">Facebook</a></li>
                            <li><a href="https://wa.me/+25677711200">Whatsapp</a></li>
                            <li><a href="https://www.instagram.com/jpextra_brands/">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="column large-4 medium-12 s-footer__block--end">
                <a href="mailto:goodnewsashaba@gmail.com" className="btn h-full-width">Let's Talk</a>

                <div className="ss-copyright">
                    <span>Copyright JP Brands 2024</span> 
                </div>
            </div>

            <div className="ss-go-top">
                <a className="smoothscroll" title="Back to Top" href="#top">
                    top
                </a>
            </div>

        </div>
    </footer>
      )
}

export default Footer