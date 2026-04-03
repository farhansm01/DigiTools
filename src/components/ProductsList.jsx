import { use } from "react";
import ProductCard from "./ProductCard";
const ProductsList = ({ productsPromise, handleAddToCart, cartItems }) => {
  const products = use(productsPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
};

export default ProductsList;
