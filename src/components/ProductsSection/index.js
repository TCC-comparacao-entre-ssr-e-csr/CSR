import ProductCard from "../ProductCard";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../Loader";

const ProductsSection = () => {
  const { data: products, isLoading } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <div className="container mb-5">
      {!isLoading ? (
        <div className="row">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} productData={product} />
            ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductsSection;
