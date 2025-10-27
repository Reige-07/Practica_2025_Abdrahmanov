import React from 'react'
import c from '../assets/c.svg'
const Header = () => {
  return (
    <div className='header-ewerything'>
        <div className='header-icon'>
            <img className='bg-[#4C40F7]' src={c} alt="head-icon" />
        </div>
        <div className='header-HomeWorkAbout'></div>
        <div className='header-button'></div>
    </div>
  )
}

export default Header