import React, { useState } from "react";
import { Heart, Star, ShoppingCart, Check, Expand } from "lucide-react";

const ProductDetails = () => {
  const product = {
    title: "Wireless Mouse",
    description:
      "Ergonomic wireless mouse with adjustable DPI settings and a sleek design.",
    images: [
      "https://i.pinimg.com/736x/2a/ee/5e/2aee5ee6d367852bf906a6b842b829bb.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT271HjdIV8YpongKLf1bKM3oobsf3sNKnU9ND2BWbOBcMGknTzFOB0tWnxb0OaHvDzlpQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXAXbExc7snliKpmLz_Qc6mfNzj1IcA9yOw&usqp=CAU"
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
        images: [],
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
  const [isWishlisted, setIsWishlisted] = useState(false);

  const currentVariety = product.varieties[selectedVariety];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-6xl grid md:grid-cols-2 gap-12 p-8 relative overflow-hidden">
        {/* Best Seller Label */}
        

        {/* Image Gallery */}
        <div className="space-y-6">
          {/* Main Image Container */}
          <div className="relative group">
            <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={`${product.title} - View ${selectedImage + 1}`}
                className="max-h-96 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Expand className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex space-x-3 justify-center">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`
                  w-20 h-20 rounded-lg border-2 overflow-hidden transition-all duration-300 
                  ${selectedImage === index 
                    ? "border-[#E68A00] scale-110" 
                    : "border-transparent opacity-60 hover:opacity-100"
                  }
                `}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                  {product.title}
                </h1>
                <div className="flex items-center mt-2 text-[#D4AF37]">
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
                  <span className="text-gray-600 ml-2 text-sm">
                    ({product.reviews.length} reviews)
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-3 rounded-full transition-colors duration-300 ${
                  isWishlisted 
                    ? "bg-red-100 text-red-500" 
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                <Heart className={isWishlisted ? "fill-current" : ""} />
              </button>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Variety Selection */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-700">Choose Variant</h3>
            <div className="flex space-x-3">
              {product.varieties.map((variety, index) => (
                <button
                  key={index}
                  className={`px-5 py-2 rounded-lg border-2 transition-all duration-300 flex items-center space-x-2
                    ${
                      selectedVariety === index
                        ? "bg-[#E68A00] text-white border-[#E68A00]"
                        : "bg-white text-gray-700 border-gray-300 hover:border-[#E68A00] hover:bg-orange-50"
                    }`}
                  onClick={() => setSelectedVariety(index)}
                >
                  {selectedVariety === index && <Check className="w-4 h-4" />}
                  <span>{variety.color}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price and Stock */}
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <div>
              <p className="text-2xl font-bold text-[#C0392B]">
                ${currentVariety.price.sellingPrice.toFixed(2)}
                <span className="text-sm text-gray-500 line-through ml-3">
                  ${currentVariety.price.mrp.toFixed(2)}
                </span>
                <span className="text-sm text-green-600 ml-3 bg-green-100 px-2 py-1 rounded-full">
                  {Math.round(
                    (1 -
                      currentVariety.price.sellingPrice /
                        currentVariety.price.mrp) *
                      100
                  )}% off
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                In Stock: {currentVariety.stock} units
              </p>
            </div>
            <div className="flex items-center space-x-3 bg-white rounded-lg border p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200"
              >
                -
              </button>
              <span className="font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-4">
            <button className="col-span-2 bg-[#E68A00] text-white py-3 rounded-lg hover:bg-[#C0392B] transition-colors duration-300 flex items-center justify-center space-x-2 group">
              <ShoppingCart className="mr-2 group-hover:animate-bounce" /> 
              <span>Add to Cart</span>
            </button>
            <button 
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`border-2 p-3 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isWishlisted 
                  ? "bg-red-50 border-red-300 text-red-500" 
                  : "bg-gray-50 border-gray-300 text-gray-600 hover:border-[#E68A00]"
              }`}
            >
              <Heart className={isWishlisted ? "fill-current" : ""} />
            </button>
          </div>

          {/* Tags */}
          <div className="flex space-x-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs transition-colors hover:bg-gray-200"
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