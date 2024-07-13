import React from "react";

const XopyFeatures = () => {
  return (
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
            All files are encrypted during upload and transfer to protect <br />{" "}
            your data.
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
          <h3 className="text-base md:text-lg font-bold mb-3">Mobile Access</h3>
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
            Seamless file sharing without any hassle, ,<br /> simple and secure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default XopyFeatures;
