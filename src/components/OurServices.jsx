import React from 'react'
import icon_Ideate from "../assets/icon_Ideate.png"
import icon_Design from "../assets/icon_Design.png"
import icon_WebDevelopment from "../assets/icon_WebDevelopment.png"
import icon_AppDevelopment from "../assets/icon_AppDevelopment.png"
import icon_BusinessGrowth from "../assets/icon_BusinessGrowth.png"
import icon_Digitalmarketing from "../assets/icon_Digitalmarketing.png"

import str_edit from "../assets/Str_edit.png"
import str_usually from "../assets/Str_usually.png"

const OurServices = () => {
  return (
    <div className='OurServices mt-30'>
        <div className='TextServices'>
            <h1 className=' text-[#FF2D59] text-center font-[600px] text-[20px] leading-[5] tracking-[0px] align-middle'>
                Our Services
            </h1>
            <h1 className=' text-[#111029] text-center font-bold text-[42px] tracking-[-0.1px] align-middle'>
                The various services we provide to make your business more powerful
            </h1>
        </div>

        <div className='designCardsTop flex gap-20 mt-30 justify-center'>
            <div className='Ideate_card w-100 h-130 bg-[#4C40F7] rounded-3xl text-center drop-shadow-xl'>
                <div className="pr-5 pl-5 pt-30 pb-15 flex flex-col justify-between align-middle items-center h-full">
                    <img className='' src={icon_Ideate} alt="" width={150} height={150}/>
                    <h1 className='H1_Ideate text-[#FFFFFF] font-[600px] text-[20px]'>Ideate</h1>
                    <h2 className='H2_Ideate text-[#FFFFFF] font-[400px] text-[18px]'>We help you develop creative ideas so that your business can grow more rapidly</h2>
                    <img src={str_edit} alt="" width={50} height={50}/>
                </div>
            </div>

            <div className='Design_card w-100 h-130 bg-[#FFFFFF] rounded-3xl text-center drop-shadow-xl'>
                <div className="pr-5 pl-5 pt-30 pb-15 flex flex-col justify-between align-middle items-center h-full">
                    <img className='' src={icon_Design} alt="" width={150} height={150}/>
                    <h1 className='H1_Design text-[#111029] font-[600px] text-[20px]'>Design</h1>
                    <h2 className='H2_Design text-[#6B6B6B] font-[400px] text-[18px]'>We provide services with the best designs than our designer team for your business</h2>
                    <img src={str_usually} alt="" width={50} height={50}/>
                </div>            
            </div>

            <div className='WebDevelopment_card w-100 h-130 bg-[#FFFFFF] rounded-3xl text-center drop-shadow-xl'>
                <div className="pr-5 pl-5 pt-30 pb-15 flex flex-col justify-between align-middle items-center h-full">
                    <img className='' src={icon_WebDevelopment} alt="" width={150} height={150}/>
                    <h1 className='H1_WebDevelopment text-[#111029] font-[600px] text-[20px]'>Web Development</h1>
                    <h2 className='H2_WebDevelopment text-[#6B6B6B] font-[400px] text-[18px]'>We help develop company websites to be more professional and attractive</h2>
                    <img src={str_usually} alt="" width={50} height={50}/>
                </div>            
            </div>
        </div>

        <div className='designCardsBottom flex gap-20 mt-10 justify-center'>
            <div className='AppDevelopment_card w-100 h-130 bg-[#FFFFFF] rounded-3xl text-center drop-shadow-xl'>
                <div className="pr-5 pl-5 pt-30 pb-15 flex flex-col justify-between align-middle items-center h-full">
                    <img className='' src={icon_AppDevelopment} alt="" width={150} height={150}/>
                    <h1 className='H1_AppDevelopment text-[#111029] font-[600px] text-[20px]'>App Development</h1>
                    <h2 className='H2_AppDevelopment text-[#6B6B6B] font-[400px] text-[18px]'>We help develop company mobile apps to be more professional and attractive</h2>
                    <img src={str_usually} alt="" width={50} height={50}/>
                </div>            
            </div>

            <div className='BusinessGrowth_card w-100 h-130 bg-[#FFFFFF] rounded-3xl text-center drop-shadow-xl'>
                <div className="pr-5 pl-5 pt-30 pb-15 flex flex-col justify-between align-middle items-center h-full">
                    <img className='' src={icon_BusinessGrowth} alt="" width={150} height={150}/>
                    <h1 className='H1_BusinessGrowth text-[#111029] font-[600px] text-[20px]'>Business Growth</h1>
                    <h2 className='H2_BusinessGrowth text-[#6B6B6B] font-[400px] text-[18px]'>We also provide services by providing input for your business growth</h2>
                    <img src={str_usually} alt="" width={50} height={50}/>
                </div>            
            </div>

            <div className='Digitalmarketing_card w-100 h-130 bg-[#FFFFFF] rounded-3xl text-center drop-shadow-xl'>
                <div className="pr-5 pl-5 pt-30 pb-15 flex flex-col justify-between align-middle items-center h-full">
                    <img className='' src={icon_Digitalmarketing} alt="" width={150} height={150}/>
                    <h1 className='H1_Digitalmarketing text-[#111029] font-[600px] text-[20px]'>Digital marketing</h1>
                    <h2 className='H2_Digitalmarketing text-[#6B6B6B] font-[400px] text-[18px]'>We also help you market your products through an online marketplace</h2>
                    <img src={str_usually} alt="" width={50} height={50}/>
                </div>            
            </div>
        </div>
    </div>
  )
}

export default OurServices