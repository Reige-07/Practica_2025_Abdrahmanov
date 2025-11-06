import React from 'react'
import fiveStars from '../assets/Testimonials/FiveStars.png'
import Ronald from '../assets/Testimonials/RonaldRichards.png'
import Guy from '../assets/Testimonials/GuyHawkins.png'

const Testimonials = () => {
  return (
    <div className='Testimonials'>
        <div className='TextTestimonials'>
            <h1 className=' text-[#FF2D59] text-center font-bold text-[20px] leading-[5] tracking-[0px] align-middle'>
                Testimonials
            </h1>
            <h1 className=' text-[#111029] text-center font-bold text-[42px] tracking-[-0.1px] align-middle'>
                Some testimonials from our customers
            </h1>
        </div>

        <div className='ListTestimonialsTop'>

            <div className='GoogleIncCard grid grid-flow-col grid-rows-3 rounded-[15px] w-88 h-104 shadow-lg shadow-blue-500/50'>
                <div className=' flex justify-center'><img className=' ' src={Ronald} alt="" /></div>
                <div className='GoogleIncCardText text-center '>
                    <h1 className=' text-[#111029] font-bold text-[24px] tracking-[0px]'>Ronald Richards</h1>
                    <h1 className=' text-[#ABAFC7] font-[400px] text-[16px] m-5 tracking-[0px]'>Google inc.</h1>
                    <h1 className=' text-[#70798B] font-[400px] text-[18px] tracking-[0px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h1>
                    <div className=' flex justify-center h-10 pt-5'><img className=' h-5' src={fiveStars} alt="" /></div>
                </div>
            </div>

            <div className='PaypalIncCard grid grid-flow-col grid-rows-3 rounded-[15px] w-88 h-104 shadow-lg shadow-blue-500/50'>
                <div className=' flex justify-center'><img className=' h-30' src={Guy} alt="" width={120}/></div>
                <div className='PaypalIncCardText text-center '>
                    <h1 className=' text-[#111029] font-bold text-[24px] tracking-[0px]'>Guy Hawkins</h1>
                    <h1 className=' text-[#ABAFC7] font-[400px] text-[16px] m-5 tracking-[0px]'>Paypal inc.</h1>
                    <h1 className=' text-[#70798B] font-[400px] text-[18px] tracking-[0px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h1>
                    <div className=' flex justify-center h-10 pt-5'><img className=' h-5' src={fiveStars} alt="" /></div>
                </div>            
            </div>
        </div>
    </div>
  )
}

export default Testimonials