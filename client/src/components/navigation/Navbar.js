import React, { useState } from 'react'
// import { MusicMenuItems, CommercialMenuItems } from '../data/MenuItems'
import Logo from '../../assets/logos/logo-title.png'


function Navbar() {
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
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="navbar-logo" />
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
          <a href="#" className="navbar-contact">
          Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
