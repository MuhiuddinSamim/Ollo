import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProviders";
import Swal from "sweetalert2";
import second from "../../assets/logo/google-signin-button.png";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri"; // Import the eye icons from react-icons

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { logIn, googleLogIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const Navigate = useNavigate();
  const Location = useLocation();
  const from = Location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
    logIn(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        Navigate(from, { replace: true });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const handleGoole = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;

        Navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="border border-gray-300 rounded px-2 bg-lime-200 h-screen flex flex-col justify-center items-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body  bg-lime-400"
        >
          <h1 className="text-3xl text-center font-bold">LogIn</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Password"
                className="input input-bordered pr-28" // Add 'pr-10' class to add space for the icon
              />
              {/* Toggle password visibility icon */}
              <div
                className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer pr-4"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
              </div>
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one letter, one number, and one special
                character.
              </p>
            )}
            <label className="label">
              <p>
                New to OllO?Please{" "}
                <span className="font-bold">
                  <NavLink to="/signUp">SignUp</NavLink>
                </span>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              LogIn
            </button>
          </div>
          <img
            onClick={handleGoole}
            src={second}
            className="w-36 mx-auto"
            alt=""
          />
        </form>
      </div>
      <Link to="/" className="mt-4 w-1/7 mx-auto btn btn-warning">
        Home
      </Link>
    </div>
  );
};

export default LogIn;
