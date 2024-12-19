<div className="group relative w-64 overflow-hidden border border-whiteColor bg-whitesmoke_F5F5F5 px-10 py-9 shadow-lg">
  {/* Discount Badge */}
  <div className="absolute left-2 top-2 rounded bg-red_DB4444 px-2 py-1 text-xs font-bold text-whiteColor">
    -35%
  </div>

  {/* Icons */}
  <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    <button className="rounded-full bg-whiteColor p-2 shadow hover:bg-whiteColor">
      <CiHeart />
    </button>
    <button className="rounded-full bg-whitesmoke_F5F5F5 p-2 shadow hover:bg-whitesmoke_F5F5F5">
      <FaRegEye />
    </button>
  </div>

  {/* Product Image */}
  <div className="relative">
    <img src={cardImg} alt={cardImg} className="h-40 w-full object-contain" />
    {/* Black Hover Add-to-Cart Area */}
    <div className="absolute bottom-0 left-0 flex h-12 w-full items-center justify-center bg-black font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      Add To Cart
    </div>
  </div>

  {/* Product Details */}
  <div className="p-4">
    <h3 className="text-sm font-medium text-gray-800">AK-900 Wired Keyboard</h3>
    <div className="mt-2 flex items-center gap-2">
      <span className="font-bold text-red-500">$960</span>
      <span className="text-gray-400 line-through">$1160</span>
    </div>
    <div className="mt-2 flex items-center gap-1">
      <span className="text-yellow-500">⭐⭐⭐⭐</span>
      <span className="text-xs text-gray-400">(75)</span>
    </div>
  </div>
</div>;
