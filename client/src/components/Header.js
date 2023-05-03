import React, { useState } from 'react'
import Logo from '../assets/logos/logo-title.png'
import { Link } from "react-router-dom"

import MenuPopUp from './MenuPopUp'

const Header = () => {

      // Menu Modal (Pop Up)
      const [isOpen, setIsOpen] = useState(false);

      const toggleOpen = () => {
        setIsOpen(!isOpen);
      }

  return (
    <header className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img src={Logo} alt="Logo" className="navbar__logo" />
        </Link>
      </div>
      <div className="navbar__right">
        <button className="navbar__title" onClick={toggleOpen}>
          <span className='menu'>
          Menu
          </span>
        </button>
        <div className={isOpen ? 'open menu__info-container' : 'menu__info-container'}>
        <button className="menu__close" onClick={toggleOpen}>
        </button>
        {isOpen  && <MenuPopUp />}
      </div>
      </div>
    </header>
  )
}

export default Header






// import React, { useState } from 'react'
// import Logo from '../assets/logos/logo-title.png'
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [showMusicDropdown, setShowMusicDropdown] = useState(false)
//   const [showCommercialsDropdown, setShowCommercialsDropdown] = useState(false)

//   // toggle music dropdown visibility
//   const handleMusicClick = () => {
//     setShowMusicDropdown(!showMusicDropdown)
//   }

//   // toggle commercials dropdown visibility
//   const handleCommercialsClick = () => {
//     setShowCommercialsDropdown(!showCommercialsDropdown)
//   }

//   return (
//     <header className="navbar">
//       <div className="navbar-left">
//         <Link to="/" className="navbar">
//           <img src={Logo} alt="Logo" className="navbar-logo" />
//         </Link>
//         <div className="navbar-title" onClick={handleMusicClick}>
//           Music
//           {showMusicDropdown && (
//             <div className="navbar-dropdown">
//               <a href="#">Link 1</a>
//               <a href="#">Link 2</a>
//               <a href="#">Link 3</a>
//               <a href="#">Link 4</a>
//             </div>
//           )}
//         </div>
//         <div className="navbar-title" onClick={handleCommercialsClick}>
//           Commercials
//           {showCommercialsDropdown && (
//             <div className="navbar-dropdown">
//               <a href="#">Link 1</a>
//               <a href="#">Link 2</a>
//               <a href="#">Link 3</a>
//               <a href="#">Link 4</a>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="navbar-right">
//         <div className="navbar-title">
//           {/* <Link to="/contact" className="navbar-contact"> */}
//             Contact
//           {/* </Link> */}
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header
