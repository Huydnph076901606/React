import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Header = props => {
    return (
          <header className="header-section">
        <div className="container">
          {/* logo */}
          <a className="site-logo" href="index.html">
            <img src="img/logo.png" alt="" />
          </a>
          <div className="user-panel">
            <a href="#">Login</a>  /  <a href="#">Register</a>
          </div>
          {/* responsive */}
          <div className="nav-switch">
            <i className="fa fa-bars" />
          </div>
          {/* site menu */}
          <nav className="main-menu">
            <ul>
              <li>
              <Link to="/">Home</Link></li>
              <li><Link to="single-product">Games</Link></li>
              <li><a href="categories.html">Blog</a></li>
              <li><a href="community.html">Forums</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div>
        <section className="hero-section">
             <img src="slider-1.jpg"></img>
              <div className="container">
                <h2>The Best <span>Games</span> Out There</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada <br /> lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. <br />Suspendisse cursus faucibus finibus.</p>
                <a href="#" className="site-btn">Read More</a>
              </div>  
      </section>
      </div>
      </header>
      
      
    )
}
Header.propTypes = {

}

export default Header
