import React from 'react'
import Front_working_space from "../assets/WorkingSpace/FrontWorkingSpace.png"
import Guest_rest_room from "../assets/WorkingSpace/GuestRestRoom.png"

import Meeting_corner from "../assets/WorkingSpace/MeetingCorner.png"
import Single_working_space from "../assets/WorkingSpace/SingleWorkSpace.png"

import Guest_meeting_room from "../assets/WorkingSpace/GuestMeetingRoom.png"
import Kitchen_room from "../assets/WorkingSpace/KitchenRoom.png"

const WorkingSpace = () => {
  return (
    <div className='WorkingSpace pt-50'>
        <div className='WorkingSpaceText text-center '>
            <h2 className=' text-[#FF3B2F] text-center font-[600px] text-[20px] leading-[5] tracking-[0px]'>
                Working space
            </h2>

            <h1 className=' text-[#111029] font-bold text-center text-[42px] tracking-[-0.1px]'>
                Let’s meet our interior room decoration
            </h1>
        </div>
        <div className='ImageList flex justify-center gap-5 pt-20 pb-20'>
            <div className='ImageListLeft'>
                <div className='FrontWorkingSpace w-88 h-100 rounded-[5px]'>
                    <h1 className=' text-[#FFFFFF] font-[400px] text-[18px] leading-[3] tracking-[0px] align-middle pl-5 pt-85'>Front working space</h1>
                </div>

                <div className='GuestRestRoom w-88 h-137 rounded-[5px] mt-10'>
                    <h1 className=' text-[#FFFFFF] font-[400px] text-[18px] leading-[3] tracking-[0px] align-middle pl-5 pt-122'>Guest rest room</h1>
                </div>
            </div>

            <div className='ImageListCenter'>
                <div className='MeetingCorner w-88 h-132 rounded-[5px]'>
                    <h1 className=' text-[#FFFFFF] font-[400px] text-[18px] leading-[3] tracking-[0px] align-middle pl-5 pt-117'>Meeting corner</h1>
                </div>

                <div className='SingleWorkingSpace w-88 h-105 rounded-[5px] mt-10'>
                    <h1 className=' text-[#FFFFFF] font-[400px] text-[18px] leading-[3] tracking-[0px] align-middle pl-5 pt-90'>Single working space</h1>
                </div>
            </div>

            <div className='ImageListRight'>
                <div className='GuestMeetingRoom w-88 h-112 rounded-[5px]'>
                    <h1 className=' text-[#FFFFFF] font-[400px] text-[18px] leading-[3] tracking-[0px] align-middle pl-5 pt-97'>Guest meeting room</h1>
                </div>

                <div className='KitchenRoom w-88 h-125 rounded-[5px] mt-10'>
                    <h1 className=' text-[#FFFFFF] font-[400px] text-[18px] leading-[3] tracking-[0px] align-middle pl-5 pt-110'>Kitchen room</h1>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WorkingSpace