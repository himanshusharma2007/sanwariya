import React from 'react';
import { Heart, Hand, Gift } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-OffWhite text-EarthyBrown">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-DeepRed mb-4">About Sanwariya Handicraft</h1>
          <p className="text-xl text-EarthyBrown leading-relaxed max-w-2xl mx-auto">
            We are dedicated to offering high-quality spiritual products that inspire peace, mindfulness, and devotion. Our collection includes meticulously crafted malas, rudraksh beads, and other sacred items, perfect for your spiritual journey.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 px-6">
            <h2 className="text-2xl font-semibold text-DeepRed mb-4">Our Mission</h2>
            <p className="text-lg text-EarthyBrown leading-relaxed">
              At Sanwariya Handicraft, we aim to bring you spiritually enriching products that are not only of the highest quality but also ethically sourced and crafted with love. We believe that each product holds its own unique energy and connection to the divine.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img 
              src="https://imgs.search.brave.com/HI4VGmAPQ4MJtdyZLBfSKRrOjpTWj1_VQJ2KYjpOgv8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODE0UnZ5SVR4b0wu/anBn" 
              alt="Hindu Spiritual Products" 
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-DeepRed mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-MutedSaffron/Orange p-6 rounded-full shadow-lg mb-4">
                <Heart className="text-3xl text-OffWhite" />
              </div>
              <h3 className="text-xl font-semibold text-EarthyBrown">Authenticity</h3>
              <p className="text-lg text-EarthyBrown">
                We ensure all products are authentic and crafted with sacred intent.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-ForestGreen p-6 rounded-full shadow-lg mb-4">
                <Hand className="text-3xl text-OffWhite" />
              </div>
              <h3 className="text-xl font-semibold text-EarthyBrown">Sustainability</h3>
              <p className="text-lg text-EarthyBrown">
                We prioritize eco-friendly and sustainable practices in sourcing and crafting our products.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-AntiqueGold p-6 rounded-full shadow-lg mb-4">
                <Gift className="text-3xl text-OffWhite" />
              </div>
              <h3 className="text-xl font-semibold text-EarthyBrown">Craftsmanship</h3>
              <p className="text-lg text-EarthyBrown">
                Every product is handcrafted with utmost precision, ensuring quality and attention to detail.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-lg text-EarthyBrown">
            © 2025 Sanwariya Handicraft. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
