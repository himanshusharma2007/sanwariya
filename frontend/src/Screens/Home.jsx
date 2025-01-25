import React from "react";
import { ChevronRight } from "lucide-react";
import ProductGrid from "../components/productCards/ProductGrid";

const Home = () => {
  return (
    <div>
      <div className="relative px-12 h-[600px] bg-white">
        {/* Decorative mandala pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("https://images.template.net/wp-content/uploads/2017/01/31043554/Geometric-Mandala-Pattern.jpg?width=530")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Main content container */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left content section */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-serif mb-4 text-[#6F4E37]">
                Discover Sacred
                <span className="block text-[#E68A00]">
                  Spiritual Treasures
                </span>
              </h1>

              <p className="text-base md:text-lg mb-6 text-[#6F4E37] max-w-xl">
                Explore our curated collection of authentic Rudraksha malas,
                sacred beads, and spiritual accessories for your devotional
                journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button className="bg-[#E68A00] hover:bg-[#D4AF37] text-white px-6 py-2.5 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2 text-sm">
                  Shop Collection
                  <ChevronRight size={18} />
                </button>

                <button className="border-2 border-[#E68A00] text-[#E68A00] hover:bg-[#E68A00] hover:text-white px-6 py-2.5 rounded-full font-medium transition-colors duration-300 text-sm">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right image section */}
            <div className="flex-1 relative max-w-lg mx-auto lg:mx-0">
              <div className="relative w-full aspect-square rounded-full overflow-hidden bg-[#D4AF37]/10 p-6">
                <img
                  src="https://imgs.search.brave.com/vXnjQ1mmr4rmPa_ZvtRlNaWRm_S0GkARrw8mik__hFo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIwMjc2NTUxL3Iv/aWwvYjE5MDdiLzMy/OTkwODc1NjAvaWxf/NjAweDYwMC4zMjk5/MDg3NTYwX2ZqaWMu/anBn"
                  alt="Sacred Rudraksha Mala"
                  className="w-full h-full object-cover rounded-full"
                />

                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-[#C0392B]/10 rounded-full" />
                <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-[#196F3D]/10 rounded-full" />
              </div>

              {/* Floating badges */}
              <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full shadow-md">
                <div className="text-[#196F3D] text-xs font-medium">
                  100% Authentic
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-full shadow-md">
                <div className="text-[#C0392B] text-xs font-medium">
                  Blessed & Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductGrid />
    </div>
  );
};

export default Home;
