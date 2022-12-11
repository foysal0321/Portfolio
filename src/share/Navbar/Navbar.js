import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuitems = <>
    <li><Link to='/'>Home</Link> </li>               
    <li><Link to='/about'>About Me</Link> </li>       
    <li><Link to='/blog'>Blog</Link> </li>       
    <li><Link to='/contact'>Contact Me</Link> </li>   
   
      </>
      
                

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 "  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-80 ">
        {menuitems}
      </ul>
    </div>
   
    <Link to='/' className='lg:mx-32 mx-32 md:mx-80'>
    <div className="avatar">
  <div className="w-12 rounded-full">
    <img src="https://e1.pngegg.com/pngimages/536/365/png-clipart-f-type-logos-for-sale-black-and-red-f-logo.png" />
  </div>
</div>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 mx-32">
     {menuitems}
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;