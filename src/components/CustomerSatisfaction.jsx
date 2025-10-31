import React from 'react'

const CustomerSatisfaction = () => {
  return (
    <div className='CustomerSatisfaction bg-[#F9F9FD] flex justify-center gap-5 pt-20'>
        <div className='CustomerStatisticsCardsLeft pt-10'>
            <div className='Card70k w-65 h-80 bg-[#FFFFFF] rounded-3xl drop-shadow-xl m-5'>
                <h1 className='CardNumbers pt-10 font-bold text-[56px] leading-36 text-[#4C40F7] text-center'>70K+</h1>
                <h2 className='CardTeeeext font-[400px] text-[18px]  text-[#111029] text-center'>We have more than<br/>customers</h2>
            </div>

            <div className='Card10M+ w-65 h-80 bg-[#FFFFFF] rounded-3xl drop-shadow-xl m-5'>
                <h1 className='CardNumbers pt-10 font-bold text-[56px] leading-36 text-[#FF2D59] text-center'>10M+</h1>
                <h2 className='CardTeeeext font-[400px] text-[18px]  text-[#111029] text-center'>People who are helped<br/>because of our hard<br/>work</h2>
            </div>
        </div>

        <div className='CustomerStatisticsCardsRight'>
            <div className='Card100+ w-65 h-80 bg-[#FFFFFF] rounded-3xl drop-shadow-xl m-5'>
                <h1 className='CardNumbers pt-10 font-bold text-[56px] leading-36 text-[#FF6800] text-center'>100+</h1>
                <h2 className='CardTeeeext font-[400px] text-[18px]  text-[#111029] text-center'>Projects we have<br/>completed</h2>
            </div>

            <div className='Card200+ w-65 h-80 bg-[#FFFFFF] rounded-3xl drop-shadow-xl m-5'>
                <h1 className='CardNumbers pt-10 font-bold text-[56px] leading-36 text-[#4ADB61] text-center'>200+</h1>
                <h2 className='CardTeeeext font-[400px] text-[18px]  text-[#111029] text-center'>Support from world-<br/>renowned companies</h2>
            </div>
        </div>

        <div className='CustomerSatisfactionText '>
            <div className='h1text'>
                <h1 className=' text-[#111029] font-bold text-[56px] leading-15 tracking-[-0.1px]'>
                    Customer<br/>satisfaction is<br/>our first priority
                </h1>

                <h2 className=' text-[#6B6B6B] font-[600px] text-[18px] tracking-[0px] pt-3'>
                    We serve many customers, ranging from small<br/>
                    businesses, medium entrepreneurs, to world-<br/>
                    renowned companies. Their satisfaction is our<br/>
                    pleasure. We strive to provide the best service by:
                </h2>
            </div>
            <div className='listText'>
                <ul className=' list-image-[url(/src/assets/galochka.png)] pt-10 pl-10 list-outside'>
                    <li className=' text-[#6B6B6B] font-[400px] text-[18px] tracking-[0px] '>Provide idea support from our creative team</li>
                    <li className=' text-[#6B6B6B] font-[400px] text-[18px] tracking-[0px] '>Provide attractive and professional design services</li>
                    <li className=' text-[#6B6B6B] font-[400px] text-[18px] tracking-[0px] '>Support for service 24 hours a week</li>
                    <li className=' text-[#6B6B6B] font-[400px] text-[18px] tracking-[0px] '>Helping our customers to grow their business</li>
                    <li className=' text-[#6B6B6B] font-[400px] text-[18px] tracking-[0px] '>Provide support to market products through online marketplace </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CustomerSatisfaction