import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/Frame.png"
import { BiSearch } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='flex justify-between items-center absolute top-2 left-0 right-0 max-w-[1240px] mx-auto text-white mt-3'>
            <img className='' src={logo} alt="" />
            <div className='relative max-w-[370px] w-full h-[40px] border border-white rounded'>
                <BiSearch className='absolute top-[12px] left-2' />
                <input className='bg-[#ffffff65] px-12   border-0 placeholder:text-white h-full w-full outline-none' type="text" placeholder='Search your Destination...' />
            </div>
            <span className='md:hidden'>
                {toggle ? <AiOutlineCloseCircle onClick={() => setToggle(!toggle)} /> : <FiMenu onClick={() => setToggle(!toggle)} />}
            </span>
            <div className='flex gap-[50px]'>
                <ul className=' flex gap-[50px] items-center'>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/destination">Destination</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
                <Link to="/login"><button className='bg-[#F9A51A] px-5 rounded py-2'>Login</button></Link>
            </div>
        </div>
    );
};

export default NavBar;