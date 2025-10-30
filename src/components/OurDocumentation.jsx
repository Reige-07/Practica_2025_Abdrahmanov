import React from 'react'
import meeting from "../assets/meeting.png"
import ODBackground from "../assets/OurDocumentationBackground.png"

const OurDocumentation = () => {
  return (
    <div className='OurDocumentation bg-[url(../assets/OurDocumentationBackground.png)] pt-30 pb-30'>
        <div className='OurDocumentationText text-center '>
            <h2 className=' text-[#FF2D59] text-center font-[600px] text-[20px] leading-[5] tracking-[0px]'>
                Our Documentation
            </h2>

            <h1 className=' text-[#111029] text-center font-[600px] text-[42px] tracking-[-0.1px]'>
                See what our profile is like and how we work for your business
            </h1>
        </div>
        
        <div className='OurDocumentationImage'>
            <img src={meeting} alt="" />
        </div>
        
    </div>
  )
}

export default OurDocumentation