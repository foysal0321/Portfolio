import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
 
  const [state, handleSubmit] = useForm("moqbgpgb");
  if (state.succeeded) {
   return  <p className='text-center py-3'>Successfuly Submit</p>
        
  }
    return (
     <div>            
       <div className="hero h-96" style={{ backgroundImage: `url("https://t4.ftcdn.net/jpg/03/95/04/15/360_F_395041586_h21AxqD0dNjxUw3lKFiV5t7qMBJs6wfe.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Contact Me</h1>
            <p className="mb-5">Please fill the form in a decent maner!</p>
            </div>
         </div>
        </div>

         <form  onSubmit={handleSubmit} className="form py-8 mx-auto w-96">
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Full Name</span>
            </label>
            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-xs" required/>
            </div>
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="text" name="email" placeholder="email" className="input input-bordered w-full max-w-xs" required/>
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Message</span>
            </label> 
            <textarea name="message" className="textarea textarea-bordered h-32 w-80" placeholder="message" required></textarea>           
            </div>
            <button type='submit' disabled={state.submitting} className="btn btn-active btn-ghost mt-3 w-80">Submit</button>
        </form> 


        </div>
    );
};

export default Contact;


//pss nKvJPp%46JMx!RG