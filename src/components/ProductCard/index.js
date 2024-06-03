import "./index.css";

const ProductCard = ({productData}) => {
  return (
    <div className="col-lg-4 mt-4">
      <div className="area__products">
        <div className="row">
          <div className="col-8">
            <h5 className="stats__products text-center">New</h5>
          </div>
          <div className="col-2">
            <img src="/images/e-commerce/list icon.svg" alt="" />
          </div>
          <div className="col-2">
            <img src="/images/e-commerce/wishlist icon.svg" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <img src={productData.image} alt="" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-center ">
            <a href="#" className="title__product">
              <h4>{productData.title}</h4>
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-5">
            <i className="fa fa-star not__cheklis cheklis"></i>
            <i className="fa fa-star not__cheklis cheklis"></i>
            <i className="fa fa-star not__cheklis cheklis"></i>
            <i className="fa fa-star not__cheklis cheklis"></i>
            <i className="fa fa-star not__cheklis"></i>
          </div>
          <div className="col-7">
            <div className="row">
              <div className="col-9 area__price__product px-2">
                <h4>R$ {productData.price}</h4>
              </div>
              <div className="col-3 area__price__product">
                <img src="/images/e-commerce/cart icon product.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
