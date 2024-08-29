import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar w-full h-[111px] px-[26px] py-[35px] bg-orange-50 flex justify-center items-center'>
        <Link to="/">
            <div className='nav-logo w-[144px] text-black text-[25px] font-black font-["Inter"] leading-10'>
                <h1>#VANLIFE</h1>
            </div>
        </Link>
        <div className='nav-links flex items-center grow shrink basis-0 self-stretch relative'>
            <Link to="/about"  className="text-base font-semibold font-['Inter'] leading-[22px]">
                <h2>About</h2>
            </Link>
            <Link to="/vans" className="text-base font-semibold font-['Inter'] leading-[22px]">
                <h2>Vans</h2>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
