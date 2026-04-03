import { Suspense, useState } from "react";
import CartView from "./CartView";
import ProductsList from "./ProductsList";

// 1. Create the promise OUTSIDE the component
//    so it doesn't re-fetch on every render
const productsPromise = fetch("/products.json").then((res) => {
  return res.json();
});

// 2. Inner component — use() unwraps the promise

// 3. Main Section
export default function ProductsSection({ cartItems, setCartItems }) {
  const [activeTab, setActiveTab] = useState("products");

  function handleAddToCart(product) {
    setCartItems([...cartItems, product]);
  }
  function handleRemove(id) {
    setCartItems(
      cartItems.filter(function (item) {
        return item.id !== id;
      }),
    );
  }
  function handleClearCart() {
    setCartItems([]);
  }
  return (
    <section className="max-w-6xl mx-auto  py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl lg:text-5xl font-semibold text-[#101727] mb-3">
          Premium Digital Tools
        </h2>
        <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex items-center w-fit mx-auto bg-white border border-gray-200 rounded-full p-1 gap-1 my-5">
        <button
          onClick={function () {
            setActiveTab("products");
          }}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
            activeTab === "products"
              ? "bg-linear-to-b from-[#4F39F6] to-[#9514FA] shadow-sm text-white"
              : "text-gray-600 hover:text-[#9514FA]"
          }`}
        >
          Products
        </button>
        <button
          onClick={function () {
            setActiveTab("cart");
          }}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
            activeTab === "cart"
              ? "bg-linear-to-b from-[#4F39F6] to-[#9514FA] shadow-sm text-white"
              : "text-gray-600 hover:text-[#9514FA]"
          }`}
        >
          Cart
        </button>
      </div>

      {/* Content */}

      {activeTab === "products" ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <ProductsList
            productsPromise={productsPromise}
            handleAddToCart={handleAddToCart}
            cartItems={cartItems}
          />
        </Suspense>
      ) : (
        <CartView
          cartItems={cartItems}
          handleRemove={handleRemove}
          handleClearCart={handleClearCart}
        />
      )}
    </section>
  );
}
