import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./components/productCards/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
