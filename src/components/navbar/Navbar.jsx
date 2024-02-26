import React from 'react'
import {Link} from 'react-router-dom'
import "./navbar.css"
import { useAuth } from '../../store/auth'

function Navbar() {
  const {isLoggedin} = useAuth()
  return (
    <>
    <div className="container">
        <div className="">
            <Link  to="/">Thapa Technical</Link>
        </div>

        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                { !isLoggedin ? 
                
                <>
                <li><Link to="login">Login</Link></li>
                <li><Link to="register">Register</Link></li>
              </>
                :
                <li><Link to={'/logout'}>Logout</Link></li>
              }
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar