import writingIcon from "../assets/products/writing_2327400 1.png";
import designIcon from "../assets/products/design-tool.png";
import portfolioIcon from "../assets/products/portfolio.png";
import operationIcon from "../assets/products/operation.png";
import shoppingCartIcon from "../assets/products/shopping-cart.png";
import socialMediaIcon from "../assets/products/social-media.png";

const iconMap = {
  "writing_2327400 1.png": writingIcon,
  "design-tool.png": designIcon,
  "portfolio.png": portfolioIcon,
  "operation.png": operationIcon,
  "shopping-cart.png": shoppingCartIcon,
  "social-media.png": socialMediaIcon,
};

const periodLabel = {
  monthly: "/Mo",
  "one-time": "/One-Time",
  yearly: "/Yr",
};

export default function CartView({ cartItems, onRemove }) {
  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <span className="text-6xl">🛒</span>
        <p className="text-gray-500 text-lg font-semibold">Your cart is empty.</p>
        <p className="text-gray-400 text-sm">Browse products and add something!</p>
      </div>
    );
  }

  const total = cartItems.reduce(function (sum, item) {
    return sum + item.price;
  }, 0);

  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto">

      {/* Cart Items */}
      {cartItems.map(function (item) {
        return (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={iconMap[item.icon]}
                alt={item.name}
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="font-bold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-400">
                  ${item.price}{periodLabel[item.period]}
                </p>
              </div>
            </div>
            <button
              onClick={function () {
                onRemove(item.id);
              }}
              className="text-sm text-red-400 hover:text-red-600 font-medium transition-colors duration-200 cursor-pointer"
            >
              Remove
            </button>
          </div>
        );
      })}

      {/* Total & Checkout */}
      <div className="flex justify-end items-center gap-4 pt-4 border-t border-gray-200 mt-2">
        <span className="text-gray-600 font-medium">Total:</span>
        <span className="text-2xl font-extrabold text-gray-900">${total}</span>
        <button className="bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white text-sm font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer">
          Checkout
        </button>
      </div>

    </div>
  );
}
