export default function CartView({ cartItems, handleRemove, handleClearCart }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
        {/* Heading */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Cart</h3>

        {cartItems.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <span className="text-6xl">🛒</span>
            <p className="text-gray-700 font-semibold text-lg">
              Your cart is empty
            </p>
            <p className="text-gray-400 text-sm">
              Browse products and add something!
            </p>
          </div>
        ) : (
          /* Cart Items + Total */
          <div>
            <div className="flex flex-col gap-3">
              {cartItems.map(function (item) {
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-gray-200 rounded-xl p-5 "
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={`/products/${item.icon}`}
                        alt={item.name}
                        className="w-9 h-9 object-contain "
                      />
                      <div>
                        <p className=" font-semibold text-[#101727]">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">${item.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={function () {
                        handleRemove(item.id);
                      }}
                      className="text-sm text-red-400 hover:text-red-600 font-medium transition-colors duration-200 cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Total & Checkout */}
            <div className="flex flex-col gap-3 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Total:</span>
                <span className="text-2xl font-bold text-gray-900">
                  $
                  {cartItems.reduce(function (sum, item) {
                    return sum + item.price;
                  }, 0)}
                </span>
              </div>
              <button
                onClick={handleClearCart}
                className="w-full bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-white text-sm font-semibold py-3 rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
