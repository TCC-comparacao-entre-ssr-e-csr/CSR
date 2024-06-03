import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row p-5">
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <h4>Info</h4>
                <h5 className="mt-5">Contact</h5>
                <h5>Catalog</h5>
              </div>
              <div className="col-4">
                <h4>Partner</h4>
                <h5 className="mt-5">Trade Program</h5>
                <h5>Whosale</h5>
              </div>
              <div className="col-4">
                <h4>Orders</h4>
                <h5 className="mt-5">Shipping</h5>
                <h5>FAQ</h5>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-12">
                <h4>Stay In Touch</h4>
                <div className="area__subscribe">
                  <input type="email" placeholder="Email Address" />
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__detail">
        <div className="container">
          <div className="row align-items-center px-5">
            <div className="col-4">
              <h4>© 2019. Pasar Jaya</h4>
            </div>
            <div className="col-4">
              <div className="icon__footer">
                <img src="/images/e-commerce/twiiter footer.svg" alt="" />
              </div>
              <div className="icon__footer">
                <img src="/images/e-commerce/instagram icon.svg" alt="" />
              </div>
              <div className="icon__footer">
                <img src="/images/e-commerce/facebook footer.svg" alt="" />
              </div>
            </div>
            <div className="col-4">
              <h4>Privacy Policy</h4>
              <h4>Terms of Use</h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
