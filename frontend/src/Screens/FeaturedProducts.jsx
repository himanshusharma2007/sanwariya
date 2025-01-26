import React, { useState } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  Shield,
  Award,
  Check,
  Sparkles,
} from "lucide-react";
import p3 from "../assets/17.webp";
const products = [
  {
    id: 1,
    name: "Sacred Panchmukhi Rudraksha Mala",
    category: "Featured Collection",
    rating: 4.9,
    reviews: 128,
    originalPrice: 15999,
    discountedPrice: 11999,
    discount: 25,
    quantity: "Single Piece",
    description:
      "Rare 5-faced Rudraksha mala with pure silver elements, blessed by Himalayan priests",
    isBestSeller: true,
    image: p3,
  },
  {
    id: 1,
    name: "Sacred Panchmukhi Rudraksha Mala",
    category: "Featured Collection",
    rating: 4.9,
    reviews: 128,
    originalPrice: 15999,
    discountedPrice: 11999,
    discount: 25,
    quantity: "Single Piece",
    description:
      "Rare 5-faced Rudraksha mala with pure silver elements, blessed by Himalayan priests",
    isBestSeller: true,
    image: p3,
  },
  {
    id: 2,
    name: "Sacred Panchmukhi Rudraksha Mala",
    category: "Featured Collection",
    rating: 4.9,
    reviews: 128,
    originalPrice: 15999,
    discountedPrice: 11999,
    discount: 25,
    quantity: "Single Piece",
    description:
      "Rare 5-faced Rudraksha mala with pure silver elements, blessed by Himalayan priests",
    isBestSeller: true,
    image: p3,
  },
  {
    id: 3,
    name: "Sacred Panchmukhi Rudraksha Mala",
    category: "Featured Collection",
    rating: 4.9,
    reviews: 128,
    originalPrice: 15999,
    discountedPrice: 11999,
    discount: 25,
    quantity: "Single Piece",
    description:
      "Rare 5-faced Rudraksha mala with pure silver elements, blessed by Himalayan priests",
    isBestSeller: true,
    image: p3,
  },
  {
    id: 4,
    name: "Sacred Panchmukhi Rudraksha Mala",
    category: "Featured Collection",
    rating: 4.9,
    reviews: 128,
    originalPrice: 15999,
    discountedPrice: 11999,
    discount: 25,
    quantity: "Single Piece",
    description:
      "Rare 5-faced Rudraksha mala with pure silver elements, blessed by Himalayan priests",
    isBestSeller: true,
    image: p3,
  },
  // Add more products...
];

const ProductCard = ({ product, featured }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group  relative bg-white flex justify-between flex-col  rounded-lg overflow-hidden border-[0.5px] border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-xl ${
        featured ? "col-span-2 row-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative ${
          featured ? "h-[80vh] ": "h-[30vh]"
        } overflow-hidden    flex justify-between  p-4`}
      >
        <img
          src={product.image || p3}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {featured && (
            <div className="flex items-center gap-1.5 bg-[#D4AF37]/90 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[10px] font-medium">
              <Sparkles size={12} />
              Featured
            </div>
          )}
          {product.discount > 0 && (
            <div className="bg-[#C0392B] text-white px-2 py-0.5 rounded-full text-[10px] font-medium">
              {product.discount}% OFF
            </div>
          )}
        </div>

        {/* Wishlist Button with Animation */}
        <button
          className={`absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          } hover:bg-[#E68A00] hover:text-white`}
        >
          <Heart size={14} />
        </button>
      </div>

      <div className="p-4 mt-auto ">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-[#6F4E37]/80">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star size={12} fill="#D4AF37" className="text-[#D4AF37]" />
            <span className="text-xs font-medium text-[#6F4E37]">
              {product.rating}
            </span>
            <span className="text-xs text-[#6F4E37]/60">
              ({product.reviews})
            </span>
          </div>
        </div>

        {/* Product Name & Description */}
        <h3
          className={`font-serif text-[#6F4E37] mb-1 line-clamp-1 ${
            featured ? "text-lg" : "text-sm"
          }`}
        >
          {product.name}
        </h3>
        <p className="text-xs text-[#6F4E37]/70 mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Authenticity Badges */}
        <div className="flex gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Shield size={12} className="text-[#196F3D]" />
            <span className="text-[10px] font-medium text-[#196F3D]">
              Certified
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Check size={12} className="text-[#C0392B]" />
            <span className="text-[10px] font-medium text-[#C0392B]">
              Temple Blessed
            </span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-[#D4AF37]/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-serif text-[#C0392B]">
                ₹{product.discountedPrice.toLocaleString()}
              </span>
              {product.discount > 0 && (
                <span className="text-xs text-[#6F4E37]/60 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="text-[10px] text-[#6F4E37]/60">
              {product.quantity}
            </div>
          </div>
          <button
            className={`bg-gradient-to-r from-[#E68A00] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E68A00] text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all duration-300 text-xs font-medium transform ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          >
            <ShoppingCart size={14} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#F8F5F0] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-4">
            Featured Collection
          </h2>
          <p className="text-sm text-[#6F4E37]/70 max-w-2xl mx-auto">
            Discover our carefully curated selection of sacred items, each piece
            blessed and crafted with devotion
          </p>
        </div>

        {/* Featured Grid Layout */}
        <div
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]"
          style={{ gridAutoRows: "minmax(200px, auto)" }}
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              featured={index === 0} // First product is featured
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
