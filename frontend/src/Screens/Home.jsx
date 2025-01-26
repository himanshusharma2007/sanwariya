import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import ProductCard from "../components/productCards/ProductCard"
import LatestArrivals from "./LatestArrivals"
import FeaturedProducts from "./FeaturedProducts"
import TestimonialSlider from "./TestimonialSlider"
import FAQSection from "./FAQSection"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  const images = [
    "https://imgs.search.brave.com/vXnjQ1mmr4rmPa_ZvtRlNaWRm_S0GkARrw8mik__hFo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIwMjc2NTUxL3Iv/aWwvYjE5MDdiLzMy/OTkwODc1NjAvaWxf/NjAweDYwMC4zMjk5/MDg3NTYwX2ZqaWMu/anBn",
    "https://imgs.search.brave.com/uhbxs7Pvf8zxP227ms0Z_Gxfe9UNfWRF2RKcnBZxIpI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE3OTUxODg4L2Mv/MTM2NS8xMzY1LzAv/MC9pbC81ZTYyZGQv/MzM0NjgwODg4My9p/bF82MDB4NjAwLjMz/NDY4MDg4ODNfNmly/Yi5qcGc",
    "https://imgs.search.brave.com/vN8LLprnbOOkaIIDjDOR2hjrXU0DVa1ErlK7tcJJHu4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYWRl/d2l0aGxvdmVpbmlu/ZGlhLmNvLnVrL2Nk/bi9zaG9wL3Byb2R1/Y3RzL2xhZGR1X2dv/cGFsX3NpemU1XzAx/X2xyXzgwMHguanBn/P3Y9MTY0MzMyOTU0/MA",
  ]

  useEffect(() => {
    setIsVisible(true)
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.pageYOffset / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(imageInterval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-1 bg-[#E68A00] z-50 transition-all duration-300"
      />

      <div className="relative px-12 min-h-[600px] bg-white overflow-hidden">
        {/* Mandala Background - Contained within hero section */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none transform origin-center"
          style={{
            backgroundImage: `url("https://images.template.net/wp-content/uploads/2017/01/31043554/Geometric-Mandala-Pattern.jpg?width=530")`,
            backgroundSize: "200px 200px",
            backgroundPosition: "center",
            transform: "rotate(15deg) scale(1.2)",
          }}
        />

        <div className="container mx-auto px-4 py-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            {/* Left content section */}
            <div
              className={`flex-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-3xl md:text-5xl font-serif mb-4 text-[#6F4E37]"
              >
                Discover Sacred
                <span className="block text-[#E68A00]">Spiritual Treasures</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-base md:text-lg mb-6 text-[#6F4E37] max-w-xl"
              >
                Explore our curated collection of authentic Rudraksha malas, sacred beads, and spiritual accessories for
                your devotional journey.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <button className="bg-[#E68A00] hover:bg-[#D4AF37] text-white px-6 py-2.5 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2 text-sm">
                  Shop Collection
                  <ChevronRight size={18} />
                </button>

                <button className="border-2 border-[#E68A00] text-[#E68A00] hover:bg-[#E68A00] hover:text-white px-6 py-2.5 rounded-full font-medium transition-colors duration-300 text-sm">
                  Learn More
                </button>
              </motion.div>
            </div>

            {/* Right image section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 relative max-w-lg mx-auto lg:mx-0"
            >
              <div className="relative w-full aspect-square rounded-full overflow-hidden bg-[#D4AF37]/10 p-6">
                <AnimatePresence>
                  {images.map((src, index) => (
                    index === currentImageIndex && (
                      <motion.img
                        key={src}
                        src={src || "/placeholder.svg"}
                        alt={`Sacred Rudraksha Mala ${index + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full h-full object-cover rounded-full absolute top-0 left-0"
                      />
                    )
                  ))}
                </AnimatePresence>

                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-[#C0392B]/10 rounded-full" />
                <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-[#196F3D]/10 rounded-full" />
              </div>

              {/* Floating badges */}
              <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full shadow-md">
                <div className="text-[#196F3D] text-xs font-medium">100% Authentic</div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-full shadow-md">
                <div className="text-[#C0392B] text-xs font-medium">Blessed & Certified</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Existing Components - Kept as per original code */}
      <LatestArrivals />
      <FeaturedProducts />
      <TestimonialSlider />
      <FAQSection />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {scrollProgress > 20 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-[#E68A00] text-white p-3 rounded-full shadow-lg hover:bg-[#D4AF37] transition-colors duration-300"
          >
            <ChevronRight size={24} className="transform rotate-[-90deg]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home