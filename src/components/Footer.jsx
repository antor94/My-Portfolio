import React from 'react'
import { Link } from 'react-router'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from '../assets/images/remeni logo.png'

const Footer = () => {
  return (
    <>
    
    <section className='bg-[#2B384C]'>
        <div className="container">
            <div className=' flex justify-around items-center'>
              <div className='w-[80px]'><img src={logo} alt="footer-img" /></div>
               <div>
            <ul className='flex gap-[20px] items-center'>
              <li><Link to={'/'} className='text-[20px] font-bold font-lato text-[#fff] hover:text-[#FD6F00]' >Home</Link></li>
              <li><Link to={'/'} className='text-[20px] font-bold font-lato text-[#fff] hover:text-[#FD6F00]' >Portfolio</Link></li>
              <li><Link to={'/'} className='text-[20px] font-bold font-lato text-[#fff] hover:text-[#FD6F00]' >Blog</Link></li>
              <li><Link to={'/'} className='text-[20px] font-bold font-lato text-[#fff] hover:text-[#FD6F00]' >Services</Link></li>
              </ul>
                   </div>
                       <div  className='  flex gap-[20px] py-[30px] items-center'>
                        <Link className='w-[30px] h-[30px] bg-[#000] text-[#fff] flex justify-center items-center rounded-full' to={'/'}><FaFacebook /></Link>
                        <Link className='w-[30px] h-[30px] bg-[#000] text-[#fff] flex justify-center items-center rounded-full' to={'/'}><FaInstagram /></Link>
                        <Link className='w-[30px] h-[30px] bg-[#000] text-[#fff] flex justify-center items-center rounded-full' to={'/'}><FaLinkedinIn /></Link>
                        <Link className='w-[30px] h-[30px] bg-[#000] text-[#fff] flex justify-center items-center rounded-full' to={'/'}><FaTwitter /></Link>
                    </div>              
        </div>

      </div>


    </section>
    
    

    </>
  )
}

export default Footer