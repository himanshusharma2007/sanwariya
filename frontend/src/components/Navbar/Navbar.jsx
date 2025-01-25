import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu, X, Search, ShoppingCart, User, LogOut } from "lucide-react"
import logo from "../../images/pnglogo.png"
const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/AboutUs", label: "About" },
  { href: "/contactUs", label: "Contact" }, 
] 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const navigate = useNavigate()
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#6F4E37] bg-[#F8F5F0]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mr-2 rounded p-1 text-[#C0392B] hover:bg-[#F8F5F0] lg:hidden"
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
              <Link key={link.href} to={link.href} className="text-[#6F4E37] hover:text-[#D4AF37] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search, Cart, and User */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-64 rounded-lg border border-[#6F4E37] bg-white px-4 py-2 pl-10 outline-none"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#6F4E37]" />
              </div>
            </div>

            <button className="relative text-[#C0392B] hover:text-[#D4AF37] transition-colors" onClick={()=>navigate('/cart')}>
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#E68A00] text-xs text-white">
                0
              </span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="text-[#C0392B] hover:text-[#D4AF37] transition-colors"
              >
                <User className="h-6 w-6" />
              </button>

              {/* User Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-md border border-[#6F4E37] bg-white py-1 shadow-lg">
                  {isLoggedIn ? (
                    <>
                      <Link to="/profile" className="block px-4 py-2 text-[#6F4E37] hover:bg-[#F8F5F0]">
                        Profile
                      </Link>
                      <Link to="/allOrders" className="block px-4 py-2 text-[#6F4E37] hover:bg-[#F8F5F0]">
                        Orders
                      </Link>
                      <button
                        onClick={() => setIsLoggedIn(false)}
                        className="flex w-full items-center px-4 py-2 text-[#C0392B] hover:bg-[#F8F5F0]"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setIsLoggedIn(true)}
                      className="block w-full px-4 py-2 text-left text-[#E68A00] hover:bg-[#F8F5F0]"
                    >
                      Log in
                    </button>
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
                  className="block rounded-md px-3 py-2 text-[#6F4E37] hover:bg-[#F8F5F0] hover:text-[#D4AF37]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-3">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search products..."
                    className="w-full rounded-lg border border-[#6F4E37] bg-white px-4 py-2 pl-10"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#6F4E37]" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

