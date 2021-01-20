import React from 'react';
import { NavLink ,Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

import '../../App.css';
import { useStateValue } from '../../StateProvider';

function Header() {
  const [show, handleShow] = useState(false);
  const[{basket}, dispatch]= useStateValue();
  console.log(basket ,'basketko state')

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
   
    return () => {
      window.addEventListener("Scroll", () => setTimeout(function(){
    }, 3000));
    };
  }, []);
  return (
    <header>
        <div className="container">
          <div className="row navbar-part">
            <nav 
              className={`navbar active navbar-expand-lg navbar-light navbar-row fixed-top ${show && "nav-black"} `}
            >
              <a className={` ${show && "logo-scroll"}`} href="#">
                <img src='/assest/gurash-logo.PNG'  className='logo-part' alt="no img"/>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink exact
                      to="/" activeClassName='selected'
                      className='nav-link current'
                      href="index.html"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/product" activeClassName='selected'
                      className="nav-link"
                      href="product.html"
                    >
                      Product
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" activeClassName='selected' className="nav-link" href="about.html">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/contact"
                      activeClassName='selected'
                      className="nav-link"
                      href="contact.html"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/blog"
                      activeClassName='selected'
                      className="nav-link"
                      href="contact.html"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <input
                      className="search-box-input mt-2 p-1"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </li>
                  <li className="nav-item">
                    <NavLink to="/signIn" activeClassName='selected' className="nav-link">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/signIn" activeClassName='selected' className="nav-link" href="signup.html">
                      SignUp
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink  to='/checkout' className="nav-link" href="Cart">
                      <i className="fas fa-shopping-cart"></i>
                      <span className='basket_number'>{basket?.length}</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          
        </div>
     
    </header>
  );
}

export default Header;
