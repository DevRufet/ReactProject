import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
function Navbar() {
  return (
   <>
   <div className='navbar'>
       <div>
   <Link to={'/'}>Home</Link>
   <Link to={'/detail'}>Detail</Link>
   <Link to={'/basket'}>Basket</Link>
   <Link to={'/wishlist'}>WishList</Link>
   </div>
   </div>
   </>
  )
}

export default Navbar