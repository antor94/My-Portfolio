import React from 'react'

const CommonHead = ({commonh2 , commonp}) => {
  return (
    <div className=''>

        <p className=' text-[12px] lg:text-[15px] mb-[17px] font-normal font-main text-[#9F9F9F]'>{commonp}</p>
        <h2 className=' text-[30px] lg:text-[46px] font-bold font-main text-[#F0F0F0]'>{commonh2}</h2>
    </div>
  )
}

export default CommonHead