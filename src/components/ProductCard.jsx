export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200 relative">
      {/* Tag - top right */}
      <div className="absolute top-4 right-4">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            product.tagType === "popular"
              ? "bg-[#e1e7ff] text-purple-700 border border-purple-200"
              : product.tagType === "new"
                ? "bg-[#dbfce7] text-[#0a883e] border border-green-200"
                : product.tagType === "bestseller"
                  ? "bg-[#fef3c6] text-[#bb4d00] border border-orange-200"
                  : "bg-gray-100 text-gray-600"
          }`}
        >
          {product.tag}
        </span>
      </div>

      {/* Icon */}
      <div className="w-12 h-12 border border-gray-200 rounded-full p-3">
        <img
          src={`/public/products/${product.icon}`}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Name & Description */}
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-gray-900">
          ${product.price}
        </span>
        <span className="text-sm text-gray-400">/{product.period}</span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {product.features.map(function (feature, index) {
          return (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <span className="text-[#30b868] font-bold">✓</span>
              {feature}
            </li>
          );
        })}
      </ul>

      {/* Buy Button */}
      <button
        onClick={function () {}}
        className="mt-auto w-full bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-white text-sm font-semibold py-3 rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
      >
        Buy Now
      </button>
    </div>
  );
}
