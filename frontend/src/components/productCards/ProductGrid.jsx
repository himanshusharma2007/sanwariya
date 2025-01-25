import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      name: "Sacred Panchmukhi Rudraksha Mala",
      category: "Prayer Beads",
      rating: "4.9",
      price: "11,999",
      quantity: "Single Piece",
      description:
        "Rare 5-faced Rudraksha mala with pure silver elements, blessed by Himalayan priests",
    },
    {
      name: "Natural Crystal Shiva Lingam",
      category: "Sacred Idols",
      rating: "4.8",
      price: "8,999",
      quantity: "With Brass Base",
      description:
        "Pure crystal Shiva Lingam, hand-selected from sacred rivers",
    },
    {
      name: "Royal Puja Ensemble",
      category: "Accessories",
      rating: "4.7",
      price: "5,999",
      quantity: "12-Piece Set",
      description:
        "Complete brass puja set with traditional designs and sacred symbols",
    },
    {
      name: "Energized Sphatik Mala",
      category: "Prayer Beads",
      rating: "4.9",
      price: "7,999",
      quantity: "108 Beads",
      description: "Pure crystal beads, energized through vedic ceremonies",
    },
    {
      name: "Divine Sandalwood Incense Sticks",
      category: "Incense",
      rating: "4.6",
      price: "499",
      quantity: "20 Sticks Pack",
      description:
        "Hand-rolled sandalwood incense sticks for a calming and sacred ambiance",
    },
    {
      name: "Chakra Healing Bracelet",
      category: "Jewelry",
      rating: "4.8",
      price: "2,499",
      quantity: "Single Piece",
      description:
        "Multi-gemstone bracelet for balancing chakras, infused with positive energy",
    },
    {
      name: "Golden Brass Diya Set",
      category: "Accessories",
      rating: "4.7",
      price: "3,499",
      quantity: "Set of 6",
      description:
        "Traditional brass oil lamps with intricate carvings, perfect for puja rituals",
    },
    {
      name: "Sacred Tulsi Mala",
      category: "Prayer Beads",
      rating: "4.9",
      price: "1,299",
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
          <>
            <ProductCard key={index} product={product} />
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

