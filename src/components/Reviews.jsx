import React from 'react'
import Left from '../assets/Reviews/LeftStrel.png'
import Right from '../assets/Reviews/RightStrel.png'
import ZapZap from '../assets/Reviews/ZapZap.png'
import Slider from '../assets/Reviews/NumberSlide.png'

const Reviews = () => {
  return (
    <div className='Reviews bg-[#FE9602] flex justify-center pt-40 pb-40'>
        <div className='strleft pt-40'><img src={Left} alt=""/></div>

        <div className='Coment grid grid-flow-col grid-rows-3 h-100'>
          <div className='ComentImg w-200 flex justify-center h-30'><img src={ZapZap} alt="" width={120}/></div>
          <div className='ComentText w-200'>
            <h2 className=' font-[400px] text-[28px] text-[#FFFF] tracking-[-0.1px] text-center'>We are serious about providing our best service to<br/>all the customers we help. Customers satisfaction is<br/>our number one priority.</h2>
            <h1 className=' font-bold text-[20px] text-[#FFFF] tracking-[0px] text-center pt-10'>Mark Garfield</h1>
            <h1 className=' font-bold text-[20px] text-[#FFFF] tracking-[0px] text-center'>CEO & Head of Product</h1>
          </div>
          <div className='ComentImgS w-200 flex justify-center h-1'><img src={Slider} alt="" width={72} /></div>
        </div>
        
        <div className='strright pt-40'><img src={Right} alt="" /></div>
    </div>
  )
}

export default Reviews