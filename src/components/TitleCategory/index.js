import "./index.css";

const TitleCategory = ({ category }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <h1 className="title__category__product">{category}</h1>
        </div>
        <hr className="line__title__product" />
      </div>
    </div>
  );
};

export default TitleCategory;
