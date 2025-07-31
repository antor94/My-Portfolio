import React from 'react'
import logo from '../assets/images/remeni logo.png'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>


    <section id='navbar'>
      <div className="container">
        <div className='flex justify-between items-center'>

          <div><img className='w-[100px]' src={logo} alt="my-logo" /></div>
          <div>
            <ul className='flex gap-[20px] items-center'>
              <li><Link to={'/'} className='text-[20px] font-bold font-lato text-[#333333] hover:text-[#FD6F00]' >Home</Link></li>
              <li><Link to={'/'} className='text-[20px] font-bold font-lato text-[#333333] hover:text-[#FD6F00]' >Portfolio</Link></li>
              <li><Link to={'/'} className='text-[20px] font-bold font-lato text-[#333333] hover:text-[#FD6F00]' >Blog</Link></li>
              <li><Link to={'/'} className='text-[20px] font-bold font-lato text-[#333333] hover:text-[#FD6F00]' >Services</Link></li>
              </ul>
          </div>
          <div>

            <Link className='w-[141px] py-[12px] px-[24px] rounded-[4px] bg-[#FD6F00] hover:bg-[#A53DFF] text-[16px] font-semibold font-main text-[#fff]' to={'/'}>Contact</Link>
          </div>
        </div>
      </div>
    </section>
    
  
    </>
  )
}

export default Navbar