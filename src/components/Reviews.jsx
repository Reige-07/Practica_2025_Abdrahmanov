import React from 'react'
import Left from '../assets/Reviews/LeftStrel.png'
import Right from '../assets/Reviews/RightStrel.png'
import ZapZap from '../assets/Reviews/ZapZap.png'
import Slider from '../assets/Reviews/NumberSlide.png'

const Reviews = () => {
  return (
    <div className='Reviews '>
        <div className='strleft'><img src={Left} alt=""/></div>

        <div></div>
        
        <div className='strright'><img src={Right} alt="" /></div>
    </div>
  )
}

export default Reviews