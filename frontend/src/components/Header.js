import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="navbar">
        <div className="logo">
            <ul><h1><Link to='/'>BOOK STORE</Link></h1></ul>
        </div>
        <div className="links">
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/books'>Books</Link>
                </li>
                <li>
                    <Link to='/add'>Add Books</Link>
                </li>
                {/* <li>
                    <Link to='/search'>Search</Link>
                </li> */}
                
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header