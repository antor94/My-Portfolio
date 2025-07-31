import React from 'react'
import CommonHead from './common/CommonHead'
import { MdOutlineWeb } from "react-icons/md";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { IoPulseOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

const Service = () => {
  return (
    <>


        <section id='about' className='bg-[#F0F1F3] pt-[350px] pb-[80px] mb-[200px]'>
        <div className="container">
            <CommonHead commonh2={'Services'} commonp={'Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam'} />
            <div className="div pt-[80px] flex flex-wrap justify-around items-center gap-[40px]">
                <div className='w-[400px] h-[322px] bg-white hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-[24px]'>
                    <div className=' flex pt-[30px] justify-center'><MdOutlineWeb className='text-[80px] text-[#FD6F00]' /></div>
                    <h2 className='text-[24px] py-[20px] text-center font-bold font-lato text-[#FD6F00]'>Responsive Web Design</h2>
                    <div className='text-center flex justify-center'>
                    <p className='w-[339px] text-center text-[20px] font-medium font-lato text-[#575757]'>Design websites that work seamlessly across mobile, tablet, and desktop using HTML, CSS, and media queries.</p>

                    </div>

                </div>
                       <div className='w-[400px] h-[322px] bg-white hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-[24px]'>
                        <div className=' flex pt-[30px]  justify-center'><FaFigma className='text-[80px] text-[#FD6F00]' /></div>
                    <h2 className='text-[24px] py-[20px] text-center font-bold font-lato text-[#FD6F00]'>UI/UX Implementation</h2>
                    <div className='text-center flex justify-center'>
                    <p className='w-[339px] text-center text-[20px] font-medium font-lato text-[#575757]'>Convert Figma/Adobe designs into interactive user interfaces with smooth animations and usability focus.</p>

                    </div>

                </div>
             
                    <div className='w-[400px] h-[322px] bg-white hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-[24px]'>
                        <div className=' flex pt-[30px] justify-center'><FaReact className='text-[80px] text-[#FD6F00]' /></div>
                    <h2 className='text-[24px] py-[10px] text-center font-bold font-lato text-[#FD6F00]'>Single Page Application (SPA) Development</h2>
                    <div className='text-center flex justify-center'>
                    <p className='w-[339px] text-center text-[20px] font-medium font-lato text-[#575757]'>Build dynamic apps using React, Vue, or Angular where content loads without refreshing the page.</p>

                    </div>

                </div>
             
                    <div className='w-[400px] h-[322px] bg-white hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-[24px]'>
                        <div className=' flex pt-[30px] justify-center'><SiGooglemarketingplatform  className='text-[80px] text-[#FD6F00]' /></div>
                    <h2 className='text-[24px] py-[15px] text-center font-bold font-lato text-[#FD6F00]'>Landing Page Development</h2>
                    <div className='text-center flex justify-center'>
                    <p className='w-[339px] text-center text-[20px] font-medium font-lato text-[#575757]'>Create fast, optimized, and conversion-focused pages for marketing, sales, or product showcases.</p>

                    </div>

                </div>
             
                    <div className='w-[400px] h-[322px] bg-white hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-[24px]'>
                        <div className='text-center pt-[30px] flex justify-center'><IoPulseOutline className='text-[80px] text-[#FD6F00]' /></div>
                        <div className='w-[390px]'>
                    <h2 className=' text-[24px] py-[10px] text-center font-bold font-lato text-[#FD6F00]'>Frontend Performance Optimization</h2>

                        </div>
                    <div className='text-center flex justify-center'>
                    <p className='w-[339px] text-center text-[20px] font-medium font-lato text-[#575757]'>Improve loading speed, reduce bundle size, and ensure SEO, accessibility, and cross-browser support.</p>

                    </div>

                </div>
                    <div className='w-[400px] h-[322px] bg-white hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-[24px]'>
                          <div className='text-center pt-[30px] flex justify-center'><MdSpaceDashboard className='text-[80px] text-[#FD6F00]' /></div>
                        
                    <h2 className='text-[24px] py-[15px] text-center font-bold font-lato text-[#FD6F00]'>Dashboard & Admin Panel UI</h2>
                    <div className='text-center flex justify-center'>
                    <p className='w-[339px] text-center text-[20px] font-medium font-lato text-[#575757]'>Build interactive dashboards with charts, filters, and data tables using libraries like Chart.js, D3.js, and Tailwind UI.</p>

                    </div>

                </div>
             
             
            </div>
        </div>
    </section>
    




    </>
  )
}

export default Service