import React from 'react'
import strelka from "../assets/Group.svg"
import hardImage from "../assets/womenAndPyatna.png"

const MakeYourBusiness = () => {
  return (
    <div className='MakeYourBusinessMrLoh flex justify-center'>
        <div className='MakeText pt-50'>
            <div className='h1Text'>
              <h1 className='text-[56px] text-[#111029] leading-[72px] tracking-[-0.4px] font-bold'>Make your business</h1>
              <h1 className='text-[56px] text-[#FF6800] leading-[72px] tracking-[-0.4px] font-bold'>more powerful</h1>
              <h1 className='text-[56px] text-[#111029] leading-[72px] tracking-[-0.4px] font-bold'>with us</h1>
            </div>

            <h6 className='text-[18px] text-[#6B6B6B] leading-[32px] tracking-[0px] font-[400px] w-80 align-middle pt-5 pb-5'>We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.</h6>
            <button className='buttonConUs flex bg-[#4C40F7] p-3.5 text-[#FFFFFF] rounded-[12px]'>
              Gate Started
              <img className='pl-1' src={strelka} alt="" width={20} height={14}/>
            </button>
        </div>
        <div className='MakeImages relative'>
          <img src={hardImage} className='women'/>
        </div>
    </div>
  )
}

export default MakeYourBusiness