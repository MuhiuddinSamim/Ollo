import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, getValues , reset  } = useForm();

const onSubmit = (data) => {
    const { password, confirm } = getValues();

    if (password !== confirm) {
      Swal.fire({
  title: 'Error!',
  text: 'Password and confirm password do not match',
  icon: 'error',
  confirmButtonText: 'ok'
})
      return;
    }else{
      reset();
    }

    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="border border-gray-300 rounded px-2 bg-lime-200 h-screen flex flex-col justify-center items-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-lime-400">
          <h1 className="text-3xl text-center font-bold">SignUp</h1>
          <div className="md:flex gap-2">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name*</span>
              </label>
              <input
                type="text"
                {...register('name', { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="email"
                {...register('email', { required: true })}
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="md:flex gap-2">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Photo Url*</span>
              </label>
              <input
                type="text"
                {...register('photo', { required: true })}
                placeholder="Photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Gender*</span>
              </label>
              <select
                {...register('gender', { required: true })}
                className="input input-bordered"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="md:flex gap-2">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="number"
                placeholder="Phone Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="md:flex gap-2">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Password*</span>
              </label>
            
                <input type="password" name='password'  {...register("password", {
                     required: true,
                     minLength: 6,
                     maxLength: 20,
                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})} placeholder="password" className="input input-bordered" />
                      {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                      {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                      {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                      {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Confirm Password*</span>
              </label>
              <input
                type="password" name='ConfirmPassword'
                {...register('confirm', { required: true })}
                placeholder="Confirm password"
                className="input input-bordered"
              />
            
            </div>
              
          </div>

          <label className="label">
            <p>
              Already have an account?
              <span className="font-bold">
                <NavLink to="/logIn">LogIn</NavLink>
              </span>
            </p>
          </label>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;






