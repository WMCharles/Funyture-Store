import React from 'react'
import { Link, Outlet} from "react-router-dom"

export default function NavBar() {
  return (
    <div className='header'>
        <Link to="/">FUNiture</Link>
        <div className='menu-items'>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <Outlet/>
    </div>
  )
}
