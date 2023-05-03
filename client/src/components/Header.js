import { useState } from 'react'
import Logo from '../assets/logos/logo-title.png'

import MenuPopUp from './MenuPopUp'

const Header = () => {

  // Menu Modal (Pop Up)
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='navbar'>
      <div className='navbar__left'>
        <img src={Logo} alt='Logo' className='navbar__logo' />
      </div>
      <div className='navbar__right'>
        <button className='navbar__title' onClick={toggleOpen}>
          <span className='menu'>
          Menu
          </span>
        </button>
        <div className={isOpen ? 'open menu__info-container' : 'menu__info-container'}>
        <button className='menu__close' onClick={toggleOpen}>
        </button>
        {isOpen  && <MenuPopUp />}
      </div>
      </div>
    </header>
  )
}

export default Header






