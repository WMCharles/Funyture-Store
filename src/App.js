import React, {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import Products from './components/Products';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
