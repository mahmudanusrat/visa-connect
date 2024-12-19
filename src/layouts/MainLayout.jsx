import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  
  return (
    <div className="font-poppins max-w-screen-xl mx-auto p-3 md:p-5 lg:p-0">
      <Navbar></Navbar>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <span className="loading loading-spinner text-info"></span>
        </div>
      ) : (
          <Outlet />
      )}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
