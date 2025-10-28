import React from 'react'
import strelka from "../assets/Group.svg"

const MakeYourBusiness = () => {
  return (
    <div className=''>
        <div className='MakeText'>
            <h1 className='text-[56px] text-[#111029] leading-[72px] tracking-[-0.4px] font-[600px]'>Make your business</h1>
            <h1 className='text-[56px] text-[#FF6800] leading-[72px] tracking-[-0.4px] font-[600px]'>more powerful</h1>
            <h1 className='text-[56px] text-[#111029] leading-[72px] tracking-[-0.4px] font-[600px]'>with us</h1>
            <h6 className='text-[18px] text-[#6B6B6B] leading-[32px] tracking-[0px] font-[400px]'>We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.</h6>
            <button className='buttonConUs bg-[#4C40F7] p-3.5 text-[#FFFFFF] rounded-[12px]'>
                Gate Started
                <img src={strelka} alt="" width={20} height={14}/>
            </button>
        </div>
        <div className='MakeImages'></div>
    </div>
  )
}

export default MakeYourBusiness