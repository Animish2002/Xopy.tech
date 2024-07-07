import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import SideImage from "../../Assets/landingPage1.png"; // Import your image file

const LandingPage = () => {
  const [showTypewriter, setShowTypewriter] = useState(true);

  useEffect(() => {
    // After 3 seconds (adjust as needed), stop the typewriter animation
    const timer = setTimeout(() => {
      setShowTypewriter(false);
    }, 6000); // Change delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center px-6 mb-16 text-center grid grid-cols-2 gap-8">
      <div className="col-span-1">
        {showTypewriter ? (
          <h1 className="text-5xl font-bold">
            <Typewriter
              options={{
                strings: ["Secure and Convenient <br/> File Sharing with Xopy"],
                autoStart: true,
                loop: false,
                delay: 75,
                deleteSpeed: 0,
              }}
            />
          </h1>
        ) : (
          <h1 className="text-5xl font-bold">
            Secure and Convenient <br />
            File Sharing with Xopy
          </h1>
        )}
        <div className="text-xl mt-2">
          Xopy makes it easy to share files of any size with your team,
          <br /> clients, or anyone else. Our platform is designed with security{" "}
          <br />
          and convenience in mind.
        </div>
        <div className="mt-4">
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-8 rounded mr-4">
            Get Started
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow">
            Learn More
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <img
          src={SideImage}
          alt="Xopy Image"
          className="w-[600px] rounded-3xl shadow-xl shadow-yellow"
        />
      </div>
    </div>
  );
};

export default LandingPage;
