import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import p2 from "../assets/1_ca8d1982-89c6-447d-8dbb-38b2dca79456.webp"

const products = [
  {
    id: 1,
    name: "Divine Maa Durga Pocket Temple - Gold Plated",
    image: p2,
    price: 1990.00,
    originalPrice: 2999.00,
    rating: 5,
    reviews: 2
  },
  {
    id: 2,
    name: "Brass Standing Vishnu Idol",
    image: p2,
    price: 2651.00,
    originalPrice: 3390.00,
    rating: 4,
    reviews: 3
  },
  {
    id: 3,
    name: "Divine Ganesha Pocket Temple - Gold & Silver Plated",
    image: p2,
    price: 1990.00,
    originalPrice: 2999.00,
    rating: 5,
    reviews: 2
  },
  {
    id: 4,
    name: "Balaji Charan with Shanku Chakra Namam - Gold Plated",
    image: p2,
    price: 990.00,
    originalPrice: 1900.00,
    rating: 5,
    reviews: 8
  },
  {
    id: 5,
    name: "Divine Maa Durga Pocket Temple - Gold Plated",
    image: p2,
    price: 1990.00,
    originalPrice: 2999.00,
    rating: 5,
    reviews: 2
  },
  {
    id: 6,
    name: "Brass Standing Vishnu Idol",
    image: p2,
    price: 2651.00,
    originalPrice: 3390.00,
    rating: 4,
    reviews: 3
  },
  {
    id: 7,
    name: "Divine Ganesha Pocket Temple - Gold & Silver Plated",
    image: p2,
    price: 1990.00,
    originalPrice: 2999.00,
    rating: 5,
    reviews: 2
  },
  {
    id: 8,
    name: "Balaji Charan with Shanku Chakra Namam - Gold Plated",
    image: p2,
    price: 990.00,
    originalPrice: 1900.00,
    rating: 5,
    reviews: 8
  }
];

const RatingStars = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating ? 'fill-[#E68A00] text-[#E68A00]' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">({reviews})</span>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative group">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-[#E68A00] text-white px-4 py-2 rounded-full flex items-center gap-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <RatingStars rating={product.rating} reviews={product.reviews} />
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xl font-bold text-[#C0392B]">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

const LatestArrivals = () => {
  return (
    <section className="py-16 px-4 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6">
            Latest Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button className="px-8 py-3 bg-[#E68A00] text-white rounded-full hover:bg-[#D4AF37] transition-colors duration-300 flex items-center gap-2 text-lg font-semibold shadow-md">
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestArrivals;