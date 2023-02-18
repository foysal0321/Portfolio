import React from 'react';
import './Style.css'
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import myimg2 from '../../img/myimg2.jpg'

const About = () => {
    return (
     <div id='about' className='mt-20'>
        <div className="hero  bg-base-100 py-12">
         <div className="hero-content flex-col lg:flex-row">
            <img src={myimg2} className=" rounded-lg shadow-2xl" data-aos="fade-zoom-in"/>
            <div className='about-info lg:-mt-24' data-aos="fade-up">
            <h1 className="text-3xl font-bold">About _Me!</h1>
            <p className="py-6">I am 22 year old self taught  junior Web Developer based in Dhaka,Bangladesh.  </p>
            <p className="py-6">I've worked with startups some angencies over the years , I specialize in developing web apps, my core skills are <br />
            Javascript, React Js, Node js, Express Js, Mongodb 
            </p>
            <p>Want to know more? Drop me a line</p>
            <p>foysalx4@gmail.com</p> <br />
            <p>Follow me on : </p>
            <div className="flex icon -ml-2">
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
        </div>
     </div>
    </div>
    );
};

export default About;