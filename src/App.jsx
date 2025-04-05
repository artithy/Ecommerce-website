import { useState } from 'react';
import './App.css';
import Menu from "./component/Menu";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Footer from "./component/Footer";
import StarRating from "./component/StarRating";
import ViewAll from "./component/ViewAll";
import BestViewAll from "./component/BestViewAll";
import Wishlist from "./component/Wishlist";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import AccountPage from "./component/AccountPage";
import MyProfile from "./component/MyProfile";
import MyWishlist from "./component/MyWishlist";
import SeeAll from "./component/SeeAll";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // Cart state to store added products
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to cart
  };

  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} /> {/* Pass addToCart to Home */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/star" element={<StarRating />} />
            <Route path="/viewall" element={<ViewAll />} />
            <Route path="/bestviewall" element={<BestViewAll />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart cart={cart} />} /> {/* Pass cart to Cart */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/mywishlist" element={<MyWishlist />} />
            <Route path="/see-all" element={<SeeAll />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
