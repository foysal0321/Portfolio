import React from 'react';
import './Style.css'

const Skills = () => {
    return (
        <div className='py-12 bg-slate-100'>
            <div className="py-5 text-center">
            <h1 className='text-2xl py-2 font-bold'>_What I Do </h1>
            <p className='py-2 p-1'>I can make develop website and web applications with experience!</p>
            </div>
            <h2 className='text-center py-4 skill-text'>SKILLS_</h2>
            <div className="flex flex-wrap skills  pt-8 py-2">
                <div className=" skill ">
                   <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
                   <h1 className='font-bold py-2 mx-1'>HTML</h1>
                </div>
                <div className="skill">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
                   <h1 className='font-bold py-2 mx-1'>CSS</h1>
                </div>
                <div className="card skill">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="" />
                   <h1 className='font-bold py-2 '>Bootstrap</h1>
                </div>
                
                <div className=" skill">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="" />
                   <h1 className='font-bold py-2'>Tailwind</h1>
                </div>
                <div className=" skill ">
                   <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                   <h1 className='font-bold py-2'>Github</h1>
                </div>
                <div className=" skill">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
                   <h1 className='font-bold py-2'>JavaScript</h1>
                </div>
            </div>
            <div className="flex flex-wrap skills  py-2">
            
                <div className="card skill">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                   <h1 className='font-bold py-2'>React</h1>
                </div>
                <div className="card skill">
                <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="" />
                   <h1 className='font-bold py-2'>Node</h1>
                </div>
                <div className=" skill">
                   <img src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" alt="" />
                   <h1 className='font-bold py-2 '>Express</h1>
                </div>
                <div className=" skill">
                   <img src="https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
                   <h1 className='font-bold py-2 '>MongoDB</h1>
                </div>
                <div className=" skill">
                   <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" alt="" />
                   <h1 className='font-bold py-2'>Firebase</h1>
                </div>
                <div className="card skill">
                   <img src="https://miro.medium.com/max/480/1*qMC7g40mcQmeI3r-hMjY8Q.png" alt="" />
                   <h1 className='font-bold py-2 mx-1'>JWT</h1>
                </div>
            </div>
        </div> 
    );
};

export default Skills;