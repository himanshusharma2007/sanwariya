import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      title: "Discover Sacred",
      subtitle: "Spiritual Treasures",
      description: "Explore our curated collection of authentic Rudraksha malas, sacred beads, and spiritual accessories for your devotional journey.",
      backgroundImage: "https://imgs.search.brave.com/vXnjQ1mmr4rmPa_ZvtRlNaWRm_S0GkARrw8mik__hFo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIwMjc2NTUxL3Iv/aWwvYjE5MDdiLzMy/OTkwODc1NjAvaWxf/NjAweDYwMC4zMjk5/MDg3NTYwX2ZqaWMu/anBn",
    },
    {
      title: "Connect with",
      subtitle: "Divine Energy",
      description: "Immerse yourself in our handpicked spiritual artifacts that bridge the earthly and the divine, supporting your meditative practices.",
      backgroundImage: "https://imgs.search.brave.com/y5oKBx-VD82QBonvI1l9JiTPI8JUlZAnDNkGOpKnIKE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/MjIzNTM5OC9waG90/by9sb3JkLXNoaXZh/LXN0YXR1ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NTU5/Z1c2NkdYWWhjcEtx/UDNZaDVydmtoN1hp/UENmQjZrLVNXX1Ff/dHlQQT0",
    },
    {
      title: "Elevate Your",
      subtitle: "Spiritual Practice",
      description: "Transform your meditation and prayer with our carefully selected, high-energy spiritual tools designed to enhance your inner journey.",
      backgroundImage: "https://imgs.search.brave.com/KH8RkO1Leg3LXWwIKRmpOF4ajTqUxlxRJyMT7JE5pWY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAw/ODA1MDQ2L3Bob3Rv/L3NoaXZhLXNjdWxw/dHVyZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9TDVBN0dS/UldfYmRRV085dlYt/b1Rwd195MUZuZDE1/M2RlVFY0QTJLbjhM/TT0",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlideInterval);
  }, []);

  return (
    <div className="relative px-12 h-[600px] bg-white overflow-hidden">

      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {carouselItems.map((item, index) => (
          <div 
            key={index} 
            className={`
              absolute inset-0 transition-opacity duration-700 ease-in-out
              ${currentSlide === index ? 'opacity-100' : 'opacity-0'}
            `}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${item.backgroundImage})`,
              }}
            />

            <div className="container mx-auto px-4 py-8 h-full relative z-10">
              <div className="flex items-center justify-center h-full">
                {/* Centered Content Section */}
                <div className="text-center max-w-3xl p-12 rounded-xl">
                  <h1 className="text-4xl md:text-6xl font-serif mb-4 text-[#6F4E37]">
                    {item.title}
                    <span className="block text-[#E68A00]">
                      {item.subtitle}
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl mb-8 text-[#6F4E37] mx-auto">
                    {item.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-[#E68A00] hover:bg-[#D4AF37] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                      Shop Collection
                      <ChevronRight size={20} />
                    </button>

                    <button className="border-2 border-[#E68A00] text-[#E68A00] hover:bg-[#E68A00] hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#E68A00]/20 hover:bg-[#E68A00]/40 p-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft size={24} className="text-[#6F4E37]" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#E68A00]/20 hover:bg-[#E68A00]/40 p-2 rounded-full transition-all duration-300"
        >
          <ChevronRight size={24} className="text-[#6F4E37]" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {carouselItems.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${currentSlide === index ? 'bg-[#E68A00] w-6' : 'bg-[#E68A00]/30'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;