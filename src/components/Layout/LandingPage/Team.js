import React from "react";
import Animish from "../../../Assets/Animish.jpeg";
import Anushka from "../../../Assets/Anushka.jpeg";
import Vrushabh from "../../../Assets/Vrushabh.jpeg";

const Team = () => {
  return (
    <>
      <div className="mb-16">
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
      </div>
    </>
  );
};

export default Team;
