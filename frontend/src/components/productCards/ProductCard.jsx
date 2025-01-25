import React from 'react';
import { Star, ShoppingCart, Heart, Shield, Award, Check } from 'lucide-react';

const ProductCard = () => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden border-[0.5px] border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-[#F8F5F0] to-white p-4">
        <img
          src="https://imgs.search.brave.com/MTgJ4KtZFJPAufJVbJnashoBo7-7FZutFuamR5cr3oI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGFuZGl0LmNvbS9j/ZG4vc2hvcC9maWxl/cy9maXZlX211a2hp/X3J1ZHJha3NoYV9t/YWxhX21haW5fcHJv/ZHVjdF9pbWFnZV8y/MDQuanBnP3Y9MTcx/OTMxNTcxMSZ3aWR0/aD0xNTAw"
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
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
            <span className="ml-1 text-xs font-medium text-[#6F4E37]">{product.rating}</span>
          </div>
        </div>

        {/* Product Name & Description */}
        <h3 className="text-sm font-serif text-[#6F4E37] mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-xs text-[#6F4E37]/70 mb-3 line-clamp-2 leading-relaxed">{product.description}</p>

        {/* Authenticity Badges */}
        <div className="flex gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Shield size={12} className="text-[#196F3D]" />
            <span className="text-[10px] font-medium text-[#196F3D]">Certified</span>
          </div>
          <div className="flex items-center gap-1">
            <Check size={12} className="text-[#C0392B]" />
            <span className="text-[10px] font-medium text-[#C0392B]">Temple Blessed</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-[#D4AF37]/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-serif text-[#C0392B]">₹{product.discountedPrice}</span>
              <span className="text-xs text-[#6F4E37]/60 line-through">₹{product.originalPrice}</span>
            </div>
            <div className="text-[10px] text-[#6F4E37]/60">{product.quantity}</div>
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

// Example usage:
const product = {
  name: "Sacred Panchmukhi Rudraksha Mala",
  category: "Prayer Beads",
  rating: "4.9",
  originalPrice: "15,999",
  discountedPrice: "11,999",
  discount: "25",
  quantity: "Single Piece",
  description: "Rare 5-faced Rudraksha mala with pure silver elements, blessed by Himalayan priests"
};

export default ProductCard;