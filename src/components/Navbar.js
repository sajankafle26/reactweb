import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const { quantity } = useSelector((state) => state.cart);
  return (
    <nav className='bg-danger text-light p-5'>
        <h1>Navbar</h1> 
         <Link to="/cart" className="cart">
    
    {quantity !== 0 && <span>{quantity}</span>}
  </Link></nav>
  )
}

export default Navbar