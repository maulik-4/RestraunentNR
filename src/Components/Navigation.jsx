import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [LoginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="flex justify-between items-center w-full px-6 py-4">
      {/* Left Section (Logo) */}
      <div className="nav_left">
        <img
          className="h-[8vh] w-auto object-contain"
          src="https://cdn.dribbble.com/userupload/33218438/file/original-cf7fe0d0583e23573b7a1422669c87f0.jpg?resize=1600x1280&vertical=center"
          alt="Logo"
        />
      </div>

      {/* Right Section (Navigation Links) */}
      <div className="nav_right">
        <ul className="hidden md:flex gap-8 text-lg">
          <Link className="text-black !no-underline hover:scale-100 transition " to="/">
            Home
          </Link>
          <Link className="text-black !no-underline hover:scale-100 transition ">
            Menu
          </Link>
          <Link
            className="text-black !no-underline hover:scale-100 transition "
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="text-black !no-underline hover:scale-100 transition "
            to="/contact"
          >
            Contact
          </Link>
        </ul>
      </div>

      {/* Login Button */}
      <button
        className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
        onClick={() => {
          setLoginBtn(LoginBtn === "Login" ? "Logout" : "Login");
        }}
      >
        {LoginBtn}
      </button>
    </div>
  );
};

export default Navigation;
