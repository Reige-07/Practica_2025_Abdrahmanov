import React from 'react'
import c from '../assets/c.svg'
const Header = () => {
  return (
    <div class='_header flex justify-between pt-5 pl-10 pr-10 pb-5'>
        <div class='icon_div bg-[#4C40F7] backdrop-blur-[30px] p-3.5 rounded-2xl' >
            <img className=''  src={c} width={20} height={20}
            alt="head-icon" />
        </div>
        <div className='header-HomeWorkAbout flex gap-20'>
          <h6 className='text-[20px] text-center text-[#6B6B6B]'>Home</h6>
          <h6 className='text-[20px] text-center text-[#6B6B6B]'>Work</h6>
          <h6 className='text-[20px] text-center text-[#6B6B6B]'>About</h6>
        </div>
        <div className='header-button'>
          <button className='buttonConUs bg-[#4C40F7] p-3.5 text-[#FFFFFF] rounded-[12px]'>Contact us</button>
        </div>
    </div>
  )
}

export default Header