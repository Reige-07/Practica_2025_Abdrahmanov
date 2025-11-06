import React from 'react'
import arrowUp from '../assets/FrequentlyAskQuestion/ArrowUp.png'
import arrowDown from '../assets/FrequentlyAskQuestion/ArrowDown.png'

const FrequentlyAskQuestion = () => {
  return (
    <div className='FrequentlyAskQuestion pt-60 pb-60'>
        <div className='TextFrequentlyAskQuestion pb-20'>
            <h1 className=' text-[#FF2D59] text-center font-bold text-[20px] leading-[5] tracking-[0px] align-middle'>
                Frequently Ask Question
            </h1>
            <h1 className=' text-[#111029] text-center font-bold text-[42px] tracking-[-0.1px] align-middle'>
                Some of our frequently asked questions
            </h1>
        </div>

        <div className='ListQuestions flex justify-center'>
            <div className='ListQuestions2 w-250'>
                <div className='Answer p-3.5 border border-[#4C40F7] bg-[#FFFFFF] rounded-[5px] '>
                    <div className=' flex justify-between pb-5'>
                        <h2 className=' font-[400px] text-[#111029] text-[16px] tracking-0'>What are the services provided to customers?</h2>
                        <img src={arrowUp} alt="" />
                    </div>
                    
                    <div className=' border-t border-t-[#D8D8D8] pt-5'>
                        <h2 className=' font-[400px] text-[#6B6B6B] text-[18px] tracking-0'>
                            Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs,
                            develop websites and mobile applications, provide support for the growth of business ideas, to help customers
                            market their products online through the marketplace.
                        </h2>
                    </div>
                </div>

                <div className='Question p-3.5 border border-[#D8D8D8] bg-[#FFFFFF] rounded-[5px] flex justify-between mt-10'>
                    <h2 className=' font-[400px] text-[#111029] text-[16px] tracking-0'>How can I submit a proposal for cooperation?</h2>
                    <img src={arrowDown} alt="" />
                </div>

                <div className='Question p-3.5 border border-[#D8D8D8] bg-[#FFFFFF] rounded-[5px] flex justify-between mt-10'>
                    <h2 className=' font-[400px] text-[#111029] text-[16px] tracking-0'>I come from a faraway place, can collaboration be done full time online through several meeting applications?</h2>
                    <img src={arrowDown} alt="" />
                </div>

                <div className='Question p-3.5 border border-[#D8D8D8] bg-[#FFFFFF] rounded-[5px] flex justify-between mt-10'>
                    <h2 className=' font-[400px] text-[#111029] text-[16px] tracking-0'>How do I get the payment complete?</h2>
                    <img src={arrowDown} alt="" />
                </div>

                <div className='Question p-3.5 border border-[#D8D8D8] bg-[#FFFFFF] rounded-[5px] flex justify-between mt-10'>
                    <h2 className=' font-[400px] text-[#111029] text-[16px] tracking-0'>How long can the collaboration last?</h2>
                    <img src={arrowDown} alt="" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default FrequentlyAskQuestion