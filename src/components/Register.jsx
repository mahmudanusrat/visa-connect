import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { handleRegister, manageProfile ,handleGoogleLogin, handleLogin, } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    handleRegister(email, password)
      .then((res) => {
        manageProfile(name, image);
        navigate("/");
      })
      .catch((err) => {
        setError("Failed to register. Please try again.");
        toast.error(err);
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
        <h1 className="text-3xl text-[#F14836] font-bold">Register Now!</h1>
      </div>
      <div className="card max-w-sm mx-auto shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="photo url"
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
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-md bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]"
            >
              Register
            </button>
          </div>{" "}
          <button
            type="button"
            className="btn btn-md bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]"
            onClick={googleLoginHandler}
          >
            Google Login
          </button>
          {error && <p className="text-[#F14836] m-5">{error}</p>}
      
          <p className="text-center mt-2">
            Already have an account?{" "}
            <NavLink to="/login" className="link text-[#F14836]">
              Login here
            </NavLink>
          </p>
        </form>
        </div>
    </div>
  );
};

export default Register;
