import React from 'react'

import logo from '../assets/logo_hrnet.png'

/**
 * builds the header
 * @returns header
 */

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
    </header>
  )
}

export default Header
