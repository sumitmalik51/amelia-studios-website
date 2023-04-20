import React from "react";
import Logo from '../assets/logos/logo-contact.png'


const Contact = () => {
  // Render contact page content
  return (
    <div className='contact-wrapper'>
      <div className='contact-container'>
        <div className='contact-text'>
          <h4>
            BIO<br />
            E: hello@ameliastudios.co.uk<br />
            T: +447817678382<br />
            13 Berwick Street<br /> Soho, W1F 0PW<br />
          </h4>
          <img src={Logo} alt='as-logo' className='contact-logo'></img>
        </div>
      </div>
    </div>
  )
}


export default Contact;
