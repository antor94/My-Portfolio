import React from 'react'

const CommonHead = ({commonh2 , commonp}) => {
  return (
    <div className='text-center'>

        <h2 className='text-[40px] font-bold font-lato text-[#000]'>{commonh2}</h2>
        <p className='text-[20px] font-medium font-lato text-[#000]'>{commonp}</p>
    </div>
  )
}

export default CommonHead