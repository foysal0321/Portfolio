import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import './Style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
    useEffect(()=>{
        Aos.init({duration: 900})
    },[])
    return (
        <div className='banner mt-20'>
            <div className=" text-white info lg:ml-36 md:ml-20 ml-3">
                <h2 className='py-1 font-semibold'>I'm Foysal, a junior <br />
                <span style={{  }}>
          <Typewriter
            words={['Web Developer']}
            loop={'infinitely'}
            cursor
            cursorStyle='_'
            typeSpeed={110}
            deleteSpeed={100}
            delaySpeed={1500}   
          />
        </span>
                 </h2>
             <div className="flex ">
                <Link to='/contact' data-aos="fade-up">
                 <button className="btn btn-success " >Contact Me</button>
                </Link>              
                <a  href="https://drive.google.com/file/d/1jDS8-wr8MZdyjlSY8LNG0puWQz09Ig5f/view" target='_blank' data-aos="fade-down">
                <button className="btn btn-outline btn-success mx-7" >View Resume</button>
                </a>
             </div>                    
            </div> 
        </div>
    );
};

export default Header;