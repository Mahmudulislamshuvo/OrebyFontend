const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Left Section: Image Gallery */}
        <div className="flex w-full md:w-3/5">
          {/* Smaller Thumbnail placeholders */}
          <div className="mr-5 flex flex-col gap-4">
            <div className="h-16 w-16 rounded bg-gray-200"></div>
            <div className="h-16 w-16 rounded bg-gray-200"></div>
          </div>
          {/* Main image placeholder */}
          <div className="h-96 w-full rounded bg-gray-300"></div>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full md:w-2/5">
          {/* Product Title */}
          <div className="mb-4 h-6 w-3/4 rounded bg-gray-300"></div>

          {/* Rating and Stock */}
          <div className="mb-4 flex items-center gap-4">
            <div className="flex gap-1">
              <div className="h-4 w-4 rounded-full bg-gray-300"></div>
              <div className="h-4 w-4 rounded-full bg-gray-300"></div>
              <div className="h-4 w-4 rounded-full bg-gray-300"></div>
              <div className="h-4 w-4 rounded-full bg-gray-300"></div>
            </div>
            <div className="h-4 w-24 rounded bg-gray-300"></div>
          </div>

          {/* Price */}
          <div className="mb-4 h-6 w-1/3 rounded bg-gray-300"></div>

          {/* Description */}
          <div className="mb-2 h-4 w-full rounded bg-gray-300"></div>
          <div className="mb-2 h-4 w-5/6 rounded bg-gray-300"></div>
          <div className="mb-4 h-4 w-4/5 rounded bg-gray-300"></div>

          {/* Colors */}
          <div className="mb-4 flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          </div>

          {/* Sizes */}
          <div className="mb-4 flex gap-4">
            <div className="h-8 w-12 rounded bg-gray-300"></div>
            <div className="h-8 w-12 rounded bg-gray-300"></div>
            <div className="h-8 w-12 rounded bg-gray-300"></div>
            <div className="h-8 w-12 rounded bg-gray-300"></div>
          </div>

          {/* Buy Now Button */}
          <div className="flex gap-4">
            <div className="h-10 w-1/3 rounded bg-gray-300"></div>
            <div className="h-10 w-10 rounded bg-gray-300"></div>
          </div>

          {/* Delivery Info */}
          <div className="mt-6 rounded bg-gray-200 p-4">
            <div className="mb-2 h-6 w-1/2 rounded bg-gray-300"></div>
            <div className="h-4 w-3/4 rounded bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
