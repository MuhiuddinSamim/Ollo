import React from 'react';
import { useForm } from 'react-hook-form';
import {  NavLink } from 'react-router-dom';


const LogIn = () => {
  const { register, handleSubmit, formState: { errors }  } = useForm();

   const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

    return (
        
    <div  className=" border border-gray-300 rounded px-2 bg-lime-200 h-screen flex flex-col justify-center items-center">
         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div onSubmit={handleSubmit(onSubmit)} className="card-body  bg-lime-400">
        <h1 className='text-3xl text-center font-bold'>LogIn</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
           <input
                type="email"
                {...register('email', { required: true })}
                placeholder="Email"
                className="input input-bordered"
              />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
           <input
          type="password"
          name="password"
          {...register('password', {
            required: true,
            minLength: 6,
            maxLength: 20,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
          })}
          placeholder="Password"
          className="input input-bordered"
        />
        {errors.password?.type === 'required' && (
          <p className="text-red-600">Password is required</p>
        )}
        {errors.password?.type === 'minLength' && (
          <p className="text-red-600">Password must be 6 characters</p>
        )}
        {errors.password?.type === 'maxLength' && (
          <p className="text-red-600">Password must be less than 20 characters</p>
        )}
        {errors.password?.type === 'pattern' && (
          <p className="text-red-600">
            Password must have one uppercase, one lowercase, one number, and one special character.
          </p>
        )}
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