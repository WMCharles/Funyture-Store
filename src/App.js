import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from "./components/Cart/Cart"
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import './App.css';
import Item from "./components/Products/Item";

function App() {
  // Products State
  const [products, setProducts] = useState([])
  // Cart State
  const [cart, setCart] = useState([])

  // Fetching Products Data
  useEffect(() => {
    fetch("https://blowg.herokuapp.com/products")
    .then((res) => res.json())
    .then((data) => setProducts(data))
  },[])

  // Add Item to Cart
  function addToCart(item){
    const filterCart = cart.filter((product) => product.id !== item.id)
    const newCart = [...filterCart, item]
    setCart(newCart)
  }

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="products" element={<Products products={products}/>}/>
        <Route path="products/:title" element={<Item itemData={products} addToCart={addToCart}/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
