import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import SideImage from "../../Assets/landingPage1.png"; // Import your image file
import Animish from "../../Assets/Animish.jpeg";
import Anushka from "../../Assets/Anushka.jpeg";
import Vrushabh from "../../Assets/Vrushabh.jpeg";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo";

const LandingPage = () => {
  const [showTypewriter, setShowTypewriter] = useState(true);

  useEffect(() => {
    // After 6 seconds (adjust as needed), stop the typewriter animation
    const timer = setTimeout(() => {
      setShowTypewriter(false);
    }, 6000); // Change delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center px-6 mb-20 mt-10 text-center md:grid md:grid-cols-2 gap-8">
        <div className="col-span-1 mb-8 md:mb-0">
          <h1 className="text-[25px] md:text-5xl font-bold">
            {showTypewriter ? (
              <Typewriter
                options={{
                  strings: [
                    "Convenient and Secure <br/> File Sharing with Xopy",
                  ],
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
            <br /> clients, or anyone else. Our platform is designed with
            security <br />
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
      <div className="w-full md:h-[480px] h-auto md:p-0 py-6 bg-gray-100 flex flex-col items-center">
        <span className="text-base md:text-lg md:mt-10 mt-4 md:p-4">
          Key Features
        </span>
        <h1 className="text-3xl md:text-5xl font-bold">Why Choose Xopy?</h1>
        <p className="mt-4 text-sm md:text-lg text-gray-600 font-semibold">
          Xopy offers unique features to make file sharing easy, secure, and
          efficient.
        </p>
        <div className="md:grid md:grid-cols-3 gap-8 px-4 md:px-16 mt-4 grid grid-cols-1">
          <div className="mb-4 md:mb-0">
            <h3 className="text-base md:text-lg font-bold mb-3">
              Secure Uploads
            </h3>
            <p className="text-xs md:text-[14px] text-gray-600">
              All files are encrypted during upload and transfer to protect{" "}
              <br /> your data.
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-base md:text-lg font-bold mb-3">
              Instant Sharing
            </h3>
            <p className="text-xs md:text-[14px] text-gray-600">
              Share files instantly with a simple link, no account required.
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-base md:text-lg font-bold mb-3">
              Unlimited Uploads
            </h3>
            <p className="text-xs md:text-[14px] text-gray-600">
              Store and share as many files as you need, with no storage <br />{" "}
              limits.
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-base md:text-lg font-bold mb-3">
              Mobile Access
            </h3>
            <p className="text-xs md:text-[14px] text-gray-600">
              Access your files from anywhere, on any device, with our <br />
              mobile-friendly interface.
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-base md:text-lg font-bold mb-3">
              Advanced Analytics
            </h3>
            <p className="text-xs md:text-[14px] text-gray-600">
              Track file activity and usage with detailed analytics and <br />
              reporting.
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3">
              Seamless File Sharing
            </h3>
            <p className="text-xs md:text-[14px] text-gray-600">
              Seamless file sharing without any hassle, ,<br /> simple and
              secure.
            </p>
          </div>
        </div>
      </div>
      <StickyScrollRevealDemo />
      <div className="flex justify-center text-2xl mt-16 mb-8">
        Meet the team
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="shadow-new h-[350px] w-72 border-2 border-gray-700 rounded-xl flex flex-col items-center justify-center bg-white shadow-md mb-8 md:mb-0 md:mr-10 cursor-pointer">
          <a href="mailto:animish@example.com">
            <img
              src={Animish}
              alt="Animish Chopade"
              className="h-44 w-42 rounded-2xl mb-4"
            />
          </a>
          <div className="font-bold hover:underline">Animish Chopade</div>
          <a
            href="https://www.linkedin.com/in/animish-chopade/"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-2"
          >
            Linkedin
          </a>
        </div>
        <div className="shadow-new h-[350px] w-72 border-2 border-gray-700 rounded-xl flex flex-col items-center justify-center bg-white shadow-md mb-8 md:mb-0 md:mr-10 cursor-pointer">
          <a href="mailto:anushka@example.com">
            <img
              src={Anushka}
              alt="Anushka Bhosale"
              className="h-[200px] w-40 rounded-2xl mb-4"
            />
          </a>
          <div className="font-bold hover:underline">Anushka Bhosale</div>
          <a
            href="https://www.linkedin.com/in/anushkabhosale/"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-2"
          >
            Linkedin
          </a>
        </div>
        <div className="shadow-new h-[350px] w-72 border-2 border-gray-700 rounded-xl flex flex-col items-center justify-center bg-white shadow-md cursor-pointer">
          <a href="mailto:vrushabh@example.com">
            <img
              src={Vrushabh}
              alt="Vrushabh Kulkarni"
              className="h-44 w-42 rounded-2xl mb-4"
            />
          </a>
          <div className="font-bold hover:underline">Vrushabh Kulkarni</div>
          <a
            href="https://www.linkedin.com/in/vrushabhskulkarni/"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-2"
          >
            Linkedin
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
