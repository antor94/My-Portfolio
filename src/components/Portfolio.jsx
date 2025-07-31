import React from 'react'
import CommonHead from './common/CommonHead'
import { Link } from 'react-router'

const Portfolio = () => {
  return (
    <>
    
    <section className='pt-[220px]'>
        <div className="container">
            <CommonHead commonh2={'Portfolio'} />
            <div className='flex flex-wrap justify-between items-center'>

                <div className='w-[400px] h-[400px] overflow-hidden mt-[70px] bg-[#959595] rounded-[8px]'>

                    <div className='w-full h-[350px] '>
                      <video
  className="w-full h-full rounded-[28px] object-cover"
  src="../../public/Video/p-1.mp4"
  type="video/mp4"
  controls
  autoPlay
  muted
  loop
/>


                    </div>




                    {/* <img className='' src="#" alt="port-img" /> */}
                    <div className='flex justify-around  items-center'>
                        <h2 className='text-[24px] font-semibold font-lato text-white'>gdfgdfg</h2>
                        <Link  to={'/'} className='w-[96px] mt-[4px] py-[10px] bg-[#A53DFF] text-[16px] font-main font-medium text-white flex justify-center items-center rounded-[16px]'>View</Link>
                    </div>

                </div>

                <div className='w-[415px] h-[473px] mt-[70px] bg-[#959595] rounded-[28px]'>
                    <img className='w-full h-[420px] bg-[#C6C6C6] ' src="#" alt="port-img" />
                    <div className='flex justify-around items-center'>
                        <h2 className='text-[24px] font-semibold font-lato text-white'>gdfgdfg</h2>
                           <Link  to={'/'} className='w-[96px] mt-[4px] py-[10px] bg-[#A53DFF] text-[16px] font-main font-medium text-white flex justify-center items-center rounded-[16px]'>View</Link>
                    </div>

                </div>

                  <div className='w-[415px] h-[473px] mt-[70px] bg-[#959595] rounded-[28px]'>
                    <img className='w-full h-[420px] bg-[#C6C6C6] ' src="#" alt="port-img" />
                    <div className='flex justify-around items-center'>
                        <h2 className='text-[24px] font-semibold font-lato text-white'>gdfgdfg</h2>
                            <Link  to={'/'} className='w-[96px] mt-[4px] py-[10px] bg-[#A53DFF] text-[16px] font-main font-medium text-white flex justify-center items-center rounded-[16px]'>View</Link>
                    </div>

                </div>
                <div className='w-[415px] h-[473px] mt-[70px] bg-[#959595] rounded-[28px]'>
                    <img className='w-full h-[420px] bg-[#C6C6C6] ' src="#" alt="port-img" />
                    <div className='flex justify-around  items-center'>
                        <h2 className='text-[24px] font-semibold font-lato text-white'>gdfgdfg</h2>
                  <Link  to={'/'} className='w-[96px] mt-[4px] py-[10px] bg-[#A53DFF] text-[16px] font-main font-medium text-white flex justify-center items-center rounded-[16px]'>View</Link>
                    </div>

                </div> 
                
               <div className='w-[415px] h-[473px] mt-[70px] bg-[#959595] rounded-[28px]'>
                    <img className='w-full h-[420px] bg-[#C6C6C6] ' src="#" alt="port-img" />
                    <div className='flex justify-around  items-center'>
                        <h2 className='text-[24px] font-semibold font-lato text-white'>gdfgdfg</h2>
                       <Link  to={'/'} className='w-[96px] mt-[4px] py-[10px] bg-[#A53DFF] text-[16px] font-main font-medium text-white flex justify-center items-center rounded-[16px]'>View</Link>
                    </div>

                </div>


                 <div className='w-[415px] h-[473px] mt-[70px] bg-[#959595] rounded-[28px]'>
                    <img className='w-full h-[420px] bg-[#C6C6C6] ' src="#" alt="port-img" />
                    <div className='flex justify-around items-center'>
                        <h2 className='text-[24px] font-semibold font-lato text-white'>gdfgdfg</h2>
                      <Link  to={'/'} className='w-[96px] mt-[4px] py-[10px] bg-[#A53DFF] text-[16px] font-main font-medium text-white flex justify-center items-center rounded-[16px]'>View</Link>
                    </div>

                </div>
            </div>
            <div className='mt-[100px]'>
                <Link to={'/'} className='w-[250px] px-[10px] py-[20px] bg-[#FD6F00] text-[16px] font-semibold font-main text-white hover:bg-[#A53DFF]  rounded-[8px]  ml-[700px]'>More Project</Link>

            </div>





        </div>
    </section>
    
    
    
    </>
  )
}

export default Portfolio