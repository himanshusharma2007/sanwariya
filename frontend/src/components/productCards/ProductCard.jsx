import React from "react";
import { Star, ShoppingCart, Heart, Shield, Award, Check } from "lucide-react";
import { useNavigate } from "react-router";
import p1 from "../../assets/Untitled-2.webp";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={(index) => {
        navigate(`product/${index}`);
      }}
      className="group relative bg-white rounded-lg overflow-hidden border-[0.5px] border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-[#F8F5F0] to-white p-4">
        <img
          src={p1}
          alt={product.name}
          className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-102"
        />

        {/* Premium Badge */}
        <div className="absolute top-3 left-3 z-10">
          <div className="flex items-center gap-1.5 bg-[#D4AF37]/90 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[10px] font-medium">
            <Award size={12} />
            Premium
          </div>
        </div>

        {/* Discount Badge */}
        <div className="absolute top-12 left-3 z-10">
          <div className="bg-[#C0392B] text-white px-2 py-0.5 rounded-full text-[10px] font-medium">
            {product.discount}% OFF
          </div>
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-[#E68A00] hover:text-white transition-all duration-300">
          <Heart size={14} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-[#6F4E37]/80">
            {product.category}
          </span>
          <div className="flex items-center">
            <Star size={12} fill="#D4AF37" className="text-[#D4AF37]" />
            <span className="ml-1 text-xs font-medium text-[#6F4E37]">
              {product.rating}
            </span>
          </div>
        </div>

        {/* Product Name & Description */}
        <h3 className="text-sm font-serif text-[#6F4E37] mb-1 line-clamp-1">
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
                ₹{product.discountedPrice}
              </span>
              <span className="text-xs text-[#6F4E37]/60 line-through">
                ₹{product.originalPrice}
              </span>
            </div>
            <div className="text-[10px] text-[#6F4E37]/60">
              {product.quantity}
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#E68A00] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E68A00] text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all duration-300 text-xs font-medium">
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const products = [
    {
      name: "Sacred Panchmukhi Rudraksha Mala",
      category: "Prayer Beads",
      rating: "4.9",
      originalPrice: "15,999",
      discountedPrice: "11,999",
      discount: "25",
      quantity: "Single Piece",
      description:
        "Rare 5-faced Rudraksha mala with pure silver elements, blessed by Himalayan priests",
    },
    {
      name: "Natural Crystal Shiva Lingam",
      category: "Sacred Idols",
      rating: "4.8",
      originalPrice: "8,999",
      discountedPrice: "8,999",
      discount: "0",
      quantity: "With Brass Base",
      description:
        "Pure crystal Shiva Lingam, hand-selected from sacred rivers",
    },
    {
      name: "Royal Puja Ensemble",
      category: "Accessories",
      rating: "4.7",
      originalPrice: "5,999",
      discountedPrice: "5,999",
      discount: "0",
      quantity: "12-Piece Set",
      description:
        "Complete brass puja set with traditional designs and sacred symbols",
    },
    {
      name: "Energized Sphatik Mala",
      category: "Prayer Beads",
      rating: "4.9",
      originalPrice: "7,999",
      discountedPrice: "7,999",
      discount: "0",
      quantity: "108 Beads",
      description: "Pure crystal beads, energized through vedic ceremonies",
    },
    {
      name: "Divine Sandalwood Incense Sticks",
      category: "Incense",
      rating: "4.6",
      originalPrice: "499",
      discountedPrice: "499",
      discount: "0",
      quantity: "20 Sticks Pack",
      description:
        "Hand-rolled sandalwood incense sticks for a calming and sacred ambiance",
    },
    {
      name: "Chakra Healing Bracelet",
      category: "Jewelry",
      rating: "4.8",
      originalPrice: "2,499",
      discountedPrice: "2,499",
      discount: "0",
      quantity: "Single Piece",
      description:
        "Multi-gemstone bracelet for balancing chakras, infused with positive energy",
    },
    {
      name: "Golden Brass Diya Set",
      category: "Accessories",
      rating: "4.7",
      originalPrice: "3,499",
      discountedPrice: "3,499",
      discount: "0",
      quantity: "Set of 6",
      description:
        "Traditional brass oil lamps with intricate carvings, perfect for puja rituals",
    },
    {
      name: "Sacred Tulsi Mala",
      category: "Prayer Beads",
      rating: "4.9",
      originalPrice: "1,299",
      discountedPrice: "1,299",
      discount: "0",
      quantity: "Single Piece",
      description:
        "Handcrafted tulsi wood mala with smooth beads for daily prayers",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-t from-white to-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-serif text-[#6F4E37] mb-2">
          Sacred Collection
        </h2>
        <p className="text-xs text-[#6F4E37]/70 max-w-xl mx-auto">
          Curated with devotion, each piece carries divine energy and ancient
          wisdom
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
