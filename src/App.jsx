import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Products from './Pages/Products.jsx'
import ProductDetail from "./Components/second-section/ProductDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop.jsx";
function App() {
  return (
   <BrowserRouter>
   <ScrollToTop />
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/products' element={<Products />} />
    <Route path="/product-details/:id" element={<ProductDetail />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
