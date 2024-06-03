import "./index.css";

const FilterNavbar = () => {
  return (
    <div className="container mt-5">
      <div className="area__filter__navbar">
        <div className="row">
          <div className="col-3 d-flex align-items-center justify-content-start">
            <h4>All Types</h4>
            <img src="/images/e-commerce/arrow icon.svg" alt="arrow" />
          </div>
          <div className="col-6 d-flex justify-content-center">
            <h5 className="active">Popular Products</h5>
            <h5>Low Prive</h5>
            <h5>High Price</h5>
          </div>
          <div className="col-3 d-flex justify-content-end align-items-center">
            <h4>Price</h4>
            <img src="/images/e-commerce/arrow icon.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterNavbar;
