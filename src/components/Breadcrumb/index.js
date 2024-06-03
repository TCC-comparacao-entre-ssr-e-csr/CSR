import "./index.css";

const Breadcrumb = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-8">
          <ul className="breadcrumb__item">
            <li>
              <h4>Main</h4>
            </li>
            <li>
              <img src="/images/e-commerce/breadcrumb.svg" alt="" />
              <h4 className="active">PROMOTION - 40% OFF</h4>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="breadcrumb__social__media">
            <li>Share: </li>
            <li>
              <img src="/images/e-commerce/facebook icon.svg" alt="" />
            </li>
            <li className="count__breadcrumb__social">45</li>
            <li>
              <img src="/images/e-commerce/twitter icon.svg" alt="" />
            </li>
            <li className="count__breadcrumb__social">12</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
