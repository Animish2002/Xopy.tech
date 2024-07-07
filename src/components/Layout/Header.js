import React from "react";
import Logo from "../../Assets/xopyLogo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center flex-wrap p-4">
      <div className="flex items-center">
        <img src={Logo} alt="Company Logo" className="h-18 w-32 ml-4" />
      </div>
      <div className="flex justify-end flex-wrap gap-8 mr-4">
        <h1 className="hover:underline text-xl">Features</h1>
        <h1 className="hover:underline text-xl">Pricing</h1>
        <h1 className="hover:underline text-xl">Testimonials</h1>
        <h1 className="hover:underline text-xl">Sign Up</h1>
      </div>
    </div>
  );
};

export default Header;
