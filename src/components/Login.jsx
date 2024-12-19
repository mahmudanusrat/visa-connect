import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast"; 
const Login = () => {
    
    const { handleGoogleLogin, handleLogin, handleLogout } =
      useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      handleLogin(email, password)
        .then((res) => {
          navigate(location.state?.from?.pathname || "/");
        })
        .catch((err) => {
            const errorMessage = err.message.includes("auth/wrong-password") || err.message.includes("auth/user-not-found")
              ? "Email or password is invalid"
              : "An unexpected error occurred. Please try again.";
            setError(errorMessage);
            toast.error(errorMessage); 
          });
    };
    const googleLoginHandler = () => {
      handleGoogleLogin()
      .then((res) => {
        navigate(location.state?.from?.pathname || "/");
      });
};
return (
    <div className="my-16 ">
      <div className="text-center mb-5">
        <h1 className="text-3xl text-[#F14836] font-bold">Login Now!</h1>
      </div>
      <div className="card max-w-sm mx-auto shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <NavLink
                to="/forgot-password"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </NavLink>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]">Login</button>
          </div>
          <button type="button" className="btn btn-md bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]" onClick={googleLoginHandler}>
            Google Login
          </button>
          {error && (
            <p className="text-[#F14836] m-5">
              {error}
            </p>
          )}
          
          <p className="text-center mt-2">
            Don't have an account?{" "}
            <NavLink to="/register" className="link text-[#F14836]">
              Register here
            </NavLink>
          </p>
        </form>
      </div>
    </div>
);
};
export default Login;
