import React from 'react'
import Comp from '../assets/Companies.png'

const SomeOfOurGreatCustomers = () => {
  return (
    <div className='SomeOfOurGreatCustomers pt-20'>
        <div className='SomeOfOurGreatCustomersText text-center '>
            <h2 className=' text-[#FF2D59] text-center font-[600px] text-[20px] leading-[5] tracking-[0px]'>
                Some of Our Great Customers
            </h2>

            <h1 className=' text-[#111029] font-bold text-center text-[42px] tracking-[-0.1px]'>
                Some of the companies we have worked with
            </h1>

            <div className=' flex justify-center pt-40 pb-50'><img  src={Comp} alt="" /></div>
        </div>
    </div>
  )
}

export default SomeOfOurGreatCustomers