import React, { useState } from "react";
import { Heart, Star, ShoppingCart, Check } from "lucide-react";

const ProductDetails = () => {
  const product = {
    title: "Wireless Mouse",
    description:
      "Ergonomic wireless mouse with adjustable DPI settings and a sleek design.",
    images: [
      "https://example.com/images/mouse1.jpg",
      "https://example.com/images/mouse2.png",
    ],
    varieties: [
      {
        color: "Black",
        size: "Medium",
        weight: 200,
        stock: 50,
        price: {
          mrp: 30.99,
          sellingPrice: 25.99,
        },
      },
      {
        color: "White",
        size: "Small",
        weight: 180,
        stock: 100,
        price: {
          mrp: 28.99,
          sellingPrice: 22.99,
        },
      },
    ],
    reviews: [
      {
        rating: 5,
        description: "Excellent product! Works perfectly.",
        images: ["https://example.com/reviews/review1.jpg"],
      },
      {
        rating: 4,
        description: "Great quality but a bit pricey.",
        images: [],
      },
    ],
    label: "Best Seller",
    tags: ["electronics", "mouse", "wireless"],
  };

  const [selectedVariety, setSelectedVariety] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const currentVariety = product.varieties[selectedVariety];

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full h-screen grid md:grid-cols-2 gap-8 p-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-2xl p-4 flex items-center justify-center">
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="max-h-96 w-auto object-contain"
            />
          </div>
          <div className="flex space-x-2 justify-center">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product view ${index + 1}`}
                className={`h-16 w-16 rounded-lg object-cover cursor-pointer 
                  ${
                    selectedImage === index
                      ? "border-2 border-blue-500"
                      : "opacity-70"
                  }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-800">
                {product.title}
              </h1>
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.reviews[0].rating)
                        ? "fill-current"
                        : "stroke-current"
                    }`}
                  />
                ))}
                <span className="text-gray-600 ml-2">
                  ({product.reviews.length} reviews)
                </span>
              </div>
            </div>
            <p className="text-gray-600 mt-2">{product.description}</p>
          </div>

          {/* Variety Selection */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700">Choose Variant</h3>
            <div className="flex space-x-2">
              {product.varieties.map((variety, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg border 
                    ${
                      selectedVariety === index
                        ? "bg-blue-500 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  onClick={() => setSelectedVariety(index)}
                >
                  {variety.color}
                </button>
              ))}
            </div>
          </div>

          {/* Price and Stock */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-bold text-blue-600">
                ${currentVariety.price.sellingPrice}
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${currentVariety.price.mrp}
                </span>
                <span className="text-sm text-green-600 ml-2">
                  {Math.round(
                    (1 -
                      currentVariety.price.sellingPrice /
                        currentVariety.price.mrp) *
                      100
                  )}
                  % off
                </span>
              </p>
              <p className="text-sm text-gray-500">
                In Stock: {currentVariety.stock} units
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-200 px-3 py-1 rounded-md"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 px-3 py-1 rounded-md"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 flex items-center justify-center">
              <ShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button className="bg-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-300">
              <Heart />
            </button>
          </div>

          {/* Tags */}
          <div className="flex space-x-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
