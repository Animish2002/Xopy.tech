import React from "react";
import Logo from "../../Assets/xopyLogo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center flex-wrap p-4 bg-white ">
      <div className="flex items-center mb-4 md:mb-0">
        <img src={Logo} alt="Company Logo" className="h-18 w-32 md:ml-4" />
      </div>
      <div className="flex flex-row md:flex-row justify-end items-center flex-wrap gap-2 md:gap-8 mr-4">
        <h1 className="hover:underline text-lg md:text-xl mr-1">Features</h1>
        <h1 className="hover:underline text-lg md:text-xl ">Pricing</h1>
        <h1 className="hover:underline text-lg md:text-xl ">Testimonials</h1>
        <h1 className="hover:underline text-lg md:text-xl ml-1">Sign Up</h1>
      </div>
    </div>
  );
};

export default Header;
