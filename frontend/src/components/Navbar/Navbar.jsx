import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Menu, X, Search, ShoppingCart, User, LogOut, Heart, Settings, Bell } from "lucide-react"
import logo from "../../images/pnglogo.png"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/AboutUs", label: "About" },
  { href: "/contactUs", label: "Contact" }, 
] 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [cartItemCount, setCartItemCount] = useState(2)
  const [searchQuery, setSearchQuery] = useState("")
  const [notifications, setNotifications] = useState(3) // Example notification count

  const navigate = useNavigate()
  const location = useLocation()

  // Close mobile menu and user dropdown when route changes
  useEffect(() => {
    setIsOpen(false)
    setShowUserMenu(false)
  }, [location])

  const handleLogin = () => {
    setIsLoggedIn(true)
    setShowUserMenu(false)
    navigate('/login')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate('/')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#6F4E37] bg-[#F8F5F0] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mr-2 rounded p-1 text-[#C0392B] hover:bg-[#E68A00]/10 transition-colors lg:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-[50px] w-[150px]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                to={link.href} 
                className={`text-[#6F4E37] hover:text-[#D4AF37] transition-colors ${
                  location.pathname === link.href ? 'font-bold text-[#E68A00]' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search, Cart, and User */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 rounded-lg border border-[#6F4E37] bg-white px-4 py-2 pl-10 outline-none focus:ring-2 focus:ring-[#E68A00]"
                />
                <Search 
                  className="absolute left-3 top-2.5 h-5 w-5 text-[#6F4E37]" 
                  onClick={handleSearch}
                />
              </div>
            </form>

            {/* Wishlist */}
            <button 
              className="relative text-[#6F4E37] hover:text-[#D4AF37] transition-colors"
              onClick={() => navigate('/wishlist')}
            >
              <Heart className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C0392B] text-xs text-white">
                3
              </span>
            </button>

            {/* Shopping Cart */}
            <button 
              className="relative text-[#C0392B] hover:text-[#D4AF37] transition-colors" 
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#E68A00] text-xs text-white">
                {cartItemCount}
              </span>
            </button>

            {/* Notifications */}
            <button 
              className="relative text-[#196F3D] hover:text-[#D4AF37] transition-colors"
              onClick={() => navigate('/notifications')}
            >
              <Bell className="h-6 w-6" />
              {notifications > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C0392B] text-xs text-white">
                  {notifications}
                </span>
              )}
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="text-[#C0392B] hover:text-[#D4AF37] transition-colors"
              >
                <User className="h-6 w-6" />
              </button>

              {/* User Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 rounded-md border border-[#6F4E37] bg-white py-1 shadow-lg">
                  {isLoggedIn ? (
                    <>
                      <div className="px-4 py-2 text-sm text-[#6F4E37] border-b border-[#6F4E37]/10">
                        Welcome, User
                      </div>
                      <Link 
                        to="/profile" 
                        className="flex items-center px-4 py-2 text-[#6F4E37] hover:bg-[#F8F5F0]"
                      >
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                      <Link 
                        to="/allOrders" 
                        className="flex items-center px-4 py-2 text-[#6F4E37] hover:bg-[#F8F5F0]"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Orders
                      </Link>
                      <Link 
                        to="/settings" 
                        className="flex items-center px-4 py-2 text-[#6F4E37] hover:bg-[#F8F5F0]"
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center px-4 py-2 text-[#C0392B] hover:bg-[#F8F5F0]"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </button>
                    </>
                  ) : (
                    <div className="py-2">
                      <button
                        onClick={handleLogin}
                        className="block w-full px-4 py-2 text-left text-[#E68A00] hover:bg-[#F8F5F0]"
                      >
                        Log in
                      </button>
                      <button
                        onClick={() => navigate('/signup')}
                        className="block w-full px-4 py-2 text-left text-[#196F3D] hover:bg-[#F8F5F0]"
                      >
                        Sign up
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-[#6F4E37] lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block rounded-md px-3 py-2 text-[#6F4E37] hover:bg-[#F8F5F0] hover:text-[#D4AF37] ${
                    location.pathname === link.href ? 'bg-[#E68A00]/10 font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Search */}
              <div className="mt-4 px-3">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="search"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-[#6F4E37] bg-white px-4 py-2 pl-10"
                  />
                  <Search 
                    className="absolute left-3 top-2.5 h-5 w-5 text-[#6F4E37]" 
                    onClick={handleSearch}
                  />
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}