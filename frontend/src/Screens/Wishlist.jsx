import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  ShoppingCart, 
  Trash2, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Star 
} from 'lucide-react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Rudraksha Mala',
      price: 599.99,
      image: 'https://m.media-amazon.com/images/I/81JMr5tK8PL.__AC_SY300_SX300_QL70_ML2_.jpg', 
      description: 'A beautiful mala for meditation and spiritual growth.',
      rating: 4.5,
      category: 'Spiritual Accessories',
      inStock: true
    },
    {
      id: 2,
      name: 'Saffron Bracelet',
      price: 799.99,
      image: 'https://m.media-amazon.com/images/I/51aulbI5hpL._AC_SX385_.jpg', 
      description: 'A premium saffron bracelet with intricate carvings.',
      rating: 4.8,
      category: 'Jewelry',
      inStock: true
    },
    
  ]);

  const [filteredItems, setFilteredItems] = useState(wishlistItems);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Filter and search logic
  useEffect(() => {
    let result = wishlistItems;

    // Search filter
    if (searchQuery) {
      result = result.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(item => 
        selectedCategories.includes(item.category)
      );
    }

    // Sorting
    switch(sortOption) {
      case 'priceAsc':
        result = result.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        result = result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = result.sort((a, b) => b.rating - a.rating);
        break;
    }

    setFilteredItems(result);
  }, [searchQuery, sortOption, selectedCategories, wishlistItems]);

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  // Add to cart function
  const addToCart = (item) => {
    // Placeholder for add to cart logic
    console.log('Added to cart:', item);
  };

  // Toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  // Get unique categories
  const categories = [...new Set(wishlistItems.map(item => item.category))];

  return (
    <div className="bg-[#F8F5F0] text-[#6F4E37] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title and Search Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#C0392B] mb-6 text-center">
            Your Wishlist
          </h1>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Search Input */}
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search wishlist items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-[#6F4E37] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E68A00]"
              />
              <Search className="absolute left-3 top-3 text-[#6F4E37]" />
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full md:w-auto">
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="w-full flex items-center justify-between px-4 py-2 border border-[#6F4E37] rounded-lg"
              >
                <span>Sort By</span>
                {isSortOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-full bg-white border border-[#6F4E37] rounded-lg shadow-lg">
                  <button 
                    onClick={() => { setSortOption('priceAsc'); setIsSortOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F8F5F0]"
                  >
                    Price: Low to High
                  </button>
                  <button 
                    onClick={() => { setSortOption('priceDesc'); setIsSortOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F8F5F0]"
                  >
                    Price: High to Low
                  </button>
                  <button 
                    onClick={() => { setSortOption('rating'); setIsSortOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F8F5F0]"
                  >
                    Highest Rated
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedCategories.includes(category)
                    ? 'bg-[#E68A00] text-white'
                    : 'bg-[#F8F5F0] text-[#6F4E37] border border-[#6F4E37]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Wishlist Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
              >
                {/* Out of Stock Overlay */}
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                    <span className="text-white text-xl font-bold">Out of Stock</span>
                  </div>
                )}

                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-contain" 
                />
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-semibold text-[#6F4E37]">{item.name}</h3>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] mr-1" />
                        <span className="text-[#6F4E37]">{item.rating}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-[#C0392B] hover:text-[#C0392B]/70"
                    >
                      <Trash2 />
                    </button>
                  </div>
                  <p className="text-[#6F4E37] mt-2">{item.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-[#C0392B]">₹{item.price}</span>
                    <button 
                      onClick={() => addToCart(item)}
                      disabled={!item.inStock}
                      className={`flex items-center px-4 py-2 rounded-lg font-semibold ${
                        item.inStock 
                          ? 'bg-[#196F3D] text-white hover:bg-[#196F3D]/90' 
                          : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="mr-2" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <Heart className="mx-auto mb-4 w-16 h-16 text-[#C0392B]" />
              <p className="text-2xl text-[#6F4E37]">Your wishlist is currently empty.</p>
              <p className="text-[#6F4E37]/70 mt-2">Explore our products and add some items!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;