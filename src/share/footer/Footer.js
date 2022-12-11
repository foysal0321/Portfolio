import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-slate-600 text-primary-content">
  <div>   
    <p>Copyright © 2022 - All right reserved by <span className='font-semibold'>Foysal</span> </p>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4 icon">
    <a href="https://www.facebook.com/profile.php?id=100015155011244&_rdc=1&_rdr" target='_blank'>
                   <AiFillFacebook /> 
                </a>
                <a href="https://www.linkedin.com/in/foysal-hossain/" target='_blank'>
                      <AiFillLinkedin />
                </a>
                <a href="https://www.youtube.com/" target='_blank'>
                   <AiFillYoutube /> 
                </a>
    </div>
  </div>
</footer>
    );
};

export default Footer;