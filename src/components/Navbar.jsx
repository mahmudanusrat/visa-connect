import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, handleLogout, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    handleLogout();
    navigate("/");
    if (loading) {
      return (
        <div className="navbar">
          <p>Loading...</p>
        </div>
      );
    }
  };
  const links = (
    <div className=" lg:flex gap-10">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#F14836] font-semibold"
              : "hover:text-[#F14836] text-[#404040] font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-visas"
          className={({ isActive }) =>
            isActive
              ? "text-[#F14836] font-semibold"
              : "hover:text-[#F14836] text-[#404040] font-medium"
          }
        >
          All Visas
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/add-visa"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F14836] font-semibold"
                  : "hover:text-[#F14836] text-[#404040] font-medium"
              }
            >
              Add Visa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-added-visas"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F14836] font-semibold"
                  : "hover:text-[#F14836] text-[#404040] font-medium"
              }
            >
              My Added Visas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-visa-applications"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F14836] font-semibold"
                  : "hover:text-[#F14836] text-[#404040] font-medium"
              }
            >
              My Visa Application
            </NavLink>
          </li>
        </>
      )}
    </div>
  );

  return (
    <nav className="max-w-screen-xl mx-auto p-0 md:p-5 lg:p-0 border-b-2">
      <div className="navbar flex items-center justify-between ">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost p-0 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>

          <img src={logo} alt="visa connect logo" className="w-10 md:w-14 hidden md:block" />
          <h1 className="text-sm md:text-3xl font-normal text-[#F14836]">
            Visa Connect
          </h1>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-5">
        
          {!user ? (
            <div className="flex md:flex-row gap-1 md:gap-2">
              <NavLink to="/login">
                <button className="btn btn-sm md:btn-md bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn  btn-sm md:btn-md bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]">
                  Register
                </button>
              </NavLink>
            </div>
          ) : (
            <>
              <div className="relative group">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full cursor-pointer hidden md:block"
                />
                <div className="absolute right-1/2 transform -translate-y-1/2 text-[#F14836] shadow-md rounded hidden group-hover:block">
                  {user.displayName || "Anonymous"}
                </div>
              </div>

              <button
                onClick={logoutHandler}
                className="btn btn-md bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]">
                Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;