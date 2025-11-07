import React from 'react'
import strelka from "../assets/Group.svg"

const StartANewProject = () => {
  return (
    <div className='Start a New Project'>
        <div className='AreYouReadyFor bg-[#FFCC00] text-center w-400 h-85'>
            <h3 className=' font-bold text-[16px] tracking-0 text-[#FFFFFF]'>Are You Ready For</h3>
            <h1 className=' font-bold text-[42px] tracking-0 text-[#FFFFFF]'>Start a New Project</h1>
            <div>
                <button className='buttonConUs flex bg-[#4C40F7] p-3.5 text-[#FFFFFF] rounded-[12px]'>
                    Start now
                    <img className='pl-1' src={strelka} alt="" width={20} height={14}/>
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default StartANewProject