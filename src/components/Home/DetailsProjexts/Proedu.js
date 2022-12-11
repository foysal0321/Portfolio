import React, { useEffect } from 'react';
import img1 from  '../../../img/edTech1.png'
import img2 from  '../../../img/edTech2.png'
import img3 from  '../../../img/edTech3.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

  
const Proedu = () => {
    useEffect(()=>{
        Aos.init({duration: 900})
    },[]) 

    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <img src={img1} data-aos="fade-zoom-in"/>
            <div className='lg:-mt-52 mx-10'>
            <h1 className="text-2xl font-bold py-4">Pro Edu</h1>
 
            <p className="mt-10 py-1">. Pro-Edu Landing Page Website Templates</p>
            <p>. It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout.</p>
            <p className='py-1'>. Used Technology : HTML, Css, Bootstrap, Javascript.</p>           
            <div className="codebtn flex py-6">
               <a href="https://foysal0321.github.io/edTech/" target='_blank'>
                <button className='btn btn-xs '>Live Project</button>
                </a> 
               <a href="https://github.com/foysal0321/edTech" target='_blank'>
                <button className='btn btn-xs mx-3'>Client side code</button>
                </a> 
               
            </div>
            </div>
        </div>
        </div>
        <div className="project-img ">
            <h3 className='text-2xl py-3 text-center font-semibold'>Students Feedback</h3>
                <img src={img2} alt="" data-aos="fade-zoom-in"/>
                <h3 className='text-2xl py-3 text-center font-semibold'>Explore The elearning</h3>
                <img src={img3} alt="" data-aos="fade-zoom-in"/>
            </div>
        </div>
    );
};

export default Proedu;