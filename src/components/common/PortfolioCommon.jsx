import React from 'react'
import { Link } from 'react-router'

const PortfolioCommon = ({portH2 , portSrc , portLink}) => {
  return (
    <>
    
    
    
    <div className='bg-[#959595] rounded-2xl  overflow-hidden flex flex-col justify-between hover:scale-105 transition-transform duration-300'>
     <video className=""  src={portSrc}  type="video/mp4"  controls   autoPlay  muted loop />
     <div className="flex justify-between items-center p-4">
     <h2 className="text-lg font-semibold font-lato text-white">{portH2}</h2>
   <a href={portLink} className="w-24 py-2 bg-[#A53DFF] text-base font-main font-medium text-white flex justify-center items-center rounded-lg hover:bg-[#FD6F00] transition-colors"> View</a>
              </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default PortfolioCommon