import "./index.css";

//icons
const Header = () => {
  return (
    <nav className="top-navbar">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h2 className="float-left ml-4">TCC</h2>
          </div>
          <div className="col-6">
            <div className="top__navbar__menu">
              Shop
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="top__navbar__menu">Journal</div>
            <div className="top__navbar__menu">About</div>
            <div className="top__navbar__menu">Contacts</div>
          </div>
          <div className="col-3">
            <div className="icon__navbar__menu">
              <img src="/images/e-commerce/search icon.svg" alt="" />
            </div>
            <div className="icon__navbar__menu">
              <img src="/images/e-commerce/user icon.svg" alt="" />
            </div>
            <div className="icon__navbar__menu">
              <img src="/images/e-commerce/cart icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
