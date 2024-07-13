import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import SideImage from "../../../Assets/landingPage1.png"; // Import your image file

const HeroSection = () => {
  const [showTypewriter, setShowTypewriter] = useState(true);

  useEffect(() => {
    // After 6 seconds (adjust as needed), stop the typewriter animation
    const timer = setTimeout(() => {
      setShowTypewriter(false);
    }, 6000); // Change delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-6 mb-20 mt-10 text-center md:grid md:grid-cols-2 gap-8">
      <div className="col-span-1 mb-8 md:mb-0">
        <h1 className="text-[25px] md:text-5xl font-bold">
          {showTypewriter ? (
            <Typewriter
              options={{
                strings: ["Convenient and Secure <br/> File Sharing with Xopy"],
                autoStart: true,
                loop: false,
                delay: 75,
                deleteSpeed: 0,
                wrapperClassName: "typewriter-text",
              }}
            />
          ) : (
            <>
              Convenient and Secure
              <br />
              &nbsp;File Sharing with Xopy
            </>
          )}
        </h1>
        <div className="text-lg md:text-lg mt-2">
          Xopy makes it easy to share files of any size with your team,
          <br /> clients, or anyone else. Our platform is designed with security{" "}
          <br />
          and convenience in mind.
        </div>
        <div className="mt-4 flex flex-col items-center md:flex-row md:items-center md:justify-center">
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-8 rounded mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
            Get Started
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow w-full md:w-auto">
            Learn More
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <img
          src={SideImage}
          alt="Xopy Image"
          className="w-full md:w-[600px] rounded-3xl shadow-3xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
