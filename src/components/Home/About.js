import React from 'react';
import './Style.css'
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const About = () => {
    return (
     <div>
        <div className="hero  bg-base-200 py-12">
         <div className="hero-content flex-col lg:flex-row">
            <img src="https://i.guim.co.uk/img/media/381d489e481bf51280498055c6fd4df872883a09/0_405_6016_3611/master/6016.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=136ef1b184213c262558600997c7b366" className="max-w-sm rounded-lg shadow-2xl" data-aos="fade-right"/>
            <div className='about-info lg:-mt-24' data-aos="fade-left">
            <h1 className="text-3xl font-bold">About _Me!</h1>
            <p className="py-6">I am 22 year old self taught  junior Web Developer based in Dhaka,Bangladesh.  </p>
            <p className="py-6">I've worked with startups some angencies over the years , I specialize in developing web apps, my core skills are <br />
            Javascript, React Js, Node js, Express Js, Mongodb 
            </p>
            <p>Want to know more? Drop me a line</p>
            <p>foysal2@gmail.com</p> <br />
            <p>Follow me on : </p>
            <div className="flex icon">
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