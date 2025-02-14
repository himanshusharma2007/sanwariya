import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./Screens/Cart";
import ContactUs from "./Screens/ContactUs";
import AboutUs from "./Screens/AboutUs";
import Products from "./Screens/Products";
import Checkout from "./Screens/Checkout";
import OrderConfirmation from "./Screens/OrderConfirmation";
import AllOrders from "./Screens/AllOrders";
import Profile from "./Screens/Profile";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Wishlist from "./Screens/Wishlist";
import ProductDetails from "./components/productCards/ProductDetails";
import HeroCarousel from "./Screens/HeroCarousel";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="orderConfirmation" element={<OrderConfirmation />} />
        <Route path="/allOrders" element={<AllOrders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/corosal" element={<HeroCarousel />} />
      </Routes>
      {!window.location.pathname.includes("cart") && <Footer />}
    </BrowserRouter>
  );
}

export default App;
