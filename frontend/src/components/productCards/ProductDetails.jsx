import React from "react";
const ProductDetails = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center p-8">
            <img
              src="https://example.com/product-image.jpg"
              alt="Nonattick Dishwasher PFOA"
              className="max-h-64 w-auto"
            />
            <div className="flex items-center mt-4 space-x-4">
              <img
                src="https://example.com/product-image-1.jpg"
                alt="Product Image 1"
                className="h-16 w-16 rounded-md object-cover cursor-pointer"
              />
              <img
                src="https://example.com/product-image-2.jpg"
                alt="Product Image 2"
                className="h-16 w-16 rounded-md object-cover cursor-pointer"
              />
              <img
                src="https://example.com/product-image-3.jpg"
                alt="Product Image 3"
                className="h-16 w-16 rounded-md object-cover cursor-pointer"
              />
              <img
                src="https://example.com/product-image-4.jpg"
                alt="Product Image 4"
                className="h-16 w-16 rounded-md object-cover cursor-pointer"
              />
            </div>
          </div>
          <div className="p-8 space-y-4">
            <h1 className="text-3xl font-bold">Nonattick Dishwasher PFOA</h1>
            <p className="text-gray-500">4.9 (100 reviews)</p>
            <p className="text-2xl font-bold">$80.00</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
              eget aliquam nisl nisl sit amet nisl.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
