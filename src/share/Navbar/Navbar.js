import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import './Style.css'

const Navbar = () => {

    const menuitems = <>
    <li className='md:ml-8 md:my-0 my-5  '>
      <Link to='/'>Home</Link> 
      </li>               
    <li className='md:ml-8 md:my-0 my-5 '>
      <Link to='/about'>About Me</Link> 
      </li>       
    <li className='md:ml-8 md:my-0 my-5 '>
      <Link to='/blog'>Blog</Link> 
      </li>       
    <li className='md:ml-8 md:my-0 my-5  '>
      <Link to='/contact'>Contact Me</Link> 
      </li>   
   
      </>
      let [open,setOpen] = useState(false)
          
    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-10 ">
          <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
            <div className="flex items-center ">
              <span className=''>
                <Link to='/'>
                <img className='logo rounded-sm mr-1  ' src="https://i.pinimg.com/474x/eb/46/75/eb4675380d672e6cc77c228e49d02b0c.jpg" alt="" />
              </Link>
              </span>
            </div>
            <div onClick={()=> setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
             {open ? <AiOutlineClose /> : <AiOutlineMenu />} 
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white w-full md:z-auto z-[-1] left-0 md:w-auto md:pl-0 pl-9
             transition-all duration-500 ease-in-out 
            ${open ? 'top-20 opacity-100'  : 'top-[-490px]' } md:opacity-100 `}>
              {menuitems}
            </ul>
          </div>
    </div>
    );
};

export default Navbar;

  