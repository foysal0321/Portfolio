import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='py-12'>
            <h1 className='text-4xl py-2 text-center font-bold'>_My Projects</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16 lg:mx-20 mx-4"> 

         <div className="card card-compact w-80 lg:w-96  bg-base-100 shadow-xl"   
         data-aos="fade-up"
         >
        <figure><img src="https://i.pinimg.com/originals/0e/e5/d6/0ee5d68c576605a2a38952b374e06f87.jpg" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Watch world</h2>
            <p>The website made for products to sell and buy, Seller can add a new product, Admin control.</p>
            <div className="flex ">
              <a href="https://gregarious-semifreddo-22b463.netlify.app/" target='_blank'>
                <button className="btn btn-error btn-sm lg:w-40 w-32 text-white">View project</button>
            </a> 
            <Link to='/watch'>
            <button className="btn btn-error lg:w-40 mx-5 w-32 btn-sm text-white"> Details</button>  
            </Link>        
            </div>          
          </div>
        </div>

         <div className="card card-compact w-80 lg:w-96 bg-base-100 shadow-xl" data-aos="fade-zoom-in">
        <figure><img src="https://themewagon.com/wp-content/uploads/2021/05/Klassy-Cafe-1-1.png" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Klassy</h2>
            <p>Klassy Cafe is one of the best restaurant templates. Landing Page Website Templates</p>
            <div className="flex ">
              <a href="https://foysal0321.github.io/klassy/" target='_blank'>
                <button className="btn btn-error btn-sm lg:w-40 w-32 text-white">View project</button>
            </a> 
            <Link to='/klassy'>
            <button className="btn btn-error lg:w-40 mx-5 w-32 btn-sm text-white"> Details</button>  
            </Link>       
            </div>                   
          </div>
        </div>

         <div className="card card-compact w-80 lg:w-96 bg-base-100 shadow-xl" 
         data-aos="fade-down"
         
          >
        <figure><img src="https://static.tildacdn.com/tild6633-3833-4733-a136-323664656232/Screenshot_2021-01-1.png" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Pro Edu</h2>
            <p>Pro-Edu is simple Landing Page Website Templates.</p>
            <div className="flex ">
              <a href="https://foysal0321.github.io/edTech/" target='_blank'>
                <button className="btn btn-error btn-sm lg:w-40 w-32 text-white">View project</button>
            </a> 
            <Link to='/proedu'>
            <button className="btn btn-error lg:w-40 mx-5 w-32 btn-sm text-white"> Details</button>  
            </Link>               
            </div>        
          </div>
        </div>        
            </div>

           
        </div>
    );
};

export default Projects;