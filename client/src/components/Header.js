import React, { useState } from 'react'
import Logo from '../assets/logos/logo-title.png'
import { Link } from "react-router-dom";

const Header = () => {
  const [showMusicDropdown, setShowMusicDropdown] = useState(false)
  const [showCommercialsDropdown, setShowCommercialsDropdown] = useState(false)

  // toggle music dropdown visibility
  const handleMusicClick = () => {
    setShowMusicDropdown(!showMusicDropdown)
  }

  // toggle commercials dropdown visibility
  const handleCommercialsClick = () => {
    setShowCommercialsDropdown(!showCommercialsDropdown)
  }

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-contact">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </Link>
        <div className="navbar-title" onClick={handleMusicClick}>
          Music
          {showMusicDropdown && (
            <div className="navbar-dropdown">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
            </div>
          )}
        </div>
        <div className="navbar-title" onClick={handleCommercialsClick}>
          Commercials
          {showCommercialsDropdown && (
            <div className="navbar-dropdown">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-title">
          {/* <Link to="/contact" className="navbar-contact"> */}
            Contact
          {/* </Link> */}
        </div>
      </div>
    </header>
  )
}

export default Header
