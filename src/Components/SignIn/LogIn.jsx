import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const LogIn = () => {
    return (
        
    <div  className="border border-gray-300 rounded p-6 bg-lime-200 h-screen flex flex-col justify-center items-center">
         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h1 className='text-3xl text-center font-bold'>LogIn</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <p>New to OllO?Please <span className='font-bold'><NavLink to='/signUp'>SignUp</NavLink></span></p>

          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
    </div>
   
 
    );
};

export default LogIn;