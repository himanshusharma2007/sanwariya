import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./Screens/Cart";
import ContactUs from "./Screens/ContactUs";
import AboutUs from "./Screens/AboutUs";
import Products from "./Screens/Products";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
      {!window.location.pathname.includes('cart') && <Footer />}
    </BrowserRouter>
  );
}

export default App;
